var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { SvelteComponent, init, safe_not_equal, create_slot, element, claim_element, children, detach, attr, insert_hydration, action_destroyer, run_all, space, empty, claim_space, add_render_callback, append_hydration, add_resize_listener, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out, createEventDispatcher, binding_callbacks, listen, noop as noop$1, bind, text, create_component, claim_text, claim_component, set_style, toggle_class, mount_component, add_flush_callback, destroy_component, svg_element, claim_svg_element, destroy_each, getContext, subscribe, component_subscribe, set_store_value, set_data, set_input_value, group_outros, check_outros, create_bidirectional_transition, onMount, now, loop, setContext, stop_propagation, null_to_empty, get_spread_update, get_spread_object, assign as assign$1, is_function, tick, update_await_block_branch, handle_promise, bubble, identity as identity$3, create_in_transition, create_out_transition } from "./index-7afc149e.js";
import { __vitePreload, writable, readable } from "./preload-helper-42b4c6f2.js";
function clamp(num, min, max) {
  return num < min ? min : num > max ? max : num;
}
var SplitPane_svelte_svelte_type_style_lang = "";
const get_b_slot_changes = (dirty) => ({});
const get_b_slot_context = (ctx) => ({});
const get_a_slot_changes = (dirty) => ({});
const get_a_slot_context = (ctx) => ({});
function create_if_block_1$b(ctx) {
  let div;
  let div_class_value;
  let div_style_value;
  let drag_action;
  let touchDrag_action;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = ctx[1] + " divider svelte-1rhm6f2");
      attr(div, "style", div_style_value = ctx[8] + ": calc(" + ctx[0] + "% - 8px)");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (!mounted) {
        dispose = [
          action_destroyer(drag_action = ctx[11].call(null, div, ctx[9])),
          action_destroyer(touchDrag_action = ctx[12].call(null, div, ctx[10]))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && div_class_value !== (div_class_value = ctx2[1] + " divider svelte-1rhm6f2")) {
        attr(div, "class", div_class_value);
      }
      if (dirty & 257 && div_style_value !== (div_style_value = ctx2[8] + ": calc(" + ctx2[0] + "% - 8px)")) {
        attr(div, "style", div_style_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$n(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "mousecatcher svelte-1rhm6f2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$D(ctx) {
  let div2;
  let div0;
  let div0_style_value;
  let t0;
  let div1;
  let div1_style_value;
  let t1;
  let div2_resize_listener;
  let t2;
  let if_block1_anchor;
  let current;
  const a_slot_template = ctx[18].a;
  const a_slot = create_slot(a_slot_template, ctx, ctx[17], get_a_slot_context);
  const b_slot_template = ctx[18].b;
  const b_slot = create_slot(b_slot_template, ctx, ctx[17], get_b_slot_context);
  let if_block0 = !ctx[2] && create_if_block_1$b(ctx);
  let if_block1 = ctx[6] && create_if_block$n();
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      if (a_slot)
        a_slot.c();
      t0 = space();
      div1 = element("div");
      if (b_slot)
        b_slot.c();
      t1 = space();
      if (if_block0)
        if_block0.c();
      t2 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      if (a_slot)
        a_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      if (b_slot)
        b_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      if (if_block0)
        if_block0.l(div2_nodes);
      div2_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(div0, "class", "pane svelte-1rhm6f2");
      attr(div0, "style", div0_style_value = ctx[7] + ": " + ctx[0] + "%;");
      attr(div1, "class", "pane svelte-1rhm6f2");
      attr(div1, "style", div1_style_value = ctx[7] + ": " + (100 - ctx[0]) + "%;");
      attr(div2, "class", "container svelte-1rhm6f2");
      add_render_callback(() => ctx[20].call(div2));
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      if (a_slot) {
        a_slot.m(div0, null);
      }
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      if (b_slot) {
        b_slot.m(div1, null);
      }
      append_hydration(div2, t1);
      if (if_block0)
        if_block0.m(div2, null);
      ctx[19](div2);
      div2_resize_listener = add_resize_listener(div2, ctx[20].bind(div2));
      insert_hydration(target, t2, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (a_slot) {
        if (a_slot.p && (!current || dirty & 131072)) {
          update_slot_base(a_slot, a_slot_template, ctx2, ctx2[17], !current ? get_all_dirty_from_scope(ctx2[17]) : get_slot_changes(a_slot_template, ctx2[17], dirty, get_a_slot_changes), get_a_slot_context);
        }
      }
      if (!current || dirty & 129 && div0_style_value !== (div0_style_value = ctx2[7] + ": " + ctx2[0] + "%;")) {
        attr(div0, "style", div0_style_value);
      }
      if (b_slot) {
        if (b_slot.p && (!current || dirty & 131072)) {
          update_slot_base(b_slot, b_slot_template, ctx2, ctx2[17], !current ? get_all_dirty_from_scope(ctx2[17]) : get_slot_changes(b_slot_template, ctx2[17], dirty, get_b_slot_changes), get_b_slot_context);
        }
      }
      if (!current || dirty & 129 && div1_style_value !== (div1_style_value = ctx2[7] + ": " + (100 - ctx2[0]) + "%;")) {
        attr(div1, "style", div1_style_value);
      }
      if (!ctx2[2]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$b(ctx2);
          if_block0.c();
          if_block0.m(div2, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[6]) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block$n();
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(a_slot, local);
      transition_in(b_slot, local);
      current = true;
    },
    o(local) {
      transition_out(a_slot, local);
      transition_out(b_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (a_slot)
        a_slot.d(detaching);
      if (b_slot)
        b_slot.d(detaching);
      if (if_block0)
        if_block0.d();
      ctx[19](null);
      div2_resize_listener();
      if (detaching)
        detach(t2);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function instance$D($$self, $$props, $$invalidate) {
  let size;
  let side;
  let dimension;
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  let { type } = $$props;
  let { pos = 50 } = $$props;
  let { fixed = false } = $$props;
  let { buffer = 42 } = $$props;
  let { min } = $$props;
  let { max } = $$props;
  let w;
  let h;
  const refs = {};
  let dragging = false;
  function setPos(event) {
    const { top, left } = refs.container.getBoundingClientRect();
    const px = type === "vertical" ? event.clientY - top : event.clientX - left;
    $$invalidate(0, pos = 100 * px / size);
    dispatch("change");
  }
  function setTouchPos(event) {
    const { top, left } = refs.container.getBoundingClientRect();
    const px = type === "vertical" ? event.touches[0].clientY - top : event.touches[0].clientX - left;
    $$invalidate(0, pos = 100 * px / size);
    dispatch("change");
  }
  function drag(node, callback) {
    const mousedown = (event) => {
      if (event.which !== 1)
        return;
      event.preventDefault();
      $$invalidate(6, dragging = true);
      const onmouseup = () => {
        $$invalidate(6, dragging = false);
        window.removeEventListener("mousemove", callback, false);
        window.removeEventListener("mouseup", onmouseup, false);
      };
      window.addEventListener("mousemove", callback, false);
      window.addEventListener("mouseup", onmouseup, false);
    };
    node.addEventListener("mousedown", mousedown, false);
    return {
      destroy() {
        node.removeEventListener("mousedown", mousedown, false);
      }
    };
  }
  function touchDrag(node, callback) {
    const touchdown = (event) => {
      if (event.targetTouches.length > 1)
        return;
      event.preventDefault();
      $$invalidate(6, dragging = true);
      const ontouchend = () => {
        $$invalidate(6, dragging = false);
        window.removeEventListener("touchmove", callback, false);
        window.removeEventListener("touchend", ontouchend, false);
      };
      window.addEventListener("touchmove", callback, false);
      window.addEventListener("touchend", ontouchend, false);
    };
    node.addEventListener("touchstart", touchdown, false);
    return {
      destroy() {
        node.removeEventListener("touchstart", touchdown, false);
      }
    };
  }
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      refs.container = $$value;
      $$invalidate(5, refs);
    });
  }
  function div2_elementresize_handler() {
    w = this.clientWidth;
    h = this.clientHeight;
    $$invalidate(3, w);
    $$invalidate(4, h);
  }
  $$self.$$set = ($$props2) => {
    if ("type" in $$props2)
      $$invalidate(1, type = $$props2.type);
    if ("pos" in $$props2)
      $$invalidate(0, pos = $$props2.pos);
    if ("fixed" in $$props2)
      $$invalidate(2, fixed = $$props2.fixed);
    if ("buffer" in $$props2)
      $$invalidate(15, buffer = $$props2.buffer);
    if ("min" in $$props2)
      $$invalidate(13, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(14, max = $$props2.max);
    if ("$$scope" in $$props2)
      $$invalidate(17, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 26) {
      $$invalidate(16, size = type === "vertical" ? h : w);
    }
    if ($$self.$$.dirty & 98304) {
      $$invalidate(13, min = 100 * (buffer / size));
    }
    if ($$self.$$.dirty & 8192) {
      $$invalidate(14, max = 100 - min);
    }
    if ($$self.$$.dirty & 24577) {
      $$invalidate(0, pos = clamp(pos, min, max));
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(8, side = type === "horizontal" ? "left" : "top");
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(7, dimension = type === "horizontal" ? "width" : "height");
    }
  };
  return [
    pos,
    type,
    fixed,
    w,
    h,
    refs,
    dragging,
    dimension,
    side,
    setPos,
    setTouchPos,
    drag,
    touchDrag,
    min,
    max,
    buffer,
    size,
    $$scope,
    slots,
    div2_binding,
    div2_elementresize_handler
  ];
}
class SplitPane extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$D, create_fragment$D, safe_not_equal, {
      type: 1,
      pos: 0,
      fixed: 2,
      buffer: 15,
      min: 13,
      max: 14
    });
  }
}
var Checkbox_svelte_svelte_type_style_lang = "";
function create_fragment$C(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", { type: true, class: true });
      this.h();
    },
    h() {
      attr(input, "type", "checkbox");
      attr(input, "class", "svelte-7d8p2x");
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      input.checked = ctx[0];
      if (!mounted) {
        dispose = listen(input, "change", ctx[1]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        input.checked = ctx2[0];
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function instance$C($$self, $$props, $$invalidate) {
  let { checked } = $$props;
  function input_change_handler() {
    checked = this.checked;
    $$invalidate(0, checked);
  }
  $$self.$$set = ($$props2) => {
    if ("checked" in $$props2)
      $$invalidate(0, checked = $$props2.checked);
  };
  return [checked, input_change_handler];
}
class Checkbox extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$C, create_fragment$C, safe_not_equal, { checked: 0 });
  }
}
var InputOutputToggle_svelte_svelte_type_style_lang = "";
function create_fragment$B(ctx) {
  let label;
  let span0;
  let t0;
  let t1;
  let checkbox;
  let updating_checked;
  let t2;
  let span1;
  let t3;
  let current;
  function checkbox_checked_binding(value) {
    ctx[1](value);
  }
  let checkbox_props = {};
  if (ctx[0] !== void 0) {
    checkbox_props.checked = ctx[0];
  }
  checkbox = new Checkbox({ props: checkbox_props });
  binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding));
  return {
    c() {
      label = element("label");
      span0 = element("span");
      t0 = text("input");
      t1 = space();
      create_component(checkbox.$$.fragment);
      t2 = space();
      span1 = element("span");
      t3 = text("output");
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { class: true });
      var label_nodes = children(label);
      span0 = claim_element(label_nodes, "SPAN", { style: true, class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "input");
      span0_nodes.forEach(detach);
      t1 = claim_space(label_nodes);
      claim_component(checkbox.$$.fragment, label_nodes);
      t2 = claim_space(label_nodes);
      span1 = claim_element(label_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, "output");
      span1_nodes.forEach(detach);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(span0, "text-align", "right");
      attr(span0, "class", "svelte-wpxql0");
      toggle_class(span0, "active", !ctx[0]);
      attr(span1, "class", "svelte-wpxql0");
      toggle_class(span1, "active", ctx[0]);
      attr(label, "class", "input-output-toggle svelte-wpxql0");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, span0);
      append_hydration(span0, t0);
      append_hydration(label, t1);
      mount_component(checkbox, label, null);
      append_hydration(label, t2);
      append_hydration(label, span1);
      append_hydration(span1, t3);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        toggle_class(span0, "active", !ctx2[0]);
      }
      const checkbox_changes = {};
      if (!updating_checked && dirty & 1) {
        updating_checked = true;
        checkbox_changes.checked = ctx2[0];
        add_flush_callback(() => updating_checked = false);
      }
      checkbox.$set(checkbox_changes);
      if (dirty & 1) {
        toggle_class(span1, "active", ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(label);
      destroy_component(checkbox);
    }
  };
}
function instance$B($$self, $$props, $$invalidate) {
  let { checked } = $$props;
  function checkbox_checked_binding(value) {
    checked = value;
    $$invalidate(0, checked);
  }
  $$self.$$set = ($$props2) => {
    if ("checked" in $$props2)
      $$invalidate(0, checked = $$props2.checked);
  };
  return [checked, checkbox_checked_binding];
}
class InputOutputToggle extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$B, create_fragment$B, safe_not_equal, { checked: 0 });
  }
}
var ComponentSelector_svelte_svelte_type_style_lang = "";
function get_each_context$8(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[28] = list[i2];
  child_ctx[30] = i2;
  return child_ctx;
}
function create_if_block$m(ctx) {
  let div;
  let t;
  let button;
  let svg;
  let line0;
  let line1;
  let mounted;
  let dispose;
  let each_value = ctx[4];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$8(get_each_context$8(ctx, each_value, i2));
  }
  return {
    c() {
      div = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t = space();
      button = element("button");
      svg = svg_element("svg");
      line0 = svg_element("line");
      line1 = svg_element("line");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      t = claim_space(div_nodes);
      button = claim_element(div_nodes, "BUTTON", { class: true, title: true });
      var button_nodes = children(button);
      svg = claim_svg_element(button_nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        class: true
      });
      var svg_nodes = children(svg);
      line0 = claim_svg_element(svg_nodes, "line", {
        stroke: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true
      });
      children(line0).forEach(detach);
      line1 = claim_svg_element(svg_nodes, "line", {
        stroke: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true
      });
      children(line1).forEach(detach);
      svg_nodes.forEach(detach);
      button_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(line0, "stroke", "#999");
      attr(line0, "x1", "12");
      attr(line0, "y1", "5");
      attr(line0, "x2", "12");
      attr(line0, "y2", "19");
      attr(line1, "stroke", "#999");
      attr(line1, "x1", "5");
      attr(line1, "y1", "12");
      attr(line1, "x2", "19");
      attr(line1, "y2", "12");
      attr(svg, "width", "12");
      attr(svg, "height", "12");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "class", "svelte-npccba");
      attr(button, "class", "add-new svelte-npccba");
      attr(button, "title", "add new component");
      attr(div, "class", "file-tabs svelte-npccba");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div, null);
      }
      append_hydration(div, t);
      append_hydration(div, button);
      append_hydration(button, svg);
      append_hydration(svg, line0);
      append_hydration(svg, line1);
      if (!mounted) {
        dispose = [
          listen(button, "click", ctx[11]),
          listen(div, "dblclick", ctx[11])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 128957) {
        each_value = ctx2[4];
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$8(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block$8(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(div, t);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_else_block$d(ctx) {
  let div;
  let t0_value = ctx[28].name + "";
  let t0;
  let t1;
  let t2_value = ctx[28].type + "";
  let t2;
  let t3;
  let span;
  let svg;
  let line0;
  let line1;
  let mounted;
  let dispose;
  let if_block = ctx[0] && ctx[28].modified && create_if_block_4$2();
  function click_handler() {
    return ctx[20](ctx[28]);
  }
  function click_handler_12() {
    return ctx[21](ctx[28]);
  }
  return {
    c() {
      div = element("div");
      t0 = text(t0_value);
      t1 = text(".");
      t2 = text(t2_value);
      if (if_block)
        if_block.c();
      t3 = space();
      span = element("span");
      svg = svg_element("svg");
      line0 = svg_element("line");
      line1 = svg_element("line");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, title: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, t0_value);
      t1 = claim_text(div_nodes, ".");
      t2 = claim_text(div_nodes, t2_value);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      t3 = claim_space(nodes);
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        class: true
      });
      var svg_nodes = children(svg);
      line0 = claim_svg_element(svg_nodes, "line", {
        stroke: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true
      });
      children(line0).forEach(detach);
      line1 = claim_svg_element(svg_nodes, "line", {
        stroke: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true
      });
      children(line1).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "editable svelte-npccba");
      attr(div, "title", "edit component name");
      attr(line0, "stroke", "#999");
      attr(line0, "x1", "18");
      attr(line0, "y1", "6");
      attr(line0, "x2", "6");
      attr(line0, "y2", "18");
      attr(line1, "stroke", "#999");
      attr(line1, "x1", "6");
      attr(line1, "y1", "6");
      attr(line1, "x2", "18");
      attr(line1, "y2", "18");
      attr(svg, "width", "12");
      attr(svg, "height", "12");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "class", "svelte-npccba");
      attr(span, "class", "remove svelte-npccba");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, t1);
      append_hydration(div, t2);
      if (if_block)
        if_block.m(div, null);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, line0);
      append_hydration(svg, line1);
      if (!mounted) {
        dispose = [
          listen(div, "click", click_handler),
          listen(span, "click", click_handler_12)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 16 && t0_value !== (t0_value = ctx[28].name + ""))
        set_data(t0, t0_value);
      if (dirty & 16 && t2_value !== (t2_value = ctx[28].type + ""))
        set_data(t2, t2_value);
      if (ctx[0] && ctx[28].modified) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_4$2();
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      if (detaching)
        detach(t3);
      if (detaching)
        detach(span);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_3$6(ctx) {
  let span;
  let t0_value = ctx[2].name + (/\./.test(ctx[2].name) ? "" : `.${ctx[2].type}`);
  let t0;
  let t1;
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      input = element("input");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      span_nodes.forEach(detach);
      t1 = claim_space(nodes);
      input = claim_element(nodes, "INPUT", { spellcheck: true, class: true });
      this.h();
    },
    h() {
      attr(span, "class", "input-sizer svelte-npccba");
      input.autofocus = true;
      attr(input, "spellcheck", false);
      attr(input, "class", "svelte-npccba");
      toggle_class(input, "duplicate", ctx[12](ctx[2]));
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, input, anchor);
      set_input_value(input, ctx[2].name);
      input.focus();
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[18]),
          listen(input, "focus", selectInput),
          listen(input, "blur", ctx[9]),
          listen(input, "keydown", ctx[19])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t0_value !== (t0_value = ctx2[2].name + (/\./.test(ctx2[2].name) ? "" : `.${ctx2[2].type}`)))
        set_data(t0, t0_value);
      if (dirty & 4 && input.value !== ctx2[2].name) {
        set_input_value(input, ctx2[2].name);
      }
      if (dirty & 4100) {
        toggle_class(input, "duplicate", ctx2[12](ctx2[2]));
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(input);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$a(ctx) {
  let div;
  let t0;
  let t1_value = ctx[28].type + "";
  let t1;
  let if_block = ctx[0] && ctx[28].modified && create_if_block_2$9();
  return {
    c() {
      div = element("div");
      t0 = text("App.");
      t1 = text(t1_value);
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "App.");
      t1 = claim_text(div_nodes, t1_value);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "uneditable svelte-npccba");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, t1);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t1_value !== (t1_value = ctx2[28].type + ""))
        set_data(t1, t1_value);
      if (ctx2[0] && ctx2[28].modified) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_2$9();
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_4$2(ctx) {
  let t;
  return {
    c() {
      t = text("*");
    },
    l(nodes) {
      t = claim_text(nodes, "*");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_2$9(ctx) {
  let t;
  return {
    c() {
      t = text("*");
    },
    l(nodes) {
      t = claim_text(nodes, "*");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$8(ctx) {
  let div;
  let i2;
  let t;
  let div_id_value;
  let div_draggable_value;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[28].name === "App" && ctx2[28] !== ctx2[2])
      return create_if_block_1$a;
    if (ctx2[28] === ctx2[2])
      return create_if_block_3$6;
    return create_else_block$d;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  function click_handler_2() {
    return ctx[22](ctx[28]);
  }
  return {
    c() {
      div = element("div");
      i2 = element("i");
      t = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {
        id: true,
        class: true,
        role: true,
        draggable: true
      });
      var div_nodes = children(div);
      i2 = claim_element(div_nodes, "I", { class: true });
      children(i2).forEach(detach);
      t = claim_space(div_nodes);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i2, "class", "drag-handle svelte-npccba");
      attr(div, "id", div_id_value = ctx[28].name);
      attr(div, "class", "button svelte-npccba");
      attr(div, "role", "button");
      attr(div, "draggable", div_draggable_value = ctx[28] !== ctx[2]);
      toggle_class(div, "active", ctx[28] === ctx[5]);
      toggle_class(div, "draggable", ctx[28] !== ctx[2] && ctx[30] !== 0);
      toggle_class(div, "drag-over", ctx[3] === ctx[28].name);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, i2);
      append_hydration(div, t);
      if_block.m(div, null);
      if (!mounted) {
        dispose = [
          listen(div, "click", click_handler_2),
          listen(div, "dblclick", dblclick_handler),
          listen(div, "dragstart", ctx[13]),
          listen(div, "dragover", ctx[15]),
          listen(div, "dragleave", ctx[14]),
          listen(div, "drop", ctx[16])
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
      if (dirty & 16 && div_id_value !== (div_id_value = ctx[28].name)) {
        attr(div, "id", div_id_value);
      }
      if (dirty & 20 && div_draggable_value !== (div_draggable_value = ctx[28] !== ctx[2])) {
        attr(div, "draggable", div_draggable_value);
      }
      if (dirty & 48) {
        toggle_class(div, "active", ctx[28] === ctx[5]);
      }
      if (dirty & 20) {
        toggle_class(div, "draggable", ctx[28] !== ctx[2] && ctx[30] !== 0);
      }
      if (dirty & 24) {
        toggle_class(div, "drag-over", ctx[3] === ctx[28].name);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$A(ctx) {
  let div;
  let if_block = ctx[4].length && create_if_block$m(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "component-selector svelte-npccba");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (ctx2[4].length) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$m(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function selectInput(event) {
  setTimeout(() => {
    event.target.select();
  });
}
const dblclick_handler = (e) => e.stopPropagation();
function instance$A($$self, $$props, $$invalidate) {
  let $components, $$unsubscribe_components = noop$1, $$subscribe_components = () => ($$unsubscribe_components(), $$unsubscribe_components = subscribe(components, ($$value) => $$invalidate(4, $components = $$value)), components);
  let $selected;
  $$self.$$.on_destroy.push(() => $$unsubscribe_components());
  let { handle_select } = $$props;
  let { show_modified } = $$props;
  let { components, selected, request_focus, rebundle } = getContext("REPL");
  $$subscribe_components();
  component_subscribe($$self, selected, (value) => $$invalidate(5, $selected = value));
  const dispatch = createEventDispatcher();
  let editing = null;
  function selectComponent(component) {
    if ($selected !== component) {
      $$invalidate(2, editing = null);
      handle_select(component);
    }
  }
  function editTab(component) {
    if ($selected === component) {
      $$invalidate(2, editing = $selected);
    }
  }
  function closeEdit() {
    const match = /(.+)\.(svelte|js|json|md|svx)$/.exec($selected.name);
    set_store_value(selected, $selected.name = match ? match[1] : $selected.name, $selected);
    if (isComponentNameUsed($selected)) {
      let i2 = 1;
      let name2 = $selected.name;
      do {
        set_store_value(selected, $selected.name = `${name2}_${i2++}`, $selected);
      } while (isComponentNameUsed($selected));
    }
    if (match && match[2])
      set_store_value(selected, $selected.type = match[2], $selected);
    $$invalidate(2, editing = null);
    handle_select($selected);
    $$subscribe_components($$invalidate(1, components));
    setTimeout(request_focus);
    rebundle();
  }
  function remove(component) {
    let result = confirm(`Are you sure you want to delete ${component.name}.${component.type}?`);
    if (result) {
      const index = $components.indexOf(component);
      if (~index) {
        components.set($components.slice(0, index).concat($components.slice(index + 1)));
        dispatch("remove", { components: $components });
      } else {
        console.error(`Could not find component! That's... odd`);
      }
      handle_select($components[index] || $components[$components.length - 1]);
    }
  }
  let uid2 = 1;
  function addNew() {
    const component = {
      name: uid2++ ? `Component${uid2}` : "Component1",
      type: "svelte",
      source: "",
      modified: true
    };
    $$invalidate(2, editing = component);
    components.update((components2) => components2.concat(component));
    handle_select(component);
    dispatch("add", { components: $components });
  }
  function isComponentNameUsed(editing2) {
    return $components.find((component) => component !== editing2 && component.name === editing2.name);
  }
  let from3 = null;
  let over = null;
  function dragStart(event) {
    from3 = event.currentTarget.id;
  }
  function dragLeave() {
    $$invalidate(3, over = null);
  }
  function dragOver(event) {
    event.preventDefault();
    $$invalidate(3, over = event.currentTarget.id);
  }
  function dragEnd(event) {
    event.preventDefault();
    if (from3 && over) {
      const from_index = $components.findIndex((component) => component.name === from3);
      const to_index = $components.findIndex((component) => component.name === over);
      const from_component = $components[from_index];
      $components.splice(from_index, 1);
      components.set($components.slice(0, to_index).concat(from_component).concat($components.slice(to_index)));
    }
    from3 = $$invalidate(3, over = null);
  }
  function input_input_handler() {
    editing.name = this.value;
    $$invalidate(2, editing);
  }
  const keydown_handler = (e) => e.which === 13 && !isComponentNameUsed(editing) && e.target.blur();
  const click_handler = (component) => editTab(component);
  const click_handler_12 = (component) => remove(component);
  const click_handler_2 = (component) => selectComponent(component);
  $$self.$$set = ($$props2) => {
    if ("handle_select" in $$props2)
      $$invalidate(17, handle_select = $$props2.handle_select);
    if ("show_modified" in $$props2)
      $$invalidate(0, show_modified = $$props2.show_modified);
  };
  return [
    show_modified,
    components,
    editing,
    over,
    $components,
    $selected,
    selected,
    selectComponent,
    editTab,
    closeEdit,
    remove,
    addNew,
    isComponentNameUsed,
    dragStart,
    dragLeave,
    dragOver,
    dragEnd,
    handle_select,
    input_input_handler,
    keydown_handler,
    click_handler,
    click_handler_12,
    click_handler_2
  ];
}
class ComponentSelector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$A, create_fragment$A, safe_not_equal, { handle_select: 17, show_modified: 0 });
  }
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};height: ${t * height}px;padding-top: ${t * padding_top}px;padding-bottom: ${t * padding_bottom}px;margin-top: ${t * margin_top}px;margin-bottom: ${t * margin_bottom}px;border-top-width: ${t * border_top_width}px;border-bottom-width: ${t * border_bottom_width}px;`
  };
}
var Message_svelte_svelte_type_style_lang = "";
function create_else_block$c(ctx) {
  let current;
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$l(ctx) {
  let p;
  let t_value = ctx[4](ctx[1]) + "";
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "svelte-h6ifpw");
      toggle_class(p, "navigable", ctx[1].filename);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
      if (!mounted) {
        dispose = listen(p, "click", ctx[8]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = ctx2[4](ctx2[1]) + ""))
        set_data(t, t_value);
      if (dirty & 2) {
        toggle_class(p, "navigable", ctx2[1].filename);
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(p);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$z(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let div_class_value;
  let div_transition;
  let current;
  const if_block_creators = [create_if_block$l, create_else_block$c];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "message " + ctx[0] + " svelte-h6ifpw");
      toggle_class(div, "truncate", ctx[2]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
      if (!current || dirty & 1 && div_class_value !== (div_class_value = "message " + ctx2[0] + " svelte-h6ifpw")) {
        attr(div, "class", div_class_value);
      }
      if (dirty & 5) {
        toggle_class(div, "truncate", ctx2[2]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { duration: 100 }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, { duration: 100 }, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function instance$z($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const { navigate } = getContext("REPL");
  let { kind } = $$props;
  let { details = null } = $$props;
  let { filename = null } = $$props;
  let { truncate = false } = $$props;
  function message(details2) {
    let str = details2.message || "[missing message]";
    let loc = [];
    if (details2.filename && details2.filename !== filename) {
      loc.push(details2.filename);
    }
    if (details2.start)
      loc.push(details2.start.line, details2.start.column);
    return str + (loc.length ? ` (${loc.join(":")})` : ``);
  }
  const click_handler = () => navigate(details);
  $$self.$$set = ($$props2) => {
    if ("kind" in $$props2)
      $$invalidate(0, kind = $$props2.kind);
    if ("details" in $$props2)
      $$invalidate(1, details = $$props2.details);
    if ("filename" in $$props2)
      $$invalidate(5, filename = $$props2.filename);
    if ("truncate" in $$props2)
      $$invalidate(2, truncate = $$props2.truncate);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  return [
    kind,
    details,
    truncate,
    navigate,
    message,
    filename,
    $$scope,
    slots,
    click_handler
  ];
}
class Message extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$z, create_fragment$z, safe_not_equal, {
      kind: 0,
      details: 1,
      filename: 5,
      truncate: 2
    });
  }
}
var CodeMirror_svelte_svelte_type_style_lang = "";
function create_if_block$k(ctx) {
  let pre;
  let t0;
  let t1;
  let div;
  let message;
  let current;
  message = new Message({
    props: {
      kind: "info",
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      pre = element("pre");
      t0 = text(ctx[2]);
      t1 = space();
      div = element("div");
      create_component(message.$$.fragment);
      this.h();
    },
    l(nodes) {
      pre = claim_element(nodes, "PRE", { style: true, class: true });
      var pre_nodes = children(pre);
      t0 = claim_text(pre_nodes, ctx[2]);
      pre_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { style: true });
      var div_nodes = children(div);
      claim_component(message.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(pre, "position", "absolute");
      set_style(pre, "left", "0");
      set_style(pre, "top", "0");
      attr(pre, "class", "svelte-1jjwxbp");
      set_style(div, "position", "absolute");
      set_style(div, "width", "100%");
      set_style(div, "bottom", "0");
    },
    m(target, anchor) {
      insert_hydration(target, pre, anchor);
      append_hydration(pre, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      mount_component(message, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty[0] & 4)
        set_data(t0, ctx2[2]);
      const message_changes = {};
      if (dirty[1] & 8) {
        message_changes.$$scope = { dirty, ctx: ctx2 };
      }
      message.$set(message_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(pre);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      destroy_component(message);
    }
  };
}
function create_default_slot$4(ctx) {
  let t;
  return {
    c() {
      t = text("loading editor...");
    },
    l(nodes) {
      t = claim_text(nodes, "loading editor...");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$y(ctx) {
  let div;
  let textarea;
  let t;
  let div_resize_listener;
  let current;
  let if_block = !ctx[4] && create_if_block$k(ctx);
  return {
    c() {
      div = element("div");
      textarea = element("textarea");
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      textarea = claim_element(div_nodes, "TEXTAREA", { class: true });
      children(textarea).forEach(detach);
      t = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      textarea.readOnly = true;
      textarea.value = ctx[2];
      attr(textarea, "class", "svelte-1jjwxbp");
      attr(div, "class", "codemirror-container svelte-1jjwxbp");
      add_render_callback(() => ctx[26].call(div));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, textarea);
      ctx[25](textarea);
      append_hydration(div, t);
      if (if_block)
        if_block.m(div, null);
      div_resize_listener = add_resize_listener(div, ctx[26].bind(div));
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty[0] & 4) {
        textarea.value = ctx2[2];
      }
      if (!ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$k(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[25](null);
      if (if_block)
        if_block.d();
      div_resize_listener();
    }
  };
}
function sleep(ms) {
  return new Promise((fulfil) => setTimeout(fulfil, ms));
}
function instance$y($$self, $$props, $$invalidate) {
  const dispatch = createEventDispatcher();
  let { readonly = false } = $$props;
  let { errorLoc = null } = $$props;
  let { lineNumbers = true } = $$props;
  let { tab = true } = $$props;
  let { theme } = $$props;
  let w;
  let h;
  let code2 = "";
  let mode;
  async function set(new_code, new_mode) {
    if (new_mode !== mode) {
      await createEditor(mode = new_mode);
    }
    $$invalidate(2, code2 = new_code);
    updating_externally = true;
    if (editor)
      editor.setValue(code2);
    updating_externally = false;
  }
  function update(new_code) {
    $$invalidate(2, code2 = new_code);
    if (editor) {
      const { left, top } = editor.getScrollInfo();
      editor.setValue($$invalidate(2, code2 = new_code));
      editor.scrollTo(left, top);
    }
  }
  function resize() {
    editor.refresh();
  }
  function focus() {
    editor.focus();
  }
  function getHistory() {
    return editor.getHistory();
  }
  function setHistory(history) {
    editor.setHistory(history);
  }
  function clearHistory() {
    if (editor)
      editor.clearHistory();
  }
  function setCursor(pos) {
    if (editor)
      editor.setCursor(pos);
  }
  const cursorIndex = writable(0);
  function markText({ from: from3, to }) {
    if (editor)
      editor.markText(editor.posFromIndex(from3), editor.posFromIndex(to), { className: "mark-text" });
  }
  function unmarkText() {
    if (editor)
      editor.getAllMarks().forEach((m) => m.clear());
  }
  const modes = {
    js: { name: "javascript", json: false },
    json: { name: "javascript", json: true },
    svelte: { name: "handlebars", base: "text/html" },
    md: { name: "markdown" },
    svx: { name: "gfm" }
  };
  const refs = {};
  let editor;
  let updating_externally = false;
  let marker;
  let error_line;
  let destroyed = false;
  let CodeMirror;
  let previous_error_line;
  onMount(() => {
    (async () => {
      if (!CodeMirror) {
        let mod2 = await __vitePreload(() => import("./codemirror-c02338e5.js"), true ? ["chunks/codemirror-c02338e5.js","assets/codemirror-95b1b861.css","chunks/index-7afc149e.js","chunks/preload-helper-42b4c6f2.js"] : void 0);
        $$invalidate(4, CodeMirror = mod2.default);
      }
      await createEditor(mode || "svelte");
      if (editor)
        editor.setValue(code2 || "");
    })();
    return () => {
      destroyed = true;
      if (editor)
        editor.toTextArea();
    };
  });
  let first = true;
  async function createEditor(mode2) {
    if (destroyed || !CodeMirror)
      return;
    if (editor)
      editor.toTextArea();
    const opts = {
      lineNumbers,
      lineWrapping: true,
      indentWithTabs: true,
      indentUnit: 2,
      tabSize: 2,
      value: "",
      mode: modes[mode2] || { name: mode2 },
      readOnly: readonly,
      autoCloseBrackets: true,
      autoCloseTags: true,
      extraKeys: CodeMirror.normalizeKeyMap({
        "Enter": "newlineAndIndentContinueMarkdownList",
        "Ctrl-/": "toggleComment",
        "Cmd-/": "toggleComment",
        "Ctrl-Q"(cm) {
          cm.foldCode(cm.getCursor());
        },
        "Cmd-Q"(cm) {
          cm.foldCode(cm.getCursor());
        },
        "Esc Tab": false
      }),
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      theme
    };
    if (!tab) {
      opts.extraKeys["Tab"] = tab;
      opts.extraKeys["Shift-Tab"] = tab;
    }
    if (first)
      await sleep(50);
    if (destroyed)
      return;
    $$invalidate(21, editor = CodeMirror.fromTextArea(refs.editor, opts));
    editor.on("change", (instance2) => {
      if (!updating_externally) {
        const value = instance2.getValue();
        dispatch("change", { value });
      }
    });
    editor.on("cursorActivity", (instance2) => {
      cursorIndex.set(instance2.indexFromPos(instance2.getCursor()));
    });
    if (first)
      await sleep(50);
    editor.refresh();
    first = false;
  }
  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      refs.editor = $$value;
      $$invalidate(3, refs);
    });
  }
  function div_elementresize_handler() {
    w = this.offsetWidth;
    h = this.offsetHeight;
    $$invalidate(0, w);
    $$invalidate(1, h);
  }
  $$self.$$set = ($$props2) => {
    if ("readonly" in $$props2)
      $$invalidate(5, readonly = $$props2.readonly);
    if ("errorLoc" in $$props2)
      $$invalidate(6, errorLoc = $$props2.errorLoc);
    if ("lineNumbers" in $$props2)
      $$invalidate(7, lineNumbers = $$props2.lineNumbers);
    if ("tab" in $$props2)
      $$invalidate(8, tab = $$props2.tab);
    if ("theme" in $$props2)
      $$invalidate(9, theme = $$props2.theme);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 2097155) {
      if (editor && w && h) {
        editor.refresh();
      }
    }
    if ($$self.$$.dirty[0] & 6291520) {
      {
        if (marker)
          marker.clear();
        if (errorLoc) {
          const line = errorLoc.line - 1;
          const ch = errorLoc.column;
          $$invalidate(22, marker = editor.markText({ line, ch }, { line, ch: ch + 1 }, { className: "error-loc" }));
          $$invalidate(23, error_line = line);
        } else {
          $$invalidate(23, error_line = null);
        }
      }
    }
    if ($$self.$$.dirty[0] & 27262976) {
      if (editor) {
        if (previous_error_line != null) {
          editor.removeLineClass(previous_error_line, "wrap", "error-line");
        }
        if (error_line && error_line !== previous_error_line) {
          editor.addLineClass(error_line, "wrap", "error-line");
          $$invalidate(24, previous_error_line = error_line);
        }
      }
    }
  };
  return [
    w,
    h,
    code2,
    refs,
    CodeMirror,
    readonly,
    errorLoc,
    lineNumbers,
    tab,
    theme,
    set,
    update,
    resize,
    focus,
    getHistory,
    setHistory,
    clearHistory,
    setCursor,
    cursorIndex,
    markText,
    unmarkText,
    editor,
    marker,
    error_line,
    previous_error_line,
    textarea_binding,
    div_elementresize_handler
  ];
}
class CodeMirror_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$y, create_fragment$y, safe_not_equal, {
      readonly: 5,
      errorLoc: 6,
      lineNumbers: 7,
      tab: 8,
      theme: 9,
      set: 10,
      update: 11,
      resize: 12,
      focus: 13,
      getHistory: 14,
      setHistory: 15,
      clearHistory: 16,
      setCursor: 17,
      cursorIndex: 18,
      markText: 19,
      unmarkText: 20
    }, null, [-1, -1]);
  }
  get set() {
    return this.$$.ctx[10];
  }
  get update() {
    return this.$$.ctx[11];
  }
  get resize() {
    return this.$$.ctx[12];
  }
  get focus() {
    return this.$$.ctx[13];
  }
  get getHistory() {
    return this.$$.ctx[14];
  }
  get setHistory() {
    return this.$$.ctx[15];
  }
  get clearHistory() {
    return this.$$.ctx[16];
  }
  get setCursor() {
    return this.$$.ctx[17];
  }
  get cursorIndex() {
    return this.$$.ctx[18];
  }
  get markText() {
    return this.$$.ctx[19];
  }
  get unmarkText() {
    return this.$$.ctx[20];
  }
}
var ModuleEditor_svelte_svelte_type_style_lang = "";
function get_each_context$7(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i2];
  return child_ctx;
}
function create_if_block_1$9(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$7(get_each_context$7(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 40) {
        each_value = ctx2[3];
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$7(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block$7(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block$j(ctx) {
  let message;
  let current;
  message = new Message({
    props: {
      kind: "error",
      details: ctx[2],
      filename: ctx[5].name + "." + ctx[5].type
    }
  });
  return {
    c() {
      create_component(message.$$.fragment);
    },
    l(nodes) {
      claim_component(message.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(message, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const message_changes = {};
      if (dirty & 4)
        message_changes.details = ctx2[2];
      if (dirty & 32)
        message_changes.filename = ctx2[5].name + "." + ctx2[5].type;
      message.$set(message_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(message, detaching);
    }
  };
}
function create_each_block$7(ctx) {
  let message;
  let current;
  message = new Message({
    props: {
      kind: "warning",
      details: ctx[14],
      filename: ctx[5].name + "." + ctx[5].type
    }
  });
  return {
    c() {
      create_component(message.$$.fragment);
    },
    l(nodes) {
      claim_component(message.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(message, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const message_changes = {};
      if (dirty & 8)
        message_changes.details = ctx2[14];
      if (dirty & 32)
        message_changes.filename = ctx2[5].name + "." + ctx2[5].type;
      message.$set(message_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(message, detaching);
    }
  };
}
function create_fragment$x(ctx) {
  let div2;
  let div0;
  let codemirror;
  let t;
  let div1;
  let current_block_type_index;
  let if_block;
  let current;
  let codemirror_props = {
    errorLoc: ctx[0],
    theme: ctx[1]
  };
  codemirror = new CodeMirror_1({ props: codemirror_props });
  ctx[12](codemirror);
  codemirror.$on("change", ctx[8]);
  const if_block_creators = [create_if_block$j, create_if_block_1$9];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return 0;
    if (ctx2[3].length > 0)
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      create_component(codemirror.$$.fragment);
      t = space();
      div1 = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true, translate: true });
      var div0_nodes = children(div0);
      claim_component(codemirror.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block)
        if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "editor notranslate svelte-gasvj3");
      attr(div0, "translate", "no");
      attr(div1, "class", "info svelte-gasvj3");
      attr(div2, "class", "editor-wrapper svelte-gasvj3");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      mount_component(codemirror, div0, null);
      append_hydration(div2, t);
      append_hydration(div2, div1);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div1, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      const codemirror_changes = {};
      if (dirty & 1)
        codemirror_changes.errorLoc = ctx2[0];
      if (dirty & 2)
        codemirror_changes.theme = ctx2[1];
      codemirror.$set(codemirror_changes);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div1, null);
        } else {
          if_block = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(codemirror.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(codemirror.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      ctx[12](null);
      destroy_component(codemirror);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
    }
  };
}
function instance$x($$self, $$props, $$invalidate) {
  let $bundle;
  let $selected;
  const { bundle, selected, handle_change, register_module_editor } = getContext("REPL");
  component_subscribe($$self, bundle, (value) => $$invalidate(11, $bundle = value));
  component_subscribe($$self, selected, (value) => $$invalidate(5, $selected = value));
  let { errorLoc } = $$props;
  let { theme } = $$props;
  let editor;
  onMount(() => {
    register_module_editor(editor);
  });
  function focus() {
    editor.focus();
  }
  let error = null;
  let warnings = [];
  let timeout = null;
  function codemirror_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      editor = $$value;
      $$invalidate(4, editor);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("errorLoc" in $$props2)
      $$invalidate(0, errorLoc = $$props2.errorLoc);
    if ("theme" in $$props2)
      $$invalidate(1, theme = $$props2.theme);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 3084) {
      if ($bundle) {
        clearTimeout(timeout);
        if (error)
          $$invalidate(2, error = $bundle.error);
        if (warnings.length > 0)
          $$invalidate(3, warnings = $bundle.warnings);
        $$invalidate(10, timeout = setTimeout(() => {
          $$invalidate(2, error = $bundle.error);
          $$invalidate(3, warnings = $bundle.warnings);
        }, 400));
      }
    }
  };
  return [
    errorLoc,
    theme,
    error,
    warnings,
    editor,
    $selected,
    bundle,
    selected,
    handle_change,
    focus,
    timeout,
    $bundle,
    codemirror_binding
  ];
}
class ModuleEditor extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$x, create_fragment$x, safe_not_equal, { errorLoc: 0, theme: 1, focus: 9 });
  }
  get focus() {
    return this.$$.ctx[9];
  }
}
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
let defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode2) {
  if (encode2) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name2, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name2, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base3, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base3 && !originIndependentUrl.test(href)) {
    href = resolveUrl(base3, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base3, href) {
  if (!baseUrls[" " + base3]) {
    if (justDomain.test(base3)) {
      baseUrls[" " + base3] = base3 + "/";
    } else {
      baseUrls[" " + base3] = rtrim(base3, "/", true);
    }
  }
  base3 = baseUrls[" " + base3];
  const relativeBase = base3.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base3.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base3.replace(domain, "$1") + href;
  } else {
    return base3 + href;
  }
}
const noopTest = { exec: function noopTest2() {
} };
function merge(obj) {
  let i2 = 1, target, key;
  for (; i2 < arguments.length; i2++) {
    target = arguments[i2];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i2 = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i2 < cells.length; i2++) {
    cells[i2] = cells[i2].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i2 = 0;
  for (; i2 < l; i2++) {
    if (str[i2] === "\\") {
      i2++;
    } else if (str[i2] === b[0]) {
      level++;
    } else if (str[i2] === b[1]) {
      level--;
      if (level < 0) {
        return i2;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text2 = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text: text2,
      tokens: lexer.inlineTokens(text2, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text2)
  };
}
function indentCodeCompensation(raw, text2) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text2;
  }
  const indentToCode = matchIndentToCode[1];
  return text2.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }
  space(src2) {
    const cap = this.rules.block.newline.exec(src2);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src2) {
    const cap = this.rules.block.code.exec(src2);
    if (cap) {
      const text2 = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text2, "\n") : text2
      };
    }
  }
  fences(src2) {
    const cap = this.rules.block.fences.exec(src2);
    if (cap) {
      const raw = cap[0];
      const text2 = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: text2
      };
    }
  }
  heading(src2) {
    const cap = this.rules.block.heading.exec(src2);
    if (cap) {
      let text2 = cap[2].trim();
      if (/#$/.test(text2)) {
        const trimmed = rtrim(text2, "#");
        if (this.options.pedantic) {
          text2 = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text2 = trimmed.trim();
        }
      }
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text: text2,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src2) {
    const cap = this.rules.block.hr.exec(src2);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src2) {
    const cap = this.rules.block.blockquote.exec(src2);
    if (cap) {
      const text2 = cap[0].replace(/^ *>[ \t]?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text2, []),
        text: text2
      };
    }
  }
  list(src2) {
    let cap = this.rules.block.list.exec(src2);
    if (cap) {
      let raw, istask, ischecked, indent, i2, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src2) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src2))) {
          break;
        }
        if (this.rules.block.hr.test(src2)) {
          break;
        }
        raw = cap[0];
        src2 = src2.substring(raw.length);
        line = cap[2].split("\n", 1)[0];
        nextLine = src2.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src2 = src2.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          while (src2) {
            rawLine = src2.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (nextBulletRegex.test(line)) {
              break;
            }
            if (hrRegex.test(src2)) {
              break;
            }
            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              itemContents += "\n" + line.slice(indent);
            } else if (!blankLine) {
              itemContents += "\n" + line;
            } else {
              break;
            }
            if (!blankLine && !line.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src2 = src2.substring(rawLine.length + 1);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i2 = 0; i2 < l; i2++) {
        this.lexer.state.top = false;
        list.items[i2].tokens = this.lexer.blockTokens(list.items[i2].text, []);
        const spacers = list.items[i2].tokens.filter((t) => t.type === "space");
        const hasMultipleLineBreaks = spacers.every((t) => {
          const chars2 = t.raw.split("");
          let lineBreaks = 0;
          for (const char of chars2) {
            if (char === "\n") {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }
          return false;
        });
        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          list.loose = true;
          list.items[i2].loose = true;
        }
      }
      return list;
    }
  }
  html(src2) {
    const cap = this.rules.block.html.exec(src2);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = "paragraph";
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src2) {
    const cap = this.rules.block.def.exec(src2);
    if (cap) {
      if (cap[3])
        cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      return {
        type: "def",
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src2) {
    const cap = this.rules.block.table.exec(src2);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i2, j, k, row;
        for (i2 = 0; i2 < l; i2++) {
          if (/^ *-+: *$/.test(item.align[i2])) {
            item.align[i2] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i2])) {
            item.align[i2] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i2])) {
            item.align[i2] = "left";
          } else {
            item.align[i2] = null;
          }
        }
        l = item.rows.length;
        for (i2 = 0; i2 < l; i2++) {
          item.rows[i2] = splitCells(item.rows[i2], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }
        return item;
      }
    }
  }
  lheading(src2) {
    const cap = this.rules.block.lheading.exec(src2);
    if (cap) {
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src2) {
    const cap = this.rules.block.paragraph.exec(src2);
    if (cap) {
      const token = {
        type: "paragraph",
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src2) {
    const cap = this.rules.block.text.exec(src2);
    if (cap) {
      const token = {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src2) {
    const cap = this.rules.inline.escape.exec(src2);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src2) {
    const cap = this.rules.inline.tag.exec(src2);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src2) {
    const cap = this.rules.inline.link.exec(src2);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src2, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src2)) || (cap = this.rules.inline.nolink.exec(src2))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text2 = cap[0].charAt(0);
        return {
          type: "text",
          raw: text2,
          text: text2
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src2, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src2);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src2.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        if (Math.min(lLength, rLength) % 2) {
          const text3 = src2.slice(1, lLength + match.index + rLength);
          return {
            type: "em",
            raw: src2.slice(0, lLength + match.index + rLength + 1),
            text: text3,
            tokens: this.lexer.inlineTokens(text3, [])
          };
        }
        const text2 = src2.slice(2, lLength + match.index + rLength - 1);
        return {
          type: "strong",
          raw: src2.slice(0, lLength + match.index + rLength + 1),
          text: text2,
          tokens: this.lexer.inlineTokens(text2, [])
        };
      }
    }
  }
  codespan(src2) {
    const cap = this.rules.inline.code.exec(src2);
    if (cap) {
      let text2 = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text2);
      const hasSpaceCharsOnBothEnds = /^ /.test(text2) && / $/.test(text2);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text2 = text2.substring(1, text2.length - 1);
      }
      text2 = escape(text2, true);
      return {
        type: "codespan",
        raw: cap[0],
        text: text2
      };
    }
  }
  br(src2) {
    const cap = this.rules.inline.br.exec(src2);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src2) {
    const cap = this.rules.inline.del.exec(src2);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src2, mangle2) {
    const cap = this.rules.inline.autolink.exec(src2);
    if (cap) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text2;
      } else {
        text2 = escape(cap[1]);
        href = text2;
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2
          }
        ]
      };
    }
  }
  url(src2, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src2)) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text2;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text2 = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text2;
        } else {
          href = text2;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2
          }
        ]
      };
    }
  }
  inlineText(src2, smartypants2) {
    const cap = this.rules.inline.text.exec(src2);
    if (cap) {
      let text2;
      if (this.lexer.state.inRawBlock) {
        text2 = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text2 = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text: text2
      };
    }
  }
}
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = merge({}, block.normal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
});
inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function smartypants(text2) {
  return text2.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text2) {
  let out = "", i2, ch;
  const l = text2.length;
  for (i2 = 0; i2 < l; i2++) {
    ch = text2.charCodeAt(i2);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src2, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src2);
  }
  static lexInline(src2, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src2);
  }
  lex(src2) {
    src2 = src2.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src2, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src2, tokens = []) {
    if (this.options.pedantic) {
      src2 = src2.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src2 = src2.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src2) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src2)) {
        src2 = src2.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src2)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src2)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src2;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src2.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src2.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src2.length;
        src2 = src2.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src2)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src2) {
        const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src2, tokens) {
    this.inlineQueue.push({ src: src2, tokens });
  }
  inlineTokens(src2, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src2;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src2) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src2)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src2, this.tokens.links)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src2, maskedSrc, prevChar)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src2, mangle)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src2, mangle))) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src2;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src2.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src2.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src2 = src2.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src2) {
        const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }
  code(code2, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code2, lang);
      if (out != null && out !== code2) {
        escaped = true;
        code2 = out;
      }
    }
    code2 = code2.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code2 : escape(code2, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code2 : escape(code2, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html) {
    return html;
  }
  heading(text2, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text2}</h${level}>
`;
    }
    return `<h${level}>${text2}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text2) {
    return `<li>${text2}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text2) {
    return `<p>${text2}</p>
`;
  }
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  strong(text2) {
    return `<strong>${text2}</strong>`;
  }
  em(text2) {
    return `<em>${text2}</em>`;
  }
  codespan(text2) {
    return `<code>${text2}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text2) {
    return `<del>${text2}</del>`;
  }
  link(href, title, text2) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text2;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text2 + "</a>";
    return out;
  }
  image(href, title, text2) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text2;
    }
    let out = `<img src="${href}" alt="${text2}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text2) {
    return text2;
  }
}
class TextRenderer {
  strong(text2) {
    return text2;
  }
  em(text2) {
    return text2;
  }
  codespan(text2) {
    return text2;
  }
  del(text2) {
    return text2;
  }
  html(text2) {
    return text2;
  }
  text(text2) {
    return text2;
  }
  link(href, title, text2) {
    return "" + text2;
  }
  image(href, title, text2) {
    return "" + text2;
  }
  br() {
    return "";
  }
}
class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i2, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i2 = 0; i2 < l; i2++) {
      token = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), { header: true, align: token.align[j] });
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: token.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i2 + 1 < l && tokens[i2 + 1].type === "text") {
            token = tokens[++i2];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i2, token, ret;
    const l = tokens.length;
    for (i2 = 0; i2 < l; i2++) {
      token = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
function marked(src2, opt, callback) {
  if (typeof src2 === "undefined" || src2 === null) {
    throw new Error("marked(): input parameter is undefined or null");
  }
  if (typeof src2 !== "string") {
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src2) + ", string expected");
  }
  if (typeof opt === "function") {
    callback = opt;
    opt = null;
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  if (callback) {
    const highlight = opt.highlight;
    let tokens;
    try {
      tokens = Lexer.lex(src2, opt);
    } catch (e) {
      return callback(e);
    }
    const done = function(err) {
      let out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length)
      return done();
    let pending2 = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === "code") {
        pending2++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code2) {
            if (err) {
              return done(err);
            }
            if (code2 != null && code2 !== token.text) {
              token.text = code2;
              token.escaped = true;
            }
            pending2--;
            if (pending2 === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending2 === 0) {
      done();
    }
    return;
  }
  try {
    const tokens = Lexer.lex(src2, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
    }
    throw e;
  }
}
marked.options = marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;
  args.forEach((pack) => {
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error("extension name required");
        }
        if (ext.renderer) {
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            extensions.renderers[ext.name] = function(...args2) {
              let ret = ext.renderer.apply(this, args2);
              if (ret === false) {
                ret = prevRenderer.apply(this, args2);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            if (ext.level === "block") {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === "inline") {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args2);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args2);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }
    if (hasExtensions) {
      opts.extensions = extensions;
    }
    marked.setOptions(opts);
  });
};
marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case "table": {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case "list": {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};
marked.parseInline = function(src2, opt) {
  if (typeof src2 === "undefined" || src2 === null) {
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  }
  if (typeof src2 !== "string") {
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src2) + ", string expected");
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  try {
    const tokens = Lexer.lexInline(src2, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
    }
    throw e;
  }
};
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
const parse = marked;
Parser.parse;
Lexer.lex;
var charToInteger = {};
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
for (var i = 0; i < chars.length; i++) {
  charToInteger[chars.charCodeAt(i)] = i;
}
function decode$2(mappings) {
  var decoded = [];
  var line = [];
  var segment = [
    0,
    0,
    0,
    0,
    0
  ];
  var j = 0;
  for (var i2 = 0, shift = 0, value = 0; i2 < mappings.length; i2++) {
    var c = mappings.charCodeAt(i2);
    if (c === 44) {
      segmentify(line, segment, j);
      j = 0;
    } else if (c === 59) {
      segmentify(line, segment, j);
      j = 0;
      decoded.push(line);
      line = [];
      segment[0] = 0;
    } else {
      var integer = charToInteger[c];
      if (integer === void 0) {
        throw new Error("Invalid character (" + String.fromCharCode(c) + ")");
      }
      var hasContinuationBit = integer & 32;
      integer &= 31;
      value += integer << shift;
      if (hasContinuationBit) {
        shift += 5;
      } else {
        var shouldNegate = value & 1;
        value >>>= 1;
        if (shouldNegate) {
          value = value === 0 ? -2147483648 : -value;
        }
        segment[j] += value;
        j++;
        value = shift = 0;
      }
    }
  }
  segmentify(line, segment, j);
  decoded.push(line);
  return decoded;
}
function segmentify(line, segment, j) {
  if (j === 4)
    line.push([segment[0], segment[1], segment[2], segment[3]]);
  else if (j === 5)
    line.push([segment[0], segment[1], segment[2], segment[3], segment[4]]);
  else if (j === 1)
    line.push([segment[0]]);
}
function getLocationFromStack(stack, map) {
  if (!stack)
    return;
  const last = stack.split("\n")[1];
  const match = /<anonymous>:(\d+):(\d+)\)$/.exec(last);
  if (!match)
    return null;
  const line = +match[1];
  const column = +match[2];
  return trace({ line, column }, map);
}
function trace(loc, map) {
  const mappings = decode$2(map.mappings);
  const segments = mappings[loc.line - 1];
  for (let i2 = 0; i2 < segments.length; i2 += 1) {
    const segment = segments[i2];
    if (segment[0] === loc.column) {
      const [, sourceIndex, line, column] = segment;
      const source = map.sources[sourceIndex].slice(2);
      return { source, line: line + 1, column };
    }
  }
  return null;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i2) => tick_spring(ctx, last_value[i2], current_value[i2], target_value[i2]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var PaneWithPanel_svelte_svelte_type_style_lang = "";
const get_main_slot_changes = (dirty) => ({});
const get_main_slot_context = (ctx) => ({});
const get_panel_body_slot_changes = (dirty) => ({});
const get_panel_body_slot_context = (ctx) => ({});
const get_panel_header_slot_changes = (dirty) => ({});
const get_panel_header_slot_context = (ctx) => ({});
function create_a_slot$1(ctx) {
  let section;
  let current;
  const main_slot_template = ctx[6].main;
  const main_slot = create_slot(main_slot_template, ctx, ctx[9], get_main_slot_context);
  return {
    c() {
      section = element("section");
      if (main_slot)
        main_slot.c();
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { slot: true, class: true });
      var section_nodes = children(section);
      if (main_slot)
        main_slot.l(section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section, "slot", "a");
      attr(section, "class", "svelte-425s3a");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      if (main_slot) {
        main_slot.m(section, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (main_slot) {
        if (main_slot.p && (!current || dirty & 512)) {
          update_slot_base(main_slot, main_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(main_slot_template, ctx2[9], dirty, get_main_slot_changes), get_main_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(main_slot, local);
      current = true;
    },
    o(local) {
      transition_out(main_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      if (main_slot)
        main_slot.d(detaching);
    }
  };
}
function create_b_slot$1(ctx) {
  let section;
  let div0;
  let h3;
  let t0;
  let t1;
  let t2;
  let div1;
  let current;
  let mounted;
  let dispose;
  const panel_header_slot_template = ctx[6]["panel-header"];
  const panel_header_slot = create_slot(panel_header_slot_template, ctx, ctx[9], get_panel_header_slot_context);
  const panel_body_slot_template = ctx[6]["panel-body"];
  const panel_body_slot = create_slot(panel_body_slot_template, ctx, ctx[9], get_panel_body_slot_context);
  return {
    c() {
      section = element("section");
      div0 = element("div");
      h3 = element("h3");
      t0 = text(ctx[1]);
      t1 = space();
      if (panel_header_slot)
        panel_header_slot.c();
      t2 = space();
      div1 = element("div");
      if (panel_body_slot)
        panel_body_slot.c();
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { slot: true, class: true });
      var section_nodes = children(section);
      div0 = claim_element(section_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, ctx[1]);
      h3_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      if (panel_header_slot)
        panel_header_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t2 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (panel_body_slot)
        panel_body_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "svelte-425s3a");
      attr(div0, "class", "panel-header svelte-425s3a");
      attr(div1, "class", "panel-body svelte-425s3a");
      attr(section, "slot", "b");
      attr(section, "class", "svelte-425s3a");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      append_hydration(section, div0);
      append_hydration(div0, h3);
      append_hydration(h3, t0);
      append_hydration(div0, t1);
      if (panel_header_slot) {
        panel_header_slot.m(div0, null);
      }
      append_hydration(section, t2);
      append_hydration(section, div1);
      if (panel_body_slot) {
        panel_body_slot.m(div1, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(div0, "click", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & 2)
        set_data(t0, ctx2[1]);
      if (panel_header_slot) {
        if (panel_header_slot.p && (!current || dirty & 512)) {
          update_slot_base(panel_header_slot, panel_header_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(panel_header_slot_template, ctx2[9], dirty, get_panel_header_slot_changes), get_panel_header_slot_context);
        }
      }
      if (panel_body_slot) {
        if (panel_body_slot.p && (!current || dirty & 512)) {
          update_slot_base(panel_body_slot, panel_body_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(panel_body_slot_template, ctx2[9], dirty, get_panel_body_slot_changes), get_panel_body_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(panel_header_slot, local);
      transition_in(panel_body_slot, local);
      current = true;
    },
    o(local) {
      transition_out(panel_header_slot, local);
      transition_out(panel_body_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      if (panel_header_slot)
        panel_header_slot.d(detaching);
      if (panel_body_slot)
        panel_body_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$w(ctx) {
  let splitpane;
  let updating_max;
  let updating_pos;
  let current;
  function splitpane_max_binding(value) {
    ctx[7](value);
  }
  function splitpane_pos_binding(value) {
    ctx[8](value);
  }
  let splitpane_props = {
    type: "vertical",
    $$slots: { b: [create_b_slot$1], a: [create_a_slot$1] },
    $$scope: { ctx }
  };
  if (ctx[2] !== void 0) {
    splitpane_props.max = ctx[2];
  }
  if (ctx[0] !== void 0) {
    splitpane_props.pos = ctx[0];
  }
  splitpane = new SplitPane({ props: splitpane_props });
  binding_callbacks.push(() => bind(splitpane, "max", splitpane_max_binding));
  binding_callbacks.push(() => bind(splitpane, "pos", splitpane_pos_binding));
  return {
    c() {
      create_component(splitpane.$$.fragment);
    },
    l(nodes) {
      claim_component(splitpane.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(splitpane, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const splitpane_changes = {};
      if (dirty & 514) {
        splitpane_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_max && dirty & 4) {
        updating_max = true;
        splitpane_changes.max = ctx2[2];
        add_flush_callback(() => updating_max = false);
      }
      if (!updating_pos && dirty & 1) {
        updating_pos = true;
        splitpane_changes.pos = ctx2[0];
        add_flush_callback(() => updating_pos = false);
      }
      splitpane.$set(splitpane_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(splitpane.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(splitpane.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(splitpane, detaching);
    }
  };
}
function instance$w($$self, $$props, $$invalidate) {
  let $driver;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { panel } = $$props;
  let { pos = 50 } = $$props;
  let previous_pos = Math.min(pos, 70);
  let max;
  const driver = spring(pos);
  component_subscribe($$self, driver, (value) => $$invalidate(5, $driver = value));
  const toggle = () => {
    driver.set(pos, { hard: true });
    if (pos > 80) {
      driver.set(previous_pos);
    } else {
      previous_pos = pos;
      driver.set(max);
    }
  };
  function splitpane_max_binding(value) {
    max = value;
    $$invalidate(2, max);
  }
  function splitpane_pos_binding(value) {
    pos = value;
    $$invalidate(0, pos), $$invalidate(5, $driver);
  }
  $$self.$$set = ($$props2) => {
    if ("panel" in $$props2)
      $$invalidate(1, panel = $$props2.panel);
    if ("pos" in $$props2)
      $$invalidate(0, pos = $$props2.pos);
    if ("$$scope" in $$props2)
      $$invalidate(9, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      $$invalidate(0, pos = $driver);
    }
  };
  return [
    pos,
    panel,
    max,
    driver,
    toggle,
    $driver,
    slots,
    splitpane_max_binding,
    splitpane_pos_binding,
    $$scope
  ];
}
class PaneWithPanel extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$w, create_fragment$w, safe_not_equal, { panel: 1, pos: 0 });
  }
}
let uid$2 = 1;
class ReplProxy {
  constructor(iframe, handlers) {
    this.iframe = iframe;
    this.handlers = handlers;
    this.pending_cmds = /* @__PURE__ */ new Map();
    this.handle_event = (e) => this.handle_repl_message(e);
    window.addEventListener("message", this.handle_event, false);
  }
  destroy() {
    window.removeEventListener("message", this.handle_event);
  }
  iframe_command(action, args) {
    return new Promise((resolve, reject) => {
      const cmd_id = uid$2++;
      this.pending_cmds.set(cmd_id, { resolve, reject });
      this.iframe.contentWindow.postMessage({ action, cmd_id, args }, "*");
    });
  }
  handle_command_message(cmd_data) {
    let action = cmd_data.action;
    let id = cmd_data.cmd_id;
    let handler = this.pending_cmds.get(id);
    if (handler) {
      this.pending_cmds.delete(id);
      if (action === "cmd_error") {
        let { message, stack } = cmd_data;
        let e = new Error(message);
        e.stack = stack;
        handler.reject(e);
      }
      if (action === "cmd_ok") {
        handler.resolve(cmd_data.args);
      }
    } else {
      console.error("command not found", id, cmd_data, [...this.pending_cmds.keys()]);
    }
  }
  handle_repl_message(event) {
    if (event.source !== this.iframe.contentWindow)
      return;
    const { action, args } = event.data;
    switch (action) {
      case "cmd_error":
      case "cmd_ok":
        return this.handle_command_message(event.data);
      case "fetch_progress":
        return this.handlers.on_fetch_progress(args.remaining);
      case "error":
        return this.handlers.on_error(event.data);
      case "unhandledrejection":
        return this.handlers.on_unhandled_rejection(event.data);
      case "console":
        return this.handlers.on_console(event.data);
      case "console_group":
        return this.handlers.on_console_group(event.data);
      case "console_group_collapsed":
        return this.handlers.on_console_group_collapsed(event.data);
      case "console_group_end":
        return this.handlers.on_console_group_end(event.data);
    }
  }
  eval(script) {
    return this.iframe_command("eval", { script });
  }
  handle_links() {
    return this.iframe_command("catch_clicks", {});
  }
}
const STATE = {};
function useState(newState, opts) {
  const currentState = getContext(STATE);
  const _newState = typeof newState === "function" ? newState(currentState) : newState;
  const nextState = __spreadValues(__spreadValues({}, currentState), _newState);
  if (opts == null ? void 0 : opts.expandable)
    nextState.isParentExpanded = nextState.expanded;
  setContext(STATE, nextState);
  return currentState;
}
var JSONArrow_svelte_svelte_type_style_lang = "";
function create_if_block$i(ctx) {
  let span1;
  let span0;
  let t_value = "\u25B6";
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      span1 = element("span");
      span0 = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span1 = claim_element(nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      span0 = claim_element(span1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t = claim_text(span0_nodes, t_value);
      span0_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "arrow svelte-1ixkmlj");
      toggle_class(span0, "expanded", ctx[2]);
      attr(span1, "class", "container svelte-1ixkmlj");
    },
    m(target, anchor) {
      insert_hydration(target, span1, anchor);
      append_hydration(span1, span0);
      append_hydration(span0, t);
      if (!mounted) {
        dispose = listen(span1, "click", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 4) {
        toggle_class(span0, "expanded", ctx2[2]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span1);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$v(ctx) {
  let if_block_anchor;
  let if_block = ctx[1] && create_if_block$i(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$i(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$v($$self, $$props, $$invalidate) {
  let $expandable;
  let $expanded, $$unsubscribe_expanded = noop$1, $$subscribe_expanded = () => ($$unsubscribe_expanded(), $$unsubscribe_expanded = subscribe(expanded, ($$value) => $$invalidate(2, $expanded = $$value)), expanded);
  $$self.$$.on_destroy.push(() => $$unsubscribe_expanded());
  const { expanded: _expanded, expandable } = useState();
  component_subscribe($$self, expandable, (value) => $$invalidate(1, $expandable = value));
  let { expanded = _expanded } = $$props;
  $$subscribe_expanded();
  const click_handler = (event) => {
    event.stopPropagation();
    set_store_value(expanded, $expanded = !$expanded, $expanded);
  };
  $$self.$$set = ($$props2) => {
    if ("expanded" in $$props2)
      $$subscribe_expanded($$invalidate(0, expanded = $$props2.expanded));
  };
  return [expanded, $expandable, $expanded, expandable, click_handler];
}
class JSONArrow extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$v, create_fragment$v, safe_not_equal, { expanded: 0 });
  }
}
function create_fragment$u(ctx) {
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$u($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  useState({ displayMode: "summary" });
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Summary extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$u, create_fragment$u, safe_not_equal, {});
  }
}
function create_fragment$t(ctx) {
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$t($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { expanded } = $$props;
  let { key } = $$props;
  const expandable = writable(false);
  useState(({ keyPath, level }) => {
    if (key !== "[[Entries]]") {
      keyPath = [...keyPath, key];
      level = level + 1;
    }
    return { keyPath, level, expanded, expandable };
  });
  $$self.$$set = ($$props2) => {
    if ("expanded" in $$props2)
      $$invalidate(0, expanded = $$props2.expanded);
    if ("key" in $$props2)
      $$invalidate(1, key = $$props2.key);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [expanded, key, $$scope, slots];
}
class Expandable extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$t, create_fragment$t, safe_not_equal, { expanded: 0, key: 1 });
  }
}
var JSONNested_svelte_svelte_type_style_lang = "";
function get_each_context$6(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i2];
  child_ctx[21] = i2;
  return child_ctx;
}
const get_item_value_slot_changes = (dirty) => ({ key: dirty & 1 });
const get_item_value_slot_context = (ctx) => ({
  key: ctx[19],
  index: ctx[21]
});
const get_item_key_slot_changes = (dirty) => ({ key: dirty & 1 });
const get_item_key_slot_context = (ctx) => ({
  key: ctx[19],
  index: ctx[21]
});
const get_preview_slot_changes = (dirty) => ({});
const get_preview_slot_context = (ctx) => ({});
const get_summary_slot_changes = (dirty) => ({});
const get_summary_slot_context = (ctx) => ({});
function create_else_block$b(ctx) {
  let span;
  let t0;
  let summary;
  let t1;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[6] && create_if_block_3$5(ctx);
  summary = new Summary({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  let if_block1 = ctx[4] && create_if_block_1$8(ctx);
  return {
    c() {
      span = element("span");
      if (if_block0)
        if_block0.c();
      t0 = space();
      create_component(summary.$$.fragment);
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      if (if_block0)
        if_block0.l(span_nodes);
      t0 = claim_space(span_nodes);
      claim_component(summary.$$.fragment, span_nodes);
      span_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(span, "class", "root svelte-12p8n9c");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      if (if_block0)
        if_block0.m(span, null);
      append_hydration(span, t0);
      mount_component(summary, span, null);
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(span, "click", ctx[9]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[6])
        if_block0.p(ctx2, dirty);
      const summary_changes = {};
      if (dirty & 8192) {
        summary_changes.$$scope = { dirty, ctx: ctx2 };
      }
      summary.$set(summary_changes);
      if (ctx2[4]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$8(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(summary.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(summary.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (if_block0)
        if_block0.d();
      destroy_component(summary);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$h(ctx) {
  let current;
  const summary_slot_template = ctx[11].summary;
  const summary_slot = create_slot(summary_slot_template, ctx, ctx[13], get_summary_slot_context);
  return {
    c() {
      if (summary_slot)
        summary_slot.c();
    },
    l(nodes) {
      if (summary_slot)
        summary_slot.l(nodes);
    },
    m(target, anchor) {
      if (summary_slot) {
        summary_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (summary_slot) {
        if (summary_slot.p && (!current || dirty & 8192)) {
          update_slot_base(summary_slot, summary_slot_template, ctx2, ctx2[13], !current ? get_all_dirty_from_scope(ctx2[13]) : get_slot_changes(summary_slot_template, ctx2[13], dirty, get_summary_slot_changes), get_summary_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(summary_slot, local);
      current = true;
    },
    o(local) {
      transition_out(summary_slot, local);
      current = false;
    },
    d(detaching) {
      if (summary_slot)
        summary_slot.d(detaching);
    }
  };
}
function create_if_block_3$5(ctx) {
  let jsonarrow;
  let current;
  jsonarrow = new JSONArrow({ props: { expanded: ctx[7] } });
  return {
    c() {
      create_component(jsonarrow.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonarrow.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonarrow, target, anchor);
      current = true;
    },
    p: noop$1,
    i(local) {
      if (current)
        return;
      transition_in(jsonarrow.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonarrow.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonarrow, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let current;
  const preview_slot_template = ctx[11].preview;
  const preview_slot = create_slot(preview_slot_template, ctx, ctx[13], get_preview_slot_context);
  return {
    c() {
      if (preview_slot)
        preview_slot.c();
    },
    l(nodes) {
      if (preview_slot)
        preview_slot.l(nodes);
    },
    m(target, anchor) {
      if (preview_slot) {
        preview_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (preview_slot) {
        if (preview_slot.p && (!current || dirty & 8192)) {
          update_slot_base(preview_slot, preview_slot_template, ctx2, ctx2[13], !current ? get_all_dirty_from_scope(ctx2[13]) : get_slot_changes(preview_slot_template, ctx2[13], dirty, get_preview_slot_changes), get_preview_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(preview_slot, local);
      current = true;
    },
    o(local) {
      transition_out(preview_slot, local);
      current = false;
    },
    d(detaching) {
      if (preview_slot)
        preview_slot.d(detaching);
    }
  };
}
function create_if_block_1$8(ctx) {
  let ul;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$6(get_each_context$6(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      ul = element("ul");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(ul, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(ul, "click", stop_propagation(ctx[9]));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 8223) {
        each_value = ctx2[0];
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$6(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block$6(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(ul, null);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_2$8(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(":");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ":");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "operator");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot$3(ctx) {
  let span;
  let jsonarrow;
  let show_if = !ctx[1] || ctx[1](ctx[19]);
  let t;
  let current;
  let mounted;
  let dispose;
  jsonarrow = new JSONArrow({});
  const item_key_slot_template = ctx[11].item_key;
  const item_key_slot = create_slot(item_key_slot_template, ctx, ctx[13], get_item_key_slot_context);
  let if_block = show_if && create_if_block_2$8();
  function click_handler() {
    return ctx[12](ctx[21]);
  }
  const item_value_slot_template = ctx[11].item_value;
  const item_value_slot = create_slot(item_value_slot_template, ctx, ctx[13], get_item_value_slot_context);
  return {
    c() {
      span = element("span");
      create_component(jsonarrow.$$.fragment);
      if (item_key_slot)
        item_key_slot.c();
      if (if_block)
        if_block.c();
      t = space();
      if (item_value_slot)
        item_value_slot.c();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      claim_component(jsonarrow.$$.fragment, span_nodes);
      if (item_key_slot)
        item_key_slot.l(span_nodes);
      if (if_block)
        if_block.l(span_nodes);
      t = claim_space(span_nodes);
      span_nodes.forEach(detach);
      if (item_value_slot)
        item_value_slot.l(nodes);
      this.h();
    },
    h() {
      attr(span, "class", "label svelte-12p8n9c");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      mount_component(jsonarrow, span, null);
      if (item_key_slot) {
        item_key_slot.m(span, null);
      }
      if (if_block)
        if_block.m(span, null);
      append_hydration(span, t);
      if (item_value_slot) {
        item_value_slot.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = listen(span, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (item_key_slot) {
        if (item_key_slot.p && (!current || dirty & 8193)) {
          update_slot_base(item_key_slot, item_key_slot_template, ctx, ctx[13], !current ? get_all_dirty_from_scope(ctx[13]) : get_slot_changes(item_key_slot_template, ctx[13], dirty, get_item_key_slot_changes), get_item_key_slot_context);
        }
      }
      if (dirty & 3)
        show_if = !ctx[1] || ctx[1](ctx[19]);
      if (show_if) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_2$8();
          if_block.c();
          if_block.m(span, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (item_value_slot) {
        if (item_value_slot.p && (!current || dirty & 8193)) {
          update_slot_base(item_value_slot, item_value_slot_template, ctx, ctx[13], !current ? get_all_dirty_from_scope(ctx[13]) : get_slot_changes(item_value_slot_template, ctx[13], dirty, get_item_value_slot_changes), get_item_value_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonarrow.$$.fragment, local);
      transition_in(item_key_slot, local);
      transition_in(item_value_slot, local);
      current = true;
    },
    o(local) {
      transition_out(jsonarrow.$$.fragment, local);
      transition_out(item_key_slot, local);
      transition_out(item_value_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      destroy_component(jsonarrow);
      if (item_key_slot)
        item_key_slot.d(detaching);
      if (if_block)
        if_block.d();
      if (item_value_slot)
        item_value_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block$6(ctx) {
  let li;
  let expandable_1;
  let t;
  let current;
  let mounted;
  let dispose;
  expandable_1 = new Expandable({
    props: {
      key: ctx[2](ctx[19]),
      expanded: ctx[3][ctx[21]],
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      li = element("li");
      create_component(expandable_1.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      claim_component(expandable_1.$$.fragment, li_nodes);
      t = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", "svelte-12p8n9c");
      toggle_class(li, "indent", ctx[4]);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      mount_component(expandable_1, li, null);
      append_hydration(li, t);
      current = true;
      if (!mounted) {
        dispose = listen(li, "click", stop_propagation(click_handler_1));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const expandable_1_changes = {};
      if (dirty & 5)
        expandable_1_changes.key = ctx2[2](ctx2[19]);
      if (dirty & 8)
        expandable_1_changes.expanded = ctx2[3][ctx2[21]];
      if (dirty & 8203) {
        expandable_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      expandable_1.$set(expandable_1_changes);
      if (dirty & 16) {
        toggle_class(li, "indent", ctx2[4]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(expandable_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(expandable_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(expandable_1);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$s(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$h, create_else_block$b];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[5] === "summary")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if_block.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
const click_handler_1 = () => {
};
function instance$s($$self, $$props, $$invalidate) {
  let child_expanded;
  let $expanded;
  let $expandable;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { keys } = $$props;
  let { shouldShowColon = void 0 } = $$props;
  let { expandKey = (key) => key } = $$props;
  let { defaultExpanded = false } = $$props;
  const { isParentExpanded, displayMode, root, expanded, expandable, keyPath, level, shouldExpandNode } = useState({ root: false }, { expandable: true });
  component_subscribe($$self, expanded, (value) => $$invalidate(4, $expanded = value));
  component_subscribe($$self, expandable, (value) => $$invalidate(14, $expandable = value));
  set_store_value(expandable, $expandable = true, $expandable);
  if (displayMode !== "summary") {
    if (!defaultExpanded) {
      const controlled = shouldExpandNode({ keyPath, level });
      if (controlled !== void 0) {
        defaultExpanded = controlled;
      }
    }
    onMount(() => {
      return isParentExpanded.subscribe((value) => {
        if (!value)
          expanded.set(false);
        else
          expanded.set(defaultExpanded);
      });
    });
  }
  function toggleExpand() {
    set_store_value(expanded, $expanded = !$expanded, $expanded);
  }
  const click_handler = (index) => child_expanded[index].update((value) => !value);
  $$self.$$set = ($$props2) => {
    if ("keys" in $$props2)
      $$invalidate(0, keys = $$props2.keys);
    if ("shouldShowColon" in $$props2)
      $$invalidate(1, shouldShowColon = $$props2.shouldShowColon);
    if ("expandKey" in $$props2)
      $$invalidate(2, expandKey = $$props2.expandKey);
    if ("defaultExpanded" in $$props2)
      $$invalidate(10, defaultExpanded = $$props2.defaultExpanded);
    if ("$$scope" in $$props2)
      $$invalidate(13, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(3, child_expanded = keys.map(() => writable(false)));
    }
  };
  return [
    keys,
    shouldShowColon,
    expandKey,
    child_expanded,
    $expanded,
    displayMode,
    root,
    expanded,
    expandable,
    toggleExpand,
    defaultExpanded,
    slots,
    click_handler,
    $$scope
  ];
}
class JSONNested extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$s, create_fragment$s, safe_not_equal, {
      keys: 0,
      shouldShowColon: 1,
      expandKey: 2,
      defaultExpanded: 10
    });
  }
}
var PreviewList_svelte_svelte_type_style_lang = "";
function get_each_context$5(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i2];
  child_ctx[9] = i2;
  return child_ctx;
}
const get_item_slot_changes = (dirty) => ({ item: dirty & 1 });
const get_item_slot_context = (ctx) => ({
  item: ctx[7],
  index: ctx[9]
});
function create_if_block_3$4(ctx) {
  let span;
  let t;
  let if_block = ctx[2] && create_if_block_4$1(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      span = element("span");
      t = text(ctx[3]);
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[3]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "operator");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_4$1(ctx2);
          if_block.c();
          if_block.m(span.parentNode, span);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 8)
        set_data(t, ctx2[3]);
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_4$1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[2]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[2]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2$7(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(",");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ",");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "comma operator svelte-1mvdjda");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_each_block$5(ctx) {
  let t;
  let if_block_anchor;
  let current;
  const item_slot_template = ctx[6].item;
  const item_slot = create_slot(item_slot_template, ctx, ctx[5], get_item_slot_context);
  let if_block = ctx[9] < ctx[0].length - 1 && create_if_block_2$7();
  return {
    c() {
      if (item_slot)
        item_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (item_slot)
        item_slot.l(nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (item_slot) {
        item_slot.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (item_slot) {
        if (item_slot.p && (!current || dirty & 33)) {
          update_slot_base(item_slot, item_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(item_slot_template, ctx2[5], dirty, get_item_slot_changes), get_item_slot_context);
        }
      }
      if (ctx2[9] < ctx2[0].length - 1) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_2$7();
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(item_slot, local);
      current = true;
    },
    o(local) {
      transition_out(item_slot, local);
      current = false;
    },
    d(detaching) {
      if (item_slot)
        item_slot.d(detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1$7(ctx) {
  let span0;
  let t0;
  let t1;
  let span1;
  let t2;
  return {
    c() {
      span0 = element("span");
      t0 = text(",");
      t1 = space();
      span1 = element("span");
      t2 = text("\u2026");
      this.h();
    },
    l(nodes) {
      span0 = claim_element(nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, ",");
      span0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      span1 = claim_element(nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, "\u2026");
      span1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "comma operator svelte-1mvdjda");
      attr(span1, "class", "operator");
    },
    m(target, anchor) {
      insert_hydration(target, span0, anchor);
      append_hydration(span0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, span1, anchor);
      append_hydration(span1, t2);
    },
    d(detaching) {
      if (detaching)
        detach(span0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(span1);
    }
  };
}
function create_if_block$g(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[4]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[4]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "operator");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 16)
        set_data(t, ctx2[4]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$r(ctx) {
  let t0;
  let t1;
  let t2;
  let if_block2_anchor;
  let current;
  let if_block0 = ctx[3] && create_if_block_3$4(ctx);
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$5(get_each_context$5(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  let if_block1 = ctx[1] && create_if_block_1$7();
  let if_block2 = ctx[4] && create_if_block$g(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(nodes);
      }
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t2 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(target, anchor);
      }
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, t2, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, if_block2_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_3$4(ctx2);
          if_block0.c();
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty & 33) {
        each_value = ctx2[0];
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$5(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block$5(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(t1.parentNode, t1);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
      if (ctx2[1]) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block_1$7();
          if_block1.c();
          if_block1.m(t2.parentNode, t2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx2[4]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block$g(ctx2);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t2);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
    }
  };
}
function instance$r($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { list } = $$props;
  let { hasMore } = $$props;
  let { label = void 0 } = $$props;
  let { prefix = void 0 } = $$props;
  let { postfix = void 0 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("list" in $$props2)
      $$invalidate(0, list = $$props2.list);
    if ("hasMore" in $$props2)
      $$invalidate(1, hasMore = $$props2.hasMore);
    if ("label" in $$props2)
      $$invalidate(2, label = $$props2.label);
    if ("prefix" in $$props2)
      $$invalidate(3, prefix = $$props2.prefix);
    if ("postfix" in $$props2)
      $$invalidate(4, postfix = $$props2.postfix);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [list, hasMore, label, prefix, postfix, $$scope, slots];
}
class PreviewList extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$r, create_fragment$r, safe_not_equal, {
      list: 0,
      hasMore: 1,
      label: 2,
      prefix: 3,
      postfix: 4
    });
  }
}
function create_summary_slot$8(ctx) {
  let span;
  let t_value = "{\u2026}";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_slot$5(ctx) {
  let span0;
  let t0_value = ctx[4] + "";
  let t0;
  let span1;
  let t1_value = ": ";
  let t1;
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][ctx[4]] }
  });
  return {
    c() {
      span0 = element("span");
      t0 = text(t0_value);
      span1 = element("span");
      t1 = text(t1_value);
      create_component(jsonnode.$$.fragment);
      this.h();
    },
    l(nodes) {
      span0 = claim_element(nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach);
      span1 = claim_element(nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t1 = claim_text(span1_nodes, t1_value);
      span1_nodes.forEach(detach);
      claim_component(jsonnode.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(span0, "class", "property");
      attr(span1, "class", "operator");
    },
    m(target, anchor) {
      insert_hydration(target, span0, anchor);
      append_hydration(span0, t0);
      insert_hydration(target, span1, anchor);
      append_hydration(span1, t1);
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 16) && t0_value !== (t0_value = ctx2[4] + ""))
        set_data(t0, t0_value);
      const jsonnode_changes = {};
      if (dirty & 17)
        jsonnode_changes.value = ctx2[0][ctx2[4]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span0);
      if (detaching)
        detach(span1);
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_preview_slot$8(ctx) {
  let previewlist;
  let current;
  previewlist = new PreviewList({
    props: {
      list: ctx[2],
      hasMore: ctx[2].length < ctx[1].length,
      prefix: "{",
      postfix: "}",
      $$slots: {
        item: [
          create_item_slot$5,
          ({ item }) => ({ 4: item }),
          ({ item }) => item ? 16 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(previewlist.$$.fragment);
    },
    l(nodes) {
      claim_component(previewlist.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(previewlist, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const previewlist_changes = {};
      if (dirty & 4)
        previewlist_changes.list = ctx2[2];
      if (dirty & 6)
        previewlist_changes.hasMore = ctx2[2].length < ctx2[1].length;
      if (dirty & 49) {
        previewlist_changes.$$scope = { dirty, ctx: ctx2 };
      }
      previewlist.$set(previewlist_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(previewlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(previewlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(previewlist, detaching);
    }
  };
}
function create_item_key_slot$8(ctx) {
  let span;
  let t_value = ctx[3] + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = ctx2[3] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_value_slot$8(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][ctx[3]] }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 9)
        jsonnode_changes.value = ctx2[0][ctx2[3]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_fragment$q(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ctx[1],
      $$slots: {
        item_value: [
          create_item_value_slot$8,
          ({ key }) => ({ 3: key }),
          ({ key }) => key ? 8 : 0
        ],
        item_key: [
          create_item_key_slot$8,
          ({ key }) => ({ 3: key }),
          ({ key }) => key ? 8 : 0
        ],
        preview: [create_preview_slot$8],
        summary: [create_summary_slot$8]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 2)
        jsonnested_changes.keys = ctx2[1];
      if (dirty & 47) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
function instance$q($$self, $$props, $$invalidate) {
  let keys;
  let previewKeys;
  let { value } = $$props;
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, keys = Object.getOwnPropertyNames(value));
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(2, previewKeys = keys.slice(0, 5));
    }
  };
  return [value, keys, previewKeys];
}
class JSONObjectNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$q, create_fragment$q, safe_not_equal, { value: 0 });
  }
}
function create_summary_slot$7(ctx) {
  let span;
  let t0;
  let t1_value = ctx[0].length + "";
  let t1;
  let t2;
  return {
    c() {
      span = element("span");
      t0 = text("Array(");
      t1 = text(t1_value);
      t2 = text(")");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Array(");
      t1 = claim_text(span_nodes, t1_value);
      t2 = claim_text(span_nodes, ")");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = ctx2[0].length + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_slot$4(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({ props: { value: ctx[4] } });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 16)
        jsonnode_changes.value = ctx2[4];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_preview_slot$7(ctx) {
  let previewlist;
  let current;
  previewlist = new PreviewList({
    props: {
      list: ctx[1],
      hasMore: ctx[1].length < ctx[0].length,
      label: "(" + ctx[0].length + ") ",
      prefix: "[",
      postfix: "]",
      $$slots: {
        item: [
          create_item_slot$4,
          ({ item }) => ({ 4: item }),
          ({ item }) => item ? 16 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(previewlist.$$.fragment);
    },
    l(nodes) {
      claim_component(previewlist.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(previewlist, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const previewlist_changes = {};
      if (dirty & 2)
        previewlist_changes.list = ctx2[1];
      if (dirty & 3)
        previewlist_changes.hasMore = ctx2[1].length < ctx2[0].length;
      if (dirty & 1)
        previewlist_changes.label = "(" + ctx2[0].length + ") ";
      if (dirty & 48) {
        previewlist_changes.$$scope = { dirty, ctx: ctx2 };
      }
      previewlist.$set(previewlist_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(previewlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(previewlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(previewlist, detaching);
    }
  };
}
function create_item_key_slot$7(ctx) {
  let span;
  let t_value = String(ctx[3]) + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = String(ctx2[3]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_value_slot$7(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][ctx[3]] }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 9)
        jsonnode_changes.value = ctx2[0][ctx2[3]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_fragment$p(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ctx[2],
      $$slots: {
        item_value: [
          create_item_value_slot$7,
          ({ key }) => ({ 3: key }),
          ({ key }) => key ? 8 : 0
        ],
        item_key: [
          create_item_key_slot$7,
          ({ key }) => ({ 3: key }),
          ({ key }) => key ? 8 : 0
        ],
        preview: [create_preview_slot$7],
        summary: [create_summary_slot$7]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 4)
        jsonnested_changes.keys = ctx2[2];
      if (dirty & 43) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
function instance$p($$self, $$props, $$invalidate) {
  let keys;
  let preview;
  let { value } = $$props;
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(2, keys = Object.getOwnPropertyNames(value));
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, preview = value.slice(0, 5));
    }
  };
  return [value, preview, keys];
}
class JSONArrayNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$p, create_fragment$p, safe_not_equal, { value: 0 });
  }
}
function create_summary_slot$6(ctx) {
  let span;
  let t0;
  let t1;
  let t2_value = ctx[3].length + "";
  let t2;
  let t3;
  return {
    c() {
      span = element("span");
      t0 = text(ctx[1]);
      t1 = text("(");
      t2 = text(t2_value);
      t3 = text(")");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, ctx[1]);
      t1 = claim_text(span_nodes, "(");
      t2 = claim_text(span_nodes, t2_value);
      t3 = claim_text(span_nodes, ")");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
      append_hydration(span, t3);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t0, ctx2[1]);
      if (dirty & 8 && t2_value !== (t2_value = ctx2[3].length + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_slot$3(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({ props: { value: ctx[8] } });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 256)
        jsonnode_changes.value = ctx2[8];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_preview_slot$6(ctx) {
  let previewlist;
  let current;
  previewlist = new PreviewList({
    props: {
      list: ctx[4],
      hasMore: ctx[4].length < ctx[2].length,
      label: `${ctx[1]}(${ctx[3].length}) `,
      prefix: "{",
      postfix: "}",
      $$slots: {
        item: [
          create_item_slot$3,
          ({ item }) => ({ 8: item }),
          ({ item }) => item ? 256 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(previewlist.$$.fragment);
    },
    l(nodes) {
      claim_component(previewlist.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(previewlist, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const previewlist_changes = {};
      if (dirty & 16)
        previewlist_changes.list = ctx2[4];
      if (dirty & 20)
        previewlist_changes.hasMore = ctx2[4].length < ctx2[2].length;
      if (dirty & 10)
        previewlist_changes.label = `${ctx2[1]}(${ctx2[3].length}) `;
      if (dirty & 768) {
        previewlist_changes.$$scope = { dirty, ctx: ctx2 };
      }
      previewlist.$set(previewlist_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(previewlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(previewlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(previewlist, detaching);
    }
  };
}
function create_item_key_slot_1$1(ctx) {
  let span;
  let t_value = ctx[6] + "";
  let t;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = ctx[6] === ENTRIES$1 ? "internal" : "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 64 && t_value !== (t_value = ctx2[6] + ""))
        set_data(t, t_value);
      if (dirty & 64 && span_class_value !== (span_class_value = ctx2[6] === ENTRIES$1 ? "internal" : "property")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_else_block$a(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][ctx[6]] }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 65)
        jsonnode_changes.value = ctx2[0][ctx2[6]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_if_block$f(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ctx[3],
      defaultExpanded: true,
      $$slots: {
        item_value: [
          create_item_value_slot_1$1,
          ({ key: index }) => ({ 7: index }),
          ({ key: index }) => index ? 128 : 0
        ],
        item_key: [
          create_item_key_slot$6,
          ({ key: index }) => ({ 7: index }),
          ({ key: index }) => index ? 128 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnested_changes = {};
      if (dirty & 8)
        jsonnested_changes.keys = ctx2[3];
      if (dirty & 644) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
function create_item_key_slot$6(ctx) {
  let span;
  let t_value = ctx[7] + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 128 && t_value !== (t_value = ctx2[7] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_value_slot_1$1(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: {
      value: ctx[2][ctx[7]]
    }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 132)
        jsonnode_changes.value = ctx2[2][ctx2[7]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_item_value_slot$6(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$f, create_else_block$a];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[6] === ENTRIES$1)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$o(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: [ENTRIES$1, "size"],
      shouldShowColon: ctx[5],
      $$slots: {
        item_value: [
          create_item_value_slot$6,
          ({ key }) => ({ 6: key }),
          ({ key }) => key ? 64 : 0
        ],
        item_key: [
          create_item_key_slot_1$1,
          ({ key }) => ({ 6: key }),
          ({ key }) => key ? 64 : 0
        ],
        preview: [create_preview_slot$6],
        summary: [create_summary_slot$6]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 607) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
const ENTRIES$1 = "[[Entries]]";
function instance$o($$self, $$props, $$invalidate) {
  let previewItems;
  let { value } = $$props;
  let { nodeType } = $$props;
  let indexes = [];
  let items = [];
  const func = (key) => key !== ENTRIES$1;
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("nodeType" in $$props2)
      $$invalidate(1, nodeType = $$props2.nodeType);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      {
        let _indexes = [];
        let _items = [];
        let i2 = 0;
        for (const entry of value) {
          _indexes.push(i2++);
          _items.push(entry);
        }
        $$invalidate(3, indexes = _indexes);
        $$invalidate(2, items = _items);
      }
    }
    if ($$self.$$.dirty & 4) {
      $$invalidate(4, previewItems = items.slice(0, 5));
    }
  };
  return [value, nodeType, items, indexes, previewItems, func];
}
class JSONIterableArrayNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$o, create_fragment$o, safe_not_equal, { value: 0, nodeType: 1 });
  }
}
function create_summary_slot$5(ctx) {
  let span;
  let t0;
  let t1_value = ctx[2].length + "";
  let t1;
  let t2;
  return {
    c() {
      span = element("span");
      t0 = text("Map(");
      t1 = text(t1_value);
      t2 = text(")");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { color: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Map(");
      t1 = claim_text(span_nodes, t1_value);
      t2 = claim_text(span_nodes, ")");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "color", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t1_value !== (t1_value = ctx2[2].length + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_slot$2(ctx) {
  let jsonnode0;
  let span;
  let t_value = " => ";
  let t;
  let jsonnode1;
  let current;
  jsonnode0 = new JSONNode({ props: { value: ctx[10] } });
  jsonnode1 = new JSONNode({
    props: {
      value: ctx[0].get(ctx[10])
    }
  });
  return {
    c() {
      create_component(jsonnode0.$$.fragment);
      span = element("span");
      t = text(t_value);
      create_component(jsonnode1.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(jsonnode0.$$.fragment, nodes);
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      claim_component(jsonnode1.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(span, "class", "operator");
    },
    m(target, anchor) {
      mount_component(jsonnode0, target, anchor);
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
      mount_component(jsonnode1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode0_changes = {};
      if (dirty & 1024)
        jsonnode0_changes.value = ctx2[10];
      jsonnode0.$set(jsonnode0_changes);
      const jsonnode1_changes = {};
      if (dirty & 1025)
        jsonnode1_changes.value = ctx2[0].get(ctx2[10]);
      jsonnode1.$set(jsonnode1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode0.$$.fragment, local);
      transition_in(jsonnode1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode0.$$.fragment, local);
      transition_out(jsonnode1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode0, detaching);
      if (detaching)
        detach(span);
      destroy_component(jsonnode1, detaching);
    }
  };
}
function create_preview_slot_1(ctx) {
  let previewlist;
  let current;
  previewlist = new PreviewList({
    props: {
      list: ctx[4],
      hasMore: ctx[4].length < ctx[0].size,
      label: `Map(${ctx[2].length}) `,
      prefix: `{`,
      postfix: "}",
      $$slots: {
        item: [
          create_item_slot$2,
          ({ item }) => ({ 10: item }),
          ({ item }) => item ? 1024 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(previewlist.$$.fragment);
    },
    l(nodes) {
      claim_component(previewlist.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(previewlist, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const previewlist_changes = {};
      if (dirty & 16)
        previewlist_changes.list = ctx2[4];
      if (dirty & 17)
        previewlist_changes.hasMore = ctx2[4].length < ctx2[0].size;
      if (dirty & 4)
        previewlist_changes.label = `Map(${ctx2[2].length}) `;
      if (dirty & 3073) {
        previewlist_changes.$$scope = { dirty, ctx: ctx2 };
      }
      previewlist.$set(previewlist_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(previewlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(previewlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(previewlist, detaching);
    }
  };
}
function create_item_key_slot_2(ctx) {
  let span;
  let t_value = ctx[7] + "";
  let t;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = ctx[7] === ENTRIES ? "internal" : "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 128 && t_value !== (t_value = ctx2[7] + ""))
        set_data(t, t_value);
      if (dirty & 128 && span_class_value !== (span_class_value = ctx2[7] === ENTRIES ? "internal" : "property")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_else_block$9(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][ctx[7]] }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 129)
        jsonnode_changes.value = ctx2[0][ctx2[7]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_if_block$e(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ctx[1],
      expandKey: ctx[5],
      defaultExpanded: true,
      $$slots: {
        item_value: [
          create_item_value_slot_1,
          ({ key: index }) => ({ 8: index }),
          ({ key: index }) => index ? 256 : 0
        ],
        item_key: [
          create_item_key_slot_1,
          ({ key: index }) => ({ 8: index }),
          ({ key: index }) => index ? 256 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnested_changes = {};
      if (dirty & 2)
        jsonnested_changes.keys = ctx2[1];
      if (dirty & 4)
        jsonnested_changes.expandKey = ctx2[5];
      if (dirty & 2316) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
function create_item_key_slot_1(ctx) {
  let span;
  let t_value = ctx[8] + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 256 && t_value !== (t_value = ctx2[8] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_preview_slot$5(ctx) {
  let span0;
  let t0_value = "{ ";
  let t0;
  let jsonnode0;
  let span1;
  let t1_value = " => ";
  let t1;
  let jsonnode1;
  let span2;
  let t2_value = " }";
  let t2;
  let current;
  jsonnode0 = new JSONNode({
    props: { value: ctx[2][ctx[8]] }
  });
  jsonnode1 = new JSONNode({
    props: {
      value: ctx[3][ctx[8]]
    }
  });
  return {
    c() {
      span0 = element("span");
      t0 = text(t0_value);
      create_component(jsonnode0.$$.fragment);
      span1 = element("span");
      t1 = text(t1_value);
      create_component(jsonnode1.$$.fragment);
      span2 = element("span");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      span0 = claim_element(nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach);
      claim_component(jsonnode0.$$.fragment, nodes);
      span1 = claim_element(nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t1 = claim_text(span1_nodes, t1_value);
      span1_nodes.forEach(detach);
      claim_component(jsonnode1.$$.fragment, nodes);
      span2 = claim_element(nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t2 = claim_text(span2_nodes, t2_value);
      span2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "operator");
      attr(span1, "class", "operator");
      attr(span2, "class", "operator");
    },
    m(target, anchor) {
      insert_hydration(target, span0, anchor);
      append_hydration(span0, t0);
      mount_component(jsonnode0, target, anchor);
      insert_hydration(target, span1, anchor);
      append_hydration(span1, t1);
      mount_component(jsonnode1, target, anchor);
      insert_hydration(target, span2, anchor);
      append_hydration(span2, t2);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode0_changes = {};
      if (dirty & 260)
        jsonnode0_changes.value = ctx2[2][ctx2[8]];
      jsonnode0.$set(jsonnode0_changes);
      const jsonnode1_changes = {};
      if (dirty & 264)
        jsonnode1_changes.value = ctx2[3][ctx2[8]];
      jsonnode1.$set(jsonnode1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode0.$$.fragment, local);
      transition_in(jsonnode1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode0.$$.fragment, local);
      transition_out(jsonnode1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span0);
      destroy_component(jsonnode0, detaching);
      if (detaching)
        detach(span1);
      destroy_component(jsonnode1, detaching);
      if (detaching)
        detach(span2);
    }
  };
}
function create_item_key_slot$5(ctx) {
  let span;
  let t_value = ctx[9] + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 512 && t_value !== (t_value = ctx2[9] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_value_slot_2(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: {
      value: ctx[9] === "key" ? ctx[2][ctx[8]] : ctx[3][ctx[8]]
    }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 780)
        jsonnode_changes.value = ctx2[9] === "key" ? ctx2[2][ctx2[8]] : ctx2[3][ctx2[8]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_item_value_slot_1(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ["key", "value"],
      $$slots: {
        item_value: [
          create_item_value_slot_2,
          ({ key: name2 }) => ({ 9: name2 }),
          ({ key: name2 }) => name2 ? 512 : 0
        ],
        item_key: [
          create_item_key_slot$5,
          ({ key: name2 }) => ({ 9: name2 }),
          ({ key: name2 }) => name2 ? 512 : 0
        ],
        preview: [create_preview_slot$5]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnested_changes = {};
      if (dirty & 2828) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
function create_item_value_slot$5(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$e, create_else_block$9];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[7] === ENTRIES)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$n(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: [ENTRIES, "size"],
      shouldShowColon: ctx[6],
      $$slots: {
        item_value: [
          create_item_value_slot$5,
          ({ key }) => ({ 7: key }),
          ({ key }) => key ? 128 : 0
        ],
        item_key: [
          create_item_key_slot_2,
          ({ key }) => ({ 7: key }),
          ({ key }) => key ? 128 : 0
        ],
        preview: [create_preview_slot_1],
        summary: [create_summary_slot$5]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 2207) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
const ENTRIES = "[[Entries]]";
function instance$n($$self, $$props, $$invalidate) {
  let previewKeys;
  let { value } = $$props;
  useState();
  let indexes = [];
  let keys = [];
  let values = [];
  const func = (index) => keys[index];
  const func_1 = (key) => key !== ENTRIES;
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      {
        let _indexes = [];
        let _keys = [];
        let _values = [];
        let i2 = 0;
        for (const entry of value) {
          _indexes.push(i2++);
          _keys.push(entry[0]);
          _values.push(entry[1]);
        }
        $$invalidate(1, indexes = _indexes);
        $$invalidate(2, keys = _keys);
        $$invalidate(3, values = _values);
      }
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(4, previewKeys = Array.from(value.keys()).slice(0, 5));
    }
  };
  return [value, indexes, keys, values, previewKeys, func, func_1];
}
class JSONIterableMapNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$n, create_fragment$n, safe_not_equal, { value: 0 });
  }
}
var JSONValueNode_svelte_svelte_type_style_lang = "";
function create_fragment$m(ctx) {
  let span;
  let t;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t = text(ctx[0]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[0]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = null_to_empty(ctx[1]) + " svelte-qj9jjj");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
      if (dirty & 2 && span_class_value !== (span_class_value = null_to_empty(ctx2[1]) + " svelte-qj9jjj")) {
        attr(span, "class", span_class_value);
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function instance$m($$self, $$props, $$invalidate) {
  let { value, nodeType } = $$props;
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("nodeType" in $$props2)
      $$invalidate(1, nodeType = $$props2.nodeType);
  };
  return [value, nodeType];
}
class JSONValueNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$m, create_fragment$m, safe_not_equal, { value: 0, nodeType: 1 });
  }
}
var ErrorStack_svelte_svelte_type_style_lang = "";
function get_each_context$4(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i2];
  child_ctx[9] = i2;
  const constants_0 = child_ctx[9] < child_ctx[0].length - 1;
  child_ctx[7] = constants_0;
  return child_ctx;
}
function create_else_block$8(ctx) {
  let span;
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][0] + "\u2026" }
  });
  return {
    c() {
      span = element("span");
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      claim_component(jsonnode.$$.fragment, span_nodes);
      span_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      mount_component(jsonnode, span, null);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 1)
        jsonnode_changes.value = ctx2[0][0] + "\u2026";
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      destroy_component(jsonnode);
    }
  };
}
function create_if_block$d(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$4(get_each_context$4(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0];
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$4(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block$4(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block$4(ctx) {
  let span1;
  let jsonnode;
  let span0;
  let t_value = ctx[7] ? " +" : "";
  let t;
  let br;
  let current;
  jsonnode = new JSONNode({
    props: {
      value: ctx[6] + (ctx[7] ? "\\n" : "")
    }
  });
  return {
    c() {
      span1 = element("span");
      create_component(jsonnode.$$.fragment);
      span0 = element("span");
      t = text(t_value);
      br = element("br");
      this.h();
    },
    l(nodes) {
      span1 = claim_element(nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      claim_component(jsonnode.$$.fragment, span1_nodes);
      span0 = claim_element(span1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t = claim_text(span0_nodes, t_value);
      span0_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      br = claim_element(nodes, "BR", {});
      this.h();
    },
    h() {
      attr(span0, "class", "operator");
      attr(span1, "class", "svelte-ikwvbe");
      toggle_class(span1, "indent", ctx[9] > 0);
    },
    m(target, anchor) {
      insert_hydration(target, span1, anchor);
      mount_component(jsonnode, span1, null);
      append_hydration(span1, span0);
      append_hydration(span0, t);
      insert_hydration(target, br, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 1)
        jsonnode_changes.value = ctx2[6] + (ctx2[7] ? "\\n" : "");
      jsonnode.$set(jsonnode_changes);
      if ((!current || dirty & 1) && t_value !== (t_value = ctx2[7] ? " +" : ""))
        set_data(t, t_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span1);
      destroy_component(jsonnode);
      if (detaching)
        detach(br);
    }
  };
}
function create_fragment$l(ctx) {
  let span;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$d, create_else_block$8];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      span = element("span");
      if_block.c();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      if_block.l(span_nodes);
      span_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      if_blocks[current_block_type_index].m(span, null);
      current = true;
      if (!mounted) {
        dispose = listen(span, "click", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(span, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if_blocks[current_block_type_index].d();
      mounted = false;
      dispose();
    }
  };
}
function instance$l($$self, $$props, $$invalidate) {
  let $expandable;
  let $expanded;
  let { stack } = $$props;
  const { expanded, expandable } = useState();
  component_subscribe($$self, expanded, (value) => $$invalidate(1, $expanded = value));
  component_subscribe($$self, expandable, (value) => $$invalidate(5, $expandable = value));
  set_store_value(expandable, $expandable = true, $expandable);
  const click_handler = () => set_store_value(expanded, $expanded = !$expanded, $expanded);
  $$self.$$set = ($$props2) => {
    if ("stack" in $$props2)
      $$invalidate(0, stack = $$props2.stack);
  };
  return [stack, $expanded, expanded, expandable, click_handler];
}
class ErrorStack extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$l, create_fragment$l, safe_not_equal, { stack: 0 });
  }
}
function create_summary_slot$4(ctx) {
  let span;
  let t0;
  let t1_value = String(ctx[0].message) + "";
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text("Error: ");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Error: ");
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = String(ctx2[0].message) + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_preview_slot$4(ctx) {
  let span;
  let t0;
  let t1_value = String(ctx[0].message) + "";
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text("Error: ");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Error: ");
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = String(ctx2[0].message) + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_key_slot$4(ctx) {
  let span;
  let t_value = ctx[2] + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[2] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_else_block$7(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][ctx[2]] }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 5)
        jsonnode_changes.value = ctx2[0][ctx2[2]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_if_block$c(ctx) {
  let errorstack;
  let current;
  errorstack = new ErrorStack({ props: { stack: ctx[1] } });
  return {
    c() {
      create_component(errorstack.$$.fragment);
    },
    l(nodes) {
      claim_component(errorstack.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(errorstack, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const errorstack_changes = {};
      if (dirty & 2)
        errorstack_changes.stack = ctx2[1];
      errorstack.$set(errorstack_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(errorstack.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(errorstack.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(errorstack, detaching);
    }
  };
}
function create_item_value_slot$4(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$c, create_else_block$7];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[2] === "stack")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$k(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ["message", "stack"],
      $$slots: {
        item_value: [
          create_item_value_slot$4,
          ({ key }) => ({ 2: key }),
          ({ key }) => key ? 4 : 0
        ],
        item_key: [
          create_item_key_slot$4,
          ({ key }) => ({ 2: key }),
          ({ key }) => key ? 4 : 0
        ],
        preview: [create_preview_slot$4],
        summary: [create_summary_slot$4]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 15) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
function instance$k($$self, $$props, $$invalidate) {
  let stack;
  let { value } = $$props;
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, stack = value.stack.split("\n"));
    }
  };
  return [value, stack];
}
class ErrorNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$k, create_fragment$k, safe_not_equal, { value: 0 });
  }
}
function objType(obj) {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === "Object") {
    if (typeof obj[Symbol.iterator] === "function") {
      return "Iterable";
    }
    return obj.constructor.name;
  }
  return type;
}
var JSONStringNode_svelte_svelte_type_style_lang = "";
function create_else_block$6(ctx) {
  let span;
  let t0;
  let t1;
  let t2;
  return {
    c() {
      span = element("span");
      t0 = text('"');
      t1 = text(ctx[0]);
      t2 = text('"');
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, '"');
      t1 = claim_text(span_nodes, ctx[0]);
      t2 = claim_text(span_nodes, '"');
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "svelte-12cz4sc");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t1, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block$b(ctx) {
  let span;
  let t0;
  let t1_value = ctx[0].slice(0, 30) + (ctx[0].length > 30 ? "\u2026" : "");
  let t1;
  let t2;
  return {
    c() {
      span = element("span");
      t0 = text('"');
      t1 = text(t1_value);
      t2 = text('"');
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, '"');
      t1 = claim_text(span_nodes, t1_value);
      t2 = claim_text(span_nodes, '"');
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "svelte-12cz4sc");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = ctx2[0].slice(0, 30) + (ctx2[0].length > 30 ? "\u2026" : "")))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$j(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1] === "summary")
      return create_if_block$b;
    return create_else_block$6;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if_block.p(ctx2, dirty);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$j($$self, $$props, $$invalidate) {
  let serialised;
  let { value } = $$props;
  const map = { "\n": "\\n", "	": "\\t", "\r": "\\r" };
  const { displayMode } = useState();
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4) {
      $$invalidate(0, serialised = value.replace(/[\n\t\r]/g, (_) => map[_]));
    }
  };
  return [serialised, displayMode, value];
}
class JSONStringNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$j, safe_not_equal, { value: 2 });
  }
}
var JSONFunctionNode_svelte_svelte_type_style_lang = "";
function create_summary_slot$3(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("\u0192");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "\u0192");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "i svelte-9b7t4d");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_3$3(ctx) {
  let span;
  let t_value = getPreview1(ctx[2]) + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "fn i svelte-9b7t4d");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = getPreview1(ctx2[2]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2$6(ctx) {
  let span;
  let t_value = getPreview2(ctx[2]) + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "i svelte-9b7t4d");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = getPreview2(ctx2[2]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_preview_slot$3(ctx) {
  let if_block0_anchor;
  let if_block1_anchor;
  let if_block0 = !ctx[2].isArrow && create_if_block_3$3(ctx);
  let if_block1 = !ctx[2].isClass && create_if_block_2$6(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, if_block0_anchor, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (!ctx2[2].isArrow) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_3$3(ctx2);
          if_block0.c();
          if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!ctx2[2].isClass) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_2$6(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(if_block0_anchor);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function create_item_key_slot$3(ctx) {
  let span;
  let t_value = ctx[7] + "";
  let t;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = ctx[7] === FUNCTION || ctx[7] === PROTO ? "internal" : "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 128 && t_value !== (t_value = ctx2[7] + ""))
        set_data(t, t_value);
      if (dirty & 128 && span_class_value !== (span_class_value = ctx2[7] === FUNCTION || ctx2[7] === PROTO ? "internal" : "property")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_else_block$5(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: {
      value: ctx[3](ctx[7])
    }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 128)
        jsonnode_changes.value = ctx2[3](ctx2[7]);
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_if_block_1$6(ctx) {
  let jsonobjectnode;
  let current;
  jsonobjectnode = new JSONObjectNode({
    props: {
      value: ctx[3](ctx[7])
    }
  });
  return {
    c() {
      create_component(jsonobjectnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonobjectnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonobjectnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonobjectnode_changes = {};
      if (dirty & 128)
        jsonobjectnode_changes.value = ctx2[3](ctx2[7]);
      jsonobjectnode.$set(jsonobjectnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonobjectnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonobjectnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonobjectnode, detaching);
    }
  };
}
function create_if_block$a(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[0]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[0]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "i svelte-9b7t4d");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_value_slot$3(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$a, create_if_block_1$6, create_else_block$5];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[7] === FUNCTION)
      return 0;
    if (ctx2[7] === "prototype")
      return 1;
    return 2;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$i(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ctx[1],
      $$slots: {
        item_value: [
          create_item_value_slot$3,
          ({ key }) => ({ 7: key }),
          ({ key }) => key ? 128 : 0
        ],
        item_key: [
          create_item_key_slot$3,
          ({ key }) => ({ 7: key }),
          ({ key }) => key ? 128 : 0
        ],
        preview: [create_preview_slot$3],
        summary: [create_summary_slot$3]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 2)
        jsonnested_changes.keys = ctx2[1];
      if (dirty & 389) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
const FUNCTION = "[[Function]]";
const PROTO = "[[Prototype]]";
function getPreview1({ isGenerator, isAsync, isClass }) {
  if (isClass)
    return `class ${isClass}`;
  return (isAsync ? "async " : "") + "\u0192" + (isGenerator ? "*" : "");
}
function getPreview2({ isAsync, isArrow, fnName, args }) {
  return (isArrow && isAsync ? "async" : "") + " " + (fnName != null ? fnName : "") + args + (isArrow ? " => \u2026" : "");
}
function toString$1(value) {
  try {
    return value.toString();
  } catch {
    switch (value.constructor.name) {
      case "AsyncFunction":
        return "async function () {}";
      case "AsyncGeneratorFunction":
        return "async function * () {}";
      case "GeneratorFunction:":
        return "function * () {}";
      default:
        return "function () {}";
    }
  }
}
function instance$i($$self, $$props, $$invalidate) {
  let str;
  let ctx;
  let keys;
  let { value } = $$props;
  function parseFunction(str2) {
    const match = str2.match(/^(?:(async)\s+)?(?:function)?(\*)?\s*([^(]+)?(\([^)]*\))\s*(=>)?/);
    const isAsync = match == null ? void 0 : match[1];
    const isGenerator = match == null ? void 0 : match[2];
    const fnName = match == null ? void 0 : match[3];
    const args = match == null ? void 0 : match[4];
    const isArrow = match == null ? void 0 : match[5];
    const classMatch = str2.match(/^class\s+([^\s]+)/);
    const isClass = classMatch == null ? void 0 : classMatch[1];
    return {
      args,
      isAsync,
      isGenerator,
      fnName,
      isArrow,
      isClass
    };
  }
  function getValue(key) {
    if (key === PROTO)
      return value.__proto__;
    return value[key];
  }
  function filterKeys(key) {
    if (key === FUNCTION)
      return true;
    return getValue(key);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(4, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      $$invalidate(0, str = toString$1(value));
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(2, ctx = parseFunction(str));
    }
  };
  $$invalidate(1, keys = ["length", "name", "prototype", FUNCTION, PROTO].filter(filterKeys));
  return [str, keys, ctx, getValue, value];
}
class JSONFunctionNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$i, safe_not_equal, { value: 4 });
  }
}
function create_summary_slot$2(ctx) {
  let span;
  let t0_value = ctx[3] ? "writable(" : "readable(";
  let t0;
  let jsonnode;
  let t1_value = ")";
  let t1;
  let current;
  jsonnode = new JSONNode({ props: { value: ctx[2] } });
  return {
    c() {
      span = element("span");
      t0 = text(t0_value);
      create_component(jsonnode.$$.fragment);
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      claim_component(jsonnode.$$.fragment, span_nodes);
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      mount_component(jsonnode, span, null);
      append_hydration(span, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx2[3] ? "writable(" : "readable("))
        set_data(t0, t0_value);
      const jsonnode_changes = {};
      if (dirty & 4)
        jsonnode_changes.value = ctx2[2];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      destroy_component(jsonnode);
    }
  };
}
function create_item_slot$1(ctx) {
  let span0;
  let t0_value = ctx[9] + "";
  let t0;
  let span1;
  let t1_value = ": ";
  let t1;
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][ctx[9]] }
  });
  return {
    c() {
      span0 = element("span");
      t0 = text(t0_value);
      span1 = element("span");
      t1 = text(t1_value);
      create_component(jsonnode.$$.fragment);
      this.h();
    },
    l(nodes) {
      span0 = claim_element(nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach);
      span1 = claim_element(nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t1 = claim_text(span1_nodes, t1_value);
      span1_nodes.forEach(detach);
      claim_component(jsonnode.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(span0, "class", "property");
      attr(span1, "class", "operator");
    },
    m(target, anchor) {
      insert_hydration(target, span0, anchor);
      append_hydration(span0, t0);
      insert_hydration(target, span1, anchor);
      append_hydration(span1, t1);
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 512) && t0_value !== (t0_value = ctx2[9] + ""))
        set_data(t0, t0_value);
      const jsonnode_changes = {};
      if (dirty & 513)
        jsonnode_changes.value = ctx2[0][ctx2[9]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span0);
      if (detaching)
        detach(span1);
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_preview_slot$2(ctx) {
  let previewlist;
  let current;
  previewlist = new PreviewList({
    props: {
      list: ctx[4],
      hasMore: ctx[4].length < ctx[1].length,
      prefix: "{",
      postfix: "}",
      $$slots: {
        item: [
          create_item_slot$1,
          ({ item }) => ({ 9: item }),
          ({ item }) => item ? 512 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(previewlist.$$.fragment);
    },
    l(nodes) {
      claim_component(previewlist.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(previewlist, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const previewlist_changes = {};
      if (dirty & 16)
        previewlist_changes.list = ctx2[4];
      if (dirty & 18)
        previewlist_changes.hasMore = ctx2[4].length < ctx2[1].length;
      if (dirty & 1537) {
        previewlist_changes.$$scope = { dirty, ctx: ctx2 };
      }
      previewlist.$set(previewlist_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(previewlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(previewlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(previewlist, detaching);
    }
  };
}
function create_item_key_slot$2(ctx) {
  let span;
  let t_value = ctx[8] + "";
  let t;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = ctx[8] === STORE_VALUE ? "internal" : "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 256 && t_value !== (t_value = ctx2[8] + ""))
        set_data(t, t_value);
      if (dirty & 256 && span_class_value !== (span_class_value = ctx2[8] === STORE_VALUE ? "internal" : "property")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_value_slot$2(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: {
      value: ctx[6](ctx[8])
    }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 256)
        jsonnode_changes.value = ctx2[6](ctx2[8]);
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_fragment$h(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ctx[5],
      $$slots: {
        item_value: [
          create_item_value_slot$2,
          ({ key }) => ({ 8: key }),
          ({ key }) => key ? 256 : 0
        ],
        item_key: [
          create_item_key_slot$2,
          ({ key }) => ({ 8: key }),
          ({ key }) => key ? 256 : 0
        ],
        preview: [create_preview_slot$2],
        summary: [create_summary_slot$2]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 32)
        jsonnested_changes.keys = ctx2[5];
      if (dirty & 1311) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
const STORE_VALUE = "$value";
function instance$h($$self, $$props, $$invalidate) {
  let objectKeys;
  let keys;
  let previewKeys;
  let storeValue;
  let isWritableStore;
  let $value, $$unsubscribe_value = noop$1, $$subscribe_value = () => ($$unsubscribe_value(), $$unsubscribe_value = subscribe(value, ($$value) => $$invalidate(7, $value = $$value)), value);
  $$self.$$.on_destroy.push(() => $$unsubscribe_value());
  let { value } = $$props;
  $$subscribe_value();
  function getValue(key) {
    if (key === STORE_VALUE)
      return storeValue;
    return value[key];
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$subscribe_value($$invalidate(0, value = $$props2.value));
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, objectKeys = Object.getOwnPropertyNames(value));
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(5, keys = [STORE_VALUE, ...objectKeys]);
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(4, previewKeys = objectKeys.slice(0, 5));
    }
    if ($$self.$$.dirty & 128) {
      $$invalidate(2, storeValue = $value);
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(3, isWritableStore = typeof value.set === "function");
    }
  };
  return [
    value,
    objectKeys,
    storeValue,
    isWritableStore,
    previewKeys,
    keys,
    getValue,
    $value
  ];
}
class JSONSvelteStoreNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$h, safe_not_equal, { value: 0 });
  }
}
function create_summary_slot$1(ctx) {
  let span;
  let t0;
  let t1;
  let t2_value = ctx[0].length + "";
  let t2;
  let t3;
  return {
    c() {
      span = element("span");
      t0 = text(ctx[1]);
      t1 = text("(");
      t2 = text(t2_value);
      t3 = text(")");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, ctx[1]);
      t1 = claim_text(span_nodes, "(");
      t2 = claim_text(span_nodes, t2_value);
      t3 = claim_text(span_nodes, ")");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "label");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
      append_hydration(span, t3);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t0, ctx2[1]);
      if (dirty & 1 && t2_value !== (t2_value = ctx2[0].length + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_slot(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({ props: { value: ctx[7] } });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 128)
        jsonnode_changes.value = ctx2[7];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_preview_slot$1(ctx) {
  let previewlist;
  let current;
  previewlist = new PreviewList({
    props: {
      list: ctx[2],
      hasMore: ctx[2].length < ctx[0].length,
      label: ctx[1] + "(" + ctx[0].length + ") ",
      prefix: "[",
      postfix: "]",
      $$slots: {
        item: [
          create_item_slot,
          ({ item }) => ({ 7: item }),
          ({ item }) => item ? 128 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(previewlist.$$.fragment);
    },
    l(nodes) {
      claim_component(previewlist.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(previewlist, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const previewlist_changes = {};
      if (dirty & 4)
        previewlist_changes.list = ctx2[2];
      if (dirty & 5)
        previewlist_changes.hasMore = ctx2[2].length < ctx2[0].length;
      if (dirty & 3)
        previewlist_changes.label = ctx2[1] + "(" + ctx2[0].length + ") ";
      if (dirty & 384) {
        previewlist_changes.$$scope = { dirty, ctx: ctx2 };
      }
      previewlist.$set(previewlist_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(previewlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(previewlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(previewlist, detaching);
    }
  };
}
function create_item_key_slot$1(ctx) {
  let span;
  let t_value = String(ctx[6]) + "";
  let t;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = ctx[4].includes(ctx[6]) ? "internal" : "property");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 64 && t_value !== (t_value = String(ctx2[6]) + ""))
        set_data(t, t_value);
      if (dirty & 64 && span_class_value !== (span_class_value = ctx2[4].includes(ctx2[6]) ? "internal" : "property")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_value_slot$1(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: {
      value: ctx[5](ctx[6])
    }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 64)
        jsonnode_changes.value = ctx2[5](ctx2[6]);
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_fragment$g(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ctx[3],
      $$slots: {
        item_value: [
          create_item_value_slot$1,
          ({ key }) => ({ 6: key }),
          ({ key }) => key ? 64 : 0
        ],
        item_key: [
          create_item_key_slot$1,
          ({ key }) => ({ 6: key }),
          ({ key }) => key ? 64 : 0
        ],
        preview: [create_preview_slot$1],
        summary: [create_summary_slot$1]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 8)
        jsonnested_changes.keys = ctx2[3];
      if (dirty & 327) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
const TO_STRING_TAG = "Symbol(Symbol.toStringTag)";
function instance$g($$self, $$props, $$invalidate) {
  let keys;
  let preview;
  let { value } = $$props;
  let { nodeType } = $$props;
  const internalKeys = ["buffer", "byteLength", "byteOffset", "length", TO_STRING_TAG];
  function getValue(key) {
    if (key === TO_STRING_TAG) {
      return value[Symbol.toStringTag];
    }
    return value[key];
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("nodeType" in $$props2)
      $$invalidate(1, nodeType = $$props2.nodeType);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(3, keys = [...Object.getOwnPropertyNames(value), ...internalKeys]);
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(2, preview = value.slice(0, 5));
    }
  };
  return [value, nodeType, preview, keys, internalKeys, getValue];
}
class TypedArrayNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$g, safe_not_equal, { value: 0, nodeType: 1 });
  }
}
var RegExpNode_svelte_svelte_type_style_lang = "";
function create_summary_slot(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[1]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[1]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "regex svelte-nzujdl");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_preview_slot(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[1]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[1]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "regex svelte-nzujdl");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_key_slot(ctx) {
  let span;
  let t_value = String(ctx[3]) + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "internal");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = String(ctx2[3]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_item_value_slot(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({
    props: { value: ctx[0][ctx[3]] }
  });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 9)
        jsonnode_changes.value = ctx2[0][ctx2[3]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_fragment$f(ctx) {
  let jsonnested;
  let current;
  jsonnested = new JSONNested({
    props: {
      keys: ctx[2],
      $$slots: {
        item_value: [
          create_item_value_slot,
          ({ key }) => ({ 3: key }),
          ({ key }) => key ? 8 : 0
        ],
        item_key: [
          create_item_key_slot,
          ({ key }) => ({ 3: key }),
          ({ key }) => key ? 8 : 0
        ],
        preview: [create_preview_slot],
        summary: [create_summary_slot]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(jsonnested.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnested.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const jsonnested_changes = {};
      if (dirty & 27) {
        jsonnested_changes.$$scope = { dirty, ctx: ctx2 };
      }
      jsonnested.$set(jsonnested_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}
function instance$f($$self, $$props, $$invalidate) {
  let str;
  let { value } = $$props;
  const keys = [
    "lastIndex",
    "dotAll",
    "flags",
    "global",
    "hasIndices",
    "ignoreCase",
    "multiline",
    "source",
    "sticky",
    "unicode"
  ];
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, str = value.toString());
    }
  };
  return [value, str, keys];
}
class RegExpNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, { value: 0 });
  }
}
function create_fragment$e(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [{ value: ctx[0] }, ctx[1]];
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i2 = 0; i2 < switch_instance_spread_levels.length; i2 += 1) {
      switch_instance_props = assign$1(switch_instance_props, switch_instance_spread_levels[i2]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const switch_instance_changes = dirty & 3 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 1 && { value: ctx2[0] },
        dirty & 2 && get_spread_object(ctx2[1])
      ]) : {};
      if (switch_value !== (switch_value = ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  let componentType;
  let props;
  let $nodeType;
  let { value } = $$props;
  const nodeType = writable();
  component_subscribe($$self, nodeType, (value2) => $$invalidate(4, $nodeType = value2));
  function getComponentAndProps(nodeType2, value2) {
    switch (nodeType2) {
      case "Object":
        if (typeof value2.subscribe === "function")
          return [JSONSvelteStoreNode];
        return [JSONObjectNode];
      case "Error":
        return [ErrorNode];
      case "Array":
        return [JSONArrayNode];
      case "Map":
        return [JSONIterableMapNode];
      case "Iterable":
      case "Set":
        return [JSONIterableArrayNode, { nodeType: nodeType2 }];
      case "Number":
        return [JSONValueNode, { nodeType: nodeType2 }];
      case "String":
        return [JSONStringNode];
      case "Boolean":
        return [
          JSONValueNode,
          {
            nodeType: nodeType2,
            value: value2 ? "true" : "false"
          }
        ];
      case "Date":
        return [JSONValueNode, { nodeType: nodeType2, value: value2.toISOString() }];
      case "Null":
        return [JSONValueNode, { nodeType: nodeType2, value: "null" }];
      case "Undefined":
        return [JSONValueNode, { nodeType: nodeType2, value: "undefined" }];
      case "Function":
      case "AsyncFunction":
      case "AsyncGeneratorFunction":
      case "GeneratorFunction":
        return [JSONFunctionNode];
      case "Symbol":
        return [JSONValueNode, { nodeType: nodeType2, value: value2.toString() }];
      case "BigInt":
        return [JSONValueNode, { nodeType: nodeType2, value: String(value2) + "n" }];
      case "ArrayBuffer":
        return [
          JSONValueNode,
          {
            nodeType: nodeType2,
            value: `ArrayBuffer(${value2.byteLength})`
          }
        ];
      case "BigInt64Array":
      case "BigUint64Array":
      case "Float32Array":
      case "Float64Array":
      case "Int8Array":
      case "Int16Array":
      case "Int32Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Uint16Array":
      case "Uint32Array":
        return [TypedArrayNode, { nodeType: nodeType2 }];
      case "RegExp":
        return [RegExpNode];
      default:
        return [JSONValueNode, { nodeType: nodeType2, value: `<${nodeType2}>` }];
    }
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      set_store_value(nodeType, $nodeType = objType(value), $nodeType);
    }
    if ($$self.$$.dirty & 17) {
      $$invalidate(2, [componentType, props] = getComponentAndProps($nodeType, value), componentType, ($$invalidate(1, props), $$invalidate(4, $nodeType), $$invalidate(0, value)));
    }
  };
  return [value, props, componentType, nodeType, $nodeType];
}
class JSONNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { value: 0 });
  }
}
function getShouldExpandNode({ defaultExpandedPaths, defaultExpandedLevel }) {
  const defaultExpandedPathsParts = defaultExpandedPaths.map((path) => path.split("."));
  function matchPath(keyPath) {
    outer:
      for (const parts of defaultExpandedPathsParts) {
        if (keyPath.length > parts.length)
          continue;
        const length3 = Math.min(keyPath.length, parts.length);
        for (let i2 = 0; i2 < length3; i2++) {
          if (parts[i2] !== "*" && parts[i2] !== String(keyPath[i2]))
            continue outer;
        }
        return true;
      }
    return false;
  }
  return function({ keyPath, level }) {
    return level <= defaultExpandedLevel || matchPath(keyPath);
  };
}
var Root_svelte_svelte_type_style_lang = "";
function create_default_slot$2(ctx) {
  let jsonnode;
  let current;
  jsonnode = new JSONNode({ props: { value: ctx[0] } });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 1)
        jsonnode_changes.value = ctx2[0];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_fragment$d(ctx) {
  let ul;
  let expandable;
  let current;
  expandable = new Expandable({
    props: {
      key: "$",
      expanded: ctx[1],
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      ul = element("ul");
      create_component(expandable.$$.fragment);
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      claim_component(expandable.$$.fragment, ul_nodes);
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", "svelte-oktd6i");
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      mount_component(expandable, ul, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const expandable_changes = {};
      if (dirty & 33) {
        expandable_changes.$$scope = { dirty, ctx: ctx2 };
      }
      expandable.$set(expandable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(expandable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(expandable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      destroy_component(expandable);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  let shouldExpandNode;
  let { value } = $$props;
  let { defaultExpandedPaths = [] } = $$props;
  let { defaultExpandedLevel = 0 } = $$props;
  const expanded = writable(true);
  useState({
    expanded,
    isParentExpanded: readable(true),
    root: true,
    shouldExpandNode: (opts) => shouldExpandNode(opts),
    level: 0,
    keyPath: []
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("defaultExpandedPaths" in $$props2)
      $$invalidate(2, defaultExpandedPaths = $$props2.defaultExpandedPaths);
    if ("defaultExpandedLevel" in $$props2)
      $$invalidate(3, defaultExpandedLevel = $$props2.defaultExpandedLevel);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 12) {
      shouldExpandNode = getShouldExpandNode({
        defaultExpandedPaths,
        defaultExpandedLevel
      });
    }
  };
  return [value, expanded, defaultExpandedPaths, defaultExpandedLevel];
}
class Root extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      value: 0,
      defaultExpandedPaths: 2,
      defaultExpandedLevel: 3
    });
  }
}
var ConsoleTable_svelte_svelte_type_style_lang = "";
function get_each_context$3(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i2];
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i2];
  return child_ctx;
}
function get_each_context_2$1(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i2];
  return child_ctx;
}
function create_each_block_2$1(ctx) {
  let th;
  let t_value = ctx[8] + "";
  let t;
  return {
    c() {
      th = element("th");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      th = claim_element(nodes, "TH", { class: true });
      var th_nodes = children(th);
      t = claim_text(th_nodes, t_value);
      th_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(th, "class", "svelte-6uq8va");
    },
    m(target, anchor) {
      insert_hydration(target, th, anchor);
      append_hydration(th, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[8] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(th);
    }
  };
}
function create_else_block$4(ctx) {
  let td;
  return {
    c() {
      td = element("td");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { class: true });
      children(td).forEach(detach);
      this.h();
    },
    h() {
      attr(td, "class", "svelte-6uq8va");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
    },
    p: noop$1,
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_2$5(ctx) {
  let td;
  let jsonnode;
  let current;
  jsonnode = new Root({
    props: {
      value: ctx[0][ctx[5]][ctx[8]]
    }
  });
  return {
    c() {
      td = element("td");
      create_component(jsonnode.$$.fragment);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { class: true });
      var td_nodes = children(td);
      claim_component(jsonnode.$$.fragment, td_nodes);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td, "class", "svelte-6uq8va");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      mount_component(jsonnode, td, null);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 7)
        jsonnode_changes.value = ctx2[0][ctx2[5]][ctx2[8]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(td);
      destroy_component(jsonnode);
    }
  };
}
function create_if_block_1$5(ctx) {
  let td;
  let jsonnode;
  let current;
  jsonnode = new Root({
    props: { value: ctx[0][ctx[5]] }
  });
  return {
    c() {
      td = element("td");
      create_component(jsonnode.$$.fragment);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { class: true });
      var td_nodes = children(td);
      claim_component(jsonnode.$$.fragment, td_nodes);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td, "class", "svelte-6uq8va");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      mount_component(jsonnode, td, null);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 3)
        jsonnode_changes.value = ctx2[0][ctx2[5]];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(td);
      destroy_component(jsonnode);
    }
  };
}
function create_if_block$9(ctx) {
  let td;
  let t_value = ctx[5] + "";
  let t;
  return {
    c() {
      td = element("td");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { class: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, t_value);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td, "class", "svelte-6uq8va");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = ctx2[5] + ""))
        set_data(t, t_value);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_each_block_1$1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$9, create_if_block_1$5, create_if_block_2$5, create_else_block$4];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[8] === INDEX_KEY)
      return 0;
    if (ctx2[8] === VALUE_KEY)
      return 1;
    if (ctx2[8] in ctx2[0][ctx2[5]])
      return 2;
    return 3;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_each_block$3(ctx) {
  let tr;
  let t;
  let current;
  let each_value_1 = ctx[2];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
    each_blocks[i2] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      tr = element("tr");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(tr_nodes);
      }
      t = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(tr, "class", "svelte-6uq8va");
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(tr, null);
      }
      append_hydration(tr, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 7) {
        each_value_1 = ctx2[2];
        let i2;
        for (i2 = 0; i2 < each_value_1.length; i2 += 1) {
          const child_ctx = get_each_context_1$1(ctx2, each_value_1, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block_1$1(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(tr, t);
          }
        }
        group_outros();
        for (i2 = each_value_1.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_fragment$c(ctx) {
  let div;
  let table;
  let thead;
  let tr;
  let t;
  let tbody;
  let current;
  let each_value_2 = ctx[2];
  let each_blocks_1 = [];
  for (let i2 = 0; i2 < each_value_2.length; i2 += 1) {
    each_blocks_1[i2] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i2));
  }
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$3(get_each_context$3(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      div = element("div");
      table = element("table");
      thead = element("thead");
      tr = element("tr");
      for (let i2 = 0; i2 < each_blocks_1.length; i2 += 1) {
        each_blocks_1[i2].c();
      }
      t = space();
      tbody = element("tbody");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      table = claim_element(div_nodes, "TABLE", { class: true });
      var table_nodes = children(table);
      thead = claim_element(table_nodes, "THEAD", {});
      var thead_nodes = children(thead);
      tr = claim_element(thead_nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      for (let i2 = 0; i2 < each_blocks_1.length; i2 += 1) {
        each_blocks_1[i2].l(tr_nodes);
      }
      tr_nodes.forEach(detach);
      thead_nodes.forEach(detach);
      t = claim_space(table_nodes);
      tbody = claim_element(table_nodes, "TBODY", {});
      var tbody_nodes = children(tbody);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(tbody_nodes);
      }
      tbody_nodes.forEach(detach);
      table_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(tr, "class", "svelte-6uq8va");
      attr(table, "class", "svelte-6uq8va");
      attr(div, "class", "table svelte-6uq8va");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, table);
      append_hydration(table, thead);
      append_hydration(thead, tr);
      for (let i2 = 0; i2 < each_blocks_1.length; i2 += 1) {
        each_blocks_1[i2].m(tr, null);
      }
      append_hydration(table, t);
      append_hydration(table, tbody);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(tbody, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 4) {
        each_value_2 = ctx2[2];
        let i2;
        for (i2 = 0; i2 < each_value_2.length; i2 += 1) {
          const child_ctx = get_each_context_2$1(ctx2, each_value_2, i2);
          if (each_blocks_1[i2]) {
            each_blocks_1[i2].p(child_ctx, dirty);
          } else {
            each_blocks_1[i2] = create_each_block_2$1(child_ctx);
            each_blocks_1[i2].c();
            each_blocks_1[i2].m(tr, null);
          }
        }
        for (; i2 < each_blocks_1.length; i2 += 1) {
          each_blocks_1[i2].d(1);
        }
        each_blocks_1.length = each_value_2.length;
      }
      if (dirty & 7) {
        each_value = ctx2[1];
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$3(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block$3(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(tbody, null);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}
const INDEX_KEY = "(index)";
const VALUE_KEY = "Value";
function instance$c($$self, $$props, $$invalidate) {
  let keys;
  let columns_to_render;
  let { data } = $$props;
  let { columns } = $$props;
  function get_columns_to_render(data2, keys2) {
    const columns2 = /* @__PURE__ */ new Set([INDEX_KEY]);
    for (const key of keys2) {
      const value = data2[key];
      if (typeof value === "object") {
        Object.keys(value).forEach((key2) => columns2.add(key2));
      } else {
        columns2.add(VALUE_KEY);
      }
    }
    return [...columns2];
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("columns" in $$props2)
      $$invalidate(3, columns = $$props2.columns);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, keys = Object.keys(data));
    }
    if ($$self.$$.dirty & 11) {
      $$invalidate(2, columns_to_render = columns || get_columns_to_render(data, keys));
    }
  };
  return [data, keys, columns_to_render, columns];
}
class ConsoleTable extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { data: 0, columns: 3 });
  }
}
var ConsoleLine_svelte_svelte_type_style_lang = "";
function get_each_context$2(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i2];
  return child_ctx;
}
function get_each_context_1(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i2];
  return child_ctx;
}
function get_each_context_2(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i2];
  child_ctx[11] = i2;
  return child_ctx;
}
function get_each_context_4(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i2];
  return child_ctx;
}
function get_each_context_3(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i2];
  return child_ctx;
}
function create_if_block_10(ctx) {
  let consoletable;
  let current;
  consoletable = new ConsoleTable({
    props: {
      data: ctx[0].args[0],
      columns: ctx[0].args[1]
    }
  });
  return {
    c() {
      create_component(consoletable.$$.fragment);
    },
    l(nodes) {
      claim_component(consoletable.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(consoletable, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const consoletable_changes = {};
      if (dirty & 1)
        consoletable_changes.data = ctx2[0].args[0];
      if (dirty & 1)
        consoletable_changes.columns = ctx2[0].args[1];
      consoletable.$set(consoletable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(consoletable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(consoletable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(consoletable, detaching);
    }
  };
}
function create_if_block_9(ctx) {
  let span;
  let t0_value = ctx[0].count + "";
  let t0;
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text(t0_value);
      t1 = text("x");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      t1 = claim_text(span_nodes, "x");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "count svelte-5u42h1");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0].count + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_8(ctx) {
  let div;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      t = text("\u25B6");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, "\u25B6");
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "arrow svelte-5u42h1");
      toggle_class(div, "expand", !ctx[0].collapsed);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
      if (!mounted) {
        dispose = listen(div, "click", ctx[2]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        toggle_class(div, "expand", !ctx2[0].collapsed);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_7(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("Assertion failed:");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Assertion failed:");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "assert svelte-5u42h1");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_else_block$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value_4 = ctx[0].args;
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_4.length; i2 += 1) {
    each_blocks[i2] = create_each_block_4(get_each_context_4(ctx, each_value_4, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value_4 = ctx2[0].args;
        let i2;
        for (i2 = 0; i2 < each_value_4.length; i2 += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block_4(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i2 = each_value_4.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value_4.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_6(ctx) {
  let jsonnode;
  let current;
  jsonnode = new Root({ props: { value: ctx[0].args[0] } });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 1)
        jsonnode_changes.value = ctx2[0].args[0];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let each_1_anchor;
  let each_value_3 = ctx[0].args;
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_3.length; i2 += 1) {
    each_blocks[i2] = create_each_block_3(get_each_context_3(ctx, each_value_3, i2));
  }
  return {
    c() {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value_3 = ctx2[0].args;
        let i2;
        for (i2 = 0; i2 < each_value_3.length; i2 += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block_3(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value_3.length;
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_4(ctx) {
  let div;
  let t0;
  let t1;
  let span;
  let t2_value = ctx[0].label + "";
  let t2;
  return {
    c() {
      div = element("div");
      t0 = text("\u25B6");
      t1 = space();
      span = element("span");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "\u25B6");
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, t2_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "arrow svelte-5u42h1");
      toggle_class(div, "expand", !ctx[0].collapsed);
      attr(span, "class", "title svelte-5u42h1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, span, anchor);
      append_hydration(span, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        toggle_class(div, "expand", !ctx2[0].collapsed);
      }
      if (dirty & 1 && t2_value !== (t2_value = ctx2[0].label + ""))
        set_data(t2, t2_value);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_3$2(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("Message could not be cloned. Open devtools to see it");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Message could not be cloned. Open devtools to see it");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "info error svelte-5u42h1");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop$1,
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2$4(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("Console was cleared");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Console was cleared");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "info svelte-5u42h1");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop$1,
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_each_block_4(ctx) {
  let jsonnode;
  let current;
  jsonnode = new Root({ props: { value: ctx[12] } });
  return {
    c() {
      create_component(jsonnode.$$.fragment);
    },
    l(nodes) {
      claim_component(jsonnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const jsonnode_changes = {};
      if (dirty & 1)
        jsonnode_changes.value = ctx2[12];
      jsonnode.$set(jsonnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
}
function create_each_block_3(ctx) {
  let t_value = ctx[12] + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[12] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_2(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "outline svelte-5u42h1");
      set_style(div, "left", ctx[11] * 15 + 15 + "px");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_1$4(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = ctx[0].logs;
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
    each_blocks[i2] = create_each_block_1(get_each_context_1(ctx, each_value_1, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 3) {
        each_value_1 = ctx2[0].logs;
        let i2;
        for (i2 = 0; i2 < each_value_1.length; i2 += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block_1(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i2 = each_value_1.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block_1(ctx) {
  let consoleline;
  let current;
  consoleline = new ConsoleLine({
    props: {
      log: ctx[6],
      level: ctx[1] + 1
    }
  });
  return {
    c() {
      create_component(consoleline.$$.fragment);
    },
    l(nodes) {
      claim_component(consoleline.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(consoleline, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const consoleline_changes = {};
      if (dirty & 1)
        consoleline_changes.log = ctx2[6];
      if (dirty & 2)
        consoleline_changes.level = ctx2[1] + 1;
      consoleline.$set(consoleline_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(consoleline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(consoleline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(consoleline, detaching);
    }
  };
}
function create_if_block$8(ctx) {
  let div;
  let each_value = ctx[0].stack.split("\n").slice(2);
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$2(get_each_context$2(ctx, each_value, i2));
  }
  return {
    c() {
      div = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "trace svelte-5u42h1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0].stack.split("\n").slice(2);
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block$2(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(div, null);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block$2(ctx) {
  let div;
  let t_value = ctx[3].replace(/^\s*at\s+/, "") + "";
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[3].replace(/^\s*at\s+/, "") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$b(ctx) {
  let t0;
  let div;
  let t1;
  let t2;
  let t3;
  let show_if;
  let current_block_type_index;
  let if_block4;
  let t4;
  let div_class_value;
  let t5;
  let t6;
  let if_block6_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[0].level === "table" && create_if_block_10(ctx);
  let if_block1 = ctx[0].count > 1 && create_if_block_9(ctx);
  let if_block2 = (ctx[0].level === "trace" || ctx[0].level === "assert") && create_if_block_8(ctx);
  let if_block3 = ctx[0].level === "assert" && create_if_block_7();
  const if_block_creators = [
    create_if_block_2$4,
    create_if_block_3$2,
    create_if_block_4,
    create_if_block_5,
    create_if_block_6,
    create_else_block$3
  ];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (dirty & 1)
      show_if = null;
    if (ctx2[0].level === "clear")
      return 0;
    if (ctx2[0].level === "unclonable")
      return 1;
    if (ctx2[0].level === "group")
      return 2;
    if (show_if == null)
      show_if = !!ctx2[0].level.startsWith("system");
    if (show_if)
      return 3;
    if (ctx2[0].level === "table")
      return 4;
    return 5;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block4 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let each_value_2 = new Array(ctx[1] - 1);
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_2.length; i2 += 1) {
    each_blocks[i2] = create_each_block_2(get_each_context_2(ctx, each_value_2, i2));
  }
  let if_block5 = ctx[0].level === "group" && !ctx[0].collapsed && create_if_block_1$4(ctx);
  let if_block6 = (ctx[0].level === "trace" || ctx[0].level === "assert") && !ctx[0].collapsed && create_if_block$8(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      div = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      if (if_block3)
        if_block3.c();
      t3 = space();
      if_block4.c();
      t4 = space();
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t5 = space();
      if (if_block5)
        if_block5.c();
      t6 = space();
      if (if_block6)
        if_block6.c();
      if_block6_anchor = empty();
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      if (if_block1)
        if_block1.l(div_nodes);
      t1 = claim_space(div_nodes);
      if (if_block2)
        if_block2.l(div_nodes);
      t2 = claim_space(div_nodes);
      if (if_block3)
        if_block3.l(div_nodes);
      t3 = claim_space(div_nodes);
      if_block4.l(div_nodes);
      t4 = claim_space(div_nodes);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      div_nodes.forEach(detach);
      t5 = claim_space(nodes);
      if (if_block5)
        if_block5.l(nodes);
      t6 = claim_space(nodes);
      if (if_block6)
        if_block6.l(nodes);
      if_block6_anchor = empty();
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "log console-" + ctx[0].level + " svelte-5u42h1");
      set_style(div, "padding-left", ctx[1] * 15 + "px");
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      if (if_block1)
        if_block1.m(div, null);
      append_hydration(div, t1);
      if (if_block2)
        if_block2.m(div, null);
      append_hydration(div, t2);
      if (if_block3)
        if_block3.m(div, null);
      append_hydration(div, t3);
      if_blocks[current_block_type_index].m(div, null);
      append_hydration(div, t4);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div, null);
      }
      insert_hydration(target, t5, anchor);
      if (if_block5)
        if_block5.m(target, anchor);
      insert_hydration(target, t6, anchor);
      if (if_block6)
        if_block6.m(target, anchor);
      insert_hydration(target, if_block6_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(div, "click", function() {
          if (is_function(ctx[0].level === "group" ? ctx[2] : void 0))
            (ctx[0].level === "group" ? ctx[2] : void 0).apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (ctx[0].level === "table") {
        if (if_block0) {
          if_block0.p(ctx, dirty);
          if (dirty & 1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_10(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx[0].count > 1) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_9(ctx);
          if_block1.c();
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx[0].level === "trace" || ctx[0].level === "assert") {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_8(ctx);
          if_block2.c();
          if_block2.m(div, t2);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (ctx[0].level === "assert") {
        if (if_block3)
          ;
        else {
          if_block3 = create_if_block_7();
          if_block3.c();
          if_block3.m(div, t3);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block4 = if_blocks[current_block_type_index];
        if (!if_block4) {
          if_block4 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block4.c();
        } else {
          if_block4.p(ctx, dirty);
        }
        transition_in(if_block4, 1);
        if_block4.m(div, t4);
      }
      if (dirty & 2) {
        each_value_2 = new Array(ctx[1] - 1);
        let i2;
        for (i2 = 0; i2 < each_value_2.length; i2 += 1) {
          const child_ctx = get_each_context_2(ctx, each_value_2, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block_2(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(div, null);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
      if (!current || dirty & 1 && div_class_value !== (div_class_value = "log console-" + ctx[0].level + " svelte-5u42h1")) {
        attr(div, "class", div_class_value);
      }
      if (!current || dirty & 2) {
        set_style(div, "padding-left", ctx[1] * 15 + "px");
      }
      if (ctx[0].level === "group" && !ctx[0].collapsed) {
        if (if_block5) {
          if_block5.p(ctx, dirty);
          if (dirty & 1) {
            transition_in(if_block5, 1);
          }
        } else {
          if_block5 = create_if_block_1$4(ctx);
          if_block5.c();
          transition_in(if_block5, 1);
          if_block5.m(t6.parentNode, t6);
        }
      } else if (if_block5) {
        group_outros();
        transition_out(if_block5, 1, 1, () => {
          if_block5 = null;
        });
        check_outros();
      }
      if ((ctx[0].level === "trace" || ctx[0].level === "assert") && !ctx[0].collapsed) {
        if (if_block6) {
          if_block6.p(ctx, dirty);
        } else {
          if_block6 = create_if_block$8(ctx);
          if_block6.c();
          if_block6.m(if_block6_anchor.parentNode, if_block6_anchor);
        }
      } else if (if_block6) {
        if_block6.d(1);
        if_block6 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block4);
      transition_in(if_block5);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block4);
      transition_out(if_block5);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      if_blocks[current_block_type_index].d();
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t5);
      if (if_block5)
        if_block5.d(detaching);
      if (detaching)
        detach(t6);
      if (if_block6)
        if_block6.d(detaching);
      if (detaching)
        detach(if_block6_anchor);
      mounted = false;
      dispose();
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  let { log } = $$props;
  let { level = 1 } = $$props;
  function toggleGroupCollapse() {
    $$invalidate(0, log.collapsed = !log.collapsed, log);
  }
  $$self.$$set = ($$props2) => {
    if ("log" in $$props2)
      $$invalidate(0, log = $$props2.log);
    if ("level" in $$props2)
      $$invalidate(1, level = $$props2.level);
  };
  return [log, level, toggleGroupCollapse];
}
class ConsoleLine extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { log: 0, level: 1 });
  }
}
function get_each_context$1(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i2];
  return child_ctx;
}
function create_each_block$1(ctx) {
  let consoleline;
  let current;
  consoleline = new ConsoleLine({ props: { log: ctx[1] } });
  return {
    c() {
      create_component(consoleline.$$.fragment);
    },
    l(nodes) {
      claim_component(consoleline.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(consoleline, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const consoleline_changes = {};
      if (dirty & 1)
        consoleline_changes.log = ctx2[1];
      consoleline.$set(consoleline_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(consoleline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(consoleline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(consoleline, detaching);
    }
  };
}
function create_fragment$a(ctx) {
  let div;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$1(get_each_context$1(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block$1(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(div, null);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let { logs } = $$props;
  $$self.$$set = ($$props2) => {
    if ("logs" in $$props2)
      $$invalidate(0, logs = $$props2.logs);
  };
  return [logs];
}
class Console extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { logs: 0 });
  }
}
var srcdoc = "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<style>\r\n			html,\r\n			body {\r\n				position: relative;\r\n				width: 100%;\r\n				height: 100%;\r\n			}\r\n\r\n			body {\r\n				color: #333;\r\n				margin: 0;\r\n				padding: 8px;\r\n				box-sizing: border-box;\r\n				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,\r\n					Cantarell, 'Helvetica Neue', sans-serif;\r\n			}\r\n\r\n			a {\r\n				color: rgb(0, 100, 200);\r\n				text-decoration: none;\r\n			}\r\n\r\n			a:hover {\r\n				text-decoration: underline;\r\n			}\r\n\r\n			a:visited {\r\n				color: rgb(0, 80, 160);\r\n			}\r\n\r\n			label {\r\n				display: block;\r\n			}\r\n\r\n			input,\r\n			button,\r\n			select,\r\n			textarea {\r\n				font-family: inherit; /**/\r\n				font-size: inherit; /**/\r\n				-webkit-padding: 0.4em 0;\r\n				padding: 0.4em;\r\n				margin: 0 0 0.5em 0;\r\n				box-sizing: border-box;\r\n				border: 1px solid #ccc;\r\n				border-radius: 2px;\r\n			}\r\n\r\n			input[type='range'] {\r\n				padding: 0.4em 0;\r\n			}\r\n\r\n			input:disabled {\r\n				color: #ccc;\r\n			}\r\n\r\n			button {\r\n				color: #333;\r\n				background-color: #f4f4f4;\r\n				outline: none;\r\n			}\r\n\r\n			button:disabled {\r\n				color: #999;\r\n			}\r\n\r\n			button:not(:disabled):active {\r\n				background-color: #ddd;\r\n			}\r\n\r\n			button:focus {\r\n				border-color: #666;\r\n			}\r\n		</style>\r\n\r\n		<script>\r\n			(function () {\r\n				function handle_message(ev) {\r\n					let { action, cmd_id } = ev.data;\r\n					const send_message = (payload) => parent.postMessage({ ...payload }, ev.origin);\r\n					const send_reply = (payload) => send_message({ ...payload, cmd_id });\r\n					const send_ok = () => send_reply({ action: 'cmd_ok' });\r\n					const send_error = (message, stack) =>\r\n						send_reply({ action: 'cmd_error', message, stack });\r\n\r\n					if (action === 'eval') {\r\n						try {\r\n							const { script } = ev.data.args;\r\n							eval(script);\r\n							send_ok();\r\n						} catch (e) {\r\n							send_error(e.message, e.stack);\r\n						}\r\n					}\r\n\r\n					if (action === 'catch_clicks') {\r\n						try {\r\n							const top_origin = ev.origin;\r\n							document.body.addEventListener('click', (event) => {\r\n								if (event.which !== 1) return;\r\n								if (event.metaKey || event.ctrlKey || event.shiftKey) return;\r\n								if (event.defaultPrevented) return;\r\n\r\n								// ensure target is a link\r\n								let el = event.target;\r\n								while (el && el.nodeName !== 'A') el = el.parentNode;\r\n								if (!el || el.nodeName !== 'A') return;\r\n\r\n								if (\r\n									el.hasAttribute('download') ||\r\n									el.getAttribute('rel') === 'external' ||\r\n									el.target\r\n								)\r\n									return;\r\n\r\n								event.preventDefault();\r\n\r\n								if (el.href.startsWith(top_origin)) {\r\n									const url = new URL(el.href);\r\n									if (url.hash[0] === '#') {\r\n										window.location.hash = url.hash;\r\n										return;\r\n									}\r\n								}\r\n\r\n								window.open(el.href, '_blank');\r\n							});\r\n							send_ok();\r\n						} catch (e) {\r\n							send_error(e.message, e.stack);\r\n						}\r\n					}\r\n				}\r\n\r\n				window.addEventListener('message', handle_message, false);\r\n\r\n				window.onerror = function (msg, url, lineNo, columnNo, error) {\r\n					parent.postMessage({ action: 'error', value: error }, '*');\r\n				};\r\n\r\n				window.addEventListener('unhandledrejection', (event) => {\r\n					parent.postMessage({ action: 'unhandledrejection', value: event.reason }, '*');\r\n				});\r\n			}.call(this));\r\n\r\n			let previous = { level: null, args: null };\r\n\r\n			['clear', 'log', 'info', 'dir', 'warn', 'error', 'table'].forEach((level) => {\r\n				const original = console[level];\r\n				console[level] = (...args) => {\r\n					const stringifiedArgs = stringify(args);\r\n					if (previous.level === level && previous.args && previous.args === stringifiedArgs) {\r\n						parent.postMessage({ action: 'console', level, duplicate: true }, '*');\r\n					} else {\r\n						previous = { level, args: stringifiedArgs };\r\n\r\n						try {\r\n							parent.postMessage({ action: 'console', level, args }, '*');\r\n						} catch (err) {\r\n							parent.postMessage({ action: 'console', level: 'unclonable' }, '*');\r\n						}\r\n					}\r\n\r\n					original(...args);\r\n				};\r\n			});\r\n\r\n			[\r\n				{ method: 'group', action: 'console_group' },\r\n				{ method: 'groupEnd', action: 'console_group_end' },\r\n				{ method: 'groupCollapsed', action: 'console_group_collapsed' }\r\n			].forEach((group_action) => {\r\n				const original = console[group_action.method];\r\n				console[group_action.method] = (label) => {\r\n					parent.postMessage({ action: group_action.action, label }, '*');\r\n\r\n					original(label);\r\n				};\r\n			});\r\n\r\n			const timers = new Map();\r\n			const original_time = console.time;\r\n			const original_timelog = console.timeLog;\r\n			const original_timeend = console.timeEnd;\r\n\r\n			console.time = (label = 'default') => {\r\n				original_time(label);\r\n				timers.set(label, performance.now());\r\n			};\r\n			console.timeLog = (label = 'default') => {\r\n				original_timelog(label);\r\n				const now = performance.now();\r\n				if (timers.has(label)) {\r\n					parent.postMessage(\r\n						{\r\n							action: 'console',\r\n							level: 'system-log',\r\n							args: [`${label}: ${now - timers.get(label)}ms`]\r\n						},\r\n						'*'\r\n					);\r\n				} else {\r\n					parent.postMessage(\r\n						{ action: 'console', level: 'system-warn', args: [`Timer '${label}' does not exist`] },\r\n						'*'\r\n					);\r\n				}\r\n			};\r\n			console.timeEnd = (label = 'default') => {\r\n				original_timeend(label);\r\n				const now = performance.now();\r\n				if (timers.has(label)) {\r\n					parent.postMessage(\r\n						{\r\n							action: 'console',\r\n							level: 'system-log',\r\n							args: [`${label}: ${now - timers.get(label)}ms`]\r\n						},\r\n						'*'\r\n					);\r\n				} else {\r\n					parent.postMessage(\r\n						{ action: 'console', level: 'system-warn', args: [`Timer '${label}' does not exist`] },\r\n						'*'\r\n					);\r\n				}\r\n				timers.delete(label);\r\n			};\r\n\r\n			const original_assert = console.assert;\r\n			console.assert = (condition, ...args) => {\r\n				if (condition) {\r\n					const stack = new Error().stack;\r\n					parent.postMessage({ action: 'console', level: 'assert', args, stack }, '*');\r\n				}\r\n				original_assert(condition, ...args);\r\n			};\r\n\r\n			const counter = new Map();\r\n			const original_count = console.count;\r\n			const original_countreset = console.countReset;\r\n\r\n			console.count = (label = 'default') => {\r\n				counter.set(label, (counter.get(label) || 0) + 1);\r\n				parent.postMessage(\r\n					{ action: 'console', level: 'system-log', args: `${label}: ${counter.get(label)}` },\r\n					'*'\r\n				);\r\n				original_count(label);\r\n			};\r\n\r\n			console.countReset = (label = 'default') => {\r\n				if (counter.has(label)) {\r\n					counter.set(label, 0);\r\n				} else {\r\n					parent.postMessage(\r\n						{\r\n							action: 'console',\r\n							level: 'system-warn',\r\n							args: `Count for '${label}' does not exist`\r\n						},\r\n						'*'\r\n					);\r\n				}\r\n				original_countreset(label);\r\n			};\r\n\r\n			const original_trace = console.trace;\r\n\r\n			console.trace = (...args) => {\r\n				const stack = new Error().stack;\r\n				parent.postMessage({ action: 'console', level: 'trace', args, stack }, '*');\r\n				original_trace(...args);\r\n			};\r\n\r\n			function stringify(args) {\r\n				try {\r\n					return JSON.stringify(args);\r\n				} catch (error) {\r\n					return null;\r\n				}\r\n			}\r\n		<\/script>\r\n	</head>\r\n	<body></body>\r\n</html>\r\n";
var Viewer_svelte_svelte_type_style_lang = "";
function create_main_slot$1(ctx) {
  let div;
  let iframe_1;
  let iframe_1_sandbox_value;
  let iframe_1_class_value;
  return {
    c() {
      div = element("div");
      iframe_1 = element("iframe");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { slot: true });
      var div_nodes = children(div);
      iframe_1 = claim_element(div_nodes, "IFRAME", {
        title: true,
        sandbox: true,
        class: true,
        srcdoc: true
      });
      children(iframe_1).forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(iframe_1, "title", "Result");
      attr(iframe_1, "sandbox", iframe_1_sandbox_value = "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals " + (ctx[2] ? "allow-same-origin" : ""));
      attr(iframe_1, "class", iframe_1_class_value = null_to_empty(ctx[0] || pending || ctx[6] ? "greyed-out" : "") + " svelte-16d1sx6");
      attr(iframe_1, "srcdoc", srcdoc);
      toggle_class(iframe_1, "inited", ctx[7]);
      attr(div, "slot", "main");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, iframe_1);
      ctx[14](iframe_1);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && iframe_1_sandbox_value !== (iframe_1_sandbox_value = "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals " + (ctx2[2] ? "allow-same-origin" : ""))) {
        attr(iframe_1, "sandbox", iframe_1_sandbox_value);
      }
      if (dirty & 65 && iframe_1_class_value !== (iframe_1_class_value = null_to_empty(ctx2[0] || pending || ctx2[6] ? "greyed-out" : "") + " svelte-16d1sx6")) {
        attr(iframe_1, "class", iframe_1_class_value);
      }
      if (dirty & 193) {
        toggle_class(iframe_1, "inited", ctx2[7]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[14](null);
    }
  };
}
function create_if_block_2$3(ctx) {
  let t0;
  let t1_value = ctx[4].length + "";
  let t1;
  let t2;
  return {
    c() {
      t0 = text("(");
      t1 = text(t1_value);
      t2 = text(")");
    },
    l(nodes) {
      t0 = claim_text(nodes, "(");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_text(nodes, ")");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t1_value !== (t1_value = ctx2[4].length + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
    }
  };
}
function create_panel_header_slot(ctx) {
  let div;
  let button;
  let t;
  let mounted;
  let dispose;
  let if_block = ctx[4].length > 0 && create_if_block_2$3(ctx);
  return {
    c() {
      div = element("div");
      button = element("button");
      if (if_block)
        if_block.c();
      t = text("\r\n				Clear");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { slot: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      if (if_block)
        if_block.l(button_nodes);
      t = claim_text(button_nodes, "\r\n				Clear");
      button_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "svelte-16d1sx6");
      attr(div, "slot", "panel-header");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      if (if_block)
        if_block.m(button, null);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", stop_propagation(ctx[9]));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[4].length > 0) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_2$3(ctx2);
          if_block.c();
          if_block.m(button, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_panel_body_slot$1(ctx) {
  let section;
  let console2;
  let current;
  console2 = new Console({ props: { logs: ctx[4] } });
  console2.$on("clear", ctx[9]);
  return {
    c() {
      section = element("section");
      create_component(console2.$$.fragment);
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { slot: true });
      var section_nodes = children(section);
      claim_component(console2.$$.fragment, section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section, "slot", "panel-body");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      mount_component(console2, section, null);
      current = true;
    },
    p(ctx2, dirty) {
      const console_changes = {};
      if (dirty & 16)
        console_changes.logs = ctx2[4];
      console2.$set(console_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(console2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(console2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_component(console2);
    }
  };
}
function create_if_block_1$3(ctx) {
  let message;
  let current;
  message = new Message({
    props: {
      kind: "info",
      truncate: true,
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(message.$$.fragment);
    },
    l(nodes) {
      claim_component(message.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(message, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const message_changes = {};
      if (dirty & 536870914) {
        message_changes.$$scope = { dirty, ctx: ctx2 };
      }
      message.$set(message_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(message, detaching);
    }
  };
}
function create_if_block$7(ctx) {
  let message;
  let current;
  message = new Message({
    props: { kind: "error", details: ctx[0] }
  });
  return {
    c() {
      create_component(message.$$.fragment);
    },
    l(nodes) {
      claim_component(message.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(message, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const message_changes = {};
      if (dirty & 1)
        message_changes.details = ctx2[0];
      message.$set(message_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(message, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let t_value = (ctx[1] || "loading Svelte compiler...") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = (ctx2[1] || "loading Svelte compiler...") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$9(ctx) {
  let div1;
  let panewithpanel;
  let t;
  let div0;
  let current_block_type_index;
  let if_block;
  let current;
  panewithpanel = new PaneWithPanel({
    props: {
      pos: 100,
      panel: "Console",
      $$slots: {
        "panel-body": [create_panel_body_slot$1],
        "panel-header": [create_panel_header_slot],
        main: [create_main_slot$1]
      },
      $$scope: { ctx }
    }
  });
  const if_block_creators = [create_if_block$7, create_if_block_1$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    if (ctx2[1] || !ctx2[3])
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      div1 = element("div");
      create_component(panewithpanel.$$.fragment);
      t = space();
      div0 = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(panewithpanel.$$.fragment, div1_nodes);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "overlay svelte-16d1sx6");
      attr(div1, "class", "iframe-container svelte-16d1sx6");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      mount_component(panewithpanel, div1, null);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div0, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      const panewithpanel_changes = {};
      if (dirty & 536871157) {
        panewithpanel_changes.$$scope = { dirty, ctx: ctx2 };
      }
      panewithpanel.$set(panewithpanel_changes);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div0, null);
        } else {
          if_block = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(panewithpanel.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(panewithpanel.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(panewithpanel);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
    }
  };
}
let pending = false;
function instance$9($$self, $$props, $$invalidate) {
  let styles;
  let $bundle;
  const { bundle } = getContext("REPL");
  component_subscribe($$self, bundle, (value) => $$invalidate(3, $bundle = value));
  let { error } = $$props;
  let logs = [];
  let log_group_stack = [];
  let current_log_group = logs;
  function setProp(prop, value) {
    if (!proxy)
      return;
    proxy.setProp(prop, value);
  }
  let { status } = $$props;
  let { relaxed = false } = $$props;
  let { injectedJS = "" } = $$props;
  let { injectedCSS = "" } = $$props;
  let iframe;
  let pending_imports = 0;
  let proxy = null;
  let ready = false;
  let inited = false;
  let last_console_event;
  onMount(() => {
    proxy = new ReplProxy(iframe, {
      on_fetch_progress: (progress) => {
        $$invalidate(6, pending_imports = progress);
      },
      on_error: (event) => {
        push_logs({ level: "error", args: [event.value] });
      },
      on_unhandled_rejection: (event) => {
        let error2 = event.value;
        if (typeof error2 === "string")
          error2 = { message: error2 };
        error2.message = "Uncaught (in promise): " + error2.message;
        push_logs({ level: "error", args: [error2] });
      },
      on_console: (log) => {
        if (log.level === "clear") {
          clear_logs();
          push_logs(log);
        } else if (log.duplicate) {
          increment_duplicate_log();
        } else {
          push_logs(log);
        }
      },
      on_console_group: (action) => {
        group_logs(action.label, false);
      },
      on_console_group_end: () => {
        ungroup_logs();
      },
      on_console_group_collapsed: (action) => {
        group_logs(action.label, true);
      }
    });
    iframe.addEventListener("load", () => {
      proxy.handle_links();
      $$invalidate(13, ready = true);
    });
    return () => {
      proxy.destroy();
    };
  });
  async function apply_bundle($bundle2) {
    if (!$bundle2 || $bundle2.error)
      return;
    try {
      clear_logs();
      await proxy.eval(`
				${injectedJS}

				${styles}

				const styles = document.querySelectorAll('style[id^=svelte-]');

				let i = styles.length;
				while (i--) styles[i].parentNode.removeChild(styles[i]);

				if (window.component) {
					try {
						window.component.$destroy();
					} catch (err) {
						console.error(err);
					}
				}

				document.body.innerHTML = '';
				window.location.hash = '';
				window._svelteTransitionManager = null;

				${$bundle2.dom.code}

				window.component = new SvelteComponent.default({
					target: document.body
				});
			`);
      $$invalidate(0, error = null);
    } catch (e) {
      show_error(e);
    }
    $$invalidate(7, inited = true);
  }
  function show_error(e) {
    const loc = getLocationFromStack(e.stack, $bundle.dom.map);
    if (loc) {
      e.filename = loc.source;
      e.loc = { line: loc.line, column: loc.column };
    }
    $$invalidate(0, error = e);
  }
  function push_logs(log) {
    current_log_group.push(last_console_event = log);
    $$invalidate(4, logs);
  }
  function group_logs(label, collapsed) {
    const group_log = {
      level: "group",
      label,
      collapsed,
      logs: []
    };
    current_log_group.push(group_log);
    log_group_stack.push(current_log_group);
    current_log_group = group_log.logs;
    $$invalidate(4, logs);
  }
  function ungroup_logs() {
    current_log_group = log_group_stack.pop();
  }
  function increment_duplicate_log() {
    const last_log = current_log_group[current_log_group.length - 1];
    if (last_log) {
      last_log.count = (last_log.count || 1) + 1;
      $$invalidate(4, logs);
    } else {
      last_console_event.count = 1;
      push_logs(last_console_event);
    }
  }
  function clear_logs() {
    current_log_group = $$invalidate(4, logs = []);
  }
  function iframe_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      iframe = $$value;
      $$invalidate(5, iframe);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("error" in $$props2)
      $$invalidate(0, error = $$props2.error);
    if ("status" in $$props2)
      $$invalidate(1, status = $$props2.status);
    if ("relaxed" in $$props2)
      $$invalidate(2, relaxed = $$props2.relaxed);
    if ("injectedJS" in $$props2)
      $$invalidate(11, injectedJS = $$props2.injectedJS);
    if ("injectedCSS" in $$props2)
      $$invalidate(12, injectedCSS = $$props2.injectedCSS);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8200) {
      if (ready)
        apply_bundle($bundle);
    }
    if ($$self.$$.dirty & 4096) {
      styles = injectedCSS && `{
		const style = document.createElement('style');
		style.textContent = ${JSON.stringify(injectedCSS)};
		document.head.appendChild(style);
	}`;
    }
  };
  return [
    error,
    status,
    relaxed,
    $bundle,
    logs,
    iframe,
    pending_imports,
    inited,
    bundle,
    clear_logs,
    setProp,
    injectedJS,
    injectedCSS,
    ready,
    iframe_1_binding
  ];
}
class Viewer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {
      error: 0,
      setProp: 10,
      status: 1,
      relaxed: 2,
      injectedJS: 11,
      injectedCSS: 12
    });
  }
  get setProp() {
    return this.$$.ctx[10];
  }
}
var CompilerOptions_svelte_svelte_type_style_lang = "";
function create_fragment$8(ctx) {
  let div1;
  let t0;
  let div0;
  let span0;
  let t1;
  let t2;
  let input0;
  let t3;
  let label0;
  let span1;
  let t4;
  let t5;
  let input1;
  let t6;
  let label1;
  let span2;
  let t7;
  let t8;
  let t9;
  let label2;
  let span3;
  let t10;
  let t11;
  let checkbox0;
  let updating_checked;
  let t12;
  let span4;
  let t13_value = ctx[0].dev + "";
  let t13;
  let t14;
  let t15;
  let label3;
  let span5;
  let t16;
  let t17;
  let checkbox1;
  let updating_checked_1;
  let t18;
  let span6;
  let t19_value = ctx[0].css + "";
  let t19;
  let t20;
  let t21;
  let label4;
  let span7;
  let t22;
  let t23;
  let checkbox2;
  let updating_checked_2;
  let t24;
  let span8;
  let t25_value = ctx[0].hydratable + "";
  let t25;
  let t26;
  let t27;
  let label5;
  let span9;
  let t28;
  let t29;
  let checkbox3;
  let updating_checked_3;
  let t30;
  let span10;
  let t31_value = ctx[0].customElement + "";
  let t31;
  let t32;
  let t33;
  let label6;
  let span11;
  let t34;
  let t35;
  let checkbox4;
  let updating_checked_4;
  let t36;
  let span12;
  let t37_value = ctx[0].immutable + "";
  let t37;
  let t38;
  let t39;
  let label7;
  let span13;
  let t40;
  let t41;
  let checkbox5;
  let updating_checked_5;
  let t42;
  let span14;
  let t43_value = ctx[0].legacy + "";
  let t43;
  let t44;
  let label8;
  let span15;
  let t45;
  let t46;
  let checkbox6;
  let updating_checked_6;
  let t47;
  let span16;
  let t48_value = ctx[0].accessors + "";
  let t48;
  let t49;
  let current;
  let mounted;
  let dispose;
  function checkbox0_checked_binding(value) {
    ctx[5](value);
  }
  let checkbox0_props = {};
  if (ctx[0].dev !== void 0) {
    checkbox0_props.checked = ctx[0].dev;
  }
  checkbox0 = new Checkbox({ props: checkbox0_props });
  binding_callbacks.push(() => bind(checkbox0, "checked", checkbox0_checked_binding));
  function checkbox1_checked_binding(value) {
    ctx[6](value);
  }
  let checkbox1_props = {};
  if (ctx[0].css !== void 0) {
    checkbox1_props.checked = ctx[0].css;
  }
  checkbox1 = new Checkbox({ props: checkbox1_props });
  binding_callbacks.push(() => bind(checkbox1, "checked", checkbox1_checked_binding));
  function checkbox2_checked_binding(value) {
    ctx[7](value);
  }
  let checkbox2_props = {};
  if (ctx[0].hydratable !== void 0) {
    checkbox2_props.checked = ctx[0].hydratable;
  }
  checkbox2 = new Checkbox({ props: checkbox2_props });
  binding_callbacks.push(() => bind(checkbox2, "checked", checkbox2_checked_binding));
  function checkbox3_checked_binding(value) {
    ctx[8](value);
  }
  let checkbox3_props = {};
  if (ctx[0].customElement !== void 0) {
    checkbox3_props.checked = ctx[0].customElement;
  }
  checkbox3 = new Checkbox({ props: checkbox3_props });
  binding_callbacks.push(() => bind(checkbox3, "checked", checkbox3_checked_binding));
  function checkbox4_checked_binding(value) {
    ctx[9](value);
  }
  let checkbox4_props = {};
  if (ctx[0].immutable !== void 0) {
    checkbox4_props.checked = ctx[0].immutable;
  }
  checkbox4 = new Checkbox({ props: checkbox4_props });
  binding_callbacks.push(() => bind(checkbox4, "checked", checkbox4_checked_binding));
  function checkbox5_checked_binding(value) {
    ctx[10](value);
  }
  let checkbox5_props = {};
  if (ctx[0].legacy !== void 0) {
    checkbox5_props.checked = ctx[0].legacy;
  }
  checkbox5 = new Checkbox({ props: checkbox5_props });
  binding_callbacks.push(() => bind(checkbox5, "checked", checkbox5_checked_binding));
  function checkbox6_checked_binding(value) {
    ctx[11](value);
  }
  let checkbox6_props = {};
  if (ctx[0].accessors !== void 0) {
    checkbox6_props.checked = ctx[0].accessors;
  }
  checkbox6 = new Checkbox({ props: checkbox6_props });
  binding_callbacks.push(() => bind(checkbox6, "checked", checkbox6_checked_binding));
  return {
    c() {
      div1 = element("div");
      t0 = text("result = svelte.compile(source, {\r\n	");
      div0 = element("div");
      span0 = element("span");
      t1 = text("generate:");
      t2 = space();
      input0 = element("input");
      t3 = space();
      label0 = element("label");
      span1 = element("span");
      t4 = text('"dom"');
      t5 = space();
      input1 = element("input");
      t6 = space();
      label1 = element("label");
      span2 = element("span");
      t7 = text('"ssr"');
      t8 = text(",");
      t9 = space();
      label2 = element("label");
      span3 = element("span");
      t10 = text("dev:");
      t11 = space();
      create_component(checkbox0.$$.fragment);
      t12 = space();
      span4 = element("span");
      t13 = text(t13_value);
      t14 = text(",");
      t15 = space();
      label3 = element("label");
      span5 = element("span");
      t16 = text("css:");
      t17 = space();
      create_component(checkbox1.$$.fragment);
      t18 = space();
      span6 = element("span");
      t19 = text(t19_value);
      t20 = text(",");
      t21 = space();
      label4 = element("label");
      span7 = element("span");
      t22 = text("hydratable:");
      t23 = space();
      create_component(checkbox2.$$.fragment);
      t24 = space();
      span8 = element("span");
      t25 = text(t25_value);
      t26 = text(",");
      t27 = space();
      label5 = element("label");
      span9 = element("span");
      t28 = text("customElement:");
      t29 = space();
      create_component(checkbox3.$$.fragment);
      t30 = space();
      span10 = element("span");
      t31 = text(t31_value);
      t32 = text(",");
      t33 = space();
      label6 = element("label");
      span11 = element("span");
      t34 = text("immutable:");
      t35 = space();
      create_component(checkbox4.$$.fragment);
      t36 = space();
      span12 = element("span");
      t37 = text(t37_value);
      t38 = text(",");
      t39 = space();
      label7 = element("label");
      span13 = element("span");
      t40 = text("legacy:");
      t41 = space();
      create_component(checkbox5.$$.fragment);
      t42 = space();
      span14 = element("span");
      t43 = text(t43_value);
      t44 = space();
      label8 = element("label");
      span15 = element("span");
      t45 = text("accessors:");
      t46 = space();
      create_component(checkbox6.$$.fragment);
      t47 = space();
      span16 = element("span");
      t48 = text(t48_value);
      t49 = text("\r\n	});");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t0 = claim_text(div1_nodes, "result = svelte.compile(source, {\r\n	");
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "generate:");
      span0_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      input0 = claim_element(div0_nodes, "INPUT", { id: true, type: true, class: true });
      t3 = claim_space(div0_nodes);
      label0 = claim_element(div0_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      span1 = claim_element(label0_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t4 = claim_text(span1_nodes, '"dom"');
      span1_nodes.forEach(detach);
      label0_nodes.forEach(detach);
      t5 = claim_space(div0_nodes);
      input1 = claim_element(div0_nodes, "INPUT", { id: true, type: true, class: true });
      t6 = claim_space(div0_nodes);
      label1 = claim_element(div0_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      span2 = claim_element(label1_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t7 = claim_text(span2_nodes, '"ssr"');
      span2_nodes.forEach(detach);
      t8 = claim_text(label1_nodes, ",");
      label1_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t9 = claim_space(div1_nodes);
      label2 = claim_element(div1_nodes, "LABEL", { class: true });
      var label2_nodes = children(label2);
      span3 = claim_element(label2_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      t10 = claim_text(span3_nodes, "dev:");
      span3_nodes.forEach(detach);
      t11 = claim_space(label2_nodes);
      claim_component(checkbox0.$$.fragment, label2_nodes);
      t12 = claim_space(label2_nodes);
      span4 = claim_element(label2_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      t13 = claim_text(span4_nodes, t13_value);
      span4_nodes.forEach(detach);
      t14 = claim_text(label2_nodes, ",");
      label2_nodes.forEach(detach);
      t15 = claim_space(div1_nodes);
      label3 = claim_element(div1_nodes, "LABEL", { class: true });
      var label3_nodes = children(label3);
      span5 = claim_element(label3_nodes, "SPAN", { class: true });
      var span5_nodes = children(span5);
      t16 = claim_text(span5_nodes, "css:");
      span5_nodes.forEach(detach);
      t17 = claim_space(label3_nodes);
      claim_component(checkbox1.$$.fragment, label3_nodes);
      t18 = claim_space(label3_nodes);
      span6 = claim_element(label3_nodes, "SPAN", { class: true });
      var span6_nodes = children(span6);
      t19 = claim_text(span6_nodes, t19_value);
      span6_nodes.forEach(detach);
      t20 = claim_text(label3_nodes, ",");
      label3_nodes.forEach(detach);
      t21 = claim_space(div1_nodes);
      label4 = claim_element(div1_nodes, "LABEL", { class: true });
      var label4_nodes = children(label4);
      span7 = claim_element(label4_nodes, "SPAN", { class: true });
      var span7_nodes = children(span7);
      t22 = claim_text(span7_nodes, "hydratable:");
      span7_nodes.forEach(detach);
      t23 = claim_space(label4_nodes);
      claim_component(checkbox2.$$.fragment, label4_nodes);
      t24 = claim_space(label4_nodes);
      span8 = claim_element(label4_nodes, "SPAN", { class: true });
      var span8_nodes = children(span8);
      t25 = claim_text(span8_nodes, t25_value);
      span8_nodes.forEach(detach);
      t26 = claim_text(label4_nodes, ",");
      label4_nodes.forEach(detach);
      t27 = claim_space(div1_nodes);
      label5 = claim_element(div1_nodes, "LABEL", { class: true });
      var label5_nodes = children(label5);
      span9 = claim_element(label5_nodes, "SPAN", { class: true });
      var span9_nodes = children(span9);
      t28 = claim_text(span9_nodes, "customElement:");
      span9_nodes.forEach(detach);
      t29 = claim_space(label5_nodes);
      claim_component(checkbox3.$$.fragment, label5_nodes);
      t30 = claim_space(label5_nodes);
      span10 = claim_element(label5_nodes, "SPAN", { class: true });
      var span10_nodes = children(span10);
      t31 = claim_text(span10_nodes, t31_value);
      span10_nodes.forEach(detach);
      t32 = claim_text(label5_nodes, ",");
      label5_nodes.forEach(detach);
      t33 = claim_space(div1_nodes);
      label6 = claim_element(div1_nodes, "LABEL", { class: true });
      var label6_nodes = children(label6);
      span11 = claim_element(label6_nodes, "SPAN", { class: true });
      var span11_nodes = children(span11);
      t34 = claim_text(span11_nodes, "immutable:");
      span11_nodes.forEach(detach);
      t35 = claim_space(label6_nodes);
      claim_component(checkbox4.$$.fragment, label6_nodes);
      t36 = claim_space(label6_nodes);
      span12 = claim_element(label6_nodes, "SPAN", { class: true });
      var span12_nodes = children(span12);
      t37 = claim_text(span12_nodes, t37_value);
      span12_nodes.forEach(detach);
      t38 = claim_text(label6_nodes, ",");
      label6_nodes.forEach(detach);
      t39 = claim_space(div1_nodes);
      label7 = claim_element(div1_nodes, "LABEL", { class: true });
      var label7_nodes = children(label7);
      span13 = claim_element(label7_nodes, "SPAN", { class: true });
      var span13_nodes = children(span13);
      t40 = claim_text(span13_nodes, "legacy:");
      span13_nodes.forEach(detach);
      t41 = claim_space(label7_nodes);
      claim_component(checkbox5.$$.fragment, label7_nodes);
      t42 = claim_space(label7_nodes);
      span14 = claim_element(label7_nodes, "SPAN", { class: true });
      var span14_nodes = children(span14);
      t43 = claim_text(span14_nodes, t43_value);
      span14_nodes.forEach(detach);
      label7_nodes.forEach(detach);
      t44 = claim_space(div1_nodes);
      label8 = claim_element(div1_nodes, "LABEL", { class: true });
      var label8_nodes = children(label8);
      span15 = claim_element(label8_nodes, "SPAN", { class: true });
      var span15_nodes = children(span15);
      t45 = claim_text(span15_nodes, "accessors:");
      span15_nodes.forEach(detach);
      t46 = claim_space(label8_nodes);
      claim_component(checkbox6.$$.fragment, label8_nodes);
      t47 = claim_space(label8_nodes);
      span16 = claim_element(label8_nodes, "SPAN", { class: true });
      var span16_nodes = children(span16);
      t48 = claim_text(span16_nodes, t48_value);
      span16_nodes.forEach(detach);
      label8_nodes.forEach(detach);
      t49 = claim_text(div1_nodes, "\r\n	});");
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "key svelte-erc8fk");
      attr(input0, "id", "dom-input");
      attr(input0, "type", "radio");
      input0.__value = "dom";
      input0.value = input0.__value;
      attr(input0, "class", "svelte-erc8fk");
      ctx[3][0].push(input0);
      attr(span1, "class", "string svelte-erc8fk");
      attr(label0, "for", "dom-input");
      attr(label0, "class", "svelte-erc8fk");
      attr(input1, "id", "ssr-input");
      attr(input1, "type", "radio");
      input1.__value = "ssr";
      input1.value = input1.__value;
      attr(input1, "class", "svelte-erc8fk");
      ctx[3][0].push(input1);
      attr(span2, "class", "string svelte-erc8fk");
      attr(label1, "for", "ssr-input");
      attr(label1, "class", "svelte-erc8fk");
      attr(div0, "class", "option svelte-erc8fk");
      attr(span3, "class", "key svelte-erc8fk");
      attr(span4, "class", "boolean svelte-erc8fk");
      attr(label2, "class", "option svelte-erc8fk");
      attr(span5, "class", "key svelte-erc8fk");
      attr(span6, "class", "boolean svelte-erc8fk");
      attr(label3, "class", "option svelte-erc8fk");
      attr(span7, "class", "key svelte-erc8fk");
      attr(span8, "class", "boolean svelte-erc8fk");
      attr(label4, "class", "option svelte-erc8fk");
      attr(span9, "class", "key svelte-erc8fk");
      attr(span10, "class", "boolean svelte-erc8fk");
      attr(label5, "class", "option svelte-erc8fk");
      attr(span11, "class", "key svelte-erc8fk");
      attr(span12, "class", "boolean svelte-erc8fk");
      attr(label6, "class", "option svelte-erc8fk");
      attr(span13, "class", "key svelte-erc8fk");
      attr(span14, "class", "boolean svelte-erc8fk");
      attr(label7, "class", "option svelte-erc8fk");
      attr(span15, "class", "key svelte-erc8fk");
      attr(span16, "class", "boolean svelte-erc8fk");
      attr(label8, "class", "option svelte-erc8fk");
      attr(div1, "class", "options svelte-erc8fk");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      append_hydration(div0, span0);
      append_hydration(span0, t1);
      append_hydration(div0, t2);
      append_hydration(div0, input0);
      input0.checked = input0.__value === ctx[0].generate;
      append_hydration(div0, t3);
      append_hydration(div0, label0);
      append_hydration(label0, span1);
      append_hydration(span1, t4);
      append_hydration(div0, t5);
      append_hydration(div0, input1);
      input1.checked = input1.__value === ctx[0].generate;
      append_hydration(div0, t6);
      append_hydration(div0, label1);
      append_hydration(label1, span2);
      append_hydration(span2, t7);
      append_hydration(label1, t8);
      append_hydration(div1, t9);
      append_hydration(div1, label2);
      append_hydration(label2, span3);
      append_hydration(span3, t10);
      append_hydration(label2, t11);
      mount_component(checkbox0, label2, null);
      append_hydration(label2, t12);
      append_hydration(label2, span4);
      append_hydration(span4, t13);
      append_hydration(label2, t14);
      append_hydration(div1, t15);
      append_hydration(div1, label3);
      append_hydration(label3, span5);
      append_hydration(span5, t16);
      append_hydration(label3, t17);
      mount_component(checkbox1, label3, null);
      append_hydration(label3, t18);
      append_hydration(label3, span6);
      append_hydration(span6, t19);
      append_hydration(label3, t20);
      append_hydration(div1, t21);
      append_hydration(div1, label4);
      append_hydration(label4, span7);
      append_hydration(span7, t22);
      append_hydration(label4, t23);
      mount_component(checkbox2, label4, null);
      append_hydration(label4, t24);
      append_hydration(label4, span8);
      append_hydration(span8, t25);
      append_hydration(label4, t26);
      append_hydration(div1, t27);
      append_hydration(div1, label5);
      append_hydration(label5, span9);
      append_hydration(span9, t28);
      append_hydration(label5, t29);
      mount_component(checkbox3, label5, null);
      append_hydration(label5, t30);
      append_hydration(label5, span10);
      append_hydration(span10, t31);
      append_hydration(label5, t32);
      append_hydration(div1, t33);
      append_hydration(div1, label6);
      append_hydration(label6, span11);
      append_hydration(span11, t34);
      append_hydration(label6, t35);
      mount_component(checkbox4, label6, null);
      append_hydration(label6, t36);
      append_hydration(label6, span12);
      append_hydration(span12, t37);
      append_hydration(label6, t38);
      append_hydration(div1, t39);
      append_hydration(div1, label7);
      append_hydration(label7, span13);
      append_hydration(span13, t40);
      append_hydration(label7, t41);
      mount_component(checkbox5, label7, null);
      append_hydration(label7, t42);
      append_hydration(label7, span14);
      append_hydration(span14, t43);
      append_hydration(div1, t44);
      append_hydration(div1, label8);
      append_hydration(label8, span15);
      append_hydration(span15, t45);
      append_hydration(label8, t46);
      mount_component(checkbox6, label8, null);
      append_hydration(label8, t47);
      append_hydration(label8, span16);
      append_hydration(span16, t48);
      append_hydration(div1, t49);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input0, "change", ctx[2]),
          listen(input1, "change", ctx[4])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        input0.checked = input0.__value === ctx2[0].generate;
      }
      if (dirty & 1) {
        input1.checked = input1.__value === ctx2[0].generate;
      }
      const checkbox0_changes = {};
      if (!updating_checked && dirty & 1) {
        updating_checked = true;
        checkbox0_changes.checked = ctx2[0].dev;
        add_flush_callback(() => updating_checked = false);
      }
      checkbox0.$set(checkbox0_changes);
      if ((!current || dirty & 1) && t13_value !== (t13_value = ctx2[0].dev + ""))
        set_data(t13, t13_value);
      const checkbox1_changes = {};
      if (!updating_checked_1 && dirty & 1) {
        updating_checked_1 = true;
        checkbox1_changes.checked = ctx2[0].css;
        add_flush_callback(() => updating_checked_1 = false);
      }
      checkbox1.$set(checkbox1_changes);
      if ((!current || dirty & 1) && t19_value !== (t19_value = ctx2[0].css + ""))
        set_data(t19, t19_value);
      const checkbox2_changes = {};
      if (!updating_checked_2 && dirty & 1) {
        updating_checked_2 = true;
        checkbox2_changes.checked = ctx2[0].hydratable;
        add_flush_callback(() => updating_checked_2 = false);
      }
      checkbox2.$set(checkbox2_changes);
      if ((!current || dirty & 1) && t25_value !== (t25_value = ctx2[0].hydratable + ""))
        set_data(t25, t25_value);
      const checkbox3_changes = {};
      if (!updating_checked_3 && dirty & 1) {
        updating_checked_3 = true;
        checkbox3_changes.checked = ctx2[0].customElement;
        add_flush_callback(() => updating_checked_3 = false);
      }
      checkbox3.$set(checkbox3_changes);
      if ((!current || dirty & 1) && t31_value !== (t31_value = ctx2[0].customElement + ""))
        set_data(t31, t31_value);
      const checkbox4_changes = {};
      if (!updating_checked_4 && dirty & 1) {
        updating_checked_4 = true;
        checkbox4_changes.checked = ctx2[0].immutable;
        add_flush_callback(() => updating_checked_4 = false);
      }
      checkbox4.$set(checkbox4_changes);
      if ((!current || dirty & 1) && t37_value !== (t37_value = ctx2[0].immutable + ""))
        set_data(t37, t37_value);
      const checkbox5_changes = {};
      if (!updating_checked_5 && dirty & 1) {
        updating_checked_5 = true;
        checkbox5_changes.checked = ctx2[0].legacy;
        add_flush_callback(() => updating_checked_5 = false);
      }
      checkbox5.$set(checkbox5_changes);
      if ((!current || dirty & 1) && t43_value !== (t43_value = ctx2[0].legacy + ""))
        set_data(t43, t43_value);
      const checkbox6_changes = {};
      if (!updating_checked_6 && dirty & 1) {
        updating_checked_6 = true;
        checkbox6_changes.checked = ctx2[0].accessors;
        add_flush_callback(() => updating_checked_6 = false);
      }
      checkbox6.$set(checkbox6_changes);
      if ((!current || dirty & 1) && t48_value !== (t48_value = ctx2[0].accessors + ""))
        set_data(t48, t48_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(checkbox0.$$.fragment, local);
      transition_in(checkbox1.$$.fragment, local);
      transition_in(checkbox2.$$.fragment, local);
      transition_in(checkbox3.$$.fragment, local);
      transition_in(checkbox4.$$.fragment, local);
      transition_in(checkbox5.$$.fragment, local);
      transition_in(checkbox6.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(checkbox0.$$.fragment, local);
      transition_out(checkbox1.$$.fragment, local);
      transition_out(checkbox2.$$.fragment, local);
      transition_out(checkbox3.$$.fragment, local);
      transition_out(checkbox4.$$.fragment, local);
      transition_out(checkbox5.$$.fragment, local);
      transition_out(checkbox6.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[3][0].splice(ctx[3][0].indexOf(input0), 1);
      ctx[3][0].splice(ctx[3][0].indexOf(input1), 1);
      destroy_component(checkbox0);
      destroy_component(checkbox1);
      destroy_component(checkbox2);
      destroy_component(checkbox3);
      destroy_component(checkbox4);
      destroy_component(checkbox5);
      destroy_component(checkbox6);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let $compile_options;
  const { compile_options } = getContext("REPL");
  component_subscribe($$self, compile_options, (value) => $$invalidate(0, $compile_options = value));
  const $$binding_groups = [[]];
  function input0_change_handler() {
    $compile_options.generate = this.__value;
    compile_options.set($compile_options);
  }
  function input1_change_handler() {
    $compile_options.generate = this.__value;
    compile_options.set($compile_options);
  }
  function checkbox0_checked_binding(value) {
    if ($$self.$$.not_equal($compile_options.dev, value)) {
      $compile_options.dev = value;
      compile_options.set($compile_options);
    }
  }
  function checkbox1_checked_binding(value) {
    if ($$self.$$.not_equal($compile_options.css, value)) {
      $compile_options.css = value;
      compile_options.set($compile_options);
    }
  }
  function checkbox2_checked_binding(value) {
    if ($$self.$$.not_equal($compile_options.hydratable, value)) {
      $compile_options.hydratable = value;
      compile_options.set($compile_options);
    }
  }
  function checkbox3_checked_binding(value) {
    if ($$self.$$.not_equal($compile_options.customElement, value)) {
      $compile_options.customElement = value;
      compile_options.set($compile_options);
    }
  }
  function checkbox4_checked_binding(value) {
    if ($$self.$$.not_equal($compile_options.immutable, value)) {
      $compile_options.immutable = value;
      compile_options.set($compile_options);
    }
  }
  function checkbox5_checked_binding(value) {
    if ($$self.$$.not_equal($compile_options.legacy, value)) {
      $compile_options.legacy = value;
      compile_options.set($compile_options);
    }
  }
  function checkbox6_checked_binding(value) {
    if ($$self.$$.not_equal($compile_options.accessors, value)) {
      $compile_options.accessors = value;
      compile_options.set($compile_options);
    }
  }
  return [
    $compile_options,
    compile_options,
    input0_change_handler,
    $$binding_groups,
    input1_change_handler,
    checkbox0_checked_binding,
    checkbox1_checked_binding,
    checkbox2_checked_binding,
    checkbox3_checked_binding,
    checkbox4_checked_binding,
    checkbox5_checked_binding,
    checkbox6_checked_binding
  ];
}
class CompilerOptions extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
  }
}
function WorkerWrapper$1() {
  return new Worker("/web3-repl-deploy/_app/immutable/assets/index.90da190f.js", {
    "type": "module"
  });
}
const workers$1 = /* @__PURE__ */ new Map();
let uid$1 = 1;
class Compiler {
  constructor(svelteUrl) {
    if (!workers$1.has(svelteUrl)) {
      const worker = new WorkerWrapper$1();
      worker.postMessage({ type: "init", svelteUrl });
      workers$1.set(svelteUrl, worker);
    }
    this.worker = workers$1.get(svelteUrl);
    this.handlers = /* @__PURE__ */ new Map();
    this.worker.addEventListener("message", (event) => {
      const handler = this.handlers.get(event.data.id);
      if (handler) {
        handler(event.data.result);
        this.handlers.delete(event.data.id);
      }
    });
  }
  compile(component, options, return_ast) {
    return new Promise((fulfil) => {
      const id = uid$1++;
      this.handlers.set(id, fulfil);
      this.worker.postMessage({
        id,
        type: "compile",
        source: component.source,
        options: Object.assign({
          name: component.name,
          filename: `${component.name}.${component.type}`
        }, options),
        entry: component.name === "App",
        return_ast
      });
    });
  }
  destroy() {
    this.worker.terminate();
  }
}
var AstNode_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i2][0];
  child_ctx[23] = list[i2][1];
  return child_ctx;
}
function create_if_block_3$1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[9]);
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[9]);
      span_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 512)
        set_data(t, ctx2[9]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2$2(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text(ctx[9]);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, ctx[9]);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "ast-toggle svelte-uqygdj");
      toggle_class(button, "open", !ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", ctx[16]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 512)
        set_data(t, ctx2[9]);
      if (dirty & 1) {
        toggle_class(button, "open", !ctx2[0]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_else_block_1$1(ctx) {
  let span;
  let t_value = JSON.stringify(ctx[1]) + "";
  let t;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = "token " + typeof ctx[1] + " svelte-uqygdj");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = JSON.stringify(ctx2[1]) + ""))
        set_data(t, t_value);
      if (dirty & 2 && span_class_value !== (span_class_value = "token " + typeof ctx2[1] + " svelte-uqygdj")) {
        attr(span, "class", span_class_value);
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block$6(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1$2, create_else_block$2];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[0] && !ctx2[10])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block$2(ctx) {
  let span0;
  let t0_value = ctx[6] ? "[" : "{";
  let t0;
  let t1;
  let ul;
  let t2;
  let span1;
  let t3_value = ctx[6] ? "]" : "}";
  let t3;
  let current;
  let each_value = Object.entries(ctx[1]);
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block(get_each_context(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      ul = element("ul");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t2 = space();
      span1 = element("span");
      t3 = text(t3_value);
      this.h();
    },
    l(nodes) {
      span0 = claim_element(nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      t2 = claim_space(nodes);
      span1 = claim_element(nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, t3_value);
      span1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", "svelte-uqygdj");
    },
    m(target, anchor) {
      insert_hydration(target, span0, anchor);
      append_hydration(span0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, ul, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(ul, null);
      }
      insert_hydration(target, t2, anchor);
      insert_hydration(target, span1, anchor);
      append_hydration(span1, t3);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 64) && t0_value !== (t0_value = ctx2[6] ? "[" : "{"))
        set_data(t0, t0_value);
      if (dirty & 78) {
        each_value = Object.entries(ctx2[1]);
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(ul, null);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
      if ((!current || dirty & 64) && t3_value !== (t3_value = ctx2[6] ? "]" : "}"))
        set_data(t3, t3_value);
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(ul);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(span1);
    }
  };
}
function create_if_block_1$2(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text(ctx[8]);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, ctx[8]);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "preview svelte-uqygdj");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", ctx[17]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 256)
        set_data(t, ctx2[8]);
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(ctx) {
  let astnode;
  let current;
  astnode = new AstNode({
    props: {
      key: ctx[6] ? "" : ctx[22],
      value: ctx[23],
      path_nodes: ctx[2],
      autoscroll: ctx[3]
    }
  });
  return {
    c() {
      create_component(astnode.$$.fragment);
    },
    l(nodes) {
      claim_component(astnode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(astnode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const astnode_changes = {};
      if (dirty & 66)
        astnode_changes.key = ctx2[6] ? "" : ctx2[22];
      if (dirty & 2)
        astnode_changes.value = ctx2[23];
      if (dirty & 4)
        astnode_changes.path_nodes = ctx2[2];
      if (dirty & 8)
        astnode_changes.autoscroll = ctx2[3];
      astnode.$set(astnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(astnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(astnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(astnode, detaching);
    }
  };
}
function create_fragment$7(ctx) {
  let li;
  let t;
  let current_block_type_index;
  let if_block1;
  let current;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (!ctx2[10] && ctx2[7])
      return create_if_block_2$2;
    if (ctx2[9])
      return create_if_block_3$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type && current_block_type(ctx);
  const if_block_creators = [create_if_block$6, create_else_block_1$1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[7])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      li = element("li");
      if (if_block0)
        if_block0.c();
      t = space();
      if_block1.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      if (if_block0)
        if_block0.l(li_nodes);
      t = claim_space(li_nodes);
      if_block1.l(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", "svelte-uqygdj");
      toggle_class(li, "marked", !ctx[10] && ctx[5]);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      if (if_block0)
        if_block0.m(li, null);
      append_hydration(li, t);
      if_blocks[current_block_type_index].m(li, null);
      ctx[18](li);
      current = true;
      if (!mounted) {
        dispose = [
          listen(li, "mouseover", ctx[12]),
          listen(li, "focus", ctx[12]),
          listen(li, "mouseleave", ctx[13])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if (if_block0)
          if_block0.d(1);
        if_block0 = current_block_type && current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(li, t);
        }
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(li, null);
      }
      if (dirty & 1056) {
        toggle_class(li, "marked", !ctx2[10] && ctx2[5]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (if_block0) {
        if_block0.d();
      }
      if_blocks[current_block_type_index].d();
      ctx[18](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let is_root;
  let is_leaf;
  let is_ast_array;
  let is_collapsable;
  let is_markable;
  let key_text;
  let $toggleable;
  let { key = "" } = $$props;
  let { value = void 0 } = $$props;
  let { collapsed = true } = $$props;
  let { path_nodes = [] } = $$props;
  let { autoscroll = true } = $$props;
  const { toggleable, mark_text, unmark_text } = getContext("REPL");
  component_subscribe($$self, toggleable, (value2) => $$invalidate(15, $toggleable = value2));
  let list_item;
  let preview_text;
  function handle_mark_text(e) {
    if (is_markable) {
      e.stopPropagation();
      mark_text({ from: value.start, to: value.end });
    }
  }
  function handle_unmark_text(e) {
    if (is_markable) {
      e.stopPropagation();
      unmark_text();
    }
  }
  const click_handler = () => $$invalidate(0, collapsed = !collapsed);
  const click_handler_12 = () => $$invalidate(0, collapsed = !collapsed);
  function li_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      list_item = $$value;
      $$invalidate(4, list_item);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("key" in $$props2)
      $$invalidate(14, key = $$props2.key);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
    if ("collapsed" in $$props2)
      $$invalidate(0, collapsed = $$props2.collapsed);
    if ("path_nodes" in $$props2)
      $$invalidate(2, path_nodes = $$props2.path_nodes);
    if ("autoscroll" in $$props2)
      $$invalidate(3, autoscroll = $$props2.autoscroll);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6) {
      $$invalidate(10, is_root = path_nodes[0] === value);
    }
    if ($$self.$$.dirty & 6) {
      $$invalidate(5, is_leaf = path_nodes[path_nodes.length - 1] === value);
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(6, is_ast_array = Array.isArray(value));
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(7, is_collapsable = value && typeof value === "object");
    }
    if ($$self.$$.dirty & 2) {
      is_markable = value && typeof value.start === "number" && typeof value.end === "number";
    }
    if ($$self.$$.dirty & 16384) {
      $$invalidate(9, key_text = key ? `${key}:` : "");
    }
    if ($$self.$$.dirty & 6) {
      $$invalidate(0, collapsed = !path_nodes.includes(value));
    }
    if ($$self.$$.dirty & 195) {
      if (is_collapsable && collapsed) {
        if (is_ast_array) {
          $$invalidate(8, preview_text = `[ ${value.length} element${value.length === 1 ? "" : "s"} ]`);
        } else {
          $$invalidate(8, preview_text = `{ ${Object.keys(value).join(", ")} }`);
        }
      }
    }
    if ($$self.$$.dirty & 32824) {
      if (autoscroll && is_leaf && !$toggleable) {
        tick().then(() => {
          if (list_item) {
            list_item.scrollIntoView();
          }
        });
      }
    }
  };
  return [
    collapsed,
    value,
    path_nodes,
    autoscroll,
    list_item,
    is_leaf,
    is_ast_array,
    is_collapsable,
    preview_text,
    key_text,
    is_root,
    toggleable,
    handle_mark_text,
    handle_unmark_text,
    key,
    $toggleable,
    click_handler,
    click_handler_12,
    li_binding
  ];
}
class AstNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      key: 14,
      value: 1,
      collapsed: 0,
      path_nodes: 2,
      autoscroll: 3
    });
  }
}
var AstView_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text("No AST available");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "No AST available");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop$1,
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block$5(ctx) {
  let ul;
  let t0;
  let astnode;
  let t1;
  let current;
  astnode = new AstNode({
    props: {
      value: ctx[0],
      path_nodes: ctx[2],
      autoscroll: ctx[1],
      collapsed: false
    }
  });
  return {
    c() {
      ul = element("ul");
      t0 = text("\r\n					");
      create_component(astnode.$$.fragment);
      t1 = text("\r\n				");
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      t0 = claim_text(ul_nodes, "\r\n					");
      claim_component(astnode.$$.fragment, ul_nodes);
      t1 = claim_text(ul_nodes, "\r\n				");
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", "svelte-jw112v");
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      append_hydration(ul, t0);
      mount_component(astnode, ul, null);
      append_hydration(ul, t1);
      current = true;
    },
    p(ctx2, dirty) {
      const astnode_changes = {};
      if (dirty & 1)
        astnode_changes.value = ctx2[0];
      if (dirty & 4)
        astnode_changes.path_nodes = ctx2[2];
      if (dirty & 2)
        astnode_changes.autoscroll = ctx2[1];
      astnode.$set(astnode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(astnode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(astnode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      destroy_component(astnode);
    }
  };
}
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("The AST is not public API and may change at any point in time");
    },
    l(nodes) {
      t = claim_text(nodes, "The AST is not public API and may change at any point in time");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$6(ctx) {
  let div;
  let pre;
  let t0;
  let code2;
  let t1;
  let current_block_type_index;
  let if_block;
  let t2;
  let t3;
  let t4;
  let message;
  let current;
  const if_block_creators = [create_if_block$5, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (typeof ctx2[0] === "object")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  message = new Message({
    props: {
      kind: "info",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      pre = element("pre");
      t0 = text("		");
      code2 = element("code");
      t1 = text("\r\n			");
      if_block.c();
      t2 = text("\r\n		");
      t3 = text("\r\n	");
      t4 = space();
      create_component(message.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      pre = claim_element(div_nodes, "PRE", { class: true });
      var pre_nodes = children(pre);
      t0 = claim_text(pre_nodes, "		");
      code2 = claim_element(pre_nodes, "CODE", { class: true });
      var code_nodes = children(code2);
      t1 = claim_text(code_nodes, "\r\n			");
      if_block.l(code_nodes);
      t2 = claim_text(code_nodes, "\r\n		");
      code_nodes.forEach(detach);
      t3 = claim_text(pre_nodes, "\r\n	");
      pre_nodes.forEach(detach);
      t4 = claim_space(div_nodes);
      claim_component(message.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(code2, "class", "svelte-jw112v");
      attr(pre, "class", "svelte-jw112v");
      attr(div, "class", "ast-view svelte-jw112v");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, pre);
      append_hydration(pre, t0);
      append_hydration(pre, code2);
      append_hydration(code2, t1);
      if_blocks[current_block_type_index].m(code2, null);
      append_hydration(code2, t2);
      append_hydration(pre, t3);
      append_hydration(div, t4);
      mount_component(message, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(code2, t2);
      }
      const message_changes = {};
      if (dirty & 64) {
        message_changes.$$scope = { dirty, ctx: ctx2 };
      }
      message.$set(message_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
      destroy_component(message);
    }
  };
}
function find_deepest_path(cursor, paths) {
  const value = paths[paths.length - 1];
  if (!value)
    return;
  for (const v of Object.values(value)) {
    if (typeof v === "object") {
      const result = find_deepest_path(cursor, paths.concat([v]));
      if (result)
        return result;
    }
  }
  if (typeof value.start === "number" && typeof value.end === "number" && value.start <= cursor && cursor <= value.end) {
    return paths;
  }
}
function get_ast_max_end(ast) {
  let max_end = 0;
  for (const node of Object.values(ast)) {
    if (node && typeof node.end === "number" && node.end > max_end) {
      max_end = node.end;
    }
  }
  return max_end;
}
function instance$6($$self, $$props, $$invalidate) {
  let max_cursor_index;
  let path_nodes;
  let $cursor_index;
  let { ast } = $$props;
  let { autoscroll = true } = $$props;
  const { cursor_index } = getContext("REPL");
  component_subscribe($$self, cursor_index, (value) => $$invalidate(5, $cursor_index = value));
  $$self.$$set = ($$props2) => {
    if ("ast" in $$props2)
      $$invalidate(0, ast = $$props2.ast);
    if ("autoscroll" in $$props2)
      $$invalidate(1, autoscroll = $$props2.autoscroll);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 33) {
      $$invalidate(4, max_cursor_index = !ast ? $cursor_index : Math.min($cursor_index, get_ast_max_end(ast)));
    }
    if ($$self.$$.dirty & 17) {
      $$invalidate(2, path_nodes = find_deepest_path(max_cursor_index, [ast]) || []);
    }
  };
  return [ast, autoscroll, path_nodes, cursor_index, max_cursor_index, $cursor_index];
}
class AstView extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { ast: 0, autoscroll: 1 });
  }
}
const is_browser = typeof window !== "undefined";
var index_svelte_svelte_type_style_lang$1 = "";
function create_else_block_1(ctx) {
  let button0;
  let t0;
  let t1;
  let button1;
  let t2;
  let t3;
  let button2;
  let t4;
  let t5;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = ctx[8] && create_if_block_3(ctx);
  return {
    c() {
      button0 = element("button");
      t0 = text("Result");
      t1 = space();
      button1 = element("button");
      t2 = text("JS output");
      t3 = space();
      button2 = element("button");
      t4 = text("CSS output");
      t5 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      button0 = claim_element(nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "Result");
      button0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "JS output");
      button1_nodes.forEach(detach);
      t3 = claim_space(nodes);
      button2 = claim_element(nodes, "BUTTON", { class: true });
      var button2_nodes = children(button2);
      t4 = claim_text(button2_nodes, "CSS output");
      button2_nodes.forEach(detach);
      t5 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(button0, "class", "svelte-1fpxioj");
      toggle_class(button0, "active", ctx[11] === "result");
      attr(button1, "class", "svelte-1fpxioj");
      toggle_class(button1, "active", ctx[11] === "js");
      attr(button2, "class", "svelte-1fpxioj");
      toggle_class(button2, "active", ctx[11] === "css");
    },
    m(target, anchor) {
      insert_hydration(target, button0, anchor);
      append_hydration(button0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, button1, anchor);
      append_hydration(button1, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, button2, anchor);
      append_hydration(button2, t4);
      insert_hydration(target, t5, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[17]),
          listen(button1, "click", ctx[18]),
          listen(button2, "click", ctx[19])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2048) {
        toggle_class(button0, "active", ctx2[11] === "result");
      }
      if (dirty & 2048) {
        toggle_class(button1, "active", ctx2[11] === "js");
      }
      if (dirty & 2048) {
        toggle_class(button2, "active", ctx2[11] === "css");
      }
      if (ctx2[8]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_3(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(button0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(button1);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(button2);
      if (detaching)
        detach(t5);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$1(ctx) {
  let button;
  let t;
  return {
    c() {
      button = element("button");
      t = text("Markdown");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Markdown");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "active svelte-1fpxioj");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
    },
    p: noop$1,
    d(detaching) {
      if (detaching)
        detach(button);
    }
  };
}
function create_if_block_3(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("AST output");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "AST output");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "svelte-1fpxioj");
      toggle_class(button, "active", ctx[11] === "ast");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", ctx[20]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2048) {
        toggle_class(button, "active", ctx2[11] === "ast");
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_else_block(ctx) {
  let panewithpanel;
  let current;
  panewithpanel = new PaneWithPanel({
    props: {
      pos: 67,
      panel: "Compiler options",
      $$slots: {
        "panel-body": [create_panel_body_slot],
        main: [create_main_slot]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(panewithpanel.$$.fragment);
    },
    l(nodes) {
      claim_component(panewithpanel.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(panewithpanel, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const panewithpanel_changes = {};
      if (dirty & 134218372) {
        panewithpanel_changes.$$scope = { dirty, ctx: ctx2 };
      }
      panewithpanel.$set(panewithpanel_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(panewithpanel.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(panewithpanel.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(panewithpanel, detaching);
    }
  };
}
function create_if_block_1$1(ctx) {
  let codemirror;
  let current;
  let codemirror_props = {
    errorLoc: ctx[2],
    theme: ctx[7],
    readonly: true
  };
  codemirror = new CodeMirror_1({ props: codemirror_props });
  ctx[22](codemirror);
  return {
    c() {
      create_component(codemirror.$$.fragment);
    },
    l(nodes) {
      claim_component(codemirror.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(codemirror, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const codemirror_changes = {};
      if (dirty & 4)
        codemirror_changes.errorLoc = ctx2[2];
      if (dirty & 128)
        codemirror_changes.theme = ctx2[7];
      codemirror.$set(codemirror_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(codemirror.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(codemirror.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[22](null);
      destroy_component(codemirror, detaching);
    }
  };
}
function create_main_slot(ctx) {
  let div;
  let codemirror;
  let current;
  let codemirror_props = {
    errorLoc: ctx[2],
    theme: ctx[7],
    readonly: true
  };
  codemirror = new CodeMirror_1({ props: codemirror_props });
  ctx[23](codemirror);
  return {
    c() {
      div = element("div");
      create_component(codemirror.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { slot: true, class: true });
      var div_nodes = children(div);
      claim_component(codemirror.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "slot", "main");
      attr(div, "class", "svelte-1fpxioj");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(codemirror, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const codemirror_changes = {};
      if (dirty & 4)
        codemirror_changes.errorLoc = ctx2[2];
      if (dirty & 128)
        codemirror_changes.theme = ctx2[7];
      codemirror.$set(codemirror_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(codemirror.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(codemirror.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[23](null);
      destroy_component(codemirror);
    }
  };
}
function create_panel_body_slot(ctx) {
  let div;
  let compileroptions;
  let current;
  compileroptions = new CompilerOptions({});
  return {
    c() {
      div = element("div");
      create_component(compileroptions.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { slot: true, class: true });
      var div_nodes = children(div);
      claim_component(compileroptions.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "slot", "panel-body");
      attr(div, "class", "svelte-1fpxioj");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(compileroptions, div, null);
      current = true;
    },
    p: noop$1,
    i(local) {
      if (current)
        return;
      transition_in(compileroptions.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(compileroptions.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(compileroptions);
    }
  };
}
function create_if_block$4(ctx) {
  let div;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$1,
    then: create_then_block$1,
    catch: create_catch_block$1,
    blocks: [, , ,]
  };
  handle_promise(ctx[15], info);
  return {
    c() {
      div = element("div");
      info.block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      info.block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "tab-content svelte-1fpxioj");
      toggle_class(div, "visible", ctx[12] !== "md" && ctx[11] === "ast");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
      if (dirty & 6144) {
        toggle_class(div, "visible", ctx[12] !== "md" && ctx[11] === "ast");
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i2 = 0; i2 < 3; i2 += 1) {
        const block2 = info.blocks[i2];
        transition_out(block2);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function create_catch_block$1(ctx) {
  return {
    c: noop$1,
    l: noop$1,
    m: noop$1,
    p: noop$1,
    i: noop$1,
    o: noop$1,
    d: noop$1
  };
}
function create_then_block$1(ctx) {
  let astview;
  let current;
  astview = new AstView({
    props: {
      ast: ctx[14],
      autoscroll: ctx[12] !== "md" && ctx[11] === "ast"
    }
  });
  return {
    c() {
      create_component(astview.$$.fragment);
    },
    l(nodes) {
      claim_component(astview.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(astview, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const astview_changes = {};
      if (dirty & 16384)
        astview_changes.ast = ctx2[14];
      if (dirty & 6144)
        astview_changes.autoscroll = ctx2[12] !== "md" && ctx2[11] === "ast";
      astview.$set(astview_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(astview.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(astview.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(astview, detaching);
    }
  };
}
function create_pending_block$1(ctx) {
  return {
    c: noop$1,
    l: noop$1,
    m: noop$1,
    p: noop$1,
    i: noop$1,
    o: noop$1,
    d: noop$1
  };
}
function create_fragment$5(ctx) {
  let div0;
  let t0;
  let div1;
  let viewer;
  let updating_error;
  let t1;
  let div2;
  let current_block_type_index;
  let if_block1;
  let t2;
  let div3;
  let codemirror;
  let t3;
  let t4;
  let div4;
  let iframe;
  let current;
  function select_block_type(ctx2, dirty) {
    if (ctx2[12] === "md")
      return create_if_block_2$1;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  function viewer_error_binding(value) {
    ctx[21](value);
  }
  let viewer_props = {
    status: ctx[1],
    relaxed: ctx[4],
    injectedJS: ctx[5],
    injectedCSS: ctx[6]
  };
  if (ctx[0] !== void 0) {
    viewer_props.error = ctx[0];
  }
  viewer = new Viewer({ props: viewer_props });
  binding_callbacks.push(() => bind(viewer, "error", viewer_error_binding));
  const if_block_creators = [create_if_block_1$1, create_else_block];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[3])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let codemirror_props = {
    errorLoc: ctx[2],
    theme: ctx[7],
    readonly: true
  };
  codemirror = new CodeMirror_1({ props: codemirror_props });
  ctx[24](codemirror);
  let if_block2 = ctx[8] && create_if_block$4(ctx);
  return {
    c() {
      div0 = element("div");
      if_block0.c();
      t0 = space();
      div1 = element("div");
      create_component(viewer.$$.fragment);
      t1 = space();
      div2 = element("div");
      if_block1.c();
      t2 = space();
      div3 = element("div");
      create_component(codemirror.$$.fragment);
      t3 = space();
      if (if_block2)
        if_block2.c();
      t4 = space();
      div4 = element("div");
      iframe = element("iframe");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(viewer.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      if_block1.l(div2_nodes);
      div2_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(codemirror.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      t3 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t4 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      iframe = claim_element(div4_nodes, "IFRAME", { title: true, srcdoc: true, class: true });
      children(iframe).forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "view-toggle svelte-1fpxioj");
      attr(div1, "class", "tab-content svelte-1fpxioj");
      toggle_class(div1, "visible", ctx[12] !== "md" && ctx[11] === "result");
      attr(div2, "class", "tab-content svelte-1fpxioj");
      toggle_class(div2, "visible", ctx[12] !== "md" && ctx[11] === "js");
      attr(div3, "class", "tab-content svelte-1fpxioj");
      toggle_class(div3, "visible", ctx[12] !== "md" && ctx[11] === "css");
      attr(iframe, "title", "Markdown");
      attr(iframe, "srcdoc", ctx[13]);
      attr(iframe, "class", "svelte-1fpxioj");
      attr(div4, "class", "tab-content svelte-1fpxioj");
      toggle_class(div4, "visible", ctx[12] === "md");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      if_block0.m(div0, null);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div1, anchor);
      mount_component(viewer, div1, null);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div2, anchor);
      if_blocks[current_block_type_index].m(div2, null);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div3, anchor);
      mount_component(codemirror, div3, null);
      insert_hydration(target, t3, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, iframe);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }
      const viewer_changes = {};
      if (dirty & 2)
        viewer_changes.status = ctx2[1];
      if (dirty & 16)
        viewer_changes.relaxed = ctx2[4];
      if (dirty & 32)
        viewer_changes.injectedJS = ctx2[5];
      if (dirty & 64)
        viewer_changes.injectedCSS = ctx2[6];
      if (!updating_error && dirty & 1) {
        updating_error = true;
        viewer_changes.error = ctx2[0];
        add_flush_callback(() => updating_error = false);
      }
      viewer.$set(viewer_changes);
      if (dirty & 6144) {
        toggle_class(div1, "visible", ctx2[12] !== "md" && ctx2[11] === "result");
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(div2, null);
      }
      if (dirty & 6144) {
        toggle_class(div2, "visible", ctx2[12] !== "md" && ctx2[11] === "js");
      }
      const codemirror_changes = {};
      if (dirty & 4)
        codemirror_changes.errorLoc = ctx2[2];
      if (dirty & 128)
        codemirror_changes.theme = ctx2[7];
      codemirror.$set(codemirror_changes);
      if (dirty & 6144) {
        toggle_class(div3, "visible", ctx2[12] !== "md" && ctx2[11] === "css");
      }
      if (ctx2[8]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 256) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$4(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(t4.parentNode, t4);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (!current || dirty & 8192) {
        attr(iframe, "srcdoc", ctx2[13]);
      }
      if (dirty & 4096) {
        toggle_class(div4, "visible", ctx2[12] === "md");
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(viewer.$$.fragment, local);
      transition_in(if_block1);
      transition_in(codemirror.$$.fragment, local);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(viewer.$$.fragment, local);
      transition_out(if_block1);
      transition_out(codemirror.$$.fragment, local);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if_block0.d();
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div1);
      destroy_component(viewer);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div2);
      if_blocks[current_block_type_index].d();
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div3);
      ctx[24](null);
      destroy_component(codemirror);
      if (detaching)
        detach(t3);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(div4);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  const { register_output, module_editor_ready } = getContext("REPL");
  let { svelteUrl } = $$props;
  let { status } = $$props;
  let { sourceErrorLoc = null } = $$props;
  let { runtimeError = null } = $$props;
  let { embedded = false } = $$props;
  let { relaxed = false } = $$props;
  let { injectedJS } = $$props;
  let { injectedCSS } = $$props;
  let { theme } = $$props;
  let { showAst } = $$props;
  register_output({
    set: async (selected, options) => {
      $$invalidate(12, selected_type = selected.type);
      if (selected.type === "js" || selected.type === "json") {
        js_editor.set(`/* Select a component to see its compiled code */`);
        css_editor.set(`/* Select a component to see its compiled code */`);
        return;
      }
      if (selected.type === "md") {
        $$invalidate(13, markdown = parse(selected.source));
        return;
      }
      const compiled = await compiler.compile(selected, options, showAst);
      if (!js_editor)
        return;
      js_editor.set(compiled.js, "js");
      css_editor.set(compiled.css, "css");
      $$invalidate(14, ast = compiled.ast);
    },
    update: async (selected, options) => {
      if (selected.type === "js" || selected.type === "json")
        return;
      if (selected.type === "md") {
        $$invalidate(13, markdown = parse(selected.source));
        return;
      }
      const compiled = await compiler.compile(selected, options, showAst);
      if (!js_editor)
        return;
      js_editor.update(compiled.js);
      css_editor.update(compiled.css);
      $$invalidate(14, ast = compiled.ast);
    }
  });
  const compiler = is_browser && new Compiler(svelteUrl);
  let js_editor;
  let css_editor;
  let view = "result";
  let selected_type = "";
  let markdown = "";
  let ast;
  const click_handler = () => $$invalidate(11, view = "result");
  const click_handler_12 = () => $$invalidate(11, view = "js");
  const click_handler_2 = () => $$invalidate(11, view = "css");
  const click_handler_3 = () => $$invalidate(11, view = "ast");
  function viewer_error_binding(value) {
    runtimeError = value;
    $$invalidate(0, runtimeError);
  }
  function codemirror_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      js_editor = $$value;
      $$invalidate(9, js_editor);
    });
  }
  function codemirror_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      js_editor = $$value;
      $$invalidate(9, js_editor);
    });
  }
  function codemirror_binding_2($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      css_editor = $$value;
      $$invalidate(10, css_editor);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("svelteUrl" in $$props2)
      $$invalidate(16, svelteUrl = $$props2.svelteUrl);
    if ("status" in $$props2)
      $$invalidate(1, status = $$props2.status);
    if ("sourceErrorLoc" in $$props2)
      $$invalidate(2, sourceErrorLoc = $$props2.sourceErrorLoc);
    if ("runtimeError" in $$props2)
      $$invalidate(0, runtimeError = $$props2.runtimeError);
    if ("embedded" in $$props2)
      $$invalidate(3, embedded = $$props2.embedded);
    if ("relaxed" in $$props2)
      $$invalidate(4, relaxed = $$props2.relaxed);
    if ("injectedJS" in $$props2)
      $$invalidate(5, injectedJS = $$props2.injectedJS);
    if ("injectedCSS" in $$props2)
      $$invalidate(6, injectedCSS = $$props2.injectedCSS);
    if ("theme" in $$props2)
      $$invalidate(7, theme = $$props2.theme);
    if ("showAst" in $$props2)
      $$invalidate(8, showAst = $$props2.showAst);
  };
  return [
    runtimeError,
    status,
    sourceErrorLoc,
    embedded,
    relaxed,
    injectedJS,
    injectedCSS,
    theme,
    showAst,
    js_editor,
    css_editor,
    view,
    selected_type,
    markdown,
    ast,
    module_editor_ready,
    svelteUrl,
    click_handler,
    click_handler_12,
    click_handler_2,
    click_handler_3,
    viewer_error_binding,
    codemirror_binding,
    codemirror_binding_1,
    codemirror_binding_2
  ];
}
class Output extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      svelteUrl: 16,
      status: 1,
      sourceErrorLoc: 2,
      runtimeError: 0,
      embedded: 3,
      relaxed: 4,
      injectedJS: 5,
      injectedCSS: 6,
      theme: 7,
      showAst: 8
    });
  }
}
function WorkerWrapper() {
  return new Worker("/web3-repl-deploy/_app/immutable/assets/index.cb693e92.js", {
    "type": "module"
  });
}
const workers = /* @__PURE__ */ new Map();
let uid = 1;
class Bundler {
  constructor({ packagesUrl, svelteUrl, onstatus }) {
    const hash = `${packagesUrl}:${svelteUrl}`;
    if (!workers.has(hash)) {
      const worker = new WorkerWrapper();
      worker.postMessage({ type: "init", packagesUrl, svelteUrl });
      workers.set(hash, worker);
    }
    this.worker = workers.get(hash);
    this.handlers = /* @__PURE__ */ new Map();
    this.worker.addEventListener("message", (event) => {
      const handler = this.handlers.get(event.data.uid);
      if (handler) {
        if (event.data.type === "status") {
          onstatus(event.data.message);
          return;
        }
        onstatus(null);
        handler(event.data);
        this.handlers.delete(event.data.uid);
      }
    });
  }
  bundle(components) {
    return new Promise((fulfil) => {
      this.handlers.set(uid, fulfil);
      this.worker.postMessage({
        uid,
        type: "bundle",
        components
      });
      uid += 1;
    });
  }
  destroy() {
    this.worker.terminate();
  }
}
var index_svelte_svelte_type_style_lang = "";
function create_a_slot(ctx) {
  let section;
  let componentselector;
  let t;
  let moduleeditor;
  let current;
  componentselector = new ComponentSelector({
    props: {
      show_modified: ctx[9],
      handle_select: ctx[22]
    }
  });
  componentselector.$on("add", ctx[33]);
  componentselector.$on("remove", ctx[34]);
  moduleeditor = new ModuleEditor({
    props: {
      errorLoc: ctx[24],
      theme: ctx[8]
    }
  });
  return {
    c() {
      section = element("section");
      create_component(componentselector.$$.fragment);
      t = space();
      create_component(moduleeditor.$$.fragment);
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { slot: true });
      var section_nodes = children(section);
      claim_component(componentselector.$$.fragment, section_nodes);
      t = claim_space(section_nodes);
      claim_component(moduleeditor.$$.fragment, section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section, "slot", "a");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      mount_component(componentselector, section, null);
      append_hydration(section, t);
      mount_component(moduleeditor, section, null);
      current = true;
    },
    p(ctx2, dirty) {
      const componentselector_changes = {};
      if (dirty[0] & 512)
        componentselector_changes.show_modified = ctx2[9];
      componentselector.$set(componentselector_changes);
      const moduleeditor_changes = {};
      if (dirty[0] & 256)
        moduleeditor_changes.theme = ctx2[8];
      moduleeditor.$set(moduleeditor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(componentselector.$$.fragment, local);
      transition_in(moduleeditor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(componentselector.$$.fragment, local);
      transition_out(moduleeditor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_component(componentselector);
      destroy_component(moduleeditor);
    }
  };
}
function create_b_slot(ctx) {
  let section;
  let output_1;
  let current;
  output_1 = new Output({
    props: {
      svelteUrl: ctx[1],
      status: ctx[15] && ctx[14],
      embedded: ctx[2],
      relaxed: ctx[4],
      injectedJS: ctx[7],
      injectedCSS: ctx[0],
      theme: ctx[8],
      showAst: ctx[10]
    }
  });
  return {
    c() {
      section = element("section");
      create_component(output_1.$$.fragment);
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { slot: true, style: true });
      var section_nodes = children(section);
      claim_component(output_1.$$.fragment, section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section, "slot", "b");
      set_style(section, "height", "100%");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      mount_component(output_1, section, null);
      current = true;
    },
    p(ctx2, dirty) {
      const output_1_changes = {};
      if (dirty[0] & 2)
        output_1_changes.svelteUrl = ctx2[1];
      if (dirty[0] & 49152)
        output_1_changes.status = ctx2[15] && ctx2[14];
      if (dirty[0] & 4)
        output_1_changes.embedded = ctx2[2];
      if (dirty[0] & 16)
        output_1_changes.relaxed = ctx2[4];
      if (dirty[0] & 128)
        output_1_changes.injectedJS = ctx2[7];
      if (dirty[0] & 1)
        output_1_changes.injectedCSS = ctx2[0];
      if (dirty[0] & 256)
        output_1_changes.theme = ctx2[8];
      if (dirty[0] & 1024)
        output_1_changes.showAst = ctx2[10];
      output_1.$set(output_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(output_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(output_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_component(output_1);
    }
  };
}
function create_if_block$3(ctx) {
  let inputoutputtoggle;
  let updating_checked;
  let current;
  function inputoutputtoggle_checked_binding(value) {
    ctx[35](value);
  }
  let inputoutputtoggle_props = {};
  if (ctx[13] !== void 0) {
    inputoutputtoggle_props.checked = ctx[13];
  }
  inputoutputtoggle = new InputOutputToggle({ props: inputoutputtoggle_props });
  binding_callbacks.push(() => bind(inputoutputtoggle, "checked", inputoutputtoggle_checked_binding));
  return {
    c() {
      create_component(inputoutputtoggle.$$.fragment);
    },
    l(nodes) {
      claim_component(inputoutputtoggle.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inputoutputtoggle, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const inputoutputtoggle_changes = {};
      if (!updating_checked && dirty[0] & 8192) {
        updating_checked = true;
        inputoutputtoggle_changes.checked = ctx2[13];
        add_flush_callback(() => updating_checked = false);
      }
      inputoutputtoggle.$set(inputoutputtoggle_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputoutputtoggle.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputoutputtoggle.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inputoutputtoggle, detaching);
    }
  };
}
function create_fragment$4(ctx) {
  let div1;
  let div0;
  let splitpane;
  let t;
  let div1_resize_listener;
  let current;
  let mounted;
  let dispose;
  splitpane = new SplitPane({
    props: {
      type: ctx[3] === "rows" ? "vertical" : "horizontal",
      pos: ctx[12] || ctx[5] ? ctx[6] : ctx[3] === "rows" ? 50 : 60,
      fixed: ctx[5],
      $$slots: { b: [create_b_slot], a: [create_a_slot] },
      $$scope: { ctx }
    }
  });
  let if_block = ctx[16] && create_if_block$3(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(splitpane.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(splitpane.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div1_nodes);
      if (if_block)
        if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "viewport svelte-1k9jy47");
      toggle_class(div0, "output", ctx[13]);
      attr(div1, "class", "container svelte-1k9jy47");
      add_render_callback(() => ctx[36].call(div1));
      toggle_class(div1, "toggleable", ctx[16]);
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      mount_component(splitpane, div0, null);
      append_hydration(div1, t);
      if (if_block)
        if_block.m(div1, null);
      div1_resize_listener = add_resize_listener(div1, ctx[36].bind(div1));
      current = true;
      if (!mounted) {
        dispose = listen(window, "beforeunload", ctx[23]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const splitpane_changes = {};
      if (dirty[0] & 8)
        splitpane_changes.type = ctx2[3] === "rows" ? "vertical" : "horizontal";
      if (dirty[0] & 4200)
        splitpane_changes.pos = ctx2[12] || ctx2[5] ? ctx2[6] : ctx2[3] === "rows" ? 50 : 60;
      if (dirty[0] & 32)
        splitpane_changes.fixed = ctx2[5];
      if (dirty[0] & 51095 | dirty[1] & 1048576) {
        splitpane_changes.$$scope = { dirty, ctx: ctx2 };
      }
      splitpane.$set(splitpane_changes);
      if (dirty[0] & 8192) {
        toggle_class(div0, "output", ctx2[13]);
      }
      if (ctx2[16]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 65536) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty[0] & 65536) {
        toggle_class(div1, "toggleable", ctx2[16]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(splitpane.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(splitpane.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(splitpane);
      if (if_block)
        if_block.d();
      div1_resize_listener();
      mounted = false;
      dispose();
    }
  };
}
function get_component_name(component) {
  return `${component.name}.${component.type}`;
}
function instance$4($$self, $$props, $$invalidate) {
  let mobile;
  let $toggleable;
  let $compile_options;
  let $selected;
  let $components;
  let $bundle;
  let { packagesUrl = "https://unpkg.com" } = $$props;
  let { svelteUrl = `${packagesUrl}/svelte` } = $$props;
  let { embedded = false } = $$props;
  let { orientation = "columns" } = $$props;
  let { relaxed = false } = $$props;
  let { fixed = false } = $$props;
  let { fixedPos = 50 } = $$props;
  let { injectedJS = "" } = $$props;
  let { injectedCSS = "" } = $$props;
  let { theme = "ayu-dark" } = $$props;
  let { showModified = false } = $$props;
  let { showAst = false } = $$props;
  const historyMap = /* @__PURE__ */ new Map();
  function toJSON() {
    return {
      imports: $bundle.imports,
      components: $components
    };
  }
  async function set(data) {
    components.set(data.components);
    selected.set(data.components[0]);
    rebundle();
    await module_editor_ready;
    await output_ready;
    $$invalidate(0, injectedCSS = data.css || "");
    await module_editor.set($selected.source, $selected.type);
    output.set($selected, $compile_options);
    historyMap.clear();
    module_editor.clearHistory();
  }
  function markSaved() {
    components.update((components2) => components2.map((c) => {
      c.modified = false;
      return c;
    }));
    selected.update((c) => c);
  }
  function update(data) {
    const { name: name2, type } = $selected || {};
    components.set(data.components);
    const matched_component = data.components.find((file) => file.name === name2 && file.type === type);
    selected.set(matched_component || data.components[0]);
    $$invalidate(0, injectedCSS = data.css || "");
    if (matched_component) {
      module_editor.update(matched_component.source);
      output.update(matched_component, $compile_options);
    } else {
      module_editor.set(matched_component.source, matched_component.type);
      output.set(matched_component, $compile_options);
      module_editor.clearHistory();
    }
  }
  const dispatch = createEventDispatcher();
  const components = writable([]);
  component_subscribe($$self, components, (value) => $$invalidate(42, $components = value));
  const selected = writable(null);
  component_subscribe($$self, selected, (value) => $$invalidate(32, $selected = value));
  const bundle = writable(null);
  component_subscribe($$self, bundle, (value) => $$invalidate(43, $bundle = value));
  const cursor_index = writable(0);
  const toggleable = writable(false);
  component_subscribe($$self, toggleable, (value) => $$invalidate(16, $toggleable = value));
  const compile_options = writable({
    generate: "dom",
    dev: false,
    css: false,
    hydratable: false,
    customElement: false,
    immutable: false,
    legacy: false,
    accessors: true
  });
  component_subscribe($$self, compile_options, (value) => $$invalidate(31, $compile_options = value));
  let module_editor;
  let output;
  let width = 0;
  let show_output = false;
  let current_token;
  async function rebundle() {
    const token = current_token = {};
    const result = await bundler.bundle($components);
    if (result && token === current_token)
      bundle.set(result);
    if (!result.error)
      dispatch("compiled", {
        components: $components,
        compiled: result.es.code
      });
  }
  let fulfil_module_editor_ready;
  let module_editor_ready = new Promise((f) => fulfil_module_editor_ready = f);
  let fulfil_output_ready;
  let output_ready = new Promise((f) => fulfil_output_ready = f);
  setContext("REPL", {
    components,
    selected,
    bundle,
    compile_options,
    cursor_index,
    toggleable,
    module_editor_ready,
    rebundle,
    navigate: (item) => {
      const match = /^(.+)\.(\w+)$/.exec(item.filename);
      if (!match)
        return;
      const [, name2, type] = match;
      const component = $components.find((c) => c.name === name2 && c.type === type);
      handle_select(component);
      setTimeout(() => {
        module_editor.focus();
        module_editor.setCursor({
          line: item.start.line - 1,
          ch: item.start.column
        });
      }, 0);
    },
    handle_change: (event) => {
      selected.update((component) => {
        if (component.source != event.detail.value) {
          component.source = event.detail.value;
          component.modified = true;
        }
        return component;
      });
      components.update((component) => {
        if (component.name === $selected.name) {
          return $selected;
        }
        return component;
      });
      output.update($selected, $compile_options);
      rebundle();
      dispatch("change", { components: $components });
    },
    register_module_editor(editor) {
      module_editor = editor;
      module_editor.cursorIndex.subscribe((index) => {
        cursor_index.set(index);
      });
      fulfil_module_editor_ready();
    },
    register_output(handlers) {
      $$invalidate(30, output = handlers);
      fulfil_output_ready();
    },
    request_focus() {
      module_editor.focus();
    },
    mark_text({ from: from3, to }) {
      module_editor.unmarkText();
      module_editor.markText({ from: from3, to });
    },
    unmark_text() {
      module_editor.unmarkText();
    }
  });
  function handle_select(component) {
    historyMap.set(get_component_name($selected), module_editor.getHistory());
    selected.set(component);
    module_editor.set(component.source, component.type);
    if (historyMap.has(get_component_name($selected))) {
      module_editor.setHistory(historyMap.get(get_component_name($selected)));
    } else {
      module_editor.clearHistory();
    }
    output.set($selected, $compile_options);
  }
  function beforeUnload(event) {
    if (showModified && $components.find((component) => component.modified)) {
      event.preventDefault();
      event.returnValue = "";
    }
  }
  let sourceErrorLoc;
  let status = null;
  let status_visible = false;
  let status_timeout = null;
  const bundler = is_browser && new Bundler({
    packagesUrl,
    svelteUrl,
    onstatus: (message) => {
      if (message) {
        if (!status_visible && !status_timeout) {
          status_timeout = setTimeout(() => {
            $$invalidate(15, status_visible = true);
          }, 400);
        }
      } else {
        clearTimeout(status_timeout);
        $$invalidate(15, status_visible = false);
        status_timeout = null;
      }
      $$invalidate(14, status = message);
    }
  });
  function add_handler(event) {
    bubble.call(this, $$self, event);
  }
  function remove_handler(event) {
    bubble.call(this, $$self, event);
  }
  function inputoutputtoggle_checked_binding(value) {
    show_output = value;
    $$invalidate(13, show_output);
  }
  function div1_elementresize_handler() {
    width = this.clientWidth;
    $$invalidate(11, width);
  }
  $$self.$$set = ($$props2) => {
    if ("packagesUrl" in $$props2)
      $$invalidate(25, packagesUrl = $$props2.packagesUrl);
    if ("svelteUrl" in $$props2)
      $$invalidate(1, svelteUrl = $$props2.svelteUrl);
    if ("embedded" in $$props2)
      $$invalidate(2, embedded = $$props2.embedded);
    if ("orientation" in $$props2)
      $$invalidate(3, orientation = $$props2.orientation);
    if ("relaxed" in $$props2)
      $$invalidate(4, relaxed = $$props2.relaxed);
    if ("fixed" in $$props2)
      $$invalidate(5, fixed = $$props2.fixed);
    if ("fixedPos" in $$props2)
      $$invalidate(6, fixedPos = $$props2.fixedPos);
    if ("injectedJS" in $$props2)
      $$invalidate(7, injectedJS = $$props2.injectedJS);
    if ("injectedCSS" in $$props2)
      $$invalidate(0, injectedCSS = $$props2.injectedCSS);
    if ("theme" in $$props2)
      $$invalidate(8, theme = $$props2.theme);
    if ("showModified" in $$props2)
      $$invalidate(9, showModified = $$props2.showModified);
    if ("showAst" in $$props2)
      $$invalidate(10, showAst = $$props2.showAst);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 1073741824 | $$self.$$.dirty[1] & 3) {
      if (output && $selected) {
        output.update($selected, $compile_options);
      }
    }
    if ($$self.$$.dirty[0] & 2048) {
      $$invalidate(12, mobile = width < 540);
    }
    if ($$self.$$.dirty[0] & 4104) {
      set_store_value(toggleable, $toggleable = mobile && orientation === "columns", $toggleable);
    }
  };
  return [
    injectedCSS,
    svelteUrl,
    embedded,
    orientation,
    relaxed,
    fixed,
    fixedPos,
    injectedJS,
    theme,
    showModified,
    showAst,
    width,
    mobile,
    show_output,
    status,
    status_visible,
    $toggleable,
    components,
    selected,
    bundle,
    toggleable,
    compile_options,
    handle_select,
    beforeUnload,
    sourceErrorLoc,
    packagesUrl,
    toJSON,
    set,
    markSaved,
    update,
    output,
    $compile_options,
    $selected,
    add_handler,
    remove_handler,
    inputoutputtoggle_checked_binding,
    div1_elementresize_handler
  ];
}
class Package extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      packagesUrl: 25,
      svelteUrl: 1,
      embedded: 2,
      orientation: 3,
      relaxed: 4,
      fixed: 5,
      fixedPos: 6,
      injectedJS: 7,
      injectedCSS: 0,
      theme: 8,
      showModified: 9,
      showAst: 10,
      toJSON: 26,
      set: 27,
      markSaved: 28,
      update: 29
    }, null, [-1, -1]);
  }
  get toJSON() {
    return this.$$.ctx[26];
  }
  get set() {
    return this.$$.ctx[27];
  }
  get markSaved() {
    return this.$$.ctx[28];
  }
  get update() {
    return this.$$.ctx[29];
  }
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function assign(obj, props) {
  for (const key in props) {
    Object.defineProperty(obj, key, {
      value: props[key],
      enumerable: true,
      configurable: true
    });
  }
  return obj;
}
function createError(err, code2, props) {
  if (!err || typeof err === "string") {
    throw new TypeError("Please pass an Error to err-code");
  }
  if (!props) {
    props = {};
  }
  if (typeof code2 === "object") {
    props = code2;
    code2 = "";
  }
  if (code2) {
    props.code = code2;
  }
  try {
    return assign(err, props);
  } catch (_) {
    props.message = err.message;
    props.stack = err.stack;
    const ErrClass = function() {
    };
    ErrClass.prototype = Object.create(Object.getPrototypeOf(err));
    const output = assign(new ErrClass(), props);
    return output;
  }
}
var errCode = createError;
var indexMinimal = {};
var minimal$1 = {};
var aspromise = asPromise;
function asPromise(fn, ctx) {
  var params = new Array(arguments.length - 1), offset = 0, index = 2, pending2 = true;
  while (index < arguments.length)
    params[offset++] = arguments[index++];
  return new Promise(function executor(resolve, reject) {
    params[offset] = function callback(err) {
      if (pending2) {
        pending2 = false;
        if (err)
          reject(err);
        else {
          var params2 = new Array(arguments.length - 1), offset2 = 0;
          while (offset2 < params2.length)
            params2[offset2++] = arguments[offset2];
          resolve.apply(null, params2);
        }
      }
    };
    try {
      fn.apply(ctx || null, params);
    } catch (err) {
      if (pending2) {
        pending2 = false;
        reject(err);
      }
    }
  });
}
var base64$3 = {};
(function(exports) {
  var base642 = exports;
  base642.length = function length3(string2) {
    var p = string2.length;
    if (!p)
      return 0;
    var n = 0;
    while (--p % 4 > 1 && string2.charAt(p) === "=")
      ++n;
    return Math.ceil(string2.length * 3) / 4 - n;
  };
  var b64 = new Array(64);
  var s64 = new Array(123);
  for (var i2 = 0; i2 < 64; )
    s64[b64[i2] = i2 < 26 ? i2 + 65 : i2 < 52 ? i2 + 71 : i2 < 62 ? i2 - 4 : i2 - 59 | 43] = i2++;
  base642.encode = function encode2(buffer, start, end2) {
    var parts = null, chunk = [];
    var i3 = 0, j = 0, t;
    while (start < end2) {
      var b = buffer[start++];
      switch (j) {
        case 0:
          chunk[i3++] = b64[b >> 2];
          t = (b & 3) << 4;
          j = 1;
          break;
        case 1:
          chunk[i3++] = b64[t | b >> 4];
          t = (b & 15) << 2;
          j = 2;
          break;
        case 2:
          chunk[i3++] = b64[t | b >> 6];
          chunk[i3++] = b64[b & 63];
          j = 0;
          break;
      }
      if (i3 > 8191) {
        (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
        i3 = 0;
      }
    }
    if (j) {
      chunk[i3++] = b64[t];
      chunk[i3++] = 61;
      if (j === 1)
        chunk[i3++] = 61;
    }
    if (parts) {
      if (i3)
        parts.push(String.fromCharCode.apply(String, chunk.slice(0, i3)));
      return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i3));
  };
  var invalidEncoding = "invalid encoding";
  base642.decode = function decode2(string2, buffer, offset) {
    var start = offset;
    var j = 0, t;
    for (var i3 = 0; i3 < string2.length; ) {
      var c = string2.charCodeAt(i3++);
      if (c === 61 && j > 1)
        break;
      if ((c = s64[c]) === void 0)
        throw Error(invalidEncoding);
      switch (j) {
        case 0:
          t = c;
          j = 1;
          break;
        case 1:
          buffer[offset++] = t << 2 | (c & 48) >> 4;
          t = c;
          j = 2;
          break;
        case 2:
          buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
          t = c;
          j = 3;
          break;
        case 3:
          buffer[offset++] = (t & 3) << 6 | c;
          j = 0;
          break;
      }
    }
    if (j === 1)
      throw Error(invalidEncoding);
    return offset - start;
  };
  base642.test = function test(string2) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string2);
  };
})(base64$3);
var eventemitter = EventEmitter;
function EventEmitter() {
  this._listeners = {};
}
EventEmitter.prototype.on = function on(evt, fn, ctx) {
  (this._listeners[evt] || (this._listeners[evt] = [])).push({
    fn,
    ctx: ctx || this
  });
  return this;
};
EventEmitter.prototype.off = function off(evt, fn) {
  if (evt === void 0)
    this._listeners = {};
  else {
    if (fn === void 0)
      this._listeners[evt] = [];
    else {
      var listeners = this._listeners[evt];
      for (var i2 = 0; i2 < listeners.length; )
        if (listeners[i2].fn === fn)
          listeners.splice(i2, 1);
        else
          ++i2;
    }
  }
  return this;
};
EventEmitter.prototype.emit = function emit(evt) {
  var listeners = this._listeners[evt];
  if (listeners) {
    var args = [], i2 = 1;
    for (; i2 < arguments.length; )
      args.push(arguments[i2++]);
    for (i2 = 0; i2 < listeners.length; )
      listeners[i2].fn.apply(listeners[i2++].ctx, args);
  }
  return this;
};
var float = factory(factory);
function factory(exports) {
  if (typeof Float32Array !== "undefined")
    (function() {
      var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
      function writeFloat_f32_cpy(val, buf, pos) {
        f32[0] = val;
        buf[pos] = f8b[0];
        buf[pos + 1] = f8b[1];
        buf[pos + 2] = f8b[2];
        buf[pos + 3] = f8b[3];
      }
      function writeFloat_f32_rev(val, buf, pos) {
        f32[0] = val;
        buf[pos] = f8b[3];
        buf[pos + 1] = f8b[2];
        buf[pos + 2] = f8b[1];
        buf[pos + 3] = f8b[0];
      }
      exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
      exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
      function readFloat_f32_cpy(buf, pos) {
        f8b[0] = buf[pos];
        f8b[1] = buf[pos + 1];
        f8b[2] = buf[pos + 2];
        f8b[3] = buf[pos + 3];
        return f32[0];
      }
      function readFloat_f32_rev(buf, pos) {
        f8b[3] = buf[pos];
        f8b[2] = buf[pos + 1];
        f8b[1] = buf[pos + 2];
        f8b[0] = buf[pos + 3];
        return f32[0];
      }
      exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
      exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
    })();
  else
    (function() {
      function writeFloat_ieee754(writeUint, val, buf, pos) {
        var sign = val < 0 ? 1 : 0;
        if (sign)
          val = -val;
        if (val === 0)
          writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos);
        else if (isNaN(val))
          writeUint(2143289344, buf, pos);
        else if (val > 34028234663852886e22)
          writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
        else if (val < 11754943508222875e-54)
          writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
        else {
          var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
          writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
        }
      }
      exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
      exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
      function readFloat_ieee754(readUint, buf, pos) {
        var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
        return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
      }
      exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
      exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
    })();
  if (typeof Float64Array !== "undefined")
    (function() {
      var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
      function writeDouble_f64_cpy(val, buf, pos) {
        f64[0] = val;
        buf[pos] = f8b[0];
        buf[pos + 1] = f8b[1];
        buf[pos + 2] = f8b[2];
        buf[pos + 3] = f8b[3];
        buf[pos + 4] = f8b[4];
        buf[pos + 5] = f8b[5];
        buf[pos + 6] = f8b[6];
        buf[pos + 7] = f8b[7];
      }
      function writeDouble_f64_rev(val, buf, pos) {
        f64[0] = val;
        buf[pos] = f8b[7];
        buf[pos + 1] = f8b[6];
        buf[pos + 2] = f8b[5];
        buf[pos + 3] = f8b[4];
        buf[pos + 4] = f8b[3];
        buf[pos + 5] = f8b[2];
        buf[pos + 6] = f8b[1];
        buf[pos + 7] = f8b[0];
      }
      exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
      exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
      function readDouble_f64_cpy(buf, pos) {
        f8b[0] = buf[pos];
        f8b[1] = buf[pos + 1];
        f8b[2] = buf[pos + 2];
        f8b[3] = buf[pos + 3];
        f8b[4] = buf[pos + 4];
        f8b[5] = buf[pos + 5];
        f8b[6] = buf[pos + 6];
        f8b[7] = buf[pos + 7];
        return f64[0];
      }
      function readDouble_f64_rev(buf, pos) {
        f8b[7] = buf[pos];
        f8b[6] = buf[pos + 1];
        f8b[5] = buf[pos + 2];
        f8b[4] = buf[pos + 3];
        f8b[3] = buf[pos + 4];
        f8b[2] = buf[pos + 5];
        f8b[1] = buf[pos + 6];
        f8b[0] = buf[pos + 7];
        return f64[0];
      }
      exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
      exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
    })();
  else
    (function() {
      function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
        var sign = val < 0 ? 1 : 0;
        if (sign)
          val = -val;
        if (val === 0) {
          writeUint(0, buf, pos + off0);
          writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos + off1);
        } else if (isNaN(val)) {
          writeUint(0, buf, pos + off0);
          writeUint(2146959360, buf, pos + off1);
        } else if (val > 17976931348623157e292) {
          writeUint(0, buf, pos + off0);
          writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
        } else {
          var mantissa;
          if (val < 22250738585072014e-324) {
            mantissa = val / 5e-324;
            writeUint(mantissa >>> 0, buf, pos + off0);
            writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
          } else {
            var exponent = Math.floor(Math.log(val) / Math.LN2);
            if (exponent === 1024)
              exponent = 1023;
            mantissa = val * Math.pow(2, -exponent);
            writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
            writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
          }
        }
      }
      exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
      exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
      function readDouble_ieee754(readUint, off0, off1, buf, pos) {
        var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
        var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
        return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
      }
      exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
      exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
    })();
  return exports;
}
function writeUintLE(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}
function writeUintBE(val, buf, pos) {
  buf[pos] = val >>> 24;
  buf[pos + 1] = val >>> 16 & 255;
  buf[pos + 2] = val >>> 8 & 255;
  buf[pos + 3] = val & 255;
}
function readUintLE(buf, pos) {
  return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
}
function readUintBE(buf, pos) {
  return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
}
var inquire_1 = inquire;
function inquire(moduleName) {
  try {
    var mod = eval("quire".replace(/^/, "re"))(moduleName);
    if (mod && (mod.length || Object.keys(mod).length))
      return mod;
  } catch (e) {
  }
  return null;
}
var utf8$2 = {};
(function(exports) {
  var utf82 = exports;
  utf82.length = function utf8_length(string2) {
    var len = 0, c = 0;
    for (var i2 = 0; i2 < string2.length; ++i2) {
      c = string2.charCodeAt(i2);
      if (c < 128)
        len += 1;
      else if (c < 2048)
        len += 2;
      else if ((c & 64512) === 55296 && (string2.charCodeAt(i2 + 1) & 64512) === 56320) {
        ++i2;
        len += 4;
      } else
        len += 3;
    }
    return len;
  };
  utf82.read = function utf8_read(buffer, start, end2) {
    var len = end2 - start;
    if (len < 1)
      return "";
    var parts = null, chunk = [], i2 = 0, t;
    while (start < end2) {
      t = buffer[start++];
      if (t < 128)
        chunk[i2++] = t;
      else if (t > 191 && t < 224)
        chunk[i2++] = (t & 31) << 6 | buffer[start++] & 63;
      else if (t > 239 && t < 365) {
        t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
        chunk[i2++] = 55296 + (t >> 10);
        chunk[i2++] = 56320 + (t & 1023);
      } else
        chunk[i2++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
      if (i2 > 8191) {
        (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
        i2 = 0;
      }
    }
    if (parts) {
      if (i2)
        parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
      return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i2));
  };
  utf82.write = function utf8_write(string2, buffer, offset) {
    var start = offset, c1, c2;
    for (var i2 = 0; i2 < string2.length; ++i2) {
      c1 = string2.charCodeAt(i2);
      if (c1 < 128) {
        buffer[offset++] = c1;
      } else if (c1 < 2048) {
        buffer[offset++] = c1 >> 6 | 192;
        buffer[offset++] = c1 & 63 | 128;
      } else if ((c1 & 64512) === 55296 && ((c2 = string2.charCodeAt(i2 + 1)) & 64512) === 56320) {
        c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
        ++i2;
        buffer[offset++] = c1 >> 18 | 240;
        buffer[offset++] = c1 >> 12 & 63 | 128;
        buffer[offset++] = c1 >> 6 & 63 | 128;
        buffer[offset++] = c1 & 63 | 128;
      } else {
        buffer[offset++] = c1 >> 12 | 224;
        buffer[offset++] = c1 >> 6 & 63 | 128;
        buffer[offset++] = c1 & 63 | 128;
      }
    }
    return offset - start;
  };
})(utf8$2);
var pool_1 = pool;
function pool(alloc2, slice, size) {
  var SIZE = size || 8192;
  var MAX = SIZE >>> 1;
  var slab = null;
  var offset = SIZE;
  return function pool_alloc(size2) {
    if (size2 < 1 || size2 > MAX)
      return alloc2(size2);
    if (offset + size2 > SIZE) {
      slab = alloc2(SIZE);
      offset = 0;
    }
    var buf = slice.call(slab, offset, offset += size2);
    if (offset & 7)
      offset = (offset | 7) + 1;
    return buf;
  };
}
var longbits = LongBits$2;
var util$5 = minimal$1;
function LongBits$2(lo, hi) {
  this.lo = lo >>> 0;
  this.hi = hi >>> 0;
}
var zero = LongBits$2.zero = new LongBits$2(0, 0);
zero.toNumber = function() {
  return 0;
};
zero.zzEncode = zero.zzDecode = function() {
  return this;
};
zero.length = function() {
  return 1;
};
var zeroHash = LongBits$2.zeroHash = "\0\0\0\0\0\0\0\0";
LongBits$2.fromNumber = function fromNumber(value) {
  if (value === 0)
    return zero;
  var sign = value < 0;
  if (sign)
    value = -value;
  var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
  if (sign) {
    hi = ~hi >>> 0;
    lo = ~lo >>> 0;
    if (++lo > 4294967295) {
      lo = 0;
      if (++hi > 4294967295)
        hi = 0;
    }
  }
  return new LongBits$2(lo, hi);
};
LongBits$2.from = function from2(value) {
  if (typeof value === "number")
    return LongBits$2.fromNumber(value);
  if (util$5.isString(value)) {
    if (util$5.Long)
      value = util$5.Long.fromString(value);
    else
      return LongBits$2.fromNumber(parseInt(value, 10));
  }
  return value.low || value.high ? new LongBits$2(value.low >>> 0, value.high >>> 0) : zero;
};
LongBits$2.prototype.toNumber = function toNumber(unsigned) {
  if (!unsigned && this.hi >>> 31) {
    var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
    if (!lo)
      hi = hi + 1 >>> 0;
    return -(lo + hi * 4294967296);
  }
  return this.lo + this.hi * 4294967296;
};
LongBits$2.prototype.toLong = function toLong(unsigned) {
  return util$5.Long ? new util$5.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};
var charCodeAt = String.prototype.charCodeAt;
LongBits$2.fromHash = function fromHash(hash) {
  if (hash === zeroHash)
    return zero;
  return new LongBits$2((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
};
LongBits$2.prototype.toHash = function toHash() {
  return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
LongBits$2.prototype.zzEncode = function zzEncode() {
  var mask = this.hi >> 31;
  this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
  this.lo = (this.lo << 1 ^ mask) >>> 0;
  return this;
};
LongBits$2.prototype.zzDecode = function zzDecode() {
  var mask = -(this.lo & 1);
  this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
  this.hi = (this.hi >>> 1 ^ mask) >>> 0;
  return this;
};
LongBits$2.prototype.length = function length2() {
  var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
  return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
};
(function(exports) {
  var util2 = exports;
  util2.asPromise = aspromise;
  util2.base64 = base64$3;
  util2.EventEmitter = eventemitter;
  util2.float = float;
  util2.inquire = inquire_1;
  util2.utf8 = utf8$2;
  util2.pool = pool_1;
  util2.LongBits = longbits;
  util2.isNode = Boolean(typeof commonjsGlobal !== "undefined" && commonjsGlobal && commonjsGlobal.process && commonjsGlobal.process.versions && commonjsGlobal.process.versions.node);
  util2.global = util2.isNode && commonjsGlobal || typeof window !== "undefined" && window || typeof self !== "undefined" && self || commonjsGlobal;
  util2.emptyArray = Object.freeze ? Object.freeze([]) : [];
  util2.emptyObject = Object.freeze ? Object.freeze({}) : {};
  util2.isInteger = Number.isInteger || function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  util2.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
  };
  util2.isObject = function isObject(value) {
    return value && typeof value === "object";
  };
  util2.isset = util2.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop))
      return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
  };
  util2.Buffer = function() {
    try {
      var Buffer2 = util2.inquire("buffer").Buffer;
      return Buffer2.prototype.utf8Write ? Buffer2 : null;
    } catch (e) {
      return null;
    }
  }();
  util2._Buffer_from = null;
  util2._Buffer_allocUnsafe = null;
  util2.newBuffer = function newBuffer(sizeOrArray) {
    return typeof sizeOrArray === "number" ? util2.Buffer ? util2._Buffer_allocUnsafe(sizeOrArray) : new util2.Array(sizeOrArray) : util2.Buffer ? util2._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
  };
  util2.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  util2.Long = util2.global.dcodeIO && util2.global.dcodeIO.Long || util2.global.Long || util2.inquire("long");
  util2.key2Re = /^true|false|0|1$/;
  util2.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  util2.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  util2.longToHash = function longToHash(value) {
    return value ? util2.LongBits.from(value).toHash() : util2.LongBits.zeroHash;
  };
  util2.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util2.LongBits.fromHash(hash);
    if (util2.Long)
      return util2.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
  };
  function merge2(dst, src2, ifNotSet) {
    for (var keys = Object.keys(src2), i2 = 0; i2 < keys.length; ++i2)
      if (dst[keys[i2]] === void 0 || !ifNotSet)
        dst[keys[i2]] = src2[keys[i2]];
    return dst;
  }
  util2.merge = merge2;
  util2.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
  };
  function newError(name2) {
    function CustomError(message, properties) {
      if (!(this instanceof CustomError))
        return new CustomError(message, properties);
      Object.defineProperty(this, "message", { get: function() {
        return message;
      } });
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, CustomError);
      else
        Object.defineProperty(this, "stack", { value: new Error().stack || "" });
      if (properties)
        merge2(this, properties);
    }
    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
    Object.defineProperty(CustomError.prototype, "name", { get: function() {
      return name2;
    } });
    CustomError.prototype.toString = function toString2() {
      return this.name + ": " + this.message;
    };
    return CustomError;
  }
  util2.newError = newError;
  util2.ProtocolError = newError("ProtocolError");
  util2.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i2 = 0; i2 < fieldNames.length; ++i2)
      fieldMap[fieldNames[i2]] = 1;
    return function() {
      for (var keys = Object.keys(this), i3 = keys.length - 1; i3 > -1; --i3)
        if (fieldMap[keys[i3]] === 1 && this[keys[i3]] !== void 0 && this[keys[i3]] !== null)
          return keys[i3];
    };
  };
  util2.oneOfSetter = function setOneOf(fieldNames) {
    return function(name2) {
      for (var i2 = 0; i2 < fieldNames.length; ++i2)
        if (fieldNames[i2] !== name2)
          delete this[fieldNames[i2]];
    };
  };
  util2.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
  };
  util2._configure = function() {
    var Buffer2 = util2.Buffer;
    if (!Buffer2) {
      util2._Buffer_from = util2._Buffer_allocUnsafe = null;
      return;
    }
    util2._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || function Buffer_from(value, encoding) {
      return new Buffer2(value, encoding);
    };
    util2._Buffer_allocUnsafe = Buffer2.allocUnsafe || function Buffer_allocUnsafe(size) {
      return new Buffer2(size);
    };
  };
})(minimal$1);
var writer = Writer$1;
var util$4 = minimal$1;
var BufferWriter$1;
var LongBits$1 = util$4.LongBits, base64$2 = util$4.base64, utf8$1 = util$4.utf8;
function Op(fn, len, val) {
  this.fn = fn;
  this.len = len;
  this.next = void 0;
  this.val = val;
}
function noop() {
}
function State(writer2) {
  this.head = writer2.head;
  this.tail = writer2.tail;
  this.len = writer2.len;
  this.next = writer2.states;
}
function Writer$1() {
  this.len = 0;
  this.head = new Op(noop, 0, 0);
  this.tail = this.head;
  this.states = null;
}
var create$2 = function create2() {
  return util$4.Buffer ? function create_buffer_setup() {
    return (Writer$1.create = function create_buffer() {
      return new BufferWriter$1();
    })();
  } : function create_array3() {
    return new Writer$1();
  };
};
Writer$1.create = create$2();
Writer$1.alloc = function alloc(size) {
  return new util$4.Array(size);
};
if (util$4.Array !== Array)
  Writer$1.alloc = util$4.pool(Writer$1.alloc, util$4.Array.prototype.subarray);
Writer$1.prototype._push = function push(fn, len, val) {
  this.tail = this.tail.next = new Op(fn, len, val);
  this.len += len;
  return this;
};
function writeByte(val, buf, pos) {
  buf[pos] = val & 255;
}
function writeVarint32(val, buf, pos) {
  while (val > 127) {
    buf[pos++] = val & 127 | 128;
    val >>>= 7;
  }
  buf[pos] = val;
}
function VarintOp(len, val) {
  this.len = len;
  this.next = void 0;
  this.val = val;
}
VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;
Writer$1.prototype.uint32 = function write_uint32(value) {
  this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
  return this;
};
Writer$1.prototype.int32 = function write_int32(value) {
  return value < 0 ? this._push(writeVarint64, 10, LongBits$1.fromNumber(value)) : this.uint32(value);
};
Writer$1.prototype.sint32 = function write_sint32(value) {
  return this.uint32((value << 1 ^ value >> 31) >>> 0);
};
function writeVarint64(val, buf, pos) {
  while (val.hi) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
    val.hi >>>= 7;
  }
  while (val.lo > 127) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = val.lo >>> 7;
  }
  buf[pos++] = val.lo;
}
Writer$1.prototype.uint64 = function write_uint64(value) {
  var bits = LongBits$1.from(value);
  return this._push(writeVarint64, bits.length(), bits);
};
Writer$1.prototype.int64 = Writer$1.prototype.uint64;
Writer$1.prototype.sint64 = function write_sint64(value) {
  var bits = LongBits$1.from(value).zzEncode();
  return this._push(writeVarint64, bits.length(), bits);
};
Writer$1.prototype.bool = function write_bool(value) {
  return this._push(writeByte, 1, value ? 1 : 0);
};
function writeFixed32(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}
Writer$1.prototype.fixed32 = function write_fixed32(value) {
  return this._push(writeFixed32, 4, value >>> 0);
};
Writer$1.prototype.sfixed32 = Writer$1.prototype.fixed32;
Writer$1.prototype.fixed64 = function write_fixed64(value) {
  var bits = LongBits$1.from(value);
  return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};
Writer$1.prototype.sfixed64 = Writer$1.prototype.fixed64;
Writer$1.prototype.float = function write_float(value) {
  return this._push(util$4.float.writeFloatLE, 4, value);
};
Writer$1.prototype.double = function write_double(value) {
  return this._push(util$4.float.writeDoubleLE, 8, value);
};
var writeBytes = util$4.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
  buf.set(val, pos);
} : function writeBytes_for(val, buf, pos) {
  for (var i2 = 0; i2 < val.length; ++i2)
    buf[pos + i2] = val[i2];
};
Writer$1.prototype.bytes = function write_bytes(value) {
  var len = value.length >>> 0;
  if (!len)
    return this._push(writeByte, 1, 0);
  if (util$4.isString(value)) {
    var buf = Writer$1.alloc(len = base64$2.length(value));
    base64$2.decode(value, buf, 0);
    value = buf;
  }
  return this.uint32(len)._push(writeBytes, len, value);
};
Writer$1.prototype.string = function write_string(value) {
  var len = utf8$1.length(value);
  return len ? this.uint32(len)._push(utf8$1.write, len, value) : this._push(writeByte, 1, 0);
};
Writer$1.prototype.fork = function fork() {
  this.states = new State(this);
  this.head = this.tail = new Op(noop, 0, 0);
  this.len = 0;
  return this;
};
Writer$1.prototype.reset = function reset() {
  if (this.states) {
    this.head = this.states.head;
    this.tail = this.states.tail;
    this.len = this.states.len;
    this.states = this.states.next;
  } else {
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
  }
  return this;
};
Writer$1.prototype.ldelim = function ldelim() {
  var head = this.head, tail = this.tail, len = this.len;
  this.reset().uint32(len);
  if (len) {
    this.tail.next = head.next;
    this.tail = tail;
    this.len += len;
  }
  return this;
};
Writer$1.prototype.finish = function finish() {
  var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
  while (head) {
    head.fn(head.val, buf, pos);
    pos += head.len;
    head = head.next;
  }
  return buf;
};
Writer$1._configure = function(BufferWriter_) {
  BufferWriter$1 = BufferWriter_;
  Writer$1.create = create$2();
  BufferWriter$1._configure();
};
var writer_buffer = BufferWriter;
var Writer = writer;
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
var util$3 = minimal$1;
function BufferWriter() {
  Writer.call(this);
}
BufferWriter._configure = function() {
  BufferWriter.alloc = util$3._Buffer_allocUnsafe;
  BufferWriter.writeBytesBuffer = util$3.Buffer && util$3.Buffer.prototype instanceof Uint8Array && util$3.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
    buf.set(val, pos);
  } : function writeBytesBuffer_copy(val, buf, pos) {
    if (val.copy)
      val.copy(buf, pos, 0, val.length);
    else
      for (var i2 = 0; i2 < val.length; )
        buf[pos++] = val[i2++];
  };
};
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
  if (util$3.isString(value))
    value = util$3._Buffer_from(value, "base64");
  var len = value.length >>> 0;
  this.uint32(len);
  if (len)
    this._push(BufferWriter.writeBytesBuffer, len, value);
  return this;
};
function writeStringBuffer(val, buf, pos) {
  if (val.length < 40)
    util$3.utf8.write(val, buf, pos);
  else if (buf.utf8Write)
    buf.utf8Write(val, pos);
  else
    buf.write(val, pos);
}
BufferWriter.prototype.string = function write_string_buffer(value) {
  var len = util$3.Buffer.byteLength(value);
  this.uint32(len);
  if (len)
    this._push(writeStringBuffer, len, value);
  return this;
};
BufferWriter._configure();
var reader = Reader$1;
var util$2 = minimal$1;
var BufferReader$1;
var LongBits = util$2.LongBits, utf8 = util$2.utf8;
function indexOutOfRange(reader2, writeLength) {
  return RangeError("index out of range: " + reader2.pos + " + " + (writeLength || 1) + " > " + reader2.len);
}
function Reader$1(buffer) {
  this.buf = buffer;
  this.pos = 0;
  this.len = buffer.length;
}
var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
  if (buffer instanceof Uint8Array || Array.isArray(buffer))
    return new Reader$1(buffer);
  throw Error("illegal buffer");
} : function create_array2(buffer) {
  if (Array.isArray(buffer))
    return new Reader$1(buffer);
  throw Error("illegal buffer");
};
var create$1 = function create3() {
  return util$2.Buffer ? function create_buffer_setup(buffer) {
    return (Reader$1.create = function create_buffer(buffer2) {
      return util$2.Buffer.isBuffer(buffer2) ? new BufferReader$1(buffer2) : create_array(buffer2);
    })(buffer);
  } : create_array;
};
Reader$1.create = create$1();
Reader$1.prototype._slice = util$2.Array.prototype.subarray || util$2.Array.prototype.slice;
Reader$1.prototype.uint32 = function read_uint32_setup() {
  var value = 4294967295;
  return function read_uint32() {
    value = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw indexOutOfRange(this, 10);
    }
    return value;
  };
}();
Reader$1.prototype.int32 = function read_int32() {
  return this.uint32() | 0;
};
Reader$1.prototype.sint32 = function read_sint32() {
  var value = this.uint32();
  return value >>> 1 ^ -(value & 1) | 0;
};
function readLongVarint() {
  var bits = new LongBits(0, 0);
  var i2 = 0;
  if (this.len - this.pos > 4) {
    for (; i2 < 4; ++i2) {
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i2 * 7) >>> 0;
      if (this.buf[this.pos++] < 128)
        return bits;
    }
    bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
    bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
    if (this.buf[this.pos++] < 128)
      return bits;
    i2 = 0;
  } else {
    for (; i2 < 3; ++i2) {
      if (this.pos >= this.len)
        throw indexOutOfRange(this);
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i2 * 7) >>> 0;
      if (this.buf[this.pos++] < 128)
        return bits;
    }
    bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i2 * 7) >>> 0;
    return bits;
  }
  if (this.len - this.pos > 4) {
    for (; i2 < 5; ++i2) {
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i2 * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128)
        return bits;
    }
  } else {
    for (; i2 < 5; ++i2) {
      if (this.pos >= this.len)
        throw indexOutOfRange(this);
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i2 * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128)
        return bits;
    }
  }
  throw Error("invalid varint encoding");
}
Reader$1.prototype.bool = function read_bool() {
  return this.uint32() !== 0;
};
function readFixed32_end(buf, end2) {
  return (buf[end2 - 4] | buf[end2 - 3] << 8 | buf[end2 - 2] << 16 | buf[end2 - 1] << 24) >>> 0;
}
Reader$1.prototype.fixed32 = function read_fixed32() {
  if (this.pos + 4 > this.len)
    throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4);
};
Reader$1.prototype.sfixed32 = function read_sfixed32() {
  if (this.pos + 4 > this.len)
    throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4) | 0;
};
function readFixed64() {
  if (this.pos + 8 > this.len)
    throw indexOutOfRange(this, 8);
  return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}
Reader$1.prototype.float = function read_float() {
  if (this.pos + 4 > this.len)
    throw indexOutOfRange(this, 4);
  var value = util$2.float.readFloatLE(this.buf, this.pos);
  this.pos += 4;
  return value;
};
Reader$1.prototype.double = function read_double() {
  if (this.pos + 8 > this.len)
    throw indexOutOfRange(this, 4);
  var value = util$2.float.readDoubleLE(this.buf, this.pos);
  this.pos += 8;
  return value;
};
Reader$1.prototype.bytes = function read_bytes() {
  var length3 = this.uint32(), start = this.pos, end2 = this.pos + length3;
  if (end2 > this.len)
    throw indexOutOfRange(this, length3);
  this.pos += length3;
  if (Array.isArray(this.buf))
    return this.buf.slice(start, end2);
  return start === end2 ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end2);
};
Reader$1.prototype.string = function read_string() {
  var bytes = this.bytes();
  return utf8.read(bytes, 0, bytes.length);
};
Reader$1.prototype.skip = function skip(length3) {
  if (typeof length3 === "number") {
    if (this.pos + length3 > this.len)
      throw indexOutOfRange(this, length3);
    this.pos += length3;
  } else {
    do {
      if (this.pos >= this.len)
        throw indexOutOfRange(this);
    } while (this.buf[this.pos++] & 128);
  }
  return this;
};
Reader$1.prototype.skipType = function(wireType) {
  switch (wireType) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      while ((wireType = this.uint32() & 7) !== 4) {
        this.skipType(wireType);
      }
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + wireType + " at offset " + this.pos);
  }
  return this;
};
Reader$1._configure = function(BufferReader_) {
  BufferReader$1 = BufferReader_;
  Reader$1.create = create$1();
  BufferReader$1._configure();
  var fn = util$2.Long ? "toLong" : "toNumber";
  util$2.merge(Reader$1.prototype, {
    int64: function read_int64() {
      return readLongVarint.call(this)[fn](false);
    },
    uint64: function read_uint64() {
      return readLongVarint.call(this)[fn](true);
    },
    sint64: function read_sint64() {
      return readLongVarint.call(this).zzDecode()[fn](false);
    },
    fixed64: function read_fixed64() {
      return readFixed64.call(this)[fn](true);
    },
    sfixed64: function read_sfixed64() {
      return readFixed64.call(this)[fn](false);
    }
  });
};
var reader_buffer = BufferReader;
var Reader = reader;
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
var util$1 = minimal$1;
function BufferReader(buffer) {
  Reader.call(this, buffer);
}
BufferReader._configure = function() {
  if (util$1.Buffer)
    BufferReader.prototype._slice = util$1.Buffer.prototype.slice;
};
BufferReader.prototype.string = function read_string_buffer() {
  var len = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};
BufferReader._configure();
var rpc = {};
var service = Service;
var util = minimal$1;
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
function Service(rpcImpl, requestDelimited, responseDelimited) {
  if (typeof rpcImpl !== "function")
    throw TypeError("rpcImpl must be a function");
  util.EventEmitter.call(this);
  this.rpcImpl = rpcImpl;
  this.requestDelimited = Boolean(requestDelimited);
  this.responseDelimited = Boolean(responseDelimited);
}
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
  if (!request)
    throw TypeError("request must be specified");
  var self2 = this;
  if (!callback)
    return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
  if (!self2.rpcImpl) {
    setTimeout(function() {
      callback(Error("already ended"));
    }, 0);
    return void 0;
  }
  try {
    return self2.rpcImpl(method, requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
      if (err) {
        self2.emit("error", err, method);
        return callback(err);
      }
      if (response === null) {
        self2.end(true);
        return void 0;
      }
      if (!(response instanceof responseCtor)) {
        try {
          response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
        } catch (err2) {
          self2.emit("error", err2, method);
          return callback(err2);
        }
      }
      self2.emit("data", response, method);
      return callback(null, response);
    });
  } catch (err) {
    self2.emit("error", err, method);
    setTimeout(function() {
      callback(err);
    }, 0);
    return void 0;
  }
};
Service.prototype.end = function end(endedByRPC) {
  if (this.rpcImpl) {
    if (!endedByRPC)
      this.rpcImpl(null, null, null);
    this.rpcImpl = null;
    this.emit("end").off();
  }
  return this;
};
(function(exports) {
  var rpc2 = exports;
  rpc2.Service = service;
})(rpc);
var roots = {};
(function(exports) {
  var protobuf = exports;
  protobuf.build = "minimal";
  protobuf.Writer = writer;
  protobuf.BufferWriter = writer_buffer;
  protobuf.Reader = reader;
  protobuf.BufferReader = reader_buffer;
  protobuf.util = minimal$1;
  protobuf.rpc = rpc;
  protobuf.roots = roots;
  protobuf.configure = configure;
  function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
  }
  configure();
})(indexMinimal);
var minimal = indexMinimal;
const $Reader = minimal.Reader, $Writer = minimal.Writer, $util = minimal.util;
const $root = minimal.roots["ipfs-unixfs"] || (minimal.roots["ipfs-unixfs"] = {});
const Data = $root.Data = (() => {
  function Data2(p) {
    this.blocksizes = [];
    if (p) {
      for (var ks = Object.keys(p), i2 = 0; i2 < ks.length; ++i2)
        if (p[ks[i2]] != null)
          this[ks[i2]] = p[ks[i2]];
    }
  }
  Data2.prototype.Type = 0;
  Data2.prototype.Data = $util.newBuffer([]);
  Data2.prototype.filesize = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data2.prototype.blocksizes = $util.emptyArray;
  Data2.prototype.hashType = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data2.prototype.fanout = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data2.prototype.mode = 0;
  Data2.prototype.mtime = null;
  Data2.encode = function encode2(m, w) {
    if (!w)
      w = $Writer.create();
    w.uint32(8).int32(m.Type);
    if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
      w.uint32(18).bytes(m.Data);
    if (m.filesize != null && Object.hasOwnProperty.call(m, "filesize"))
      w.uint32(24).uint64(m.filesize);
    if (m.blocksizes != null && m.blocksizes.length) {
      for (var i2 = 0; i2 < m.blocksizes.length; ++i2)
        w.uint32(32).uint64(m.blocksizes[i2]);
    }
    if (m.hashType != null && Object.hasOwnProperty.call(m, "hashType"))
      w.uint32(40).uint64(m.hashType);
    if (m.fanout != null && Object.hasOwnProperty.call(m, "fanout"))
      w.uint32(48).uint64(m.fanout);
    if (m.mode != null && Object.hasOwnProperty.call(m, "mode"))
      w.uint32(56).uint32(m.mode);
    if (m.mtime != null && Object.hasOwnProperty.call(m, "mtime"))
      $root.UnixTime.encode(m.mtime, w.uint32(66).fork()).ldelim();
    return w;
  };
  Data2.decode = function decode2(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === void 0 ? r.len : r.pos + l, m = new $root.Data();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
        case 1:
          m.Type = r.int32();
          break;
        case 2:
          m.Data = r.bytes();
          break;
        case 3:
          m.filesize = r.uint64();
          break;
        case 4:
          if (!(m.blocksizes && m.blocksizes.length))
            m.blocksizes = [];
          if ((t & 7) === 2) {
            var c2 = r.uint32() + r.pos;
            while (r.pos < c2)
              m.blocksizes.push(r.uint64());
          } else
            m.blocksizes.push(r.uint64());
          break;
        case 5:
          m.hashType = r.uint64();
          break;
        case 6:
          m.fanout = r.uint64();
          break;
        case 7:
          m.mode = r.uint32();
          break;
        case 8:
          m.mtime = $root.UnixTime.decode(r, r.uint32());
          break;
        default:
          r.skipType(t & 7);
          break;
      }
    }
    if (!m.hasOwnProperty("Type"))
      throw $util.ProtocolError("missing required 'Type'", { instance: m });
    return m;
  };
  Data2.fromObject = function fromObject(d) {
    if (d instanceof $root.Data)
      return d;
    var m = new $root.Data();
    switch (d.Type) {
      case "Raw":
      case 0:
        m.Type = 0;
        break;
      case "Directory":
      case 1:
        m.Type = 1;
        break;
      case "File":
      case 2:
        m.Type = 2;
        break;
      case "Metadata":
      case 3:
        m.Type = 3;
        break;
      case "Symlink":
      case 4:
        m.Type = 4;
        break;
      case "HAMTShard":
      case 5:
        m.Type = 5;
        break;
    }
    if (d.Data != null) {
      if (typeof d.Data === "string")
        $util.base64.decode(d.Data, m.Data = $util.newBuffer($util.base64.length(d.Data)), 0);
      else if (d.Data.length)
        m.Data = d.Data;
    }
    if (d.filesize != null) {
      if ($util.Long)
        (m.filesize = $util.Long.fromValue(d.filesize)).unsigned = true;
      else if (typeof d.filesize === "string")
        m.filesize = parseInt(d.filesize, 10);
      else if (typeof d.filesize === "number")
        m.filesize = d.filesize;
      else if (typeof d.filesize === "object")
        m.filesize = new $util.LongBits(d.filesize.low >>> 0, d.filesize.high >>> 0).toNumber(true);
    }
    if (d.blocksizes) {
      if (!Array.isArray(d.blocksizes))
        throw TypeError(".Data.blocksizes: array expected");
      m.blocksizes = [];
      for (var i2 = 0; i2 < d.blocksizes.length; ++i2) {
        if ($util.Long)
          (m.blocksizes[i2] = $util.Long.fromValue(d.blocksizes[i2])).unsigned = true;
        else if (typeof d.blocksizes[i2] === "string")
          m.blocksizes[i2] = parseInt(d.blocksizes[i2], 10);
        else if (typeof d.blocksizes[i2] === "number")
          m.blocksizes[i2] = d.blocksizes[i2];
        else if (typeof d.blocksizes[i2] === "object")
          m.blocksizes[i2] = new $util.LongBits(d.blocksizes[i2].low >>> 0, d.blocksizes[i2].high >>> 0).toNumber(true);
      }
    }
    if (d.hashType != null) {
      if ($util.Long)
        (m.hashType = $util.Long.fromValue(d.hashType)).unsigned = true;
      else if (typeof d.hashType === "string")
        m.hashType = parseInt(d.hashType, 10);
      else if (typeof d.hashType === "number")
        m.hashType = d.hashType;
      else if (typeof d.hashType === "object")
        m.hashType = new $util.LongBits(d.hashType.low >>> 0, d.hashType.high >>> 0).toNumber(true);
    }
    if (d.fanout != null) {
      if ($util.Long)
        (m.fanout = $util.Long.fromValue(d.fanout)).unsigned = true;
      else if (typeof d.fanout === "string")
        m.fanout = parseInt(d.fanout, 10);
      else if (typeof d.fanout === "number")
        m.fanout = d.fanout;
      else if (typeof d.fanout === "object")
        m.fanout = new $util.LongBits(d.fanout.low >>> 0, d.fanout.high >>> 0).toNumber(true);
    }
    if (d.mode != null) {
      m.mode = d.mode >>> 0;
    }
    if (d.mtime != null) {
      if (typeof d.mtime !== "object")
        throw TypeError(".Data.mtime: object expected");
      m.mtime = $root.UnixTime.fromObject(d.mtime);
    }
    return m;
  };
  Data2.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.arrays || o.defaults) {
      d.blocksizes = [];
    }
    if (o.defaults) {
      d.Type = o.enums === String ? "Raw" : 0;
      if (o.bytes === String)
        d.Data = "";
      else {
        d.Data = [];
        if (o.bytes !== Array)
          d.Data = $util.newBuffer(d.Data);
      }
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.filesize = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.filesize = o.longs === String ? "0" : 0;
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.hashType = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.hashType = o.longs === String ? "0" : 0;
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.fanout = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.fanout = o.longs === String ? "0" : 0;
      d.mode = 0;
      d.mtime = null;
    }
    if (m.Type != null && m.hasOwnProperty("Type")) {
      d.Type = o.enums === String ? $root.Data.DataType[m.Type] : m.Type;
    }
    if (m.Data != null && m.hasOwnProperty("Data")) {
      d.Data = o.bytes === String ? $util.base64.encode(m.Data, 0, m.Data.length) : o.bytes === Array ? Array.prototype.slice.call(m.Data) : m.Data;
    }
    if (m.filesize != null && m.hasOwnProperty("filesize")) {
      if (typeof m.filesize === "number")
        d.filesize = o.longs === String ? String(m.filesize) : m.filesize;
      else
        d.filesize = o.longs === String ? $util.Long.prototype.toString.call(m.filesize) : o.longs === Number ? new $util.LongBits(m.filesize.low >>> 0, m.filesize.high >>> 0).toNumber(true) : m.filesize;
    }
    if (m.blocksizes && m.blocksizes.length) {
      d.blocksizes = [];
      for (var j = 0; j < m.blocksizes.length; ++j) {
        if (typeof m.blocksizes[j] === "number")
          d.blocksizes[j] = o.longs === String ? String(m.blocksizes[j]) : m.blocksizes[j];
        else
          d.blocksizes[j] = o.longs === String ? $util.Long.prototype.toString.call(m.blocksizes[j]) : o.longs === Number ? new $util.LongBits(m.blocksizes[j].low >>> 0, m.blocksizes[j].high >>> 0).toNumber(true) : m.blocksizes[j];
      }
    }
    if (m.hashType != null && m.hasOwnProperty("hashType")) {
      if (typeof m.hashType === "number")
        d.hashType = o.longs === String ? String(m.hashType) : m.hashType;
      else
        d.hashType = o.longs === String ? $util.Long.prototype.toString.call(m.hashType) : o.longs === Number ? new $util.LongBits(m.hashType.low >>> 0, m.hashType.high >>> 0).toNumber(true) : m.hashType;
    }
    if (m.fanout != null && m.hasOwnProperty("fanout")) {
      if (typeof m.fanout === "number")
        d.fanout = o.longs === String ? String(m.fanout) : m.fanout;
      else
        d.fanout = o.longs === String ? $util.Long.prototype.toString.call(m.fanout) : o.longs === Number ? new $util.LongBits(m.fanout.low >>> 0, m.fanout.high >>> 0).toNumber(true) : m.fanout;
    }
    if (m.mode != null && m.hasOwnProperty("mode")) {
      d.mode = m.mode;
    }
    if (m.mtime != null && m.hasOwnProperty("mtime")) {
      d.mtime = $root.UnixTime.toObject(m.mtime, o);
    }
    return d;
  };
  Data2.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, minimal.util.toJSONOptions);
  };
  Data2.DataType = function() {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Raw"] = 0;
    values[valuesById[1] = "Directory"] = 1;
    values[valuesById[2] = "File"] = 2;
    values[valuesById[3] = "Metadata"] = 3;
    values[valuesById[4] = "Symlink"] = 4;
    values[valuesById[5] = "HAMTShard"] = 5;
    return values;
  }();
  return Data2;
})();
$root.UnixTime = (() => {
  function UnixTime(p) {
    if (p) {
      for (var ks = Object.keys(p), i2 = 0; i2 < ks.length; ++i2)
        if (p[ks[i2]] != null)
          this[ks[i2]] = p[ks[i2]];
    }
  }
  UnixTime.prototype.Seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
  UnixTime.prototype.FractionalNanoseconds = 0;
  UnixTime.encode = function encode2(m, w) {
    if (!w)
      w = $Writer.create();
    w.uint32(8).int64(m.Seconds);
    if (m.FractionalNanoseconds != null && Object.hasOwnProperty.call(m, "FractionalNanoseconds"))
      w.uint32(21).fixed32(m.FractionalNanoseconds);
    return w;
  };
  UnixTime.decode = function decode2(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === void 0 ? r.len : r.pos + l, m = new $root.UnixTime();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
        case 1:
          m.Seconds = r.int64();
          break;
        case 2:
          m.FractionalNanoseconds = r.fixed32();
          break;
        default:
          r.skipType(t & 7);
          break;
      }
    }
    if (!m.hasOwnProperty("Seconds"))
      throw $util.ProtocolError("missing required 'Seconds'", { instance: m });
    return m;
  };
  UnixTime.fromObject = function fromObject(d) {
    if (d instanceof $root.UnixTime)
      return d;
    var m = new $root.UnixTime();
    if (d.Seconds != null) {
      if ($util.Long)
        (m.Seconds = $util.Long.fromValue(d.Seconds)).unsigned = false;
      else if (typeof d.Seconds === "string")
        m.Seconds = parseInt(d.Seconds, 10);
      else if (typeof d.Seconds === "number")
        m.Seconds = d.Seconds;
      else if (typeof d.Seconds === "object")
        m.Seconds = new $util.LongBits(d.Seconds.low >>> 0, d.Seconds.high >>> 0).toNumber();
    }
    if (d.FractionalNanoseconds != null) {
      m.FractionalNanoseconds = d.FractionalNanoseconds >>> 0;
    }
    return m;
  };
  UnixTime.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.defaults) {
      if ($util.Long) {
        var n = new $util.Long(0, 0, false);
        d.Seconds = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.Seconds = o.longs === String ? "0" : 0;
      d.FractionalNanoseconds = 0;
    }
    if (m.Seconds != null && m.hasOwnProperty("Seconds")) {
      if (typeof m.Seconds === "number")
        d.Seconds = o.longs === String ? String(m.Seconds) : m.Seconds;
      else
        d.Seconds = o.longs === String ? $util.Long.prototype.toString.call(m.Seconds) : o.longs === Number ? new $util.LongBits(m.Seconds.low >>> 0, m.Seconds.high >>> 0).toNumber() : m.Seconds;
    }
    if (m.FractionalNanoseconds != null && m.hasOwnProperty("FractionalNanoseconds")) {
      d.FractionalNanoseconds = m.FractionalNanoseconds;
    }
    return d;
  };
  UnixTime.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, minimal.util.toJSONOptions);
  };
  return UnixTime;
})();
$root.Metadata = (() => {
  function Metadata(p) {
    if (p) {
      for (var ks = Object.keys(p), i2 = 0; i2 < ks.length; ++i2)
        if (p[ks[i2]] != null)
          this[ks[i2]] = p[ks[i2]];
    }
  }
  Metadata.prototype.MimeType = "";
  Metadata.encode = function encode2(m, w) {
    if (!w)
      w = $Writer.create();
    if (m.MimeType != null && Object.hasOwnProperty.call(m, "MimeType"))
      w.uint32(10).string(m.MimeType);
    return w;
  };
  Metadata.decode = function decode2(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === void 0 ? r.len : r.pos + l, m = new $root.Metadata();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
        case 1:
          m.MimeType = r.string();
          break;
        default:
          r.skipType(t & 7);
          break;
      }
    }
    return m;
  };
  Metadata.fromObject = function fromObject(d) {
    if (d instanceof $root.Metadata)
      return d;
    var m = new $root.Metadata();
    if (d.MimeType != null) {
      m.MimeType = String(d.MimeType);
    }
    return m;
  };
  Metadata.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.defaults) {
      d.MimeType = "";
    }
    if (m.MimeType != null && m.hasOwnProperty("MimeType")) {
      d.MimeType = m.MimeType;
    }
    return d;
  };
  Metadata.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, minimal.util.toJSONOptions);
  };
  return Metadata;
})();
const PBData = Data;
const types = [
  "raw",
  "directory",
  "file",
  "metadata",
  "symlink",
  "hamt-sharded-directory"
];
const dirTypes = [
  "directory",
  "hamt-sharded-directory"
];
const DEFAULT_FILE_MODE = parseInt("0644", 8);
const DEFAULT_DIRECTORY_MODE = parseInt("0755", 8);
function parseMode(mode) {
  if (mode == null) {
    return void 0;
  }
  if (typeof mode === "number") {
    return mode & 4095;
  }
  mode = mode.toString();
  if (mode.substring(0, 1) === "0") {
    return parseInt(mode, 8) & 4095;
  }
  return parseInt(mode, 10) & 4095;
}
function parseMtime(input) {
  if (input == null) {
    return void 0;
  }
  let mtime;
  if (input.secs != null) {
    mtime = {
      secs: input.secs,
      nsecs: input.nsecs
    };
  }
  if (input.Seconds != null) {
    mtime = {
      secs: input.Seconds,
      nsecs: input.FractionalNanoseconds
    };
  }
  if (Array.isArray(input)) {
    mtime = {
      secs: input[0],
      nsecs: input[1]
    };
  }
  if (input instanceof Date) {
    const ms = input.getTime();
    const secs = Math.floor(ms / 1e3);
    mtime = {
      secs,
      nsecs: (ms - secs * 1e3) * 1e3
    };
  }
  if (!Object.prototype.hasOwnProperty.call(mtime, "secs")) {
    return void 0;
  }
  if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
    throw errCode(new Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS");
  }
  return mtime;
}
class UnixFS {
  static unmarshal(marshaled) {
    const message = PBData.decode(marshaled);
    const decoded = PBData.toObject(message, {
      defaults: false,
      arrays: true,
      longs: Number,
      objects: false
    });
    const data = new UnixFS({
      type: types[decoded.Type],
      data: decoded.Data,
      blockSizes: decoded.blocksizes,
      mode: decoded.mode,
      mtime: decoded.mtime ? {
        secs: decoded.mtime.Seconds,
        nsecs: decoded.mtime.FractionalNanoseconds
      } : void 0
    });
    data._originalMode = decoded.mode || 0;
    return data;
  }
  constructor(options = { type: "file" }) {
    const { type, data, blockSizes, hashType, fanout, mtime, mode } = options;
    if (type && !types.includes(type)) {
      throw errCode(new Error("Type: " + type + " is not valid"), "ERR_INVALID_TYPE");
    }
    this.type = type || "file";
    this.data = data;
    this.hashType = hashType;
    this.fanout = fanout;
    this.blockSizes = blockSizes || [];
    this._originalMode = 0;
    this.mode = parseMode(mode);
    if (mtime) {
      this.mtime = parseMtime(mtime);
      if (this.mtime && !this.mtime.nsecs) {
        this.mtime.nsecs = 0;
      }
    }
  }
  set mode(mode) {
    this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
    const parsedMode = parseMode(mode);
    if (parsedMode !== void 0) {
      this._mode = parsedMode;
    }
  }
  get mode() {
    return this._mode;
  }
  isDirectory() {
    return Boolean(this.type && dirTypes.includes(this.type));
  }
  addBlockSize(size) {
    this.blockSizes.push(size);
  }
  removeBlockSize(index) {
    this.blockSizes.splice(index, 1);
  }
  fileSize() {
    if (this.isDirectory()) {
      return 0;
    }
    let sum = 0;
    this.blockSizes.forEach((size) => {
      sum += size;
    });
    if (this.data) {
      sum += this.data.length;
    }
    return sum;
  }
  marshal() {
    let type;
    switch (this.type) {
      case "raw":
        type = PBData.DataType.Raw;
        break;
      case "directory":
        type = PBData.DataType.Directory;
        break;
      case "file":
        type = PBData.DataType.File;
        break;
      case "metadata":
        type = PBData.DataType.Metadata;
        break;
      case "symlink":
        type = PBData.DataType.Symlink;
        break;
      case "hamt-sharded-directory":
        type = PBData.DataType.HAMTShard;
        break;
      default:
        throw errCode(new Error("Type: " + type + " is not valid"), "ERR_INVALID_TYPE");
    }
    let data = this.data;
    if (!this.data || !this.data.length) {
      data = void 0;
    }
    let mode;
    if (this.mode != null) {
      mode = this._originalMode & 4294963200 | (parseMode(this.mode) || 0);
      if (mode === DEFAULT_FILE_MODE && !this.isDirectory()) {
        mode = void 0;
      }
      if (mode === DEFAULT_DIRECTORY_MODE && this.isDirectory()) {
        mode = void 0;
      }
    }
    let mtime;
    if (this.mtime != null) {
      const parsed = parseMtime(this.mtime);
      if (parsed) {
        mtime = {
          Seconds: parsed.secs,
          FractionalNanoseconds: parsed.nsecs
        };
        if (mtime.FractionalNanoseconds === 0) {
          delete mtime.FractionalNanoseconds;
        }
      }
    }
    const pbData = {
      Type: type,
      Data: data,
      filesize: this.isDirectory() ? void 0 : this.fileSize(),
      blocksizes: this.blockSizes,
      hashType: this.hashType,
      fanout: this.fanout,
      mode,
      mtime
    };
    return PBData.encode(pbData).finish();
  }
}
function base(ALPHABET, name2) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i2 = 0; i2 < ALPHABET.length; i2++) {
    var x = ALPHABET.charAt(i2);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i2;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length3 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i3 = 0;
      for (var it1 = size - 1; (carry !== 0 || i3 < length3) && it1 !== -1; it1--, i3++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length3 = i3;
      pbegin++;
    }
    var it2 = size - length3;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length3 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i3 = 0;
      for (var it3 = size - 1; (carry !== 0 || i3 < length3) && it3 !== -1; it3--, i3++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length3 = i3;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length3;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
const coerce = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const fromString$1 = (str) => new TextEncoder().encode(str);
const toString = (b) => new TextDecoder().decode(b);
class Encoder {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseDecode = baseDecode;
  }
  decode(text2) {
    if (typeof text2 === "string") {
      switch (text2[0]) {
        case this.prefix: {
          return this.baseDecode(text2.slice(1));
        }
        default: {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
      }
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
const or = (left, right) => new ComposedDecoder(__spreadValues(__spreadValues({}, left.decoders || { [left.prefix]: left }), right.decoders || { [right.prefix]: right }));
class Codec {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from$1 = ({ name: name2, prefix, encode: encode2, decode: decode2 }) => new Codec(name2, prefix, encode2, decode2);
const baseX = ({ prefix, name: name2, alphabet }) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet, name2);
  return from$1({
    prefix,
    name: name2,
    encode: encode2,
    decode: (text2) => coerce(decode2(text2))
  });
};
const decode$1 = (string2, alphabet, bitsPerChar, name2) => {
  const codes = {};
  for (let i2 = 0; i2 < alphabet.length; ++i2) {
    codes[alphabet[i2]] = i2;
  }
  let end2 = string2.length;
  while (string2[end2 - 1] === "=") {
    --end2;
  }
  const out = new Uint8Array(end2 * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i2 = 0; i2 < end2; ++i2) {
    const value = codes[string2[i2]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
const encode$2 = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i2 = 0; i2 < data.length; ++i2) {
    buffer = buffer << 8 | data[i2];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet }) => {
  return from$1({
    prefix,
    name: name2,
    encode(input) {
      return encode$2(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode$1(input, alphabet, bitsPerChar, name2);
    }
  });
};
const identity$2 = from$1({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString(buf),
  decode: (str) => fromString$1(str)
});
var identityBase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: identity$2
}, Symbol.toStringTag, { value: "Module" }));
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
var base2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2
}, Symbol.toStringTag, { value: "Module" }));
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
var base8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8
}, Symbol.toStringTag, { value: "Module" }));
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
var base10$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10
}, Symbol.toStringTag, { value: "Module" }));
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
var base16$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16,
  base16upper
}, Symbol.toStringTag, { value: "Module" }));
const base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
var base32$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32,
  base32upper,
  base32pad,
  base32padupper,
  base32hex,
  base32hexupper,
  base32hexpad,
  base32hexpadupper,
  base32z
}, Symbol.toStringTag, { value: "Module" }));
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var base36$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36,
  base36upper
}, Symbol.toStringTag, { value: "Module" }));
const base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var base58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc,
  base58flickr
}, Symbol.toStringTag, { value: "Module" }));
const base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
var base64$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64,
  base64pad,
  base64url,
  base64urlpad
}, Symbol.toStringTag, { value: "Module" }));
var encode_1 = encode$1;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode$1(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode$1.bytes = offset - oldOffset + 1;
  return out;
}
var decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode,
  encodingLength: length
};
var _brrp_varint = varint;
const encodeTo = (int, target, offset = 0) => {
  _brrp_varint.encode(int, target, offset);
  return target;
};
const encodingLength = (int) => {
  return _brrp_varint.encodingLength(int);
};
const create = (code2, digest2) => {
  const size = digest2.byteLength;
  const sizeOffset = encodingLength(code2);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code2, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest2, digestOffset);
  return new Digest(code2, size, digest2, bytes);
};
class Digest {
  constructor(code2, size, digest2, bytes) {
    this.code = code2;
    this.size = size;
    this.digest = digest2;
    this.bytes = bytes;
  }
}
const from = ({ name: name2, code: code2, encode: encode2 }) => new Hasher(name2, code2, encode2);
class Hasher {
  constructor(name2, code2, encode2) {
    this.name = name2;
    this.code = code2;
    this.encode = encode2;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
const sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
const sha256 = from({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
const sha512 = from({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});
var sha2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sha256,
  sha512
}, Symbol.toStringTag, { value: "Module" }));
const code = 0;
const name = "identity";
const encode = coerce;
const digest = (input) => create(code, encode(input));
const identity = {
  code,
  name,
  encode,
  digest
};
var identity$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const bases = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, identityBase), base2$1), base8$1), base10$1), base16$1), base32$1), base36$1), base58), base64$1);
__spreadValues(__spreadValues({}, sha2), identity$1);
function createCodec(name2, prefix, encode2, decode2) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode2
    },
    decoder: { decode: decode2 }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i2 = 0; i2 < buf.length; i2++) {
    string2 += String.fromCharCode(buf[i2]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = new Uint8Array(str.length);
  for (let i2 = 0; i2 < str.length; i2++) {
    buf[i2] = str.charCodeAt(i2);
  }
  return buf;
});
const BASES = __spreadValues({
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii
}, bases);
function fromString(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
function create_catch_block(ctx) {
  let p;
  let t0;
  let t1_value = ctx[9].message + "";
  let t1;
  let p_intro;
  let p_outro;
  let current;
  return {
    c() {
      p = element("p");
      t0 = text("Something went wrong: ");
      t1 = text(t1_value);
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Something went wrong: ");
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, t1);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx[9].message + ""))
        set_data(t1, t1_value);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (p_outro)
          p_outro.end(1);
        p_intro = create_in_transition(p, fly, ctx[2]);
        p_intro.start();
      });
      current = true;
    },
    o(local) {
      if (p_intro)
        p_intro.invalidate();
      p_outro = create_out_transition(p, fly, ctx[3]);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching && p_outro)
        p_outro.end();
    }
  };
}
function create_then_block(ctx) {
  let p;
  let t0;
  let t1;
  let t2;
  let a0;
  let t3;
  let a0_href_value;
  let t4;
  let a1;
  let t5;
  let a1_href_value;
  let t6;
  let a2;
  let t7;
  let t8;
  let p_intro;
  let p_outro;
  let current;
  return {
    c() {
      p = element("p");
      t0 = text("\u2714\uFE0F Deployed ");
      t1 = text(ctx[1]);
      t2 = text(" on ");
      a0 = element("a");
      t3 = text("DWeb");
      t4 = text(" &\r\n		");
      a1 = element("a");
      t5 = text("DAGWeb");
      t6 = text("\r\n		(");
      a2 = element("a");
      t7 = text("Gateway?");
      t8 = text(")");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "\u2714\uFE0F Deployed ");
      t1 = claim_text(p_nodes, ctx[1]);
      t2 = claim_text(p_nodes, " on ");
      a0 = claim_element(p_nodes, "A", { href: true, target: true });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "DWeb");
      a0_nodes.forEach(detach);
      t4 = claim_text(p_nodes, " &\r\n		");
      a1 = claim_element(p_nodes, "A", { href: true, target: true });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "DAGWeb");
      a1_nodes.forEach(detach);
      t6 = claim_text(p_nodes, "\r\n		(");
      a2 = claim_element(p_nodes, "A", { href: true, target: true });
      var a2_nodes = children(a2);
      t7 = claim_text(a2_nodes, "Gateway?");
      a2_nodes.forEach(detach);
      t8 = claim_text(p_nodes, ")");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", a0_href_value = ctx[4](ctx[8]));
      attr(a0, "target", "_blank");
      attr(a1, "href", a1_href_value = ctx[5](ctx[8]));
      attr(a1, "target", "_blank");
      attr(a2, "href", "https://ipfs.github.io/public-gateway-checker/");
      attr(a2, "target", "_blank");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, t1);
      append_hydration(p, t2);
      append_hydration(p, a0);
      append_hydration(a0, t3);
      append_hydration(p, t4);
      append_hydration(p, a1);
      append_hydration(a1, t5);
      append_hydration(p, t6);
      append_hydration(p, a2);
      append_hydration(a2, t7);
      append_hydration(p, t8);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & 2)
        set_data(t1, ctx[1]);
      if (!current || dirty & 1 && a0_href_value !== (a0_href_value = ctx[4](ctx[8]))) {
        attr(a0, "href", a0_href_value);
      }
      if (!current || dirty & 1 && a1_href_value !== (a1_href_value = ctx[5](ctx[8]))) {
        attr(a1, "href", a1_href_value);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (p_outro)
          p_outro.end(1);
        p_intro = create_in_transition(p, fly, ctx[2]);
        p_intro.start();
      });
      current = true;
    },
    o(local) {
      if (p_intro)
        p_intro.invalidate();
      p_outro = create_out_transition(p, fly, ctx[3]);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching && p_outro)
        p_outro.end();
    }
  };
}
function create_pending_block(ctx) {
  let p;
  let t;
  let p_intro;
  let p_outro;
  let current;
  return {
    c() {
      p = element("p");
      t = text("Loading IPFS...");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Loading IPFS...");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (p_outro)
          p_outro.end(1);
        p_intro = create_in_transition(p, fly, ctx[2]);
        p_intro.start();
      });
      current = true;
    },
    o(local) {
      if (p_intro)
        p_intro.invalidate();
      p_outro = create_out_transition(p, fly, ctx[3]);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching && p_outro)
        p_outro.end();
    }
  };
}
function create_fragment$3(ctx) {
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: true,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 8,
    error: 9,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[0], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 1 && promise !== (promise = ctx[0]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i2 = 0; i2 < 3; i2 += 1) {
        const block2 = info.blocks[i2];
        transition_out(block2);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { saveResult } = $$props;
  let { description = "" } = $$props;
  let { height = "70" } = $$props;
  let flyIn = {
    delay: 100,
    duration: 750,
    x: 0,
    y: -height,
    opacity: 0.5,
    easing: identity$3
  };
  let flyOut = {
    delay: 100,
    duration: 750,
    x: 0,
    y: height,
    opacity: 0.5,
    easing: identity$3
  };
  const dwebUrl = (cid) => `http://${cid == null ? void 0 : cid.toV1().toString()}.ipfs.dweb.link/`;
  const dwebDag = (cid) => `https://dweb.link/api/v0/dag/get?arg=${cid == null ? void 0 : cid.toV1().toString()}`;
  $$self.$$set = ($$props2) => {
    if ("saveResult" in $$props2)
      $$invalidate(0, saveResult = $$props2.saveResult);
    if ("description" in $$props2)
      $$invalidate(1, description = $$props2.description);
    if ("height" in $$props2)
      $$invalidate(6, height = $$props2.height);
  };
  return [saveResult, description, flyIn, flyOut, dwebUrl, dwebDag, height];
}
class IPFSSaveStatus extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { saveResult: 0, description: 1, height: 6 });
  }
}
var IPFSSaver_svelte_svelte_type_style_lang = "";
function create_if_block_2(ctx) {
  let t;
  return {
    c() {
      t = text("Loading IPFS, please wait...");
    },
    l(nodes) {
      t = claim_text(nodes, "Loading IPFS, please wait...");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1(ctx) {
  let ipfssavestatus;
  let current;
  ipfssavestatus = new IPFSSaveStatus({
    props: {
      saveResult: ctx[1],
      height: ctx[0],
      description: "Compiled Mini-App"
    }
  });
  return {
    c() {
      create_component(ipfssavestatus.$$.fragment);
    },
    l(nodes) {
      claim_component(ipfssavestatus.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(ipfssavestatus, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const ipfssavestatus_changes = {};
      if (dirty & 2)
        ipfssavestatus_changes.saveResult = ctx2[1];
      if (dirty & 1)
        ipfssavestatus_changes.height = ctx2[0];
      ipfssavestatus.$set(ipfssavestatus_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(ipfssavestatus.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(ipfssavestatus.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(ipfssavestatus, detaching);
    }
  };
}
function create_if_block$2(ctx) {
  let ipfssavestatus;
  let current;
  ipfssavestatus = new IPFSSaveStatus({
    props: {
      saveResult: ctx[2],
      height: ctx[0],
      description: "Editable Components"
    }
  });
  return {
    c() {
      create_component(ipfssavestatus.$$.fragment);
    },
    l(nodes) {
      claim_component(ipfssavestatus.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(ipfssavestatus, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const ipfssavestatus_changes = {};
      if (dirty & 4)
        ipfssavestatus_changes.saveResult = ctx2[2];
      if (dirty & 1)
        ipfssavestatus_changes.height = ctx2[0];
      ipfssavestatus.$set(ipfssavestatus_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(ipfssavestatus.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(ipfssavestatus.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(ipfssavestatus, detaching);
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let t0;
  let t1;
  let current;
  let if_block0 = !ctx[3] && create_if_block_2();
  let if_block1 = ctx[1] && create_if_block_1(ctx);
  let if_block2 = ctx[2] && create_if_block$2(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t0 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      t1 = claim_space(div_nodes);
      if (if_block2)
        if_block2.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "inner svelte-1ef4qd8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t0);
      if (if_block1)
        if_block1.m(div, null);
      append_hydration(div, t1);
      if (if_block2)
        if_block2.m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!ctx2[3]) {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_2();
          if_block0.c();
          if_block0.m(div, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[1]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (ctx2[2]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$2(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { content = {} } = $$props;
  let { path = "index.html" } = $$props;
  let { height = "50" } = $$props;
  let compiled, components;
  let saveContent;
  let ipfsNode;
  onMount(async () => {
    if (!globalThis.ipfsNode) {
      console.log("No ipfs global");
      const IPFSmodule = await __vitePreload(() => import("./ipfs-core-c126b704.js"), true ? [] : void 0);
      const IPFS = IPFSmodule.default;
      $$invalidate(3, ipfsNode = await IPFS.create());
      globalThis.ipfsNode = ipfsNode;
    } else {
      console.log("Wait for ipfs global");
      $$invalidate(3, ipfsNode = globalThis.ipfsNode);
    }
    console.log("ipfs global loaded", { ipfsNode });
    async function save(stringToSave) {
      const file = new UnixFS({
        type: "file",
        data: fromString(stringToSave)
      });
      const pbNode = { Data: file.marshal(), Links: [] };
      return await ipfsNode.dag.put(pbNode, { storeCodec: "dag-pb", pin: true });
    }
    $$invalidate(6, saveContent = async () => {
      $$invalidate(1, compiled = save(content.compiled));
      $$invalidate(2, components = save(JSON.stringify(content.components)));
    });
    return () => {
      console.log("the ipfs node is being stopped");
      ipfsNode.stop();
      globalThis.ipfsNode = null;
    };
  });
  $$self.$$set = ($$props2) => {
    if ("content" in $$props2)
      $$invalidate(4, content = $$props2.content);
    if ("path" in $$props2)
      $$invalidate(5, path = $$props2.path);
    if ("height" in $$props2)
      $$invalidate(0, height = $$props2.height);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 80) {
      content && saveContent && saveContent();
    }
  };
  return [height, compiled, components, ipfsNode, content, path, saveContent];
}
class IPFSSaver extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { content: 4, path: 5, height: 0 });
  }
}
const code_0 = `---
author: Doug Anderson (@douganderson444)

---

<script>
  import { editable } from  '@douganderson444/svelte-editable-action@latest'
	import List from '@douganderson444/listavelte@0.1.6'
	import Changable from './Changable.svelte'
	
	export let name = 'Douglas';
	export let lastName = 'Anders'
	
	export let editableTitle = 'Click to edit My first Template'
	export let fancyEditText = 'Click me to fancy edit, watch me update'
	
	const makeProp = varObj => ({ key: Object.keys(varObj)[0], value: varObj[Object.keys(varObj)[0]]})

<\/script>

<h1>
<Changable prop={makeProp({editableTitle})} on:change={e=>console.log(e.detail)}></Changable> {name} {lastName}
</h1>

<div use:editable on:change={(e) => fancyEditText = e.detail } >
	<h2>{fancyEditText}</h2>
</div>

### Markdown Syntax works

#### Let's import a TODO Component:

<!-- use on:change to pass the properies up to the parent component -->
<List on:change></List>

_Written by:_

{author}

<style>
	:root {
		background-color: #fafafa;	
	}

	
	h2 {
		color: blue
	}
		
	h4 {
		color: green
	}
	h1 {
		color: red;
		font-family: 'Luckiest Guy', sans-serif;
		text-transform: uppercase;
	}

	@font-face {
		font-family: 'Luckiest Guy';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/luckiestguy/v17/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
</style>
`;
const code_1 = `<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	// pass in the item you want to monitor changes on
	export let prop = { 
		key: 'editableTitle', 
		value: 'Some content to change' 
	}
	// dispatch the change event when the content is edited
	$: if (prop.value) dispatch('change', { [prop.key]: prop.value });

<\/script>

<span contenteditable bind:textContent={prop.value}></span>
`;
var App_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let ipfssaver;
  let current;
  ipfssaver = new IPFSSaver({
    props: {
      repl: ctx[1],
      content: {
        compiled: ctx[2],
        components: ctx[0]
      }
    }
  });
  return {
    c() {
      create_component(ipfssaver.$$.fragment);
    },
    l(nodes) {
      claim_component(ipfssaver.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(ipfssaver, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const ipfssaver_changes = {};
      if (dirty & 2)
        ipfssaver_changes.repl = ctx2[1];
      if (dirty & 5)
        ipfssaver_changes.content = {
          compiled: ctx2[2],
          components: ctx2[0]
        };
      ipfssaver.$set(ipfssaver_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(ipfssaver.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(ipfssaver.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(ipfssaver, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div3;
  let div2;
  let div0;
  let t;
  let div1;
  let repl_1;
  let current;
  let if_block = ctx[2] && ctx[0] && create_if_block$1(ctx);
  let repl_1_props = {};
  repl_1 = new Package({ props: repl_1_props });
  ctx[4](repl_1);
  repl_1.$on("compiled", ctx[3]);
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      if (if_block)
        if_block.c();
      t = space();
      div1 = element("div");
      create_component(repl_1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(repl_1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "top-half svelte-1szyf34");
      attr(div1, "class", "bottom-half svelte-1szyf34");
      attr(div2, "class", "contain svelte-1szyf34");
      attr(div3, "class", "main svelte-1szyf34");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      if (if_block)
        if_block.m(div0, null);
      append_hydration(div2, t);
      append_hydration(div2, div1);
      mount_component(repl_1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[2] && ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 5) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div0, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const repl_1_changes = {};
      repl_1.$set(repl_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(repl_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(repl_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      if (if_block)
        if_block.d();
      ctx[4](null);
      destroy_component(repl_1);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { components = [
    { name: "App", type: "svx", source: code_0 },
    {
      name: "Changable",
      type: "svelte",
      source: code_1
    }
  ] } = $$props;
  let repl;
  let compiled;
  let timeoutID;
  onMount(() => {
    repl.set({ components });
  });
  function handleCompiled(e) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(async () => {
      timeoutID = 0;
      $$invalidate(2, { compiled, components } = e.detail, compiled, $$invalidate(0, components));
    }, 5e3);
  }
  function repl_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      repl = $$value;
      $$invalidate(1, repl);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("components" in $$props2)
      $$invalidate(0, components = $$props2.components);
  };
  return [components, repl, compiled, handleCompiled, repl_1_binding];
}
class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { components: 0 });
  }
}
function create_if_block(ctx) {
  let app;
  let updating_components;
  let current;
  function app_components_binding(value) {
    ctx[2](value);
  }
  let app_props = {};
  if (ctx[0] !== void 0) {
    app_props.components = ctx[0];
  }
  app = new App({ props: app_props });
  binding_callbacks.push(() => bind(app, "components", app_components_binding));
  return {
    c() {
      create_component(app.$$.fragment);
    },
    l(nodes) {
      claim_component(app.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(app, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const app_changes = {};
      if (!updating_components && dirty & 1) {
        updating_components = true;
        app_changes.components = ctx2[0];
        add_flush_callback(() => updating_components = false);
      }
      app.$set(app_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(app.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(app.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(app, detaching);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let components;
  let mounted;
  onMount(() => {
    $$invalidate(1, mounted = true);
    const cache = localStorage.getItem("cache");
    if (cache) {
      $$invalidate(0, components = JSON.parse(cache));
    } else {
      $$invalidate(0, components = [
        { name: "App", type: "svx", source: code_0 },
        {
          name: "Changable",
          type: "svelte",
          source: code_1
        }
      ]);
    }
  });
  function app_components_binding(value) {
    components = value;
    $$invalidate(0, components);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 3) {
      if (mounted && components && localStorage) {
        localStorage == null ? void 0 : localStorage.setItem("cache", JSON.stringify(components));
      }
    }
  };
  return [components, mounted, app_components_binding];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes, commonjsGlobal };
//# sourceMappingURL=index-cee35d39.js.map
