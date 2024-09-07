import { LoggerService, Injectable, Scope } from '@nestjs/common';
import { Logger } from 'log4js';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger implements LoggerService {
  constructor(private readonly logger: Logger) {}

  log(message: any, context?: string) {
    this.logger.log(message, context ? context : '');
  }
  error(message: any, trace?: string, context?: string) {
    this.logger.error(message, trace ? trace : '', context ? context : '');
  }
  warn(message: any, context?: string) {
    this.logger.warn(message, context ? context : '');
  }
  debug?(message: any, context?: string) {
    this.logger.debug(message, context ? context : '');
  }
}
