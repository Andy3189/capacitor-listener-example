import type { Plugin } from "@capacitor/core";

export interface ExamplePlugin extends Plugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
