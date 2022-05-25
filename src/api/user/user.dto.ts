import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateNameDto {
  @IsString()
  @IsOptional()
  public readonly name?: string;

  @IsNotEmpty()
  public readonly password?: string;

  @IsEmail()
  public readonly email?: string;
}
