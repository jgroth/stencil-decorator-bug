import { Component, Prop, h, State } from '@stencil/core';

const MyDecorator: () => PropertyDecorator = () => {
  return (target: Object, propertyKey: string) => {
    console.log({target, propertyKey});
  };
};

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Prop()
  foo: string;

  @State()
  @MyDecorator()
  decoratedProp: any;

  render() {
    return (
        <div>foo = {this.foo}</div>
    );
  }
}
