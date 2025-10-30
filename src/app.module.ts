import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentModule } from './parent/parent.module';
import { ChildModule } from './child/child.module';
import { JobModule } from './job/job.module';
import { PaymentsModule } from './payments/payments.module';
import { ReviewModule } from './review/review.module';
import { CaregiverModule } from './caregiver/caregiver.module';
import { AddressModule } from './address/address.module';
import { AddressLinkModule } from './address-link/address-link.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-1-ap-southeast-2.pooler.supabase.com',
      port: 5432,
      username: 'postgres.zysibcowvmsianqioywe',
      password: 'Bl!zz2rd2rc889021', // URL-encoded '!' character
      database: 'postgres',
      autoLoadEntities: true,        // automatically load entities
      synchronize: true,             // auto-create tables (dev only)
    }),
    ParentModule,
    ChildModule,
    JobModule,
    PaymentsModule,
    ReviewModule,
    CaregiverModule,
    AddressModule,
    AddressLinkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
