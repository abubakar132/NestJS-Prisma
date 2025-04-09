import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty

export class CreateArticleDto {
  @ApiProperty()
  title!: string; // Non-null assertion

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  body!: string; // Non-null assertion

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}