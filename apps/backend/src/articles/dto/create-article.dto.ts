import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(2)
  title: string;

  @IsNotEmpty()
  @MaxLength(150)
  @MinLength(2)
  author: string;

  @IsNotEmpty()
  @MinLength(2)
  body: string;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}
