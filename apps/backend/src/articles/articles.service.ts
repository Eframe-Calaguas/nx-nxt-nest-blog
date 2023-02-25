import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>
  ) {}

  create(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesRepository.save(createArticleDto);
  }

  findAll(): Promise<Article[]> {
    return this.articlesRepository.find();
  }

  findOne(id: string): Promise<Article> {
    return this.articlesRepository.findOneByOrFail({ id });
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.articlesRepository.update({ id }, updateArticleDto);
  }

  remove(id: string) {
    return this.articlesRepository.delete({ id });
  }
}
