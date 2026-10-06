/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from '@nestjs/common';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    throw new Error('Method not implemented.');
  }
  async OnModuleInit() {
    await this.$connect();
  }
}
