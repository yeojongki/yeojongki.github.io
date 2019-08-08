import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, RoleModule],
  // controllers: [AppController],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
