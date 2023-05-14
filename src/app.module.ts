import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { RolesGuard } from './users/roles.guard'
import { APP_GUARD } from '@nestjs/core'

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: RolesGuard }]
})
export class AppModule {}
