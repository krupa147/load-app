import { IsNotEmpty, IsBoolean } from "class-validator";

export class CreateItemDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  colour: string;

  @IsNotEmpty()
  length: number;

  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  weight: number;

  @IsNotEmpty()
  quantity: number;

  stackable: boolean;
  tiltable: boolean;
}

export class UpdateItemDto {
  name: string;
  colour: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  quantity: number;
  stackable: boolean;
  tiltable: boolean;
}