import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
  constructor(
    private prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  findAll() {
    console.log(this.configService.get<EnumAppMode>('MODE'));
    return this.prismaService.flower.findMany();
  }

  create(dto: CreateFlowersDto) {
    return this.prismaService.flower.create({ data: dto });
  }
}
