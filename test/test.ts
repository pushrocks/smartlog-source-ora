import { expect, tap } from '@pushrocks/tapbundle';
import * as smartlogSourceOra from '../ts/index';

let smartOra: smartlogSourceOra.SmartlogSourceOra;

tap.test('should create an ora instance', async tools => {
  smartOra = new smartlogSourceOra.SmartlogSourceOra();
  expect(smartOra).to.be.instanceOf(smartlogSourceOra.SmartlogSourceOra);
});

tap.test('should start', async tools => {
  smartOra.text('getting started...');
  await tools.delayFor(2000);
  smartOra.finishSuccess();
  smartOra.text('this should show');
  await tools.delayFor(2000);
  smartOra.successAndNext('and this also');
  smartOra.text('this should replace the current text');
  await tools.delayFor(1000);
  smartOra.finishSuccess('finish!');
});

tap.start();
