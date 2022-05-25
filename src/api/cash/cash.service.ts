import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cash } from './cash.entity';

@Injectable()
export class CashService {
  constructor(@InjectRepository(Cash) private readonly cashRepository: Repository<Cash>) {}

  async getAllCash(): Promise<Cash[]> {
    return await this.cashRepository.find({ order: { createdAt: 'DESC' } });
  }

  async createCash(cash: Cash): Promise<Cash> {
    return await this.cashRepository.save(cash);
  }

  async getCash(id: string): Promise<Cash> {
    return await this.cashRepository.findOne(id);
  }

  async updateCash(id: string, cash: Cash): Promise<Cash> {
    const updateCash = await this.cashRepository.update(id, cash);
    if (!updateCash) {
      throw new HttpException('Cash id not found', HttpStatus.NOT_FOUND);
    }
    return await this.cashRepository.findOne(id);
  }

  async deleteCash(id: string): Promise<any> {
    if (await this.cashRepository.update({ id }, { isDeleted: true })) {
      return null;
    }
    throw new HttpException('Cash not found', HttpStatus.NOT_FOUND);
  }
}
