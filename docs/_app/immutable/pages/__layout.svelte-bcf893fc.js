import { SvelteComponent, init, safe_not_equal, create_slot, element, space, text, claim_element, children, claim_space, claim_text, detach, attr, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out } from "../chunks/index-7afc149e.js";
var app = "";
var base = "";
var code = "";
var __layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let main;
  let t0;
  let footer;
  let p;
  let t1;
  let a;
  let t2;
  let t3;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      main = element("main");
      if (default_slot)
        default_slot.c();
      t0 = space();
      footer = element("footer");
      p = element("p");
      t1 = text("visit ");
      a = element("a");
      t2 = text("PeerPiper.io");
      t3 = text(" to learn more about PeerPiper");
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      t0 = claim_space(main_nodes);
      footer = claim_element(main_nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      p = claim_element(footer_nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, "visit ");
      a = claim_element(p_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "PeerPiper.io");
      a_nodes.forEach(detach);
      t3 = claim_text(p_nodes, " to learn more about PeerPiper");
      p_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "https://peerpiper.io");
      attr(a, "class", "svelte-xux67t");
      attr(footer, "class", "svelte-xux67t");
      attr(main, "class", "svelte-xux67t");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
      append_hydration(main, t0);
      append_hydration(main, footer);
      append_hydration(footer, p);
      append_hydration(p, t1);
      append_hydration(p, a);
      append_hydration(a, t2);
      append_hydration(p, t3);
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
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class _layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { _layout as default };
//# sourceMappingURL=__layout.svelte-bcf893fc.js.map
