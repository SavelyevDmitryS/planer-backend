import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Добавляет всем адресам префикс
    app.setGlobalPrefix('api');
    // app.use(cookieParser());
    app.enableCors({
      // Front
      origin: ['https://savelyevdmitrys-planer-frontend-8296.twc1.net'],
      // Привязка кук к запросу
      credentials: true,
      exposedHeaders: 'set-cookie'
    })

  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
