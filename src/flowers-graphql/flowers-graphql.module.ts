import { Module } from '@nestjs/common';
import { FlowersGraphqlService } from './flowers-graphql.service';
import { FlowersGraphqlResolver } from './flowers-graphql.resolver';

@Module({
  providers: [FlowersGraphqlResolver, FlowersGraphqlService],
})
export class FlowersGraphqlModule {}
