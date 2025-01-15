import { Resolver } from '@nestjs/graphql';
import { FlowersGraphqlService } from './flowers-graphql.service';

@Resolver()
export class FlowersGraphqlResolver {
  constructor(private readonly flowersGraphqlService: FlowersGraphqlService) {}
}
