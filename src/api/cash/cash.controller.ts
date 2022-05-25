import {
  Controller,
  Render,
  Get,
  Post,
  Put,
  Param,
  Body,
  Res,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Inject,
} from '@nestjs/common';
import { JwtAuthGuard } from '../user/auth/auth.guard';
import { Cash } from './cash.entity';
import { CashService } from './cash.service';

@Controller('cash')
export class CashController {
  @Inject(CashService)
  private readonly cashService: CashService;

  @Get()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Render('cash/list')
  async allCash(): Promise<object> {
    const AllCash = await this.cashService.getAllCash();
    return { AllCash, page: 'cash' };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  async createCash(@Body() cash: Cash, @Res() res): Promise<any> {
    await this.cashService.createCash(cash);
    return res.redirect('/cash');
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Render('cash/detail')
  async getCash(@Param() params): Promise<object> {
    const cash = await this.cashService.getCash(params.id);
    return { cash, page: 'detail' };
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  async updateCash(@Param() params, @Body() cash: Cash): Promise<Cash> {
    return this.cashService.updateCash(params.id, cash);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  async deleteCash(@Param() params): Promise<Cash> {
    return this.cashService.deleteCash(params.id);
  }
}
