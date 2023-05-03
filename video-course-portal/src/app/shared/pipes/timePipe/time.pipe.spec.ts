import { TimePipe } from "./time.pipe";

describe('UserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new TimePipe();
    expect(pipe).toBeTruthy();
  });
});
