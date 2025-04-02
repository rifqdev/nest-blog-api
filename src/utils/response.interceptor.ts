import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    return next.handle().pipe(
      map((response: any) => {
        const { message, data, metadata, ...rest } = response; // Pisahkan message dan data

        return {
          success: true,
          message: message ?? 'Success',
          data: data ?? rest ?? null, // Ambil data atau sisa response jika tidak ada data
          metadata: metadata ?? null,
        };
      }),
    );
  }
}
