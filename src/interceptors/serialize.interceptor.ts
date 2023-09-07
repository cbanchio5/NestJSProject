import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { plainToClass } from "class-transformer";
import { nextTick } from "process";


export class SerializeInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, handler: CallHandler) : Observable<any> {

    console.log('Im running before handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        console.log('Im running before response is sent')
      })
    )
  }
}
