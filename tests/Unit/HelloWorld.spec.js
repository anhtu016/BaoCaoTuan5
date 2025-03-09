import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain("Hello");
  });
});
