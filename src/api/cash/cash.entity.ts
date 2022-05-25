import { IsNumber, IsOptional, IsString } from 'class-validator';
import {
  AfterInsert,
  AfterLoad,
  AfterUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// export enum libelle {
//   RFX = 'Règlement Fournisseur X',
//   Recette = 'Recettes ESP',
// }

@Entity()
export class Cash {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  public id!: string;

  @Column({ type: 'double precision' })
  @IsNumber()
  @IsOptional()
  public recettes!: number;

  @Column({ type: 'double precision' })
  @IsNumber()
  @IsOptional()
  public depenses!: number;

  // @Column({ type: 'double precision' })
  // @IsNumber()
  // @IsOptional()
  // public solde: number;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  @IsOptional()
  public libelle: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date | null;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  public updatedAt: Date | null;

  @Column({ default: false })
  isDeleted: boolean;

  // @AfterLoad()
  // @AfterInsert()
  // @AfterUpdate()
  // generateMainPath(): void {
  //   const solde = solde - this.depenses + this.recettes;
  // }
}
