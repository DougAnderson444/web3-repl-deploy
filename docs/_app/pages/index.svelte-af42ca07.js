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
import { SvelteComponent, init, safe_not_equal, create_slot, element, claim_element, children, detach, attr, insert_hydration, action_destroyer, run_all, space, empty, claim_space, add_render_callback, append_hydration, add_resize_listener, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out, createEventDispatcher, binding_callbacks, listen, noop, bind, text, create_component, claim_text, claim_component, set_style, toggle_class, mount_component, add_flush_callback, destroy_component, svg_element, claim_svg_element, destroy_each, getContext, subscribe, component_subscribe, set_store_value, set_data, set_input_value, group_outros, check_outros, create_bidirectional_transition, onMount, now, loop, setContext, stop_propagation, null_to_empty, get_spread_update, get_spread_object, assign, is_function, tick, update_await_block_branch, handle_promise, bubble, create_in_transition, create_out_transition, identity } from "../chunks/index-7afc149e.js";
import { __vitePreload, writable, readable } from "../chunks/preload-helper-2ca56312.js";
function clamp(num, min, max) {
  return num < min ? min : num > max ? max : num;
}
var SplitPane_svelte_svelte_type_style_lang = "";
const get_b_slot_changes = (dirty) => ({});
const get_b_slot_context = (ctx) => ({});
const get_a_slot_changes = (dirty) => ({});
const get_a_slot_context = (ctx) => ({});
function create_if_block_1$a(ctx) {
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
      attr(div, "class", div_class_value = ctx[1] + " divider svelte-pukzai");
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
      if (dirty & 2 && div_class_value !== (div_class_value = ctx2[1] + " divider svelte-pukzai")) {
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
function create_if_block$m(ctx) {
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
      attr(div, "class", "mousecatcher svelte-pukzai");
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
function create_fragment$C(ctx) {
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
  let if_block0 = !ctx[2] && create_if_block_1$a(ctx);
  let if_block1 = ctx[6] && create_if_block$m();
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
      attr(div0, "class", "pane svelte-pukzai");
      attr(div0, "style", div0_style_value = ctx[7] + ": " + ctx[0] + "%;");
      attr(div1, "class", "pane svelte-pukzai");
      attr(div1, "style", div1_style_value = ctx[7] + ": " + (100 - ctx[0]) + "%;");
      attr(div2, "class", "container svelte-pukzai");
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
          if_block0 = create_if_block_1$a(ctx2);
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
          if_block1 = create_if_block$m();
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
function instance$C($$self, $$props, $$invalidate) {
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
    init(this, options, instance$C, create_fragment$C, safe_not_equal, {
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
function create_fragment$B(ctx) {
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
      attr(input, "class", "svelte-1ytpqyc");
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
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function instance$B($$self, $$props, $$invalidate) {
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
    init(this, options, instance$B, create_fragment$B, safe_not_equal, { checked: 0 });
  }
}
var InputOutputToggle_svelte_svelte_type_style_lang = "";
function create_fragment$A(ctx) {
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
      attr(span0, "class", "svelte-cb58tn");
      toggle_class(span0, "active", !ctx[0]);
      attr(span1, "class", "svelte-cb58tn");
      toggle_class(span1, "active", ctx[0]);
      attr(label, "class", "input-output-toggle svelte-cb58tn");
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
function instance$A($$self, $$props, $$invalidate) {
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
    init(this, options, instance$A, create_fragment$A, safe_not_equal, { checked: 0 });
  }
}
var ComponentSelector_svelte_svelte_type_style_lang = "";
function get_each_context$8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[28] = list[i];
  child_ctx[30] = i;
  return child_ctx;
}
function create_if_block$l(ctx) {
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
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
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
      attr(svg, "class", "svelte-l2bxb8");
      attr(button, "class", "add-new svelte-l2bxb8");
      attr(button, "title", "add new component");
      attr(div, "class", "file-tabs svelte-l2bxb8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
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
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$8(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$8(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, t);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
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
      attr(div, "class", "editable svelte-l2bxb8");
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
      attr(svg, "class", "svelte-l2bxb8");
      attr(span, "class", "remove svelte-l2bxb8");
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
      attr(span, "class", "input-sizer svelte-l2bxb8");
      input.autofocus = true;
      attr(input, "spellcheck", false);
      attr(input, "class", "svelte-l2bxb8");
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
function create_if_block_1$9(ctx) {
  let div;
  let t0;
  let t1_value = ctx[28].type + "";
  let t1;
  let if_block = ctx[0] && ctx[28].modified && create_if_block_2$8();
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
      attr(div, "class", "uneditable svelte-l2bxb8");
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
          if_block = create_if_block_2$8();
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
function create_if_block_2$8(ctx) {
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
  let i;
  let t;
  let div_id_value;
  let div_draggable_value;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[28].name === "App" && ctx2[28] !== ctx2[2])
      return create_if_block_1$9;
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
      i = element("i");
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
      i = claim_element(div_nodes, "I", { class: true });
      children(i).forEach(detach);
      t = claim_space(div_nodes);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "drag-handle svelte-l2bxb8");
      attr(div, "id", div_id_value = ctx[28].name);
      attr(div, "class", "button svelte-l2bxb8");
      attr(div, "role", "button");
      attr(div, "draggable", div_draggable_value = ctx[28] !== ctx[2]);
      toggle_class(div, "active", ctx[28] === ctx[5]);
      toggle_class(div, "draggable", ctx[28] !== ctx[2] && ctx[30] !== 0);
      toggle_class(div, "drag-over", ctx[3] === ctx[28].name);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, i);
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
function create_fragment$z(ctx) {
  let div;
  let if_block = ctx[4].length && create_if_block$l(ctx);
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
      attr(div, "class", "component-selector svelte-l2bxb8");
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
          if_block = create_if_block$l(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
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
function instance$z($$self, $$props, $$invalidate) {
  let $components, $$unsubscribe_components = noop, $$subscribe_components = () => ($$unsubscribe_components(), $$unsubscribe_components = subscribe(components, ($$value) => $$invalidate(4, $components = $$value)), components);
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
      let i = 1;
      let name = $selected.name;
      do {
        set_store_value(selected, $selected.name = `${name}_${i++}`, $selected);
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
  let from = null;
  let over = null;
  function dragStart(event) {
    from = event.currentTarget.id;
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
    if (from && over) {
      const from_index = $components.findIndex((component) => component.name === from);
      const to_index = $components.findIndex((component) => component.name === over);
      const from_component = $components[from_index];
      $components.splice(from_index, 1);
      components.set($components.slice(0, to_index).concat(from_component).concat($components.slice(to_index)));
    }
    from = $$invalidate(3, over = null);
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
    init(this, options, instance$z, create_fragment$z, safe_not_equal, { handle_select: 17, show_modified: 0 });
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
  const height2 = parseFloat(style.height);
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
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};height: ${t * height2}px;padding-top: ${t * padding_top}px;padding-bottom: ${t * padding_bottom}px;margin-top: ${t * margin_top}px;margin-bottom: ${t * margin_bottom}px;border-top-width: ${t * border_top_width}px;border-bottom-width: ${t * border_bottom_width}px;`
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
function create_if_block$k(ctx) {
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
      attr(p, "class", "svelte-9488n4");
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
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$y(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let div_class_value;
  let div_transition;
  let current;
  const if_block_creators = [create_if_block$k, create_else_block$c];
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
      attr(div, "class", div_class_value = "message " + ctx[0] + " svelte-9488n4");
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
      if (!current || dirty & 1 && div_class_value !== (div_class_value = "message " + ctx2[0] + " svelte-9488n4")) {
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
function instance$y($$self, $$props, $$invalidate) {
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
    init(this, options, instance$y, create_fragment$y, safe_not_equal, {
      kind: 0,
      details: 1,
      filename: 5,
      truncate: 2
    });
  }
}
var CodeMirror_svelte_svelte_type_style_lang = "";
function create_if_block$j(ctx) {
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
      attr(pre, "class", "svelte-4wkstb");
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
function create_fragment$x(ctx) {
  let div;
  let textarea;
  let t;
  let div_resize_listener;
  let current;
  let if_block = !ctx[4] && create_if_block$j(ctx);
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
      attr(textarea, "class", "svelte-4wkstb");
      attr(div, "class", "codemirror-container svelte-4wkstb");
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
          if_block = create_if_block$j(ctx2);
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
function instance$x($$self, $$props, $$invalidate) {
  const dispatch = createEventDispatcher();
  let { readonly = false } = $$props;
  let { errorLoc = null } = $$props;
  let { lineNumbers = true } = $$props;
  let { tab = true } = $$props;
  let { theme } = $$props;
  let w;
  let h;
  let code = "";
  let mode;
  async function set(new_code, new_mode) {
    if (new_mode !== mode) {
      await createEditor(mode = new_mode);
    }
    $$invalidate(2, code = new_code);
    updating_externally = true;
    if (editor)
      editor.setValue(code);
    updating_externally = false;
  }
  function update(new_code) {
    $$invalidate(2, code = new_code);
    if (editor) {
      const { left, top } = editor.getScrollInfo();
      editor.setValue($$invalidate(2, code = new_code));
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
  function markText({ from, to }) {
    if (editor)
      editor.markText(editor.posFromIndex(from), editor.posFromIndex(to), { className: "mark-text" });
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
        let mod = await __vitePreload(() => import("../chunks/codemirror-22909a89.js"), true ? ["chunks/codemirror-22909a89.js","assets/codemirror-d2c5637d.css"] : void 0);
        $$invalidate(4, CodeMirror = mod.default);
      }
      await createEditor(mode || "svelte");
      if (editor)
        editor.setValue(code || "");
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
    code,
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
    init(this, options, instance$x, create_fragment$x, safe_not_equal, {
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
function get_each_context$7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
function create_if_block_1$8(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 40) {
        each_value = ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$7(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$7(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
function create_if_block$i(ctx) {
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
function create_fragment$w(ctx) {
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
  const if_block_creators = [create_if_block$i, create_if_block_1$8];
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
      attr(div0, "class", "editor notranslate svelte-m7nlxn");
      attr(div0, "translate", "no");
      attr(div1, "class", "info svelte-m7nlxn");
      attr(div2, "class", "editor-wrapper svelte-m7nlxn");
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
function instance$w($$self, $$props, $$invalidate) {
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
    init(this, options, instance$w, create_fragment$w, safe_not_equal, { errorLoc: 0, theme: 1, focus: 9 });
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
function escape(html, encode) {
  if (encode) {
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
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
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
function cleanUrl(sanitize, base, href) {
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
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
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
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
const noopTest = { exec: function noopTest2() {
} };
function merge(obj) {
  let i = 1, target, key;
  for (; i < arguments.length; i++) {
    target = arguments[i];
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
  let i = 0;
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
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
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
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
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
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
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
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
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
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
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
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
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
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
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
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0];
        nextLine = src.split("\n", 1)[0];
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
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (nextBulletRegex.test(line)) {
              break;
            }
            if (hrRegex.test(src)) {
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
            src = src.substring(rawLine.length + 1);
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
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter((t) => t.type === "space");
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
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
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
  def(src) {
    const cap = this.rules.block.def.exec(src);
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
  table(src) {
    const cap = this.rules.block.table.exec(src);
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
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
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
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
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
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
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
  text(src) {
    const cap = this.rules.block.text.exec(src);
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
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
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
  link(src) {
    const cap = this.rules.inline.link.exec(src);
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
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
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
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
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
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
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
          const text3 = src.slice(1, lLength + match.index + rLength);
          return {
            type: "em",
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text3,
            tokens: this.lexer.inlineTokens(text3, [])
          };
        }
        const text2 = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: "strong",
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text: text2,
          tokens: this.lexer.inlineTokens(text2, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
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
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
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
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
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
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
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
  let out = "", i, ch;
  const l = text2.length;
  for (i = 0; i < l; i++) {
    ch = text2.charCodeAt(i);
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
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
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
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
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
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
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
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
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
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
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
  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
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
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
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
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
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
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
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
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
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
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
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
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
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
function marked(src, opt, callback) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
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
      tokens = Lexer.lex(src, opt);
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
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
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
    const tokens = Lexer.lex(src, opt);
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
marked.parseInline = function(src, opt) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  try {
    const tokens = Lexer.lexInline(src, opt);
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
function decode(mappings) {
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
  for (var i = 0, shift = 0, value = 0; i < mappings.length; i++) {
    var c = mappings.charCodeAt(i);
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
  const mappings = decode(map.mappings);
  const segments = mappings[loc.line - 1];
  for (let i = 0; i < segments.length; i += 1) {
    const segment = segments[i];
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
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
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
      attr(section, "class", "svelte-160vuma");
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
      attr(h3, "class", "svelte-160vuma");
      attr(div0, "class", "panel-header svelte-160vuma");
      attr(div1, "class", "panel-body svelte-160vuma");
      attr(section, "slot", "b");
      attr(section, "class", "svelte-160vuma");
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
function create_fragment$v(ctx) {
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
function instance$v($$self, $$props, $$invalidate) {
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
    init(this, options, instance$v, create_fragment$v, safe_not_equal, { panel: 1, pos: 0 });
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
function create_if_block$h(ctx) {
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
      attr(span0, "class", "arrow svelte-1qd6nto");
      toggle_class(span0, "expanded", ctx[2]);
      attr(span1, "class", "container svelte-1qd6nto");
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
function create_fragment$u(ctx) {
  let if_block_anchor;
  let if_block = ctx[1] && create_if_block$h(ctx);
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
          if_block = create_if_block$h(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$u($$self, $$props, $$invalidate) {
  let $expandable;
  let $expanded, $$unsubscribe_expanded = noop, $$subscribe_expanded = () => ($$unsubscribe_expanded(), $$unsubscribe_expanded = subscribe(expanded, ($$value) => $$invalidate(2, $expanded = $$value)), expanded);
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
    init(this, options, instance$u, create_fragment$u, safe_not_equal, { expanded: 0 });
  }
}
function create_fragment$t(ctx) {
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
function instance$t($$self, $$props, $$invalidate) {
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
    init(this, options, instance$t, create_fragment$t, safe_not_equal, {});
  }
}
function create_fragment$s(ctx) {
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
function instance$s($$self, $$props, $$invalidate) {
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
    init(this, options, instance$s, create_fragment$s, safe_not_equal, { expanded: 0, key: 1 });
  }
}
var JSONNested_svelte_svelte_type_style_lang = "";
function get_each_context$6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  child_ctx[21] = i;
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
  let if_block1 = ctx[4] && create_if_block_1$7(ctx);
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
      attr(span, "class", "root svelte-19drypg");
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
          if_block1 = create_if_block_1$7(ctx2);
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
function create_if_block$g(ctx) {
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
    p: noop,
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
function create_if_block_1$7(ctx) {
  let ul;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
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
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$6(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$6(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
function create_if_block_2$7(ctx) {
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
  let if_block = show_if && create_if_block_2$7();
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
      attr(span, "class", "label svelte-19drypg");
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
          if_block = create_if_block_2$7();
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
      attr(li, "class", "svelte-19drypg");
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
function create_fragment$r(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$g, create_else_block$b];
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
function instance$r($$self, $$props, $$invalidate) {
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
    init(this, options, instance$r, create_fragment$r, safe_not_equal, {
      keys: 0,
      shouldShowColon: 1,
      expandKey: 2,
      defaultExpanded: 10
    });
  }
}
var PreviewList_svelte_svelte_type_style_lang = "";
function get_each_context$5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  child_ctx[9] = i;
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
function create_if_block_2$6(ctx) {
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
      attr(span, "class", "comma operator svelte-150ffaa");
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
  let if_block = ctx[9] < ctx[0].length - 1 && create_if_block_2$6();
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
          if_block = create_if_block_2$6();
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
function create_if_block_1$6(ctx) {
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
      attr(span0, "class", "comma operator svelte-150ffaa");
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
function create_if_block$f(ctx) {
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
function create_fragment$q(ctx) {
  let t0;
  let t1;
  let t2;
  let if_block2_anchor;
  let current;
  let if_block0 = ctx[3] && create_if_block_3$4(ctx);
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  let if_block1 = ctx[1] && create_if_block_1$6();
  let if_block2 = ctx[4] && create_if_block$f(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
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
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$5(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$5(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(t1.parentNode, t1);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (ctx2[1]) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block_1$6();
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
          if_block2 = create_if_block$f(ctx2);
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
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
function instance$q($$self, $$props, $$invalidate) {
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
    init(this, options, instance$q, create_fragment$q, safe_not_equal, {
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
    p: noop,
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
function create_fragment$p(ctx) {
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
function instance$p($$self, $$props, $$invalidate) {
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
    init(this, options, instance$p, create_fragment$p, safe_not_equal, { value: 0 });
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
function create_fragment$o(ctx) {
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
function instance$o($$self, $$props, $$invalidate) {
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
    init(this, options, instance$o, create_fragment$o, safe_not_equal, { value: 0 });
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
function create_if_block$e(ctx) {
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
  const if_block_creators = [create_if_block$e, create_else_block$a];
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
function create_fragment$n(ctx) {
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
function instance$n($$self, $$props, $$invalidate) {
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
        let i = 0;
        for (const entry of value) {
          _indexes.push(i++);
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
    init(this, options, instance$n, create_fragment$n, safe_not_equal, { value: 0, nodeType: 1 });
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
function create_if_block$d(ctx) {
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
          ({ key: name }) => ({ 9: name }),
          ({ key: name }) => name ? 512 : 0
        ],
        item_key: [
          create_item_key_slot$5,
          ({ key: name }) => ({ 9: name }),
          ({ key: name }) => name ? 512 : 0
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
  const if_block_creators = [create_if_block$d, create_else_block$9];
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
function create_fragment$m(ctx) {
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
function instance$m($$self, $$props, $$invalidate) {
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
        let i = 0;
        for (const entry of value) {
          _indexes.push(i++);
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
    init(this, options, instance$m, create_fragment$m, safe_not_equal, { value: 0 });
  }
}
var JSONValueNode_svelte_svelte_type_style_lang = "";
function create_fragment$l(ctx) {
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
      attr(span, "class", span_class_value = null_to_empty(ctx[1]) + " svelte-l95iub");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
      if (dirty & 2 && span_class_value !== (span_class_value = null_to_empty(ctx2[1]) + " svelte-l95iub")) {
        attr(span, "class", span_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function instance$l($$self, $$props, $$invalidate) {
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
    init(this, options, instance$l, create_fragment$l, safe_not_equal, { value: 0, nodeType: 1 });
  }
}
var ErrorStack_svelte_svelte_type_style_lang = "";
function get_each_context$4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[9] = i;
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
function create_if_block$c(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$4(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$4(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
      attr(span1, "class", "svelte-1u08yw6");
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
function create_fragment$k(ctx) {
  let span;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$c, create_else_block$8];
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
function instance$k($$self, $$props, $$invalidate) {
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
    init(this, options, instance$k, create_fragment$k, safe_not_equal, { stack: 0 });
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
function create_if_block$b(ctx) {
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
  const if_block_creators = [create_if_block$b, create_else_block$7];
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
function create_fragment$j(ctx) {
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
function instance$j($$self, $$props, $$invalidate) {
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
    init(this, options, instance$j, create_fragment$j, safe_not_equal, { value: 0 });
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
      attr(span, "class", "svelte-1fvwa9c");
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
function create_if_block$a(ctx) {
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
      attr(span, "class", "svelte-1fvwa9c");
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
function create_fragment$i(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1] === "summary")
      return create_if_block$a;
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
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$i($$self, $$props, $$invalidate) {
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
    init(this, options, instance$i, create_fragment$i, safe_not_equal, { value: 2 });
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
      attr(span, "class", "i svelte-1eamqdt");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop,
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
      attr(span, "class", "fn i svelte-1eamqdt");
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
function create_if_block_2$5(ctx) {
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
      attr(span, "class", "i svelte-1eamqdt");
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
  let if_block1 = !ctx[2].isClass && create_if_block_2$5(ctx);
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
          if_block1 = create_if_block_2$5(ctx2);
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
function create_if_block_1$5(ctx) {
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
function create_if_block$9(ctx) {
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
      attr(span, "class", "i svelte-1eamqdt");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
    },
    i: noop,
    o: noop,
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
  const if_block_creators = [create_if_block$9, create_if_block_1$5, create_else_block$5];
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
function create_fragment$h(ctx) {
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
function toString(value) {
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
function instance$h($$self, $$props, $$invalidate) {
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
      $$invalidate(0, str = toString(value));
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
    init(this, options, instance$h, create_fragment$h, safe_not_equal, { value: 4 });
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
function create_fragment$g(ctx) {
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
function instance$g($$self, $$props, $$invalidate) {
  let objectKeys;
  let keys;
  let previewKeys;
  let storeValue;
  let isWritableStore;
  let $value, $$unsubscribe_value = noop, $$subscribe_value = () => ($$unsubscribe_value(), $$unsubscribe_value = subscribe(value, ($$value) => $$invalidate(7, $value = $$value)), value);
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
    init(this, options, instance$g, create_fragment$g, safe_not_equal, { value: 0 });
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
function create_fragment$f(ctx) {
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
function instance$f($$self, $$props, $$invalidate) {
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
    init(this, options, instance$f, create_fragment$f, safe_not_equal, { value: 0, nodeType: 1 });
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
      attr(span, "class", "regex svelte-17k1wqt");
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
      attr(span, "class", "regex svelte-17k1wqt");
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
function create_fragment$e(ctx) {
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
function instance$e($$self, $$props, $$invalidate) {
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
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { value: 0 });
  }
}
function create_fragment$d(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [{ value: ctx[0] }, ctx[1]];
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
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
function instance$d($$self, $$props, $$invalidate) {
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
    init(this, options, instance$d, create_fragment$d, safe_not_equal, { value: 0 });
  }
}
function getShouldExpandNode({ defaultExpandedPaths, defaultExpandedLevel }) {
  const defaultExpandedPathsParts = defaultExpandedPaths.map((path) => path.split("."));
  function matchPath(keyPath) {
    outer:
      for (const parts of defaultExpandedPathsParts) {
        if (keyPath.length > parts.length)
          continue;
        const length = Math.min(keyPath.length, parts.length);
        for (let i = 0; i < length; i++) {
          if (parts[i] !== "*" && parts[i] !== String(keyPath[i]))
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
function create_fragment$c(ctx) {
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
      attr(ul, "class", "svelte-16cw61f");
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
function instance$c($$self, $$props, $$invalidate) {
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
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {
      value: 0,
      defaultExpandedPaths: 2,
      defaultExpandedLevel: 3
    });
  }
}
var ConsoleTable_svelte_svelte_type_style_lang = "";
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function get_each_context_2$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
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
      attr(th, "class", "svelte-12l2iaz");
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
      attr(td, "class", "svelte-12l2iaz");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_2$4(ctx) {
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
      attr(td, "class", "svelte-12l2iaz");
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
function create_if_block_1$4(ctx) {
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
      attr(td, "class", "svelte-12l2iaz");
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
function create_if_block$8(ctx) {
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
      attr(td, "class", "svelte-12l2iaz");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = ctx2[5] + ""))
        set_data(t, t_value);
    },
    i: noop,
    o: noop,
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
  const if_block_creators = [create_if_block$8, create_if_block_1$4, create_if_block_2$4, create_else_block$4];
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
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      tr = element("tr");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(tr_nodes);
      }
      t = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(tr, "class", "svelte-12l2iaz");
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tr, null);
      }
      append_hydration(tr, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 7) {
        each_value_1 = ctx2[2];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(tr, t);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
function create_fragment$b(ctx) {
  let div;
  let table;
  let thead;
  let tr;
  let t;
  let tbody;
  let current;
  let each_value_2 = ctx[2];
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_1[i] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i));
  }
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div = element("div");
      table = element("table");
      thead = element("thead");
      tr = element("tr");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
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
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(tr_nodes);
      }
      tr_nodes.forEach(detach);
      thead_nodes.forEach(detach);
      t = claim_space(table_nodes);
      tbody = claim_element(table_nodes, "TBODY", {});
      var tbody_nodes = children(tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(tbody_nodes);
      }
      tbody_nodes.forEach(detach);
      table_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(tr, "class", "svelte-12l2iaz");
      attr(table, "class", "svelte-12l2iaz");
      attr(div, "class", "table svelte-12l2iaz");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, table);
      append_hydration(table, thead);
      append_hydration(thead, tr);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(tr, null);
      }
      append_hydration(table, t);
      append_hydration(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 4) {
        each_value_2 = ctx2[2];
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2$1(ctx2, each_value_2, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_2$1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(tr, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_2.length;
      }
      if (dirty & 7) {
        each_value = ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(tbody, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
function instance$b($$self, $$props, $$invalidate) {
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
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { data: 0, columns: 3 });
  }
}
var ConsoleLine_svelte_svelte_type_style_lang = "";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  child_ctx[11] = i;
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
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
      attr(span, "class", "count svelte-wz5xz8");
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
      attr(div, "class", "arrow svelte-wz5xz8");
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
      attr(span, "class", "assert svelte-wz5xz8");
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
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value_4 = ctx2[0].args;
        let i;
        for (i = 0; i < each_value_4.length; i += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_4(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_4.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_4.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value_3 = ctx2[0].args;
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_3(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_3.length;
      }
    },
    i: noop,
    o: noop,
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
      attr(div, "class", "arrow svelte-wz5xz8");
      toggle_class(div, "expand", !ctx[0].collapsed);
      attr(span, "class", "title svelte-wz5xz8");
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
    i: noop,
    o: noop,
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
      attr(span, "class", "info error svelte-wz5xz8");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2$3(ctx) {
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
      attr(span, "class", "info svelte-wz5xz8");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop,
    i: noop,
    o: noop,
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
      attr(div, "class", "outline svelte-wz5xz8");
      set_style(div, "left", ctx[11] * 15 + 15 + "px");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_1$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = ctx[0].logs;
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 3) {
        each_value_1 = ctx2[0].logs;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
function create_if_block$7(ctx) {
  let div;
  let each_value = ctx[0].stack.split("\n").slice(2);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "trace svelte-wz5xz8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0].stack.split("\n").slice(2);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
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
function create_fragment$a(ctx) {
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
    create_if_block_2$3,
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
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  let if_block5 = ctx[0].level === "group" && !ctx[0].collapsed && create_if_block_1$3(ctx);
  let if_block6 = (ctx[0].level === "trace" || ctx[0].level === "assert") && !ctx[0].collapsed && create_if_block$7(ctx);
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
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
      attr(div, "class", div_class_value = "log console-" + ctx[0].level + " svelte-wz5xz8");
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
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
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
      if (!current || dirty & 1 && div_class_value !== (div_class_value = "log console-" + ctx[0].level + " svelte-wz5xz8")) {
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
          if_block5 = create_if_block_1$3(ctx);
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
          if_block6 = create_if_block$7(ctx);
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
function instance$a($$self, $$props, $$invalidate) {
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
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { log: 0, level: 1 });
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
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
function create_fragment$9(ctx) {
  let div;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
function instance$9($$self, $$props, $$invalidate) {
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
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { logs: 0 });
  }
}
var srcdoc = "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<style>\r\n			html,\r\n			body {\r\n				position: relative;\r\n				width: 100%;\r\n				height: 100%;\r\n			}\r\n\r\n			body {\r\n				color: #333;\r\n				margin: 0;\r\n				padding: 8px;\r\n				box-sizing: border-box;\r\n				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,\r\n					Cantarell, 'Helvetica Neue', sans-serif;\r\n			}\r\n\r\n			a {\r\n				color: rgb(0, 100, 200);\r\n				text-decoration: none;\r\n			}\r\n\r\n			a:hover {\r\n				text-decoration: underline;\r\n			}\r\n\r\n			a:visited {\r\n				color: rgb(0, 80, 160);\r\n			}\r\n\r\n			label {\r\n				display: block;\r\n			}\r\n\r\n			input,\r\n			button,\r\n			select,\r\n			textarea {\r\n				/* font-family: inherit; */\r\n				/* font-size: inherit; */\r\n				-webkit-padding: 0.4em 0;\r\n				padding: 0.4em;\r\n				margin: 0 0 0.5em 0;\r\n				box-sizing: border-box;\r\n				border: 1px solid #ccc;\r\n				border-radius: 2px;\r\n			}\r\n\r\n			input[type='range'] {\r\n				padding: 0.4em 0;\r\n			}\r\n\r\n			input:disabled {\r\n				color: #ccc;\r\n			}\r\n\r\n			button {\r\n				color: #333;\r\n				background-color: #f4f4f4;\r\n				outline: none;\r\n			}\r\n\r\n			button:disabled {\r\n				color: #999;\r\n			}\r\n\r\n			button:not(:disabled):active {\r\n				background-color: #ddd;\r\n			}\r\n\r\n			button:focus {\r\n				border-color: #666;\r\n			}\r\n		</style>\r\n\r\n		<script>\r\n			(function () {\r\n				function handle_message(ev) {\r\n					let { action, cmd_id } = ev.data;\r\n					const send_message = (payload) => parent.postMessage({ ...payload }, ev.origin);\r\n					const send_reply = (payload) => send_message({ ...payload, cmd_id });\r\n					const send_ok = () => send_reply({ action: 'cmd_ok' });\r\n					const send_error = (message, stack) =>\r\n						send_reply({ action: 'cmd_error', message, stack });\r\n\r\n					if (action === 'eval') {\r\n						try {\r\n							const { script } = ev.data.args;\r\n							eval(script);\r\n							send_ok();\r\n						} catch (e) {\r\n							send_error(e.message, e.stack);\r\n						}\r\n					}\r\n\r\n					if (action === 'catch_clicks') {\r\n						try {\r\n							const top_origin = ev.origin;\r\n							document.body.addEventListener('click', (event) => {\r\n								if (event.which !== 1) return;\r\n								if (event.metaKey || event.ctrlKey || event.shiftKey) return;\r\n								if (event.defaultPrevented) return;\r\n\r\n								// ensure target is a link\r\n								let el = event.target;\r\n								while (el && el.nodeName !== 'A') el = el.parentNode;\r\n								if (!el || el.nodeName !== 'A') return;\r\n\r\n								if (\r\n									el.hasAttribute('download') ||\r\n									el.getAttribute('rel') === 'external' ||\r\n									el.target\r\n								)\r\n									return;\r\n\r\n								event.preventDefault();\r\n\r\n								if (el.href.startsWith(top_origin)) {\r\n									const url = new URL(el.href);\r\n									if (url.hash[0] === '#') {\r\n										window.location.hash = url.hash;\r\n										return;\r\n									}\r\n								}\r\n\r\n								window.open(el.href, '_blank');\r\n							});\r\n							send_ok();\r\n						} catch (e) {\r\n							send_error(e.message, e.stack);\r\n						}\r\n					}\r\n				}\r\n\r\n				window.addEventListener('message', handle_message, false);\r\n\r\n				window.onerror = function (msg, url, lineNo, columnNo, error) {\r\n					parent.postMessage({ action: 'error', value: error }, '*');\r\n				};\r\n\r\n				window.addEventListener('unhandledrejection', (event) => {\r\n					parent.postMessage({ action: 'unhandledrejection', value: event.reason }, '*');\r\n				});\r\n			}.call(this));\r\n\r\n			let previous = { level: null, args: null };\r\n\r\n			['clear', 'log', 'info', 'dir', 'warn', 'error', 'table'].forEach((level) => {\r\n				const original = console[level];\r\n				console[level] = (...args) => {\r\n					const stringifiedArgs = stringify(args);\r\n					if (previous.level === level && previous.args && previous.args === stringifiedArgs) {\r\n						parent.postMessage({ action: 'console', level, duplicate: true }, '*');\r\n					} else {\r\n						previous = { level, args: stringifiedArgs };\r\n\r\n						try {\r\n							parent.postMessage({ action: 'console', level, args }, '*');\r\n						} catch (err) {\r\n							parent.postMessage({ action: 'console', level: 'unclonable' }, '*');\r\n						}\r\n					}\r\n\r\n					original(...args);\r\n				};\r\n			});\r\n\r\n			[\r\n				{ method: 'group', action: 'console_group' },\r\n				{ method: 'groupEnd', action: 'console_group_end' },\r\n				{ method: 'groupCollapsed', action: 'console_group_collapsed' }\r\n			].forEach((group_action) => {\r\n				const original = console[group_action.method];\r\n				console[group_action.method] = (label) => {\r\n					parent.postMessage({ action: group_action.action, label }, '*');\r\n\r\n					original(label);\r\n				};\r\n			});\r\n\r\n			const timers = new Map();\r\n			const original_time = console.time;\r\n			const original_timelog = console.timeLog;\r\n			const original_timeend = console.timeEnd;\r\n\r\n			console.time = (label = 'default') => {\r\n				original_time(label);\r\n				timers.set(label, performance.now());\r\n			};\r\n			console.timeLog = (label = 'default') => {\r\n				original_timelog(label);\r\n				const now = performance.now();\r\n				if (timers.has(label)) {\r\n					parent.postMessage(\r\n						{\r\n							action: 'console',\r\n							level: 'system-log',\r\n							args: [`${label}: ${now - timers.get(label)}ms`]\r\n						},\r\n						'*'\r\n					);\r\n				} else {\r\n					parent.postMessage(\r\n						{ action: 'console', level: 'system-warn', args: [`Timer '${label}' does not exist`] },\r\n						'*'\r\n					);\r\n				}\r\n			};\r\n			console.timeEnd = (label = 'default') => {\r\n				original_timeend(label);\r\n				const now = performance.now();\r\n				if (timers.has(label)) {\r\n					parent.postMessage(\r\n						{\r\n							action: 'console',\r\n							level: 'system-log',\r\n							args: [`${label}: ${now - timers.get(label)}ms`]\r\n						},\r\n						'*'\r\n					);\r\n				} else {\r\n					parent.postMessage(\r\n						{ action: 'console', level: 'system-warn', args: [`Timer '${label}' does not exist`] },\r\n						'*'\r\n					);\r\n				}\r\n				timers.delete(label);\r\n			};\r\n\r\n			const original_assert = console.assert;\r\n			console.assert = (condition, ...args) => {\r\n				if (condition) {\r\n					const stack = new Error().stack;\r\n					parent.postMessage({ action: 'console', level: 'assert', args, stack }, '*');\r\n				}\r\n				original_assert(condition, ...args);\r\n			};\r\n\r\n			const counter = new Map();\r\n			const original_count = console.count;\r\n			const original_countreset = console.countReset;\r\n\r\n			console.count = (label = 'default') => {\r\n				counter.set(label, (counter.get(label) || 0) + 1);\r\n				parent.postMessage(\r\n					{ action: 'console', level: 'system-log', args: `${label}: ${counter.get(label)}` },\r\n					'*'\r\n				);\r\n				original_count(label);\r\n			};\r\n\r\n			console.countReset = (label = 'default') => {\r\n				if (counter.has(label)) {\r\n					counter.set(label, 0);\r\n				} else {\r\n					parent.postMessage(\r\n						{\r\n							action: 'console',\r\n							level: 'system-warn',\r\n							args: `Count for '${label}' does not exist`\r\n						},\r\n						'*'\r\n					);\r\n				}\r\n				original_countreset(label);\r\n			};\r\n\r\n			const original_trace = console.trace;\r\n\r\n			console.trace = (...args) => {\r\n				const stack = new Error().stack;\r\n				parent.postMessage({ action: 'console', level: 'trace', args, stack }, '*');\r\n				original_trace(...args);\r\n			};\r\n\r\n			function stringify(args) {\r\n				try {\r\n					return JSON.stringify(args);\r\n				} catch (error) {\r\n					return null;\r\n				}\r\n			}\r\n		<\/script>\r\n	</head>\r\n	<body></body>\r\n</html>\r\n";
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
      attr(iframe_1, "class", iframe_1_class_value = null_to_empty(ctx[0] || pending || ctx[6] ? "greyed-out" : "") + " svelte-12swy72");
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
      if (dirty & 65 && iframe_1_class_value !== (iframe_1_class_value = null_to_empty(ctx2[0] || pending || ctx2[6] ? "greyed-out" : "") + " svelte-12swy72")) {
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
function create_if_block_2$2(ctx) {
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
  let if_block = ctx[4].length > 0 && create_if_block_2$2(ctx);
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
      attr(button, "class", "svelte-12swy72");
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
          if_block = create_if_block_2$2(ctx2);
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
function create_if_block_1$2(ctx) {
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
function create_if_block$6(ctx) {
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
function create_fragment$8(ctx) {
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
  const if_block_creators = [create_if_block$6, create_if_block_1$2];
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
      attr(div0, "class", "overlay svelte-12swy72");
      attr(div1, "class", "iframe-container svelte-12swy72");
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
function instance$8($$self, $$props, $$invalidate) {
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
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
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
function create_fragment$7(ctx) {
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
      t44 = text("\r\n	});");
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
      t44 = claim_text(div1_nodes, "\r\n	});");
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "key svelte-7lonaj");
      attr(input0, "id", "dom-input");
      attr(input0, "type", "radio");
      input0.__value = "dom";
      input0.value = input0.__value;
      attr(input0, "class", "svelte-7lonaj");
      ctx[3][0].push(input0);
      attr(span1, "class", "string svelte-7lonaj");
      attr(label0, "for", "dom-input");
      attr(label0, "class", "svelte-7lonaj");
      attr(input1, "id", "ssr-input");
      attr(input1, "type", "radio");
      input1.__value = "ssr";
      input1.value = input1.__value;
      attr(input1, "class", "svelte-7lonaj");
      ctx[3][0].push(input1);
      attr(span2, "class", "string svelte-7lonaj");
      attr(label1, "for", "ssr-input");
      attr(label1, "class", "svelte-7lonaj");
      attr(div0, "class", "option svelte-7lonaj");
      attr(span3, "class", "key svelte-7lonaj");
      attr(span4, "class", "boolean svelte-7lonaj");
      attr(label2, "class", "option svelte-7lonaj");
      attr(span5, "class", "key svelte-7lonaj");
      attr(span6, "class", "boolean svelte-7lonaj");
      attr(label3, "class", "option svelte-7lonaj");
      attr(span7, "class", "key svelte-7lonaj");
      attr(span8, "class", "boolean svelte-7lonaj");
      attr(label4, "class", "option svelte-7lonaj");
      attr(span9, "class", "key svelte-7lonaj");
      attr(span10, "class", "boolean svelte-7lonaj");
      attr(label5, "class", "option svelte-7lonaj");
      attr(span11, "class", "key svelte-7lonaj");
      attr(span12, "class", "boolean svelte-7lonaj");
      attr(label6, "class", "option svelte-7lonaj");
      attr(span13, "class", "key svelte-7lonaj");
      attr(span14, "class", "boolean svelte-7lonaj");
      attr(label7, "class", "option svelte-7lonaj");
      attr(div1, "class", "options svelte-7lonaj");
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
      current = true;
    },
    o(local) {
      transition_out(checkbox0.$$.fragment, local);
      transition_out(checkbox1.$$.fragment, local);
      transition_out(checkbox2.$$.fragment, local);
      transition_out(checkbox3.$$.fragment, local);
      transition_out(checkbox4.$$.fragment, local);
      transition_out(checkbox5.$$.fragment, local);
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
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
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
    checkbox5_checked_binding
  ];
}
class CompilerOptions extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
  }
}
function WorkerWrapper$1() {
  return new Worker("/web3-repl-deploy/_app/assets/index.45bb4473.js", {
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
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i][0];
  child_ctx[23] = list[i][1];
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
function create_if_block_2$1(ctx) {
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
      attr(button, "class", "ast-toggle svelte-8y6rib");
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
      attr(span, "class", span_class_value = "token " + typeof ctx[1] + " svelte-8y6rib");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = JSON.stringify(ctx2[1]) + ""))
        set_data(t, t_value);
      if (dirty & 2 && span_class_value !== (span_class_value = "token " + typeof ctx2[1] + " svelte-8y6rib")) {
        attr(span, "class", span_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block$5(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1$1, create_else_block$2];
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
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
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
      attr(ul, "class", "svelte-8y6rib");
    },
    m(target, anchor) {
      insert_hydration(target, span0, anchor);
      append_hydration(span0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
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
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if ((!current || dirty & 64) && t3_value !== (t3_value = ctx2[6] ? "]" : "}"))
        set_data(t3, t3_value);
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
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
function create_if_block_1$1(ctx) {
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
      attr(button, "class", "preview svelte-8y6rib");
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
    i: noop,
    o: noop,
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
function create_fragment$6(ctx) {
  let li;
  let t;
  let current_block_type_index;
  let if_block1;
  let current;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (!ctx2[10] && ctx2[7])
      return create_if_block_2$1;
    if (ctx2[9])
      return create_if_block_3$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type && current_block_type(ctx);
  const if_block_creators = [create_if_block$5, create_else_block_1$1];
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
      attr(li, "class", "svelte-8y6rib");
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
function instance$6($$self, $$props, $$invalidate) {
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
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
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
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block$4(ctx) {
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
      attr(ul, "class", "svelte-8lioqk");
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
function create_fragment$5(ctx) {
  let div;
  let pre;
  let t0;
  let code;
  let t1;
  let current_block_type_index;
  let if_block;
  let t2;
  let t3;
  let t4;
  let message;
  let current;
  const if_block_creators = [create_if_block$4, create_else_block$1];
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
      code = element("code");
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
      code = claim_element(pre_nodes, "CODE", { class: true });
      var code_nodes = children(code);
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
      attr(code, "class", "svelte-8lioqk");
      attr(pre, "class", "svelte-8lioqk");
      attr(div, "class", "ast-view svelte-8lioqk");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, pre);
      append_hydration(pre, t0);
      append_hydration(pre, code);
      append_hydration(code, t1);
      if_blocks[current_block_type_index].m(code, null);
      append_hydration(code, t2);
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
        if_block.m(code, t2);
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
function instance$5($$self, $$props, $$invalidate) {
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
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { ast: 0, autoscroll: 1 });
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
      attr(button0, "class", "svelte-bo3jvb");
      toggle_class(button0, "active", ctx[11] === "result");
      attr(button1, "class", "svelte-bo3jvb");
      toggle_class(button1, "active", ctx[11] === "js");
      attr(button2, "class", "svelte-bo3jvb");
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
function create_if_block_2(ctx) {
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
      attr(button, "class", "active svelte-bo3jvb");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
    },
    p: noop,
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
      attr(button, "class", "svelte-bo3jvb");
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
function create_if_block_1(ctx) {
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
      attr(div, "class", "svelte-bo3jvb");
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
      attr(div, "class", "svelte-bo3jvb");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(compileroptions, div, null);
      current = true;
    },
    p: noop,
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
function create_if_block$3(ctx) {
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
      attr(div, "class", "tab-content svelte-bo3jvb");
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
      for (let i = 0; i < 3; i += 1) {
        const block2 = info.blocks[i];
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
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
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
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_fragment$4(ctx) {
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
      return create_if_block_2;
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
  const if_block_creators = [create_if_block_1, create_else_block];
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
  let if_block2 = ctx[8] && create_if_block$3(ctx);
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
      attr(div0, "class", "view-toggle svelte-bo3jvb");
      attr(div1, "class", "tab-content svelte-bo3jvb");
      toggle_class(div1, "visible", ctx[12] !== "md" && ctx[11] === "result");
      attr(div2, "class", "tab-content svelte-bo3jvb");
      toggle_class(div2, "visible", ctx[12] !== "md" && ctx[11] === "js");
      attr(div3, "class", "tab-content svelte-bo3jvb");
      toggle_class(div3, "visible", ctx[12] !== "md" && ctx[11] === "css");
      attr(iframe, "title", "Markdown");
      attr(iframe, "srcdoc", ctx[13]);
      attr(iframe, "class", "svelte-bo3jvb");
      attr(div4, "class", "tab-content svelte-bo3jvb");
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
          if_block2 = create_if_block$3(ctx2);
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
function instance$4($$self, $$props, $$invalidate) {
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
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
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
  return new Worker("/web3-repl-deploy/_app/assets/index.dd597b8c.js", {
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
function create_if_block$2(ctx) {
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
function create_fragment$3(ctx) {
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
  let if_block = ctx[16] && create_if_block$2(ctx);
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
      attr(div0, "class", "viewport svelte-12gl4sr");
      toggle_class(div0, "output", ctx[13]);
      attr(div1, "class", "container svelte-12gl4sr");
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
          if_block = create_if_block$2(ctx2);
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
function instance$3($$self, $$props, $$invalidate) {
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
    const { name, type } = $selected || {};
    components.set(data.components);
    const matched_component = data.components.find((file) => file.name === name && file.type === type);
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
    legacy: false
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
    if (!result.error)
      dispatch("bundle", result.es.code);
    if (result && token === current_token)
      bundle.set(result);
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
      const [, name, type] = match;
      const component = $components.find((c) => c.name === name && c.type === type);
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
    mark_text({ from, to }) {
      module_editor.unmarkText();
      module_editor.markText({ from, to });
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
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
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
var IPFSSaver_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
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
    value: 10,
    error: 11,
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
    p(new_ctx, dirty) {
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
      for (let i = 0; i < 3; i += 1) {
        const block2 = info.blocks[i];
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
function create_catch_block(ctx) {
  let p;
  let t0;
  let t1_value = ctx[11].message + "";
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
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx[11].message + ""))
        set_data(t1, t1_value);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (p_outro)
          p_outro.end(1);
        p_intro = create_in_transition(p, fly, ctx[1]);
        p_intro.start();
      });
      current = true;
    },
    o(local) {
      if (p_intro)
        p_intro.invalidate();
      p_outro = create_out_transition(p, fly, ctx[2]);
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
  let a0;
  let t1;
  let t2_value = ctx[10].cid.toV1().toString() + "";
  let t2;
  let a0_href_value;
  let br;
  let t3;
  let a1;
  let t4;
  let t5_value = ctx[10].cid.toV1().toString() + "";
  let t5;
  let a1_href_value;
  let t6;
  let a2;
  let t7;
  let t8;
  let p_intro;
  let p_outro;
  let style_height = `${height}px`;
  let current;
  return {
    c() {
      p = element("p");
      t0 = text("\u2714\uFE0F ");
      a0 = element("a");
      t1 = text("CloudFlare Gateway ");
      t2 = text(t2_value);
      br = element("br");
      t3 = text("\r\n				\r\n				\u2714\uFE0F\r\n				");
      a1 = element("a");
      t4 = text("DWeb.Link (Backup) ");
      t5 = text(t5_value);
      t6 = text("\r\n				(Public\r\n				");
      a2 = element("a");
      t7 = text("Gateway");
      t8 = text(")");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "\u2714\uFE0F ");
      a0 = claim_element(p_nodes, "A", { href: true, target: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "CloudFlare Gateway ");
      t2 = claim_text(a0_nodes, t2_value);
      a0_nodes.forEach(detach);
      br = claim_element(p_nodes, "BR", {});
      t3 = claim_text(p_nodes, "\r\n				\r\n				\u2714\uFE0F\r\n				");
      a1 = claim_element(p_nodes, "A", { href: true, target: true });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "DWeb.Link (Backup) ");
      t5 = claim_text(a1_nodes, t5_value);
      a1_nodes.forEach(detach);
      t6 = claim_text(p_nodes, "\r\n				(Public\r\n				");
      a2 = claim_element(p_nodes, "A", { href: true, target: true });
      var a2_nodes = children(a2);
      t7 = claim_text(a2_nodes, "Gateway");
      a2_nodes.forEach(detach);
      t8 = claim_text(p_nodes, ")");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", a0_href_value = ctx[3](ctx[10].cid));
      attr(a0, "target", "_blank");
      attr(a1, "href", a1_href_value = ctx[4](ctx[10].cid));
      attr(a1, "target", "_blank");
      attr(a2, "href", "https://ipfs.github.io/public-gateway-checker/");
      attr(a2, "target", "_blank");
      set_style(p, "height", style_height, false);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, a0);
      append_hydration(a0, t1);
      append_hydration(a0, t2);
      append_hydration(p, br);
      append_hydration(p, t3);
      append_hydration(p, a1);
      append_hydration(a1, t4);
      append_hydration(a1, t5);
      append_hydration(p, t6);
      append_hydration(p, a2);
      append_hydration(a2, t7);
      append_hydration(p, t8);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t2_value !== (t2_value = ctx[10].cid.toV1().toString() + ""))
        set_data(t2, t2_value);
      if (!current || dirty & 1 && a0_href_value !== (a0_href_value = ctx[3](ctx[10].cid))) {
        attr(a0, "href", a0_href_value);
      }
      if ((!current || dirty & 1) && t5_value !== (t5_value = ctx[10].cid.toV1().toString() + ""))
        set_data(t5, t5_value);
      if (!current || dirty & 1 && a1_href_value !== (a1_href_value = ctx[4](ctx[10].cid))) {
        attr(a1, "href", a1_href_value);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (p_outro)
          p_outro.end(1);
        p_intro = create_in_transition(p, fly, ctx[1]);
        p_intro.start();
      });
      current = true;
    },
    o(local) {
      if (p_intro)
        p_intro.invalidate();
      p_outro = create_out_transition(p, fly, ctx[2]);
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
  let style_height = `${height}px`;
  let current;
  return {
    c() {
      p = element("p");
      t = text("Loading IPFS...");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Loading IPFS...");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(p, "height", style_height, false);
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
        p_intro = create_in_transition(p, fly, ctx[1]);
        p_intro.start();
      });
      current = true;
    },
    o(local) {
      if (p_intro)
        p_intro.invalidate();
      p_outro = create_out_transition(p, fly, ctx[2]);
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
function create_fragment$2(ctx) {
  let div;
  let style_height = `${height}px`;
  let current;
  let if_block = ctx[0] && create_if_block$1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "inner svelte-wmgfvq");
      set_style(div, "--height", height + "px");
      set_style(div, "height", style_height, false);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
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
          if_block = create_if_block$1(ctx2);
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
      if (if_block)
        if_block.d();
    }
  };
}
let height = "70";
function instance$2($$self, $$props, $$invalidate) {
  let { content } = $$props;
  let { path } = $$props;
  let { rootCID } = $$props;
  let flyIn = {
    delay: 100,
    duration: 750,
    x: 0,
    y: -height,
    opacity: 0.5,
    easing: identity
  };
  let flyOut = {
    delay: 100,
    duration: 750,
    x: 0,
    y: height,
    opacity: 0.5,
    easing: identity
  };
  let saveResult;
  let saveContent;
  let ipfsNode;
  const cfUrl = (cid) => `https://${cid == null ? void 0 : cid.toV1().toString()}.ipfs.cf-ipfs.com/`;
  const dwebUrl = (cid) => `http://${cid == null ? void 0 : cid.toV1().toString()}.ipfs.dweb.link/`;
  onMount(async () => {
    if (!globalThis.ipfsNode) {
      console.log("No ipfs global");
      const IPFSmodule = await __vitePreload(() => import("../chunks/ipfs-core-53fb93ca.js"), true ? [] : void 0);
      const IPFS = IPFSmodule.default;
      ipfsNode = await IPFS.create();
      globalThis.ipfsNode = ipfsNode;
    } else {
      console.log("Wait for ipfs global");
      ipfsNode = globalThis.ipfsNode;
    }
    console.log("ipfs global loaded", { ipfsNode });
    async function add(content2) {
      return await ipfsNode.add(content2, { pin: true, wrapWithDirectory: true });
    }
    $$invalidate(8, saveContent = async () => {
      $$invalidate(0, saveResult = add({ path: path || "index.html", content }));
      await saveResult;
    });
  });
  $$self.$$set = ($$props2) => {
    if ("content" in $$props2)
      $$invalidate(5, content = $$props2.content);
    if ("path" in $$props2)
      $$invalidate(6, path = $$props2.path);
    if ("rootCID" in $$props2)
      $$invalidate(7, rootCID = $$props2.rootCID);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 288) {
      content && saveContent && saveContent();
    }
  };
  return [saveResult, flyIn, flyOut, cfUrl, dwebUrl, content, path, rootCID, saveContent];
}
class IPFSSaver extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { content: 5, path: 6, rootCID: 7 });
  }
}
const code_0 = `<script>
	let name = 'world';
<\/script>

<h1>Hello {name}!</h1>

<style>
	h1 {
		color: red;
	}
</style>
`;
var App_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let ipfssaver;
  let current;
  ipfssaver = new IPFSSaver({ props: { content: ctx[1] } });
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
        ipfssaver_changes.content = ctx2[1];
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
  let main;
  let t;
  let repl_1;
  let current;
  let if_block = ctx[1] && create_if_block(ctx);
  let repl_1_props = { showAst: true };
  repl_1 = new Package({ props: repl_1_props });
  ctx[4](repl_1);
  repl_1.$on("bundle", ctx[2]);
  return {
    c() {
      main = element("main");
      if (if_block)
        if_block.c();
      t = space();
      create_component(repl_1.$$.fragment);
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (if_block)
        if_block.l(main_nodes);
      t = claim_space(main_nodes);
      claim_component(repl_1.$$.fragment, main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(main, "class", "svelte-g9llm2");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      if (if_block)
        if_block.m(main, null);
      append_hydration(main, t);
      mount_component(repl_1, main, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(main, t);
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
        detach(main);
      if (if_block)
        if_block.d();
      ctx[4](null);
      destroy_component(repl_1);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { components = [{ name: "App", type: "svx", source: code_0 }] } = $$props;
  let repl;
  let code;
  onMount(() => {
    repl.set({ components });
  });
  function handleBundled(e) {
    $$invalidate(1, code = e.detail);
  }
  function repl_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      repl = $$value;
      $$invalidate(0, repl);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("components" in $$props2)
      $$invalidate(3, components = $$props2.components);
  };
  return [repl, code, handleBundled, components, repl_1_binding];
}
class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { components: 3 });
  }
}
function create_fragment(ctx) {
  let main;
  let app;
  let current;
  app = new App({
    props: { components: ctx[0] }
  });
  return {
    c() {
      main = element("main");
      create_component(app.$$.fragment);
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      claim_component(app.$$.fragment, main_nodes);
      main_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      mount_component(app, main, null);
      current = true;
    },
    p: noop,
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
      if (detaching)
        detach(main);
      destroy_component(app);
    }
  };
}
function instance($$self) {
  let components = [
    {
      name: "App",
      type: "svx",
      source: `<script>
	
		import { editable } from 'https://cdn.jsdelivr.net/gh/douganderson444/svelte-editable-action@latest/src/lib/editable.js'
		
		export let name = 'world';
<\/script>

<h1 use:editable>Hello {name}!</h1>

<style>
	h1 {
		color: red;
	}
</style>
`
    }
  ];
  return [components];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes as default };
//# sourceMappingURL=index.svelte-af42ca07.js.map
