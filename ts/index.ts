import * as plugins from './smartlog-source-ora.plugins';

export class SmartlogSourceOra {
  public oraInstance = plugins.ora('loading');
  public started = false;

  constructor() {}

  public text(textArg: string) {
    this.oraInstance.text = textArg;
    if (!this.started) {
      this.started = true;
      this.oraInstance.start();
    }
  }

  public stop() {
    this.oraInstance.stop();
  }

  public finishSuccess(textArg?: string) {
    this.oraInstance.succeed(textArg);
    this.started = false;
  }

  public finishFail(textArg?: string) {
    this.oraInstance.fail(textArg);
    this.started = false;
  }

  public successAndNext(textArg: string) {
    this.finishSuccess();
    this.text(textArg);
  }

  public failAndNext(textArg: string) {
    this.finishFail();
    this.text(textArg);
  }
}
