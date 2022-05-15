var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { mdsvex } from "https://cdn.jsdelivr.net/npm/mdsvex/dist/browser-es.js";
/*
  @license
	Rollup.js v2.73.0
	Fri, 13 May 2022 15:50:44 GMT - commit 931a19940f58c745e9da9eae5585b551f356b2ed

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
for (var t = {}, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i$1 = 0; i$1 < s.length; i$1++)
  t[s.charCodeAt(i$1)] = i$1;
function n(e, t, s) {
  s === 4 ? e.push([t[0], t[1], t[2], t[3]]) : s === 5 ? e.push([t[0], t[1], t[2], t[3], t[4]]) : s === 1 && e.push([t[0]]);
}
function r(e) {
  var t = "";
  e = e < 0 ? -e << 1 | 1 : e << 1;
  do {
    var i = 31 & e;
    (e >>>= 5) > 0 && (i |= 32), t += s[i];
  } while (e > 0);
  return t;
}
class a {
  constructor(e) {
    this.bits = e instanceof a ? e.bits.slice() : [];
  }
  add(e) {
    this.bits[e >> 5] |= 1 << (31 & e);
  }
  has(e) {
    return !!(this.bits[e >> 5] & 1 << (31 & e));
  }
}
class o {
  constructor(e, t, s) {
    this.start = e, this.end = t, this.original = s, this.intro = "", this.outro = "", this.content = s, this.storeName = false, this.edited = false, Object.defineProperties(this, { previous: { writable: true, value: null }, next: { writable: true, value: null } });
  }
  appendLeft(e) {
    this.outro += e;
  }
  appendRight(e) {
    this.intro = this.intro + e;
  }
  clone() {
    const e = new o(this.start, this.end, this.original);
    return e.intro = this.intro, e.outro = this.outro, e.content = this.content, e.storeName = this.storeName, e.edited = this.edited, e;
  }
  contains(e) {
    return this.start < e && e < this.end;
  }
  eachNext(e) {
    let t = this;
    for (; t; )
      e(t), t = t.next;
  }
  eachPrevious(e) {
    let t = this;
    for (; t; )
      e(t), t = t.previous;
  }
  edit(e, t, s) {
    return this.content = e, s || (this.intro = "", this.outro = ""), this.storeName = t, this.edited = true, this;
  }
  prependLeft(e) {
    this.outro = e + this.outro;
  }
  prependRight(e) {
    this.intro = e + this.intro;
  }
  split(e) {
    const t = e - this.start, s = this.original.slice(0, t), i = this.original.slice(t);
    this.original = s;
    const n2 = new o(e, this.end, i);
    return n2.outro = this.outro, this.outro = "", this.end = e, this.edited ? (n2.edit("", false), this.content = "") : this.content = s, n2.next = this.next, n2.next && (n2.next.previous = n2), n2.previous = this, this.next = n2, n2;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(e) {
    if (this.outro = this.outro.replace(e, ""), this.outro.length)
      return true;
    const t = this.content.replace(e, "");
    return t.length ? (t !== this.content && this.split(this.start + t.length).edit("", void 0, true), true) : (this.edit("", void 0, true), this.intro = this.intro.replace(e, ""), !!this.intro.length || void 0);
  }
  trimStart(e) {
    if (this.intro = this.intro.replace(e, ""), this.intro.length)
      return true;
    const t = this.content.replace(e, "");
    return t.length ? (t !== this.content && (this.split(this.end - t.length), this.edit("", void 0, true)), true) : (this.edit("", void 0, true), this.outro = this.outro.replace(e, ""), !!this.outro.length || void 0);
  }
}
let h = () => {
  throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
};
typeof window != "undefined" && typeof window.btoa == "function" ? h = (e) => window.btoa(unescape(encodeURIComponent(e))) : typeof Buffer == "function" && (h = (e) => Buffer.from(e, "utf-8").toString("base64"));
class l {
  constructor(e) {
    this.version = 3, this.file = e.file, this.sources = e.sources, this.sourcesContent = e.sourcesContent, this.names = e.names, this.mappings = function(e2) {
      for (var t = 0, s = 0, i = 0, n2 = 0, a2 = "", o2 = 0; o2 < e2.length; o2++) {
        var h2 = e2[o2];
        if (o2 > 0 && (a2 += ";"), h2.length !== 0) {
          for (var l2 = 0, c2 = [], u2 = 0, d2 = h2; u2 < d2.length; u2++) {
            var p2 = d2[u2], f2 = r(p2[0] - l2);
            l2 = p2[0], p2.length > 1 && (f2 += r(p2[1] - t) + r(p2[2] - s) + r(p2[3] - i), t = p2[1], s = p2[2], i = p2[3]), p2.length === 5 && (f2 += r(p2[4] - n2), n2 = p2[4]), c2.push(f2);
          }
          a2 += c2.join(",");
        }
      }
      return a2;
    }(e.mappings);
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + h(this.toString());
  }
}
function c(e) {
  const t = e.split("\n"), s = t.filter((e2) => /^\t+/.test(e2)), i = t.filter((e2) => /^ {2,}/.test(e2));
  if (s.length === 0 && i.length === 0)
    return null;
  if (s.length >= i.length)
    return "	";
  const n2 = i.reduce((e2, t2) => {
    const s2 = /^ +/.exec(t2)[0].length;
    return Math.min(s2, e2);
  }, 1 / 0);
  return new Array(n2 + 1).join(" ");
}
function u(e, t) {
  const s = e.split(/[/\\]/), i = t.split(/[/\\]/);
  for (s.pop(); s[0] === i[0]; )
    s.shift(), i.shift();
  if (s.length) {
    let e2 = s.length;
    for (; e2--; )
      s[e2] = "..";
  }
  return s.concat(i).join("/");
}
const d = Object.prototype.toString;
function p(e) {
  return d.call(e) === "[object Object]";
}
function f(e) {
  const t = e.split("\n"), s = [];
  for (let e2 = 0, i = 0; e2 < t.length; e2++)
    s.push(i), i += t[e2].length + 1;
  return function(e2) {
    let t2 = 0, i = s.length;
    for (; t2 < i; ) {
      const n3 = t2 + i >> 1;
      e2 < s[n3] ? i = n3 : t2 = n3 + 1;
    }
    const n2 = t2 - 1;
    return { line: n2, column: e2 - s[n2] };
  };
}
class m {
  constructor(e) {
    this.hires = e, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
  }
  addEdit(e, t, s, i) {
    if (t.length) {
      const t2 = [this.generatedCodeColumn, e, s.line, s.column];
      i >= 0 && t2.push(i), this.rawSegments.push(t2);
    } else
      this.pending && this.rawSegments.push(this.pending);
    this.advance(t), this.pending = null;
  }
  addUneditedChunk(e, t, s, i, n2) {
    let r2 = t.start, a2 = true;
    for (; r2 < t.end; )
      (this.hires || a2 || n2.has(r2)) && this.rawSegments.push([this.generatedCodeColumn, e, i.line, i.column]), s[r2] === "\n" ? (i.line += 1, i.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, a2 = true) : (i.column += 1, this.generatedCodeColumn += 1, a2 = false), r2 += 1;
    this.pending = null;
  }
  advance(e) {
    if (!e)
      return;
    const t = e.split("\n");
    if (t.length > 1) {
      for (let e2 = 0; e2 < t.length - 1; e2++)
        this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += t[t.length - 1].length;
  }
}
const g = "\n", y = { insertLeft: false, insertRight: false, storeName: false };
class E {
  constructor(e, t = {}) {
    const s = new o(0, e.length, e);
    Object.defineProperties(this, { original: { writable: true, value: e }, outro: { writable: true, value: "" }, intro: { writable: true, value: "" }, firstChunk: { writable: true, value: s }, lastChunk: { writable: true, value: s }, lastSearchedChunk: { writable: true, value: s }, byStart: { writable: true, value: {} }, byEnd: { writable: true, value: {} }, filename: { writable: true, value: t.filename }, indentExclusionRanges: { writable: true, value: t.indentExclusionRanges }, sourcemapLocations: { writable: true, value: new a() }, storedNames: { writable: true, value: {} }, indentStr: { writable: true, value: c(e) } }), this.byStart[0] = s, this.byEnd[e.length] = s;
  }
  addSourcemapLocation(e) {
    this.sourcemapLocations.add(e);
  }
  append(e) {
    if (typeof e != "string")
      throw new TypeError("outro content must be a string");
    return this.outro += e, this;
  }
  appendLeft(e, t) {
    if (typeof t != "string")
      throw new TypeError("inserted content must be a string");
    this._split(e);
    const s = this.byEnd[e];
    return s ? s.appendLeft(t) : this.intro += t, this;
  }
  appendRight(e, t) {
    if (typeof t != "string")
      throw new TypeError("inserted content must be a string");
    this._split(e);
    const s = this.byStart[e];
    return s ? s.appendRight(t) : this.outro += t, this;
  }
  clone() {
    const e = new E(this.original, { filename: this.filename });
    let t = this.firstChunk, s = e.firstChunk = e.lastSearchedChunk = t.clone();
    for (; t; ) {
      e.byStart[s.start] = s, e.byEnd[s.end] = s;
      const i = t.next, n2 = i && i.clone();
      n2 && (s.next = n2, n2.previous = s, s = n2), t = i;
    }
    return e.lastChunk = s, this.indentExclusionRanges && (e.indentExclusionRanges = this.indentExclusionRanges.slice()), e.sourcemapLocations = new a(this.sourcemapLocations), e.intro = this.intro, e.outro = this.outro, e;
  }
  generateDecodedMap(e) {
    e = e || {};
    const t = Object.keys(this.storedNames), s = new m(e.hires), i = f(this.original);
    return this.intro && s.advance(this.intro), this.firstChunk.eachNext((e2) => {
      const n2 = i(e2.start);
      e2.intro.length && s.advance(e2.intro), e2.edited ? s.addEdit(0, e2.content, n2, e2.storeName ? t.indexOf(e2.original) : -1) : s.addUneditedChunk(0, e2, this.original, n2, this.sourcemapLocations), e2.outro.length && s.advance(e2.outro);
    }), { file: e.file ? e.file.split(/[/\\]/).pop() : null, sources: [e.source ? u(e.file || "", e.source) : null], sourcesContent: e.includeContent ? [this.original] : [null], names: t, mappings: s.raw };
  }
  generateMap(e) {
    return new l(this.generateDecodedMap(e));
  }
  getIndentString() {
    return this.indentStr === null ? "	" : this.indentStr;
  }
  indent(e, t) {
    const s = /^[^\r\n]/gm;
    if (p(e) && (t = e, e = void 0), (e = e !== void 0 ? e : this.indentStr || "	") === "")
      return this;
    const i = {};
    if ((t = t || {}).exclude) {
      (typeof t.exclude[0] == "number" ? [t.exclude] : t.exclude).forEach((e2) => {
        for (let t2 = e2[0]; t2 < e2[1]; t2 += 1)
          i[t2] = true;
      });
    }
    let n2 = t.indentStart !== false;
    const r2 = (t2) => n2 ? `${e}${t2}` : (n2 = true, t2);
    this.intro = this.intro.replace(s, r2);
    let a2 = 0, o2 = this.firstChunk;
    for (; o2; ) {
      const t2 = o2.end;
      if (o2.edited)
        i[a2] || (o2.content = o2.content.replace(s, r2), o2.content.length && (n2 = o2.content[o2.content.length - 1] === "\n"));
      else
        for (a2 = o2.start; a2 < t2; ) {
          if (!i[a2]) {
            const t3 = this.original[a2];
            t3 === "\n" ? n2 = true : t3 !== "\r" && n2 && (n2 = false, a2 === o2.start || (this._splitChunk(o2, a2), o2 = o2.next), o2.prependRight(e));
          }
          a2 += 1;
        }
      a2 = o2.end, o2 = o2.next;
    }
    return this.outro = this.outro.replace(s, r2), this;
  }
  insert() {
    throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)");
  }
  insertLeft(e, t) {
    return y.insertLeft || (console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"), y.insertLeft = true), this.appendLeft(e, t);
  }
  insertRight(e, t) {
    return y.insertRight || (console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"), y.insertRight = true), this.prependRight(e, t);
  }
  move(e, t, s) {
    if (s >= e && s <= t)
      throw new Error("Cannot move a selection inside itself");
    this._split(e), this._split(t), this._split(s);
    const i = this.byStart[e], n2 = this.byEnd[t], r2 = i.previous, a2 = n2.next, o2 = this.byStart[s];
    if (!o2 && n2 === this.lastChunk)
      return this;
    const h2 = o2 ? o2.previous : this.lastChunk;
    return r2 && (r2.next = a2), a2 && (a2.previous = r2), h2 && (h2.next = i), o2 && (o2.previous = n2), i.previous || (this.firstChunk = n2.next), n2.next || (this.lastChunk = i.previous, this.lastChunk.next = null), i.previous = h2, n2.next = o2 || null, h2 || (this.firstChunk = i), o2 || (this.lastChunk = n2), this;
  }
  overwrite(e, t, s, i) {
    if (typeof s != "string")
      throw new TypeError("replacement content must be a string");
    for (; e < 0; )
      e += this.original.length;
    for (; t < 0; )
      t += this.original.length;
    if (t > this.original.length)
      throw new Error("end is out of bounds");
    if (e === t)
      throw new Error("Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead");
    this._split(e), this._split(t), i === true && (y.storeName || (console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"), y.storeName = true), i = { storeName: true });
    const n2 = i !== void 0 && i.storeName, r2 = i !== void 0 && i.contentOnly;
    if (n2) {
      const s2 = this.original.slice(e, t);
      Object.defineProperty(this.storedNames, s2, { writable: true, value: true, enumerable: true });
    }
    const a2 = this.byStart[e], h2 = this.byEnd[t];
    if (a2) {
      let e2 = a2;
      for (; e2 !== h2; ) {
        if (e2.next !== this.byStart[e2.end])
          throw new Error("Cannot overwrite across a split point");
        e2 = e2.next, e2.edit("", false);
      }
      a2.edit(s, n2, r2);
    } else {
      const i2 = new o(e, t, "").edit(s, n2);
      h2.next = i2, i2.previous = h2;
    }
    return this;
  }
  prepend(e) {
    if (typeof e != "string")
      throw new TypeError("outro content must be a string");
    return this.intro = e + this.intro, this;
  }
  prependLeft(e, t) {
    if (typeof t != "string")
      throw new TypeError("inserted content must be a string");
    this._split(e);
    const s = this.byEnd[e];
    return s ? s.prependLeft(t) : this.intro = t + this.intro, this;
  }
  prependRight(e, t) {
    if (typeof t != "string")
      throw new TypeError("inserted content must be a string");
    this._split(e);
    const s = this.byStart[e];
    return s ? s.prependRight(t) : this.outro = t + this.outro, this;
  }
  remove(e, t) {
    for (; e < 0; )
      e += this.original.length;
    for (; t < 0; )
      t += this.original.length;
    if (e === t)
      return this;
    if (e < 0 || t > this.original.length)
      throw new Error("Character is out of bounds");
    if (e > t)
      throw new Error("end must be greater than start");
    this._split(e), this._split(t);
    let s = this.byStart[e];
    for (; s; )
      s.intro = "", s.outro = "", s.edit(""), s = t > s.end ? this.byStart[s.end] : null;
    return this;
  }
  lastChar() {
    if (this.outro.length)
      return this.outro[this.outro.length - 1];
    let e = this.lastChunk;
    do {
      if (e.outro.length)
        return e.outro[e.outro.length - 1];
      if (e.content.length)
        return e.content[e.content.length - 1];
      if (e.intro.length)
        return e.intro[e.intro.length - 1];
    } while (e = e.previous);
    return this.intro.length ? this.intro[this.intro.length - 1] : "";
  }
  lastLine() {
    let e = this.outro.lastIndexOf(g);
    if (e !== -1)
      return this.outro.substr(e + 1);
    let t = this.outro, s = this.lastChunk;
    do {
      if (s.outro.length > 0) {
        if (e = s.outro.lastIndexOf(g), e !== -1)
          return s.outro.substr(e + 1) + t;
        t = s.outro + t;
      }
      if (s.content.length > 0) {
        if (e = s.content.lastIndexOf(g), e !== -1)
          return s.content.substr(e + 1) + t;
        t = s.content + t;
      }
      if (s.intro.length > 0) {
        if (e = s.intro.lastIndexOf(g), e !== -1)
          return s.intro.substr(e + 1) + t;
        t = s.intro + t;
      }
    } while (s = s.previous);
    return e = this.intro.lastIndexOf(g), e !== -1 ? this.intro.substr(e + 1) + t : this.intro + t;
  }
  slice(e = 0, t = this.original.length) {
    for (; e < 0; )
      e += this.original.length;
    for (; t < 0; )
      t += this.original.length;
    let s = "", i = this.firstChunk;
    for (; i && (i.start > e || i.end <= e); ) {
      if (i.start < t && i.end >= t)
        return s;
      i = i.next;
    }
    if (i && i.edited && i.start !== e)
      throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);
    const n2 = i;
    for (; i; ) {
      !i.intro || n2 === i && i.start !== e || (s += i.intro);
      const r2 = i.start < t && i.end >= t;
      if (r2 && i.edited && i.end !== t)
        throw new Error(`Cannot use replaced character ${t} as slice end anchor.`);
      const a2 = n2 === i ? e - i.start : 0, o2 = r2 ? i.content.length + t - i.end : i.content.length;
      if (s += i.content.slice(a2, o2), !i.outro || r2 && i.end !== t || (s += i.outro), r2)
        break;
      i = i.next;
    }
    return s;
  }
  snip(e, t) {
    const s = this.clone();
    return s.remove(0, e), s.remove(t, s.original.length), s;
  }
  _split(e) {
    if (this.byStart[e] || this.byEnd[e])
      return;
    let t = this.lastSearchedChunk;
    const s = e > t.end;
    for (; t; ) {
      if (t.contains(e))
        return this._splitChunk(t, e);
      t = s ? this.byStart[t.end] : this.byEnd[t.start];
    }
  }
  _splitChunk(e, t) {
    if (e.edited && e.content.length) {
      const s2 = f(this.original)(t);
      throw new Error(`Cannot split a chunk that has already been edited (${s2.line}:${s2.column} \u2013 "${e.original}")`);
    }
    const s = e.split(t);
    return this.byEnd[t] = e, this.byStart[t] = s, this.byEnd[s.end] = s, e === this.lastChunk && (this.lastChunk = s), this.lastSearchedChunk = e, true;
  }
  toString() {
    let e = this.intro, t = this.firstChunk;
    for (; t; )
      e += t.toString(), t = t.next;
    return e + this.outro;
  }
  isEmpty() {
    let e = this.firstChunk;
    do {
      if (e.intro.length && e.intro.trim() || e.content.length && e.content.trim() || e.outro.length && e.outro.trim())
        return false;
    } while (e = e.next);
    return true;
  }
  length() {
    let e = this.firstChunk, t = 0;
    do {
      t += e.intro.length + e.content.length + e.outro.length;
    } while (e = e.next);
    return t;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(e) {
    return this.trimStart(e).trimEnd(e);
  }
  trimEndAborted(e) {
    const t = new RegExp((e || "\\s") + "+$");
    if (this.outro = this.outro.replace(t, ""), this.outro.length)
      return true;
    let s = this.lastChunk;
    do {
      const e2 = s.end, i = s.trimEnd(t);
      if (s.end !== e2 && (this.lastChunk === s && (this.lastChunk = s.next), this.byEnd[s.end] = s, this.byStart[s.next.start] = s.next, this.byEnd[s.next.end] = s.next), i)
        return true;
      s = s.previous;
    } while (s);
    return false;
  }
  trimEnd(e) {
    return this.trimEndAborted(e), this;
  }
  trimStartAborted(e) {
    const t = new RegExp("^" + (e || "\\s") + "+");
    if (this.intro = this.intro.replace(t, ""), this.intro.length)
      return true;
    let s = this.firstChunk;
    do {
      const e2 = s.end, i = s.trimStart(t);
      if (s.end !== e2 && (s === this.lastChunk && (this.lastChunk = s.next), this.byEnd[s.end] = s, this.byStart[s.next.start] = s.next, this.byEnd[s.next.end] = s.next), i)
        return true;
      s = s.next;
    } while (s);
    return false;
  }
  trimStart(e) {
    return this.trimStartAborted(e), this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  replace(e, t) {
    function s(e2, s2) {
      return typeof t == "string" ? t.replace(/\$(\$|&|\d+)/g, (t2, s3) => {
        if (s3 === "$")
          return "$";
        if (s3 === "&")
          return e2[0];
        return +s3 < e2.length ? e2[+s3] : `$${s3}`;
      }) : t(...e2, e2.index, s2, e2.groups);
    }
    if (typeof e != "string" && e.global) {
      (function(e2, t2) {
        let s2;
        const i = [];
        for (; s2 = e2.exec(t2); )
          i.push(s2);
        return i;
      })(e, this.original).forEach((e2) => {
        e2.index != null && this.overwrite(e2.index, e2.index + e2[0].length, s(e2, this.original));
      });
    } else {
      const t2 = this.original.match(e);
      t2 && t2.index != null && this.overwrite(t2.index, t2.index + t2[0].length, s(t2, this.original));
    }
    return this;
  }
}
const x = Object.prototype.hasOwnProperty;
class b {
  constructor(e = {}) {
    this.intro = e.intro || "", this.separator = e.separator !== void 0 ? e.separator : "\n", this.sources = [], this.uniqueSources = [], this.uniqueSourceIndexByFilename = {};
  }
  addSource(e) {
    if (e instanceof E)
      return this.addSource({ content: e, filename: e.filename, separator: this.separator });
    if (!p(e) || !e.content)
      throw new Error("bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`");
    if (["filename", "indentExclusionRanges", "separator"].forEach((t) => {
      x.call(e, t) || (e[t] = e.content[t]);
    }), e.separator === void 0 && (e.separator = this.separator), e.filename)
      if (x.call(this.uniqueSourceIndexByFilename, e.filename)) {
        const t = this.uniqueSources[this.uniqueSourceIndexByFilename[e.filename]];
        if (e.content.original !== t.content)
          throw new Error(`Illegal source: same filename (${e.filename}), different contents`);
      } else
        this.uniqueSourceIndexByFilename[e.filename] = this.uniqueSources.length, this.uniqueSources.push({ filename: e.filename, content: e.content.original });
    return this.sources.push(e), this;
  }
  append(e, t) {
    return this.addSource({ content: new E(e), separator: t && t.separator || "" }), this;
  }
  clone() {
    const e = new b({ intro: this.intro, separator: this.separator });
    return this.sources.forEach((t) => {
      e.addSource({ filename: t.filename, content: t.content.clone(), separator: t.separator });
    }), e;
  }
  generateDecodedMap(e = {}) {
    const t = [];
    this.sources.forEach((e2) => {
      Object.keys(e2.content.storedNames).forEach((e3) => {
        ~t.indexOf(e3) || t.push(e3);
      });
    });
    const s = new m(e.hires);
    return this.intro && s.advance(this.intro), this.sources.forEach((e2, i) => {
      i > 0 && s.advance(this.separator);
      const n2 = e2.filename ? this.uniqueSourceIndexByFilename[e2.filename] : -1, r2 = e2.content, a2 = f(r2.original);
      r2.intro && s.advance(r2.intro), r2.firstChunk.eachNext((i2) => {
        const o2 = a2(i2.start);
        i2.intro.length && s.advance(i2.intro), e2.filename ? i2.edited ? s.addEdit(n2, i2.content, o2, i2.storeName ? t.indexOf(i2.original) : -1) : s.addUneditedChunk(n2, i2, r2.original, o2, r2.sourcemapLocations) : s.advance(i2.content), i2.outro.length && s.advance(i2.outro);
      }), r2.outro && s.advance(r2.outro);
    }), { file: e.file ? e.file.split(/[/\\]/).pop() : null, sources: this.uniqueSources.map((t2) => e.file ? u(e.file, t2.filename) : t2.filename), sourcesContent: this.uniqueSources.map((t2) => e.includeContent ? t2.content : null), names: t, mappings: s.raw };
  }
  generateMap(e) {
    return new l(this.generateDecodedMap(e));
  }
  getIndentString() {
    const e = {};
    return this.sources.forEach((t) => {
      const s = t.content.indentStr;
      s !== null && (e[s] || (e[s] = 0), e[s] += 1);
    }), Object.keys(e).sort((t, s) => e[t] - e[s])[0] || "	";
  }
  indent(e) {
    if (arguments.length || (e = this.getIndentString()), e === "")
      return this;
    let t = !this.intro || this.intro.slice(-1) === "\n";
    return this.sources.forEach((s, i) => {
      const n2 = s.separator !== void 0 ? s.separator : this.separator, r2 = t || i > 0 && /\r?\n$/.test(n2);
      s.content.indent(e, { exclude: s.indentExclusionRanges, indentStart: r2 }), t = s.content.lastChar() === "\n";
    }), this.intro && (this.intro = e + this.intro.replace(/^[^\n]/gm, (t2, s) => s > 0 ? e + t2 : t2)), this;
  }
  prepend(e) {
    return this.intro = e + this.intro, this;
  }
  toString() {
    const e = this.sources.map((e2, t) => {
      const s = e2.separator !== void 0 ? e2.separator : this.separator;
      return (t > 0 ? s : "") + e2.content.toString();
    }).join("");
    return this.intro + e;
  }
  isEmpty() {
    return (!this.intro.length || !this.intro.trim()) && !this.sources.some((e) => !e.content.isEmpty());
  }
  length() {
    return this.sources.reduce((e, t) => e + t.content.length(), this.intro.length);
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(e) {
    return this.trimStart(e).trimEnd(e);
  }
  trimStart(e) {
    const t = new RegExp("^" + (e || "\\s") + "+");
    if (this.intro = this.intro.replace(t, ""), !this.intro) {
      let t2, s = 0;
      do {
        if (t2 = this.sources[s++], !t2)
          break;
      } while (!t2.content.trimStartAborted(e));
    }
    return this;
  }
  trimEnd(e) {
    const t = new RegExp((e || "\\s") + "+$");
    let s, i = this.sources.length - 1;
    do {
      if (s = this.sources[i--], !s) {
        this.intro = this.intro.replace(t, "");
        break;
      }
    } while (!s.content.trimEndAborted(e));
    return this;
  }
}
const v = /^(?:\/|(?:[A-Za-z]:)?[\\|/])/, A = /^\.?\.\//, S = /\\/g, P = /[/\\]/, k = /\.[^.]+$/;
function w(e) {
  return v.test(e);
}
function C(e) {
  return A.test(e);
}
function I(e) {
  return e.replace(S, "/");
}
function _(e) {
  return e.split(P).pop() || "";
}
function N(e) {
  const t = /[/\\][^/\\]*$/.exec(e);
  if (!t)
    return ".";
  const s = e.slice(0, -t[0].length);
  return s || "/";
}
function $(e) {
  const t = k.exec(_(e));
  return t ? t[0] : "";
}
function T(e, t) {
  const s = e.split(P).filter(Boolean), i = t.split(P).filter(Boolean);
  for (s[0] === "." && s.shift(), i[0] === "." && i.shift(); s[0] && i[0] && s[0] === i[0]; )
    s.shift(), i.shift();
  for (; i[0] === ".." && s.length > 0; )
    i.shift(), s.pop();
  for (; s.pop(); )
    i.unshift("..");
  return i.join("/");
}
function R(...e) {
  const t = e.shift();
  if (!t)
    return "/";
  let s = t.split(P);
  for (const t2 of e)
    if (w(t2))
      s = t2.split(P);
    else {
      const e2 = t2.split(P);
      for (; e2[0] === "." || e2[0] === ".."; ) {
        e2.shift() === ".." && s.pop();
      }
      s.push(...e2);
    }
  return s.join("/");
}
function M(e, t, s) {
  const i = e.get(t);
  if (i)
    return i;
  const n2 = s();
  return e.set(t, n2), n2;
}
const D = Symbol("Unknown Key"), L = Symbol("Unknown Non-Accessor Key"), O = Symbol("Unknown Integer"), V = [], B = [D], F = [L], z = [O], W = Symbol("Entities");
class j {
  constructor() {
    this.entityPaths = Object.create(null, { [W]: { value: /* @__PURE__ */ new Set() } });
  }
  trackEntityAtPathAndGetIfTracked(e, t) {
    const s = this.getEntities(e);
    return !!s.has(t) || (s.add(t), false);
  }
  withTrackedEntityAtPath(e, t, s, i) {
    const n2 = this.getEntities(e);
    if (n2.has(t))
      return i;
    n2.add(t);
    const r2 = s();
    return n2.delete(t), r2;
  }
  getEntities(e) {
    let t = this.entityPaths;
    for (const s of e)
      t = t[s] = t[s] || Object.create(null, { [W]: { value: /* @__PURE__ */ new Set() } });
    return t[W];
  }
}
const U = new j();
class G {
  constructor() {
    this.entityPaths = Object.create(null, { [W]: { value: /* @__PURE__ */ new Map() } });
  }
  trackEntityAtPathAndGetIfTracked(e, t, s) {
    let i = this.entityPaths;
    for (const t2 of e)
      i = i[t2] = i[t2] || Object.create(null, { [W]: { value: /* @__PURE__ */ new Map() } });
    const n2 = M(i[W], t, () => /* @__PURE__ */ new Set());
    return !!n2.has(s) || (n2.add(s), false);
  }
}
const H = Symbol("Unknown Value");
class q {
  constructor() {
    this.included = false;
  }
  deoptimizePath(e) {
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    s.deoptimizePath(B);
  }
  getLiteralValueAtPath(e, t, s) {
    return H;
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return K;
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return true;
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return true;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return true;
  }
  include(e, t) {
    this.included = true;
  }
  includeCallArguments(e, t) {
    for (const s of t)
      s.include(e, false);
  }
}
const K = new class extends q {
}();
class X extends q {
  constructor(e) {
    super(), this.name = e, this.alwaysRendered = false, this.initReached = false, this.isId = false, this.isReassigned = false, this.kind = null, this.renderBaseName = null, this.renderName = null;
  }
  addReference(e) {
  }
  getBaseVariableName() {
    return this.renderBaseName || this.renderName || this.name;
  }
  getName(e) {
    const t = this.renderName || this.name;
    return this.renderBaseName ? `${this.renderBaseName}${e(t)}` : t;
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return e.length > 0;
  }
  include() {
    this.included = true;
  }
  markCalledFromTryStatement() {
  }
  setRenderNames(e, t) {
    this.renderBaseName = e, this.renderName = t;
  }
}
class Y extends X {
  constructor(e, t) {
    super(t), this.referenced = false, this.module = e, this.isNamespace = t === "*";
  }
  addReference(e) {
    this.referenced = true, this.name !== "default" && this.name !== "*" || this.module.suggestName(e.name);
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > (this.isNamespace ? 1 : 0);
  }
  include() {
    this.included || (this.included = true, this.module.used = true);
  }
}
const Q = Object.freeze(/* @__PURE__ */ Object.create(null)), Z = Object.freeze({}), J = Object.freeze([]);
function ee(e, t, s) {
  if (typeof s == "number")
    throw new Error("locate takes a { startIndex, offsetLine, offsetColumn } object as the third argument");
  return function(e2, t2) {
    t2 === void 0 && (t2 = {});
    var s2 = t2.offsetLine || 0, i = t2.offsetColumn || 0, n2 = e2.split("\n"), r2 = 0, a2 = n2.map(function(e3, t3) {
      var s3 = r2 + e3.length + 1, i2 = { start: r2, end: s3, line: t3 };
      return r2 = s3, i2;
    }), o2 = 0;
    function h2(e3, t3) {
      return e3.start <= t3 && t3 < e3.end;
    }
    function l2(e3, t3) {
      return { line: s2 + e3.line, column: i + t3 - e3.start, character: t3 };
    }
    return function(t3, s3) {
      typeof t3 == "string" && (t3 = e2.indexOf(t3, s3 || 0));
      for (var i2 = a2[o2], n3 = t3 >= i2.end ? 1 : -1; i2; ) {
        if (h2(i2, t3))
          return l2(i2, t3);
        i2 = a2[o2 += n3];
      }
    };
  }(e, s)(t, s && s.startIndex);
}
function te(e) {
  return e.replace(/^\t+/, (e2) => e2.split("	").join("  "));
}
function se(e, t) {
  const s = e.length <= 1, i = e.map((e2) => `"${e2}"`);
  let n2 = s ? i[0] : `${i.slice(0, -1).join(", ")} and ${i.slice(-1)[0]}`;
  return t && (n2 += ` ${s ? t[0] : t[1]}`), n2;
}
function ie(e) {
  const t = _(e);
  return t.substring(0, t.length - $(e).length);
}
function ne(e) {
  return w(e) ? T(R(), e) : e;
}
function re(e) {
  return e[0] === "/" || e[0] === "." && (e[1] === "/" || e[1] === ".") || w(e);
}
const ae = /^(\.\.\/)*\.\.$/;
function oe(e, t, s, i) {
  let n2 = I(T(N(e), t));
  if (s && n2.endsWith(".js") && (n2 = n2.slice(0, -3)), i) {
    if (n2 === "")
      return "../" + _(t);
    if (ae.test(n2))
      return n2.split("/").concat(["..", _(t)]).join("/");
  }
  return n2 ? n2.startsWith("..") ? n2 : "./" + n2 : ".";
}
function he(e) {
  throw e instanceof Error || (e = Object.assign(new Error(e.message), e)), e;
}
function le(e, t, s, i) {
  if (typeof t == "object") {
    const { line: s2, column: n2 } = t;
    e.loc = { column: n2, file: i, line: s2 };
  } else {
    e.pos = t;
    const { line: n2, column: r2 } = ee(s, t, { offsetLine: 1 });
    e.loc = { column: r2, file: i, line: n2 };
  }
  if (e.frame === void 0) {
    const { line: t2, column: i2 } = e.loc;
    e.frame = function(e2, t3, s2) {
      let i3 = e2.split("\n");
      const n2 = Math.max(0, t3 - 3);
      let r2 = Math.min(t3 + 2, i3.length);
      for (i3 = i3.slice(n2, r2); !/\S/.test(i3[i3.length - 1]); )
        i3.pop(), r2 -= 1;
      const a2 = String(r2).length;
      return i3.map((e3, i4) => {
        const r3 = n2 + i4 + 1 === t3;
        let o2 = String(i4 + n2 + 1);
        for (; o2.length < a2; )
          o2 = ` ${o2}`;
        if (r3) {
          const t4 = function(e4) {
            let t5 = "";
            for (; e4--; )
              t5 += " ";
            return t5;
          }(a2 + 2 + te(e3.slice(0, s2)).length) + "^";
          return `${o2}: ${te(e3)}
${t4}`;
        }
        return `${o2}: ${te(e3)}`;
      }).join("\n");
    }(s, t2, i2);
  }
}
var ce;
function ue({ fileName: e, code: t }, s) {
  const i = { code: ce.CHUNK_INVALID, message: `Chunk "${e}" is not valid JavaScript: ${s.message}.` };
  return le(i, s.loc, t, e), i;
}
function de(e, t, s) {
  return { code: "INVALID_EXPORT_OPTION", message: `"${e}" was specified for "output.exports", but entry module "${ne(s)}" has the following exports: ${t.join(", ")}` };
}
function pe(e, t, s, i) {
  return { code: ce.INVALID_OPTION, message: `Invalid value ${i !== void 0 ? `${JSON.stringify(i)} ` : ""}for option "${e}" - ${s}.`, url: `https://rollupjs.org/guide/en/#${t}` };
}
function fe(e, t, s) {
  return { code: ce.MISSING_EXPORT, message: `'${e}' is not exported by ${ne(s)}, imported by ${ne(t)}`, url: "https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module" };
}
function me(e) {
  const t = Array.from(e.implicitlyLoadedBefore, (e2) => ne(e2.id)).sort();
  return { code: ce.MISSING_IMPLICIT_DEPENDANT, message: `Module "${ne(e.id)}" that should be implicitly loaded before ${se(t)} is not included in the module graph. Either it was not imported by an included module or only via a tree-shaken dynamic import, or no imported bindings were used and it had otherwise no side-effects.` };
}
function ge(e, t, s) {
  const i = s ? "reexport" : "import";
  return { code: ce.UNEXPECTED_NAMED_IMPORT, id: e, message: `The named export "${t}" was ${i}ed from the external module ${ne(e)} even though its interop type is "defaultOnly". Either remove or change this ${i} or change the value of the "output.interop" option.`, url: "https://rollupjs.org/guide/en/#outputinterop" };
}
function ye(e) {
  return { code: ce.UNEXPECTED_NAMED_IMPORT, id: e, message: `There was a namespace "*" reexport from the external module ${ne(e)} even though its interop type is "defaultOnly". This will be ignored as namespace reexports only reexport named exports. If this is not intended, either remove or change this reexport or change the value of the "output.interop" option.`, url: "https://rollupjs.org/guide/en/#outputinterop" };
}
function Ee(e) {
  return { code: ce.VALIDATION_ERROR, message: e };
}
function xe() {
  return { code: ce.ALREADY_CLOSED, message: 'Bundle is already closed, no more calls to "generate" or "write" are allowed.' };
}
function be(e, t, s) {
  ve(e, t, s.onwarn, s.strictDeprecations);
}
function ve(e, t, s, i) {
  if (t || i) {
    const t2 = function(e2) {
      return __spreadValues({ code: ce.DEPRECATED_FEATURE }, typeof e2 == "string" ? { message: e2 } : e2);
    }(e);
    if (i)
      return he(t2);
    s(t2);
  }
}
!function(e) {
  e.ALREADY_CLOSED = "ALREADY_CLOSED", e.ASSET_NOT_FINALISED = "ASSET_NOT_FINALISED", e.ASSET_NOT_FOUND = "ASSET_NOT_FOUND", e.ASSET_SOURCE_ALREADY_SET = "ASSET_SOURCE_ALREADY_SET", e.ASSET_SOURCE_MISSING = "ASSET_SOURCE_MISSING", e.BAD_LOADER = "BAD_LOADER", e.CANNOT_EMIT_FROM_OPTIONS_HOOK = "CANNOT_EMIT_FROM_OPTIONS_HOOK", e.CHUNK_NOT_GENERATED = "CHUNK_NOT_GENERATED", e.CHUNK_INVALID = "CHUNK_INVALID", e.CIRCULAR_REEXPORT = "CIRCULAR_REEXPORT", e.CYCLIC_CROSS_CHUNK_REEXPORT = "CYCLIC_CROSS_CHUNK_REEXPORT", e.DEPRECATED_FEATURE = "DEPRECATED_FEATURE", e.EXTERNAL_SYNTHETIC_EXPORTS = "EXTERNAL_SYNTHETIC_EXPORTS", e.FILE_NAME_CONFLICT = "FILE_NAME_CONFLICT", e.FILE_NOT_FOUND = "FILE_NOT_FOUND", e.INPUT_HOOK_IN_OUTPUT_PLUGIN = "INPUT_HOOK_IN_OUTPUT_PLUGIN", e.INVALID_CHUNK = "INVALID_CHUNK", e.INVALID_EXPORT_OPTION = "INVALID_EXPORT_OPTION", e.INVALID_EXTERNAL_ID = "INVALID_EXTERNAL_ID", e.INVALID_OPTION = "INVALID_OPTION", e.INVALID_PLUGIN_HOOK = "INVALID_PLUGIN_HOOK", e.INVALID_ROLLUP_PHASE = "INVALID_ROLLUP_PHASE", e.MISSING_EXPORT = "MISSING_EXPORT", e.MISSING_IMPLICIT_DEPENDANT = "MISSING_IMPLICIT_DEPENDANT", e.MIXED_EXPORTS = "MIXED_EXPORTS", e.NAMESPACE_CONFLICT = "NAMESPACE_CONFLICT", e.AMBIGUOUS_EXTERNAL_NAMESPACES = "AMBIGUOUS_EXTERNAL_NAMESPACES", e.NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE = "NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE", e.PLUGIN_ERROR = "PLUGIN_ERROR", e.PREFER_NAMED_EXPORTS = "PREFER_NAMED_EXPORTS", e.SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT = "SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT", e.UNEXPECTED_NAMED_IMPORT = "UNEXPECTED_NAMED_IMPORT", e.UNRESOLVED_ENTRY = "UNRESOLVED_ENTRY", e.UNRESOLVED_IMPORT = "UNRESOLVED_IMPORT", e.VALIDATION_ERROR = "VALIDATION_ERROR";
}(ce || (ce = {}));
var Ae = /* @__PURE__ */ new Set(["await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "eval", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "NaN", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "undefined", "var", "void", "while", "with", "yield"]);
const Se = /[^$_a-zA-Z0-9]/g, Pe = (e) => /\d/.test(e[0]);
function ke(e) {
  return e = e.replace(/-(\w)/g, (e2, t) => t.toUpperCase()).replace(Se, "_"), (Pe(e) || Ae.has(e)) && (e = `_${e}`), e || "_";
}
class we {
  constructor(e, t, s, i, n2) {
    this.options = e, this.id = t, this.renormalizeRenderPath = n2, this.declarations = /* @__PURE__ */ new Map(), this.defaultVariableName = "", this.dynamicImporters = [], this.execIndex = 1 / 0, this.exportedVariables = /* @__PURE__ */ new Map(), this.importers = [], this.mostCommonSuggestion = 0, this.nameSuggestions = /* @__PURE__ */ new Map(), this.namespaceVariableName = "", this.reexported = false, this.renderPath = void 0, this.used = false, this.variableName = "", this.suggestedVariableName = ke(t.split(/[\\/]/).pop());
    const { importers: r2, dynamicImporters: a2 } = this, o2 = this.info = { ast: null, code: null, dynamicallyImportedIdResolutions: J, dynamicallyImportedIds: J, get dynamicImporters() {
      return a2.sort();
    }, hasDefaultExport: null, get hasModuleSideEffects() {
      return be("Accessing ModuleInfo.hasModuleSideEffects from plugins is deprecated. Please use ModuleInfo.moduleSideEffects instead.", false, e), o2.moduleSideEffects;
    }, id: t, implicitlyLoadedAfterOneOf: J, implicitlyLoadedBefore: J, importedIdResolutions: J, importedIds: J, get importers() {
      return r2.sort();
    }, isEntry: false, isExternal: true, isIncluded: null, meta: i, moduleSideEffects: s, syntheticNamedExports: false };
    Object.defineProperty(this.info, "hasModuleSideEffects", { enumerable: false });
  }
  getVariableForExportName(e) {
    const t = this.declarations.get(e);
    if (t)
      return [t];
    const s = new Y(this, e);
    return this.declarations.set(e, s), this.exportedVariables.set(s, e), [s];
  }
  setRenderPath(e, t) {
    this.renderPath = typeof e.paths == "function" ? e.paths(this.id) : e.paths[this.id], this.renderPath || (this.renderPath = this.renormalizeRenderPath ? I(T(t, this.id)) : this.id);
  }
  suggestName(e) {
    var t;
    const s = ((t = this.nameSuggestions.get(e)) !== null && t !== void 0 ? t : 0) + 1;
    this.nameSuggestions.set(e, s), s > this.mostCommonSuggestion && (this.mostCommonSuggestion = s, this.suggestedVariableName = e);
  }
  warnUnusedImports() {
    const e = Array.from(this.declarations).filter(([e2, t2]) => e2 !== "*" && !t2.included && !this.reexported && !t2.referenced).map(([e2]) => e2);
    if (e.length === 0)
      return;
    const t = /* @__PURE__ */ new Set();
    for (const s2 of e)
      for (const e2 of this.declarations.get(s2).module.importers)
        t.add(e2);
    const s = [...t];
    this.options.onwarn({ code: "UNUSED_EXTERNAL_IMPORT", message: `${se(e, ["is", "are"])} imported from external module "${this.id}" but never used in ${se(s.map((e2) => ne(e2)))}.`, names: e, source: this.id, sources: s });
  }
}
const Ce = { ArrayPattern(e, t) {
  for (const s of t.elements)
    s && Ce[s.type](e, s);
}, AssignmentPattern(e, t) {
  Ce[t.left.type](e, t.left);
}, Identifier(e, t) {
  e.push(t.name);
}, MemberExpression() {
}, ObjectPattern(e, t) {
  for (const s of t.properties)
    s.type === "RestElement" ? Ce.RestElement(e, s) : Ce[s.value.type](e, s.value);
}, RestElement(e, t) {
  Ce[t.argument.type](e, t.argument);
} }, Ie = function(e) {
  const t = [];
  return Ce[e.type](t, e), t;
};
new Set("break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl".split(" ")).add("");
function _e() {
  return { brokenFlow: 0, includedCallArguments: /* @__PURE__ */ new Set(), includedLabels: /* @__PURE__ */ new Set() };
}
function Ne() {
  return { accessed: new j(), assigned: new j(), brokenFlow: 0, called: new G(), ignore: { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: false }, includedLabels: /* @__PURE__ */ new Set(), instantiated: new G(), replacedVariableInits: /* @__PURE__ */ new Map() };
}
const $e = [];
function Te(e, t = null) {
  return Object.create(t, e);
}
const Re = new class extends q {
  getLiteralValueAtPath() {
  }
}(), Me = { value: { hasEffectsWhenCalled: null, returns: K } }, De = new class extends q {
  getReturnExpressionWhenCalledAtPath(e) {
    return e.length === 1 ? qe(je, e[0]) : K;
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return e.length !== 1 || He(je, e[0], t, s);
  }
}(), Le = { value: { hasEffectsWhenCalled: null, returns: De } }, Oe = new class extends q {
  getReturnExpressionWhenCalledAtPath(e) {
    return e.length === 1 ? qe(Ue, e[0]) : K;
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return e.length !== 1 || He(Ue, e[0], t, s);
  }
}(), Ve = { value: { hasEffectsWhenCalled: null, returns: Oe } }, Be = new class extends q {
  getReturnExpressionWhenCalledAtPath(e) {
    return e.length === 1 ? qe(Ge, e[0]) : K;
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return e.length !== 1 || He(Ge, e[0], t, s);
  }
}(), Fe = { value: { hasEffectsWhenCalled: null, returns: Be } }, ze = { value: { hasEffectsWhenCalled(e, t) {
  const s = e.args[1];
  return e.args.length < 2 || s.getLiteralValueAtPath(V, U, { deoptimizeCache() {
  } }) === H && s.hasEffectsWhenCalledAtPath(V, { args: $e, thisParam: null, withNew: false }, t);
}, returns: Be } }, We = Te({ hasOwnProperty: Le, isPrototypeOf: Le, propertyIsEnumerable: Le, toLocaleString: Fe, toString: Fe, valueOf: Me }), je = Te({ valueOf: Le }, We), Ue = Te({ toExponential: Fe, toFixed: Fe, toLocaleString: Fe, toPrecision: Fe, valueOf: Ve }, We), Ge = Te({ anchor: Fe, at: Me, big: Fe, blink: Fe, bold: Fe, charAt: Fe, charCodeAt: Ve, codePointAt: Me, concat: Fe, endsWith: Le, fixed: Fe, fontcolor: Fe, fontsize: Fe, includes: Le, indexOf: Ve, italics: Fe, lastIndexOf: Ve, link: Fe, localeCompare: Ve, match: Me, matchAll: Me, normalize: Fe, padEnd: Fe, padStart: Fe, repeat: Fe, replace: ze, replaceAll: ze, search: Ve, slice: Fe, small: Fe, split: Me, startsWith: Le, strike: Fe, sub: Fe, substr: Fe, substring: Fe, sup: Fe, toLocaleLowerCase: Fe, toLocaleUpperCase: Fe, toLowerCase: Fe, toString: Fe, toUpperCase: Fe, trim: Fe, trimEnd: Fe, trimLeft: Fe, trimRight: Fe, trimStart: Fe, valueOf: Fe }, We);
function He(e, t, s, i) {
  var n2, r2;
  return typeof t != "string" || !e[t] || (((r2 = (n2 = e[t]).hasEffectsWhenCalled) === null || r2 === void 0 ? void 0 : r2.call(n2, s, i)) || false);
}
function qe(e, t) {
  return typeof t == "string" && e[t] ? e[t].returns : K;
}
function Ke(e, t, s) {
  s(e, t);
}
function Xe(e, t, s) {
}
var Ye = {};
Ye.Program = Ye.BlockStatement = Ye.StaticBlock = function(e, t, s) {
  for (var i = 0, n2 = e.body; i < n2.length; i += 1) {
    s(n2[i], t, "Statement");
  }
}, Ye.Statement = Ke, Ye.EmptyStatement = Xe, Ye.ExpressionStatement = Ye.ParenthesizedExpression = Ye.ChainExpression = function(e, t, s) {
  return s(e.expression, t, "Expression");
}, Ye.IfStatement = function(e, t, s) {
  s(e.test, t, "Expression"), s(e.consequent, t, "Statement"), e.alternate && s(e.alternate, t, "Statement");
}, Ye.LabeledStatement = function(e, t, s) {
  return s(e.body, t, "Statement");
}, Ye.BreakStatement = Ye.ContinueStatement = Xe, Ye.WithStatement = function(e, t, s) {
  s(e.object, t, "Expression"), s(e.body, t, "Statement");
}, Ye.SwitchStatement = function(e, t, s) {
  s(e.discriminant, t, "Expression");
  for (var i = 0, n2 = e.cases; i < n2.length; i += 1) {
    var r2 = n2[i];
    r2.test && s(r2.test, t, "Expression");
    for (var a2 = 0, o2 = r2.consequent; a2 < o2.length; a2 += 1) {
      s(o2[a2], t, "Statement");
    }
  }
}, Ye.SwitchCase = function(e, t, s) {
  e.test && s(e.test, t, "Expression");
  for (var i = 0, n2 = e.consequent; i < n2.length; i += 1) {
    s(n2[i], t, "Statement");
  }
}, Ye.ReturnStatement = Ye.YieldExpression = Ye.AwaitExpression = function(e, t, s) {
  e.argument && s(e.argument, t, "Expression");
}, Ye.ThrowStatement = Ye.SpreadElement = function(e, t, s) {
  return s(e.argument, t, "Expression");
}, Ye.TryStatement = function(e, t, s) {
  s(e.block, t, "Statement"), e.handler && s(e.handler, t), e.finalizer && s(e.finalizer, t, "Statement");
}, Ye.CatchClause = function(e, t, s) {
  e.param && s(e.param, t, "Pattern"), s(e.body, t, "Statement");
}, Ye.WhileStatement = Ye.DoWhileStatement = function(e, t, s) {
  s(e.test, t, "Expression"), s(e.body, t, "Statement");
}, Ye.ForStatement = function(e, t, s) {
  e.init && s(e.init, t, "ForInit"), e.test && s(e.test, t, "Expression"), e.update && s(e.update, t, "Expression"), s(e.body, t, "Statement");
}, Ye.ForInStatement = Ye.ForOfStatement = function(e, t, s) {
  s(e.left, t, "ForInit"), s(e.right, t, "Expression"), s(e.body, t, "Statement");
}, Ye.ForInit = function(e, t, s) {
  e.type === "VariableDeclaration" ? s(e, t) : s(e, t, "Expression");
}, Ye.DebuggerStatement = Xe, Ye.FunctionDeclaration = function(e, t, s) {
  return s(e, t, "Function");
}, Ye.VariableDeclaration = function(e, t, s) {
  for (var i = 0, n2 = e.declarations; i < n2.length; i += 1) {
    s(n2[i], t);
  }
}, Ye.VariableDeclarator = function(e, t, s) {
  s(e.id, t, "Pattern"), e.init && s(e.init, t, "Expression");
}, Ye.Function = function(e, t, s) {
  e.id && s(e.id, t, "Pattern");
  for (var i = 0, n2 = e.params; i < n2.length; i += 1) {
    s(n2[i], t, "Pattern");
  }
  s(e.body, t, e.expression ? "Expression" : "Statement");
}, Ye.Pattern = function(e, t, s) {
  e.type === "Identifier" ? s(e, t, "VariablePattern") : e.type === "MemberExpression" ? s(e, t, "MemberPattern") : s(e, t);
}, Ye.VariablePattern = Xe, Ye.MemberPattern = Ke, Ye.RestElement = function(e, t, s) {
  return s(e.argument, t, "Pattern");
}, Ye.ArrayPattern = function(e, t, s) {
  for (var i = 0, n2 = e.elements; i < n2.length; i += 1) {
    var r2 = n2[i];
    r2 && s(r2, t, "Pattern");
  }
}, Ye.ObjectPattern = function(e, t, s) {
  for (var i = 0, n2 = e.properties; i < n2.length; i += 1) {
    var r2 = n2[i];
    r2.type === "Property" ? (r2.computed && s(r2.key, t, "Expression"), s(r2.value, t, "Pattern")) : r2.type === "RestElement" && s(r2.argument, t, "Pattern");
  }
}, Ye.Expression = Ke, Ye.ThisExpression = Ye.Super = Ye.MetaProperty = Xe, Ye.ArrayExpression = function(e, t, s) {
  for (var i = 0, n2 = e.elements; i < n2.length; i += 1) {
    var r2 = n2[i];
    r2 && s(r2, t, "Expression");
  }
}, Ye.ObjectExpression = function(e, t, s) {
  for (var i = 0, n2 = e.properties; i < n2.length; i += 1) {
    s(n2[i], t);
  }
}, Ye.FunctionExpression = Ye.ArrowFunctionExpression = Ye.FunctionDeclaration, Ye.SequenceExpression = function(e, t, s) {
  for (var i = 0, n2 = e.expressions; i < n2.length; i += 1) {
    s(n2[i], t, "Expression");
  }
}, Ye.TemplateLiteral = function(e, t, s) {
  for (var i = 0, n2 = e.quasis; i < n2.length; i += 1) {
    s(n2[i], t);
  }
  for (var r2 = 0, a2 = e.expressions; r2 < a2.length; r2 += 1) {
    s(a2[r2], t, "Expression");
  }
}, Ye.TemplateElement = Xe, Ye.UnaryExpression = Ye.UpdateExpression = function(e, t, s) {
  s(e.argument, t, "Expression");
}, Ye.BinaryExpression = Ye.LogicalExpression = function(e, t, s) {
  s(e.left, t, "Expression"), s(e.right, t, "Expression");
}, Ye.AssignmentExpression = Ye.AssignmentPattern = function(e, t, s) {
  s(e.left, t, "Pattern"), s(e.right, t, "Expression");
}, Ye.ConditionalExpression = function(e, t, s) {
  s(e.test, t, "Expression"), s(e.consequent, t, "Expression"), s(e.alternate, t, "Expression");
}, Ye.NewExpression = Ye.CallExpression = function(e, t, s) {
  if (s(e.callee, t, "Expression"), e.arguments)
    for (var i = 0, n2 = e.arguments; i < n2.length; i += 1) {
      s(n2[i], t, "Expression");
    }
}, Ye.MemberExpression = function(e, t, s) {
  s(e.object, t, "Expression"), e.computed && s(e.property, t, "Expression");
}, Ye.ExportNamedDeclaration = Ye.ExportDefaultDeclaration = function(e, t, s) {
  e.declaration && s(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"), e.source && s(e.source, t, "Expression");
}, Ye.ExportAllDeclaration = function(e, t, s) {
  e.exported && s(e.exported, t), s(e.source, t, "Expression");
}, Ye.ImportDeclaration = function(e, t, s) {
  for (var i = 0, n2 = e.specifiers; i < n2.length; i += 1) {
    s(n2[i], t);
  }
  s(e.source, t, "Expression");
}, Ye.ImportExpression = function(e, t, s) {
  s(e.source, t, "Expression");
}, Ye.ImportSpecifier = Ye.ImportDefaultSpecifier = Ye.ImportNamespaceSpecifier = Ye.Identifier = Ye.PrivateIdentifier = Ye.Literal = Xe, Ye.TaggedTemplateExpression = function(e, t, s) {
  s(e.tag, t, "Expression"), s(e.quasi, t, "Expression");
}, Ye.ClassDeclaration = Ye.ClassExpression = function(e, t, s) {
  return s(e, t, "Class");
}, Ye.Class = function(e, t, s) {
  e.id && s(e.id, t, "Pattern"), e.superClass && s(e.superClass, t, "Expression"), s(e.body, t);
}, Ye.ClassBody = function(e, t, s) {
  for (var i = 0, n2 = e.body; i < n2.length; i += 1) {
    s(n2[i], t);
  }
}, Ye.MethodDefinition = Ye.PropertyDefinition = Ye.Property = function(e, t, s) {
  e.computed && s(e.key, t, "Expression"), e.value && s(e.value, t, "Expression");
};
const Ze = new RegExp("^#[ \\f\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]+sourceMappingURL=.+");
function Je(e, t, s = e.type) {
  const { annotations: i } = t;
  let n2 = i[t.annotationIndex];
  for (; n2 && e.start >= n2.end; )
    st(e, n2, t.code), n2 = i[++t.annotationIndex];
  if (n2 && n2.end <= e.end)
    for (Ye[s](e, t, Je); (n2 = i[t.annotationIndex]) && n2.end <= e.end; )
      ++t.annotationIndex, rt(e, n2, false);
}
const et = /[^\s(]/g, tt = /\S/g;
function st(e, t, s) {
  const i = [];
  let n2;
  if (it(s.slice(t.end, e.start), et)) {
    const t2 = e.start;
    for (; ; ) {
      switch (i.push(e), e.type) {
        case "ExpressionStatement":
        case "ChainExpression":
          e = e.expression;
          continue;
        case "SequenceExpression":
          if (it(s.slice(t2, e.start), tt)) {
            e = e.expressions[0];
            continue;
          }
          n2 = true;
          break;
        case "ConditionalExpression":
          if (it(s.slice(t2, e.start), tt)) {
            e = e.test;
            continue;
          }
          n2 = true;
          break;
        case "LogicalExpression":
        case "BinaryExpression":
          if (it(s.slice(t2, e.start), tt)) {
            e = e.left;
            continue;
          }
          n2 = true;
          break;
        case "CallExpression":
        case "NewExpression":
          break;
        default:
          n2 = true;
      }
      break;
    }
  } else
    n2 = true;
  if (n2)
    rt(e, t, false);
  else
    for (const e2 of i)
      rt(e2, t, true);
}
function it(e, t) {
  let s;
  for (; (s = t.exec(e)) !== null; ) {
    if (s[0] === "/") {
      const s2 = e.charCodeAt(t.lastIndex);
      if (s2 === 42) {
        t.lastIndex = e.indexOf("*/", t.lastIndex + 1) + 2;
        continue;
      }
      if (s2 === 47) {
        t.lastIndex = e.indexOf("\n", t.lastIndex + 1) + 1;
        continue;
      }
    }
    return t.lastIndex = 0, false;
  }
  return true;
}
const nt = /[@#]__PURE__/;
function rt(e, t, s) {
  const i = s ? "_rollupAnnotations" : "_rollupRemoved", n2 = e[i];
  n2 ? n2.push(t) : e[i] = [t];
}
const at = { Literal: [], Program: ["body"] };
class ot extends q {
  constructor(e, t, s) {
    super(), this.esTreeNode = e, this.keys = at[e.type] || function(e2) {
      return at[e2.type] = Object.keys(e2).filter((t2) => typeof e2[t2] == "object" && t2.charCodeAt(0) !== 95), at[e2.type];
    }(e), this.parent = t, this.context = t.context, this.createScope(s), this.parseNode(e), this.initialise(), this.context.magicString.addSourcemapLocation(this.start), this.context.magicString.addSourcemapLocation(this.end);
  }
  addExportedVariables(e, t) {
  }
  bind() {
    for (const e of this.keys) {
      const t = this[e];
      if (t !== null)
        if (Array.isArray(t))
          for (const e2 of t)
            e2 !== null && e2.bind();
        else
          t.bind();
    }
  }
  createScope(e) {
    this.scope = e;
  }
  hasEffects(e) {
    this.deoptimized === false && this.applyDeoptimizations();
    for (const t of this.keys) {
      const s = this[t];
      if (s !== null) {
        if (Array.isArray(s)) {
          for (const t2 of s)
            if (t2 !== null && t2.hasEffects(e))
              return true;
        } else if (s.hasEffects(e))
          return true;
      }
    }
    return false;
  }
  include(e, t) {
    this.deoptimized === false && this.applyDeoptimizations(), this.included = true;
    for (const s of this.keys) {
      const i = this[s];
      if (i !== null)
        if (Array.isArray(i))
          for (const s2 of i)
            s2 !== null && s2.include(e, t);
        else
          i.include(e, t);
    }
  }
  includeAsSingleStatement(e, t) {
    this.include(e, t);
  }
  initialise() {
  }
  insertSemicolon(e) {
    e.original[this.end - 1] !== ";" && e.appendLeft(this.end, ";");
  }
  parseNode(e) {
    for (const [t, s] of Object.entries(e))
      if (!this.hasOwnProperty(t))
        if (t.charCodeAt(0) === 95) {
          if (t === "_rollupAnnotations")
            this.annotations = s;
          else if (t === "_rollupRemoved")
            for (const { start: e2, end: t2 } of s)
              this.context.magicString.remove(e2, t2);
        } else if (typeof s != "object" || s === null)
          this[t] = s;
        else if (Array.isArray(s)) {
          this[t] = [];
          for (const e2 of s)
            this[t].push(e2 === null ? null : new (this.context.getNodeConstructor(e2.type))(e2, this, this.scope));
        } else
          this[t] = new (this.context.getNodeConstructor(s.type))(s, this, this.scope);
  }
  render(e, t) {
    for (const s of this.keys) {
      const i = this[s];
      if (i !== null)
        if (Array.isArray(i))
          for (const s2 of i)
            s2 !== null && s2.render(e, t);
        else
          i.render(e, t);
    }
  }
  shouldBeIncluded(e) {
    return this.included || !e.brokenFlow && this.hasEffects(Ne());
  }
  applyDeoptimizations() {
  }
}
class ht extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    t.length > 0 && this.argument.deoptimizeThisOnEventAtPath(e, [D, ...t], s, i);
  }
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    const { propertyReadSideEffects: t } = this.context.options.treeshake;
    return this.argument.hasEffects(e) || t && (t === "always" || this.argument.hasEffectsWhenAccessedAtPath(B, e));
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.argument.deoptimizePath([D, D]), this.context.requestTreeshakingPass();
  }
}
class lt extends q {
  constructor(e) {
    super(), this.description = e;
  }
  deoptimizeThisOnEventAtPath(e, t, s) {
    e === 2 && t.length === 0 && this.description.mutatesSelfAsArray && s.deoptimizePath(z);
  }
  getReturnExpressionWhenCalledAtPath(e, t) {
    return e.length > 0 ? K : this.description.returnsPrimitive || (this.description.returns === "self" ? t.thisParam || K : this.description.returns());
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  hasEffectsWhenAssignedAtPath(e) {
    return e.length > 0;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    var i, n2;
    if (e.length > 0 || this.description.mutatesSelfAsArray === true && ((i = t.thisParam) === null || i === void 0 ? void 0 : i.hasEffectsWhenAssignedAtPath(z, s)))
      return true;
    if (!this.description.callsArgs)
      return false;
    for (const e2 of this.description.callsArgs)
      if ((n2 = t.args[e2]) === null || n2 === void 0 ? void 0 : n2.hasEffectsWhenCalledAtPath(V, { args: $e, thisParam: null, withNew: false }, s))
        return true;
    return false;
  }
  includeCallArguments(e, t) {
    for (const s of t)
      s.include(e, false);
  }
}
const ct = [new lt({ callsArgs: null, mutatesSelfAsArray: false, returns: null, returnsPrimitive: De })], ut = [new lt({ callsArgs: null, mutatesSelfAsArray: false, returns: null, returnsPrimitive: Be })], dt = [new lt({ callsArgs: null, mutatesSelfAsArray: false, returns: null, returnsPrimitive: Oe })], pt = [new lt({ callsArgs: null, mutatesSelfAsArray: false, returns: null, returnsPrimitive: K })], ft = /^\d+$/;
class mt extends q {
  constructor(e, t, s = false) {
    if (super(), this.prototypeExpression = t, this.immutable = s, this.allProperties = [], this.deoptimizedPaths = /* @__PURE__ */ Object.create(null), this.expressionsToBeDeoptimizedByKey = /* @__PURE__ */ Object.create(null), this.gettersByKey = /* @__PURE__ */ Object.create(null), this.hasLostTrack = false, this.hasUnknownDeoptimizedInteger = false, this.hasUnknownDeoptimizedProperty = false, this.propertiesAndGettersByKey = /* @__PURE__ */ Object.create(null), this.propertiesAndSettersByKey = /* @__PURE__ */ Object.create(null), this.settersByKey = /* @__PURE__ */ Object.create(null), this.thisParametersToBeDeoptimized = /* @__PURE__ */ new Set(), this.unknownIntegerProps = [], this.unmatchableGetters = [], this.unmatchablePropertiesAndGetters = [], this.unmatchableSetters = [], Array.isArray(e))
      this.buildPropertyMaps(e);
    else {
      this.propertiesAndGettersByKey = this.propertiesAndSettersByKey = e;
      for (const t2 of Object.values(e))
        this.allProperties.push(...t2);
    }
  }
  deoptimizeAllProperties(e) {
    var t;
    const s = this.hasLostTrack || this.hasUnknownDeoptimizedProperty;
    if (e ? this.hasUnknownDeoptimizedProperty = true : this.hasLostTrack = true, !s) {
      for (const e2 of Object.values(this.propertiesAndGettersByKey).concat(Object.values(this.settersByKey)))
        for (const t2 of e2)
          t2.deoptimizePath(B);
      (t = this.prototypeExpression) === null || t === void 0 || t.deoptimizePath([D, D]), this.deoptimizeCachedEntities();
    }
  }
  deoptimizeIntegerProperties() {
    if (!(this.hasLostTrack || this.hasUnknownDeoptimizedProperty || this.hasUnknownDeoptimizedInteger)) {
      this.hasUnknownDeoptimizedInteger = true;
      for (const [e, t] of Object.entries(this.propertiesAndGettersByKey))
        if (ft.test(e))
          for (const e2 of t)
            e2.deoptimizePath(B);
      this.deoptimizeCachedIntegerEntities();
    }
  }
  deoptimizePath(e) {
    var t;
    if (this.hasLostTrack || this.immutable)
      return;
    const s = e[0];
    if (e.length === 1) {
      if (typeof s != "string")
        return s === O ? this.deoptimizeIntegerProperties() : this.deoptimizeAllProperties(s === L);
      if (!this.deoptimizedPaths[s]) {
        this.deoptimizedPaths[s] = true;
        const e2 = this.expressionsToBeDeoptimizedByKey[s];
        if (e2)
          for (const t2 of e2)
            t2.deoptimizeCache();
      }
    }
    const i = e.length === 1 ? B : e.slice(1);
    for (const e2 of typeof s == "string" ? (this.propertiesAndGettersByKey[s] || this.unmatchablePropertiesAndGetters).concat(this.settersByKey[s] || this.unmatchableSetters) : this.allProperties)
      e2.deoptimizePath(i);
    (t = this.prototypeExpression) === null || t === void 0 || t.deoptimizePath(e.length === 1 ? [...e, D] : e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    var n2;
    const [r2, ...a2] = t;
    if (this.hasLostTrack || (e === 2 || t.length > 1) && (this.hasUnknownDeoptimizedProperty || typeof r2 == "string" && this.deoptimizedPaths[r2]))
      return void s.deoptimizePath(B);
    const [o2, h2, l2] = e === 2 || t.length > 1 ? [this.propertiesAndGettersByKey, this.propertiesAndGettersByKey, this.unmatchablePropertiesAndGetters] : e === 0 ? [this.propertiesAndGettersByKey, this.gettersByKey, this.unmatchableGetters] : [this.propertiesAndSettersByKey, this.settersByKey, this.unmatchableSetters];
    if (typeof r2 == "string") {
      if (o2[r2]) {
        const t2 = h2[r2];
        if (t2)
          for (const n3 of t2)
            n3.deoptimizeThisOnEventAtPath(e, a2, s, i);
        return void (this.immutable || this.thisParametersToBeDeoptimized.add(s));
      }
      for (const t2 of l2)
        t2.deoptimizeThisOnEventAtPath(e, a2, s, i);
      if (ft.test(r2))
        for (const t2 of this.unknownIntegerProps)
          t2.deoptimizeThisOnEventAtPath(e, a2, s, i);
    } else {
      for (const t2 of Object.values(h2).concat([l2]))
        for (const n3 of t2)
          n3.deoptimizeThisOnEventAtPath(e, a2, s, i);
      for (const t2 of this.unknownIntegerProps)
        t2.deoptimizeThisOnEventAtPath(e, a2, s, i);
    }
    this.immutable || this.thisParametersToBeDeoptimized.add(s), (n2 = this.prototypeExpression) === null || n2 === void 0 || n2.deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    if (e.length === 0)
      return H;
    const i = e[0], n2 = this.getMemberExpressionAndTrackDeopt(i, s);
    return n2 ? n2.getLiteralValueAtPath(e.slice(1), t, s) : this.prototypeExpression ? this.prototypeExpression.getLiteralValueAtPath(e, t, s) : e.length !== 1 ? H : void 0;
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    if (e.length === 0)
      return K;
    const n2 = e[0], r2 = this.getMemberExpressionAndTrackDeopt(n2, i);
    return r2 ? r2.getReturnExpressionWhenCalledAtPath(e.slice(1), t, s, i) : this.prototypeExpression ? this.prototypeExpression.getReturnExpressionWhenCalledAtPath(e, t, s, i) : K;
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    const [s, ...i] = e;
    if (e.length > 1) {
      if (typeof s != "string")
        return true;
      const n2 = this.getMemberExpression(s);
      return n2 ? n2.hasEffectsWhenAccessedAtPath(i, t) : !this.prototypeExpression || this.prototypeExpression.hasEffectsWhenAccessedAtPath(e, t);
    }
    if (this.hasLostTrack)
      return true;
    if (typeof s == "string") {
      if (this.propertiesAndGettersByKey[s]) {
        const e2 = this.gettersByKey[s];
        if (e2) {
          for (const s2 of e2)
            if (s2.hasEffectsWhenAccessedAtPath(i, t))
              return true;
        }
        return false;
      }
      for (const e2 of this.unmatchableGetters)
        if (e2.hasEffectsWhenAccessedAtPath(i, t))
          return true;
    } else
      for (const e2 of Object.values(this.gettersByKey).concat([this.unmatchableGetters]))
        for (const s2 of e2)
          if (s2.hasEffectsWhenAccessedAtPath(i, t))
            return true;
    return !!this.prototypeExpression && this.prototypeExpression.hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    const [s, ...i] = e;
    if (e.length > 1) {
      if (typeof s != "string")
        return true;
      const n2 = this.getMemberExpression(s);
      return n2 ? n2.hasEffectsWhenAssignedAtPath(i, t) : !this.prototypeExpression || this.prototypeExpression.hasEffectsWhenAssignedAtPath(e, t);
    }
    if (s === L)
      return false;
    if (this.hasLostTrack)
      return true;
    if (typeof s == "string") {
      if (this.propertiesAndSettersByKey[s]) {
        const e2 = this.settersByKey[s];
        if (e2) {
          for (const s2 of e2)
            if (s2.hasEffectsWhenAssignedAtPath(i, t))
              return true;
        }
        return false;
      }
      for (const e2 of this.unmatchableSetters)
        if (e2.hasEffectsWhenAssignedAtPath(i, t))
          return true;
    } else
      for (const e2 of Object.values(this.settersByKey).concat([this.unmatchableSetters]))
        for (const s2 of e2)
          if (s2.hasEffectsWhenAssignedAtPath(i, t))
            return true;
    return !!this.prototypeExpression && this.prototypeExpression.hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    const i = e[0], n2 = this.getMemberExpression(i);
    return n2 ? n2.hasEffectsWhenCalledAtPath(e.slice(1), t, s) : !this.prototypeExpression || this.prototypeExpression.hasEffectsWhenCalledAtPath(e, t, s);
  }
  buildPropertyMaps(e) {
    const { allProperties: t, propertiesAndGettersByKey: s, propertiesAndSettersByKey: i, settersByKey: n2, gettersByKey: r2, unknownIntegerProps: a2, unmatchablePropertiesAndGetters: o2, unmatchableGetters: h2, unmatchableSetters: l2 } = this, c2 = [];
    for (let u2 = e.length - 1; u2 >= 0; u2--) {
      const { key: d2, kind: p2, property: f2 } = e[u2];
      if (t.push(f2), typeof d2 != "string") {
        if (d2 === O) {
          a2.push(f2);
          continue;
        }
        p2 === "set" && l2.push(f2), p2 === "get" && h2.push(f2), p2 !== "get" && c2.push(f2), p2 !== "set" && o2.push(f2);
      } else
        p2 === "set" ? i[d2] || (i[d2] = [f2, ...c2], n2[d2] = [f2, ...l2]) : p2 === "get" ? s[d2] || (s[d2] = [f2, ...o2], r2[d2] = [f2, ...h2]) : (i[d2] || (i[d2] = [f2, ...c2]), s[d2] || (s[d2] = [f2, ...o2]));
    }
  }
  deoptimizeCachedEntities() {
    for (const e of Object.values(this.expressionsToBeDeoptimizedByKey))
      for (const t of e)
        t.deoptimizeCache();
    for (const e of this.thisParametersToBeDeoptimized)
      e.deoptimizePath(B);
  }
  deoptimizeCachedIntegerEntities() {
    for (const [e, t] of Object.entries(this.expressionsToBeDeoptimizedByKey))
      if (ft.test(e))
        for (const e2 of t)
          e2.deoptimizeCache();
    for (const e of this.thisParametersToBeDeoptimized)
      e.deoptimizePath(z);
  }
  getMemberExpression(e) {
    if (this.hasLostTrack || this.hasUnknownDeoptimizedProperty || typeof e != "string" || this.hasUnknownDeoptimizedInteger && ft.test(e) || this.deoptimizedPaths[e])
      return K;
    const t = this.propertiesAndGettersByKey[e];
    return (t == null ? void 0 : t.length) === 1 ? t[0] : t || this.unmatchablePropertiesAndGetters.length > 0 || this.unknownIntegerProps.length && ft.test(e) ? K : null;
  }
  getMemberExpressionAndTrackDeopt(e, t) {
    if (typeof e != "string")
      return K;
    const s = this.getMemberExpression(e);
    if (s !== K && !this.immutable) {
      (this.expressionsToBeDeoptimizedByKey[e] = this.expressionsToBeDeoptimizedByKey[e] || []).push(t);
    }
    return s;
  }
}
const gt = (e) => typeof e == "string" && /^\d+$/.test(e), yt = new class extends q {
  deoptimizeThisOnEventAtPath(e, t, s) {
    e !== 2 || t.length !== 1 || gt(t[0]) || s.deoptimizePath(B);
  }
  getLiteralValueAtPath(e) {
    return e.length === 1 && gt(e[0]) ? void 0 : H;
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  hasEffectsWhenAssignedAtPath(e) {
    return e.length > 1;
  }
}(), Et = new mt({ __proto__: null, hasOwnProperty: ct, isPrototypeOf: ct, propertyIsEnumerable: ct, toLocaleString: ut, toString: ut, valueOf: pt }, yt, true), xt = [{ key: O, kind: "init", property: K }, { key: "length", kind: "init", property: Oe }], bt = [new lt({ callsArgs: [0], mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: De })], vt = [new lt({ callsArgs: [0], mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: Oe })], At = [new lt({ callsArgs: null, mutatesSelfAsArray: true, returns: () => new mt(xt, $t), returnsPrimitive: null })], St = [new lt({ callsArgs: null, mutatesSelfAsArray: "deopt-only", returns: () => new mt(xt, $t), returnsPrimitive: null })], Pt = [new lt({ callsArgs: [0], mutatesSelfAsArray: "deopt-only", returns: () => new mt(xt, $t), returnsPrimitive: null })], kt = [new lt({ callsArgs: null, mutatesSelfAsArray: true, returns: null, returnsPrimitive: Oe })], wt = [new lt({ callsArgs: null, mutatesSelfAsArray: true, returns: null, returnsPrimitive: K })], Ct = [new lt({ callsArgs: null, mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: K })], It = [new lt({ callsArgs: [0], mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: K })], _t = [new lt({ callsArgs: null, mutatesSelfAsArray: true, returns: "self", returnsPrimitive: null })], Nt = [new lt({ callsArgs: [0], mutatesSelfAsArray: true, returns: "self", returnsPrimitive: null })], $t = new mt({ __proto__: null, at: Ct, concat: St, copyWithin: _t, entries: St, every: bt, fill: _t, filter: Pt, find: It, findIndex: vt, findLast: It, findLastIndex: vt, flat: St, flatMap: Pt, forEach: It, groupBy: It, groupByToMap: It, includes: ct, indexOf: dt, join: ut, keys: pt, lastIndexOf: dt, map: Pt, pop: wt, push: kt, reduce: It, reduceRight: It, reverse: _t, shift: wt, slice: St, some: bt, sort: Nt, splice: At, toLocaleString: ut, toString: ut, unshift: kt, values: Ct }, Et, true);
class Tt extends X {
  constructor(e, t, s, i) {
    super(e), this.calledFromTryStatement = false, this.additionalInitializers = null, this.expressionsToBeDeoptimized = [], this.declarations = t ? [t] : [], this.init = s, this.deoptimizationTracker = i.deoptimizationTracker, this.module = i.module;
  }
  addDeclaration(e, t) {
    this.declarations.push(e);
    const s = this.markInitializersForDeoptimization();
    t !== null && s.push(t);
  }
  consolidateInitializers() {
    if (this.additionalInitializers !== null) {
      for (const e of this.additionalInitializers)
        e.deoptimizePath(B);
      this.additionalInitializers = null;
    }
  }
  deoptimizePath(e) {
    var t, s;
    if (!this.isReassigned && !this.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(e, this))
      if (e.length === 0) {
        if (!this.isReassigned) {
          this.isReassigned = true;
          const e2 = this.expressionsToBeDeoptimized;
          this.expressionsToBeDeoptimized = [];
          for (const t2 of e2)
            t2.deoptimizeCache();
          (t = this.init) === null || t === void 0 || t.deoptimizePath(B);
        }
      } else
        (s = this.init) === null || s === void 0 || s.deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    if (this.isReassigned || !this.init)
      return s.deoptimizePath(B);
    i.withTrackedEntityAtPath(t, this.init, () => this.init.deoptimizeThisOnEventAtPath(e, t, s, i), void 0);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.isReassigned || !this.init ? H : t.withTrackedEntityAtPath(e, this.init, () => (this.expressionsToBeDeoptimized.push(s), this.init.getLiteralValueAtPath(e, t, s)), H);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.isReassigned || !this.init ? K : s.withTrackedEntityAtPath(e, this.init, () => (this.expressionsToBeDeoptimized.push(i), this.init.getReturnExpressionWhenCalledAtPath(e, t, s, i)), K);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return !!this.isReassigned || this.init && !t.accessed.trackEntityAtPathAndGetIfTracked(e, this) && this.init.hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return !!this.included || e.length !== 0 && (!!this.isReassigned || this.init && !t.assigned.trackEntityAtPathAndGetIfTracked(e, this) && this.init.hasEffectsWhenAssignedAtPath(e, t));
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return !!this.isReassigned || this.init && !(t.withNew ? s.instantiated : s.called).trackEntityAtPathAndGetIfTracked(e, t, this) && this.init.hasEffectsWhenCalledAtPath(e, t, s);
  }
  include() {
    if (!this.included) {
      this.included = true;
      for (const e of this.declarations) {
        e.included || e.include(_e(), false);
        let t = e.parent;
        for (; !t.included && (t.included = true, t.type !== "Program"); )
          t = t.parent;
      }
    }
  }
  includeCallArguments(e, t) {
    if (this.isReassigned || this.init && e.includedCallArguments.has(this.init))
      for (const s of t)
        s.include(e, false);
    else
      this.init && (e.includedCallArguments.add(this.init), this.init.includeCallArguments(e, t), e.includedCallArguments.delete(this.init));
  }
  markCalledFromTryStatement() {
    this.calledFromTryStatement = true;
  }
  markInitializersForDeoptimization() {
    return this.additionalInitializers === null && (this.additionalInitializers = this.init === null ? [] : [this.init], this.init = K, this.isReassigned = true), this.additionalInitializers;
  }
}
function Rt(e) {
  let t = "";
  do {
    const s = e % 64;
    e = Math.floor(e / 64), t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$"[s] + t;
  } while (e !== 0);
  return t;
}
function Mt(e, t) {
  let s = e, i = 1;
  for (; t.has(s) || Ae.has(s); )
    s = `${e}$${Rt(i++)}`;
  return t.add(s), s;
}
class Dt {
  constructor() {
    this.children = [], this.variables = /* @__PURE__ */ new Map();
  }
  addDeclaration(e, t, s, i) {
    const n2 = e.name;
    let r2 = this.variables.get(n2);
    return r2 ? r2.addDeclaration(e, s) : (r2 = new Tt(e.name, e, s || Re, t), this.variables.set(n2, r2)), r2;
  }
  contains(e) {
    return this.variables.has(e);
  }
  findVariable(e) {
    throw new Error("Internal Error: findVariable needs to be implemented by a subclass");
  }
}
class Lt extends Dt {
  constructor(e) {
    super(), this.accessedOutsideVariables = /* @__PURE__ */ new Map(), this.parent = e, e.children.push(this);
  }
  addAccessedDynamicImport(e) {
    (this.accessedDynamicImports || (this.accessedDynamicImports = /* @__PURE__ */ new Set())).add(e), this.parent instanceof Lt && this.parent.addAccessedDynamicImport(e);
  }
  addAccessedGlobals(e, t) {
    const s = t.get(this) || /* @__PURE__ */ new Set();
    for (const t2 of e)
      s.add(t2);
    t.set(this, s), this.parent instanceof Lt && this.parent.addAccessedGlobals(e, t);
  }
  addNamespaceMemberAccess(e, t) {
    this.accessedOutsideVariables.set(e, t), this.parent.addNamespaceMemberAccess(e, t);
  }
  addReturnExpression(e) {
    this.parent instanceof Lt && this.parent.addReturnExpression(e);
  }
  addUsedOutsideNames(e, t, s, i) {
    for (const i2 of this.accessedOutsideVariables.values())
      i2.included && (e.add(i2.getBaseVariableName()), t === "system" && s.has(i2) && e.add("exports"));
    const n2 = i.get(this);
    if (n2)
      for (const t2 of n2)
        e.add(t2);
  }
  contains(e) {
    return this.variables.has(e) || this.parent.contains(e);
  }
  deconflict(e, t, s) {
    const i = /* @__PURE__ */ new Set();
    if (this.addUsedOutsideNames(i, e, t, s), this.accessedDynamicImports)
      for (const e2 of this.accessedDynamicImports)
        e2.inlineNamespace && i.add(e2.inlineNamespace.getBaseVariableName());
    for (const [e2, t2] of this.variables)
      (t2.included || t2.alwaysRendered) && t2.setRenderNames(null, Mt(e2, i));
    for (const i2 of this.children)
      i2.deconflict(e, t, s);
  }
  findLexicalBoundary() {
    return this.parent.findLexicalBoundary();
  }
  findVariable(e) {
    const t = this.variables.get(e) || this.accessedOutsideVariables.get(e);
    if (t)
      return t;
    const s = this.parent.findVariable(e);
    return this.accessedOutsideVariables.set(e, s), s;
  }
}
class Ot extends Lt {
  constructor(e, t) {
    super(e), this.parameters = [], this.hasRest = false, this.context = t, this.hoistedBodyVarScope = new Lt(this);
  }
  addParameterDeclaration(e) {
    const t = e.name;
    let s = this.hoistedBodyVarScope.variables.get(t);
    return s ? s.addDeclaration(e, null) : s = new Tt(t, e, K, this.context), this.variables.set(t, s), s;
  }
  addParameterVariables(e, t) {
    this.parameters = e;
    for (const t2 of e)
      for (const e2 of t2)
        e2.alwaysRendered = true;
    this.hasRest = t;
  }
  includeCallArguments(e, t) {
    let s = false, i = false;
    const n2 = this.hasRest && this.parameters[this.parameters.length - 1];
    for (const s2 of t)
      if (s2 instanceof ht) {
        for (const s3 of t)
          s3.include(e, false);
        break;
      }
    for (let r2 = t.length - 1; r2 >= 0; r2--) {
      const a2 = this.parameters[r2] || n2, o2 = t[r2];
      if (a2)
        if (s = false, a2.length === 0)
          i = true;
        else
          for (const e2 of a2)
            e2.included && (i = true), e2.calledFromTryStatement && (s = true);
      !i && o2.shouldBeIncluded(e) && (i = true), i && o2.include(e, s);
    }
  }
}
class Vt extends Ot {
  constructor() {
    super(...arguments), this.returnExpression = null, this.returnExpressions = [];
  }
  addReturnExpression(e) {
    this.returnExpressions.push(e);
  }
  getReturnExpression() {
    return this.returnExpression === null && this.updateReturnExpression(), this.returnExpression;
  }
  updateReturnExpression() {
    if (this.returnExpressions.length === 1)
      this.returnExpression = this.returnExpressions[0];
    else {
      this.returnExpression = K;
      for (const e of this.returnExpressions)
        e.deoptimizePath(B);
    }
  }
}
function Bt(e, t) {
  if (e.type === "MemberExpression")
    return !e.computed && Bt(e.object, e);
  if (e.type === "Identifier") {
    if (!t)
      return true;
    switch (t.type) {
      case "MemberExpression":
        return t.computed || e === t.object;
      case "MethodDefinition":
        return t.computed;
      case "PropertyDefinition":
      case "Property":
        return t.computed || e === t.value;
      case "ExportSpecifier":
      case "ImportSpecifier":
        return e === t.local;
      case "LabeledStatement":
      case "BreakStatement":
      case "ContinueStatement":
        return false;
      default:
        return true;
    }
  }
  return false;
}
const Ft = Symbol("Value Properties"), zt = { hasEffectsWhenCalled: () => false }, Wt = { hasEffectsWhenCalled: () => true }, jt = { __proto__: null, [Ft]: Wt }, Ut = { __proto__: null, [Ft]: zt }, Gt = { __proto__: null, [Ft]: { hasEffectsWhenCalled: (e, t) => !e.args.length || e.args[0].hasEffectsWhenAssignedAtPath(F, t) } }, Ht = { __proto__: null, [Ft]: Wt, prototype: jt }, qt = { __proto__: null, [Ft]: zt, prototype: jt }, Kt = { __proto__: null, [Ft]: zt, from: Ut, of: Ut, prototype: jt }, Xt = { __proto__: null, [Ft]: zt, supportedLocalesOf: qt }, Yt = { global: jt, globalThis: jt, self: jt, window: jt, __proto__: null, [Ft]: Wt, Array: { __proto__: null, [Ft]: Wt, from: jt, isArray: Ut, of: Ut, prototype: jt }, ArrayBuffer: { __proto__: null, [Ft]: zt, isView: Ut, prototype: jt }, Atomics: jt, BigInt: Ht, BigInt64Array: Ht, BigUint64Array: Ht, Boolean: qt, constructor: Ht, DataView: qt, Date: { __proto__: null, [Ft]: zt, now: Ut, parse: Ut, prototype: jt, UTC: Ut }, decodeURI: Ut, decodeURIComponent: Ut, encodeURI: Ut, encodeURIComponent: Ut, Error: qt, escape: Ut, eval: jt, EvalError: qt, Float32Array: Kt, Float64Array: Kt, Function: Ht, hasOwnProperty: jt, Infinity: jt, Int16Array: Kt, Int32Array: Kt, Int8Array: Kt, isFinite: Ut, isNaN: Ut, isPrototypeOf: jt, JSON: jt, Map: qt, Math: { __proto__: null, [Ft]: Wt, abs: Ut, acos: Ut, acosh: Ut, asin: Ut, asinh: Ut, atan: Ut, atan2: Ut, atanh: Ut, cbrt: Ut, ceil: Ut, clz32: Ut, cos: Ut, cosh: Ut, exp: Ut, expm1: Ut, floor: Ut, fround: Ut, hypot: Ut, imul: Ut, log: Ut, log10: Ut, log1p: Ut, log2: Ut, max: Ut, min: Ut, pow: Ut, random: Ut, round: Ut, sign: Ut, sin: Ut, sinh: Ut, sqrt: Ut, tan: Ut, tanh: Ut, trunc: Ut }, NaN: jt, Number: { __proto__: null, [Ft]: zt, isFinite: Ut, isInteger: Ut, isNaN: Ut, isSafeInteger: Ut, parseFloat: Ut, parseInt: Ut, prototype: jt }, Object: { __proto__: null, [Ft]: zt, create: Ut, defineProperty: Gt, defineProperties: Gt, getOwnPropertyDescriptor: Ut, getOwnPropertyNames: Ut, getOwnPropertySymbols: Ut, getPrototypeOf: Ut, hasOwn: Ut, is: Ut, isExtensible: Ut, isFrozen: Ut, isSealed: Ut, keys: Ut, fromEntries: Ut, entries: Ut, prototype: jt }, parseFloat: Ut, parseInt: Ut, Promise: { __proto__: null, [Ft]: Wt, all: jt, prototype: jt, race: jt, reject: jt, resolve: jt }, propertyIsEnumerable: jt, Proxy: jt, RangeError: qt, ReferenceError: qt, Reflect: jt, RegExp: qt, Set: qt, SharedArrayBuffer: Ht, String: { __proto__: null, [Ft]: zt, fromCharCode: Ut, fromCodePoint: Ut, prototype: jt, raw: Ut }, Symbol: { __proto__: null, [Ft]: zt, for: Ut, keyFor: Ut, prototype: jt }, SyntaxError: qt, toLocaleString: jt, toString: jt, TypeError: qt, Uint16Array: Kt, Uint32Array: Kt, Uint8Array: Kt, Uint8ClampedArray: Kt, unescape: Ut, URIError: qt, valueOf: jt, WeakMap: qt, WeakSet: qt, clearInterval: Ht, clearTimeout: Ht, console: jt, Intl: { __proto__: null, [Ft]: Wt, Collator: Xt, DateTimeFormat: Xt, ListFormat: Xt, NumberFormat: Xt, PluralRules: Xt, RelativeTimeFormat: Xt }, setInterval: Ht, setTimeout: Ht, TextDecoder: Ht, TextEncoder: Ht, URL: Ht, URLSearchParams: Ht, AbortController: Ht, AbortSignal: Ht, addEventListener: jt, alert: jt, AnalyserNode: Ht, Animation: Ht, AnimationEvent: Ht, applicationCache: jt, ApplicationCache: Ht, ApplicationCacheErrorEvent: Ht, atob: jt, Attr: Ht, Audio: Ht, AudioBuffer: Ht, AudioBufferSourceNode: Ht, AudioContext: Ht, AudioDestinationNode: Ht, AudioListener: Ht, AudioNode: Ht, AudioParam: Ht, AudioProcessingEvent: Ht, AudioScheduledSourceNode: Ht, AudioWorkletNode: Ht, BarProp: Ht, BaseAudioContext: Ht, BatteryManager: Ht, BeforeUnloadEvent: Ht, BiquadFilterNode: Ht, Blob: Ht, BlobEvent: Ht, blur: jt, BroadcastChannel: Ht, btoa: jt, ByteLengthQueuingStrategy: Ht, Cache: Ht, caches: jt, CacheStorage: Ht, cancelAnimationFrame: jt, cancelIdleCallback: jt, CanvasCaptureMediaStreamTrack: Ht, CanvasGradient: Ht, CanvasPattern: Ht, CanvasRenderingContext2D: Ht, ChannelMergerNode: Ht, ChannelSplitterNode: Ht, CharacterData: Ht, clientInformation: jt, ClipboardEvent: Ht, close: jt, closed: jt, CloseEvent: Ht, Comment: Ht, CompositionEvent: Ht, confirm: jt, ConstantSourceNode: Ht, ConvolverNode: Ht, CountQueuingStrategy: Ht, createImageBitmap: jt, Credential: Ht, CredentialsContainer: Ht, crypto: jt, Crypto: Ht, CryptoKey: Ht, CSS: Ht, CSSConditionRule: Ht, CSSFontFaceRule: Ht, CSSGroupingRule: Ht, CSSImportRule: Ht, CSSKeyframeRule: Ht, CSSKeyframesRule: Ht, CSSMediaRule: Ht, CSSNamespaceRule: Ht, CSSPageRule: Ht, CSSRule: Ht, CSSRuleList: Ht, CSSStyleDeclaration: Ht, CSSStyleRule: Ht, CSSStyleSheet: Ht, CSSSupportsRule: Ht, CustomElementRegistry: Ht, customElements: jt, CustomEvent: Ht, DataTransfer: Ht, DataTransferItem: Ht, DataTransferItemList: Ht, defaultstatus: jt, defaultStatus: jt, DelayNode: Ht, DeviceMotionEvent: Ht, DeviceOrientationEvent: Ht, devicePixelRatio: jt, dispatchEvent: jt, document: jt, Document: Ht, DocumentFragment: Ht, DocumentType: Ht, DOMError: Ht, DOMException: Ht, DOMImplementation: Ht, DOMMatrix: Ht, DOMMatrixReadOnly: Ht, DOMParser: Ht, DOMPoint: Ht, DOMPointReadOnly: Ht, DOMQuad: Ht, DOMRect: Ht, DOMRectReadOnly: Ht, DOMStringList: Ht, DOMStringMap: Ht, DOMTokenList: Ht, DragEvent: Ht, DynamicsCompressorNode: Ht, Element: Ht, ErrorEvent: Ht, Event: Ht, EventSource: Ht, EventTarget: Ht, external: jt, fetch: jt, File: Ht, FileList: Ht, FileReader: Ht, find: jt, focus: jt, FocusEvent: Ht, FontFace: Ht, FontFaceSetLoadEvent: Ht, FormData: Ht, frames: jt, GainNode: Ht, Gamepad: Ht, GamepadButton: Ht, GamepadEvent: Ht, getComputedStyle: jt, getSelection: jt, HashChangeEvent: Ht, Headers: Ht, history: jt, History: Ht, HTMLAllCollection: Ht, HTMLAnchorElement: Ht, HTMLAreaElement: Ht, HTMLAudioElement: Ht, HTMLBaseElement: Ht, HTMLBodyElement: Ht, HTMLBRElement: Ht, HTMLButtonElement: Ht, HTMLCanvasElement: Ht, HTMLCollection: Ht, HTMLContentElement: Ht, HTMLDataElement: Ht, HTMLDataListElement: Ht, HTMLDetailsElement: Ht, HTMLDialogElement: Ht, HTMLDirectoryElement: Ht, HTMLDivElement: Ht, HTMLDListElement: Ht, HTMLDocument: Ht, HTMLElement: Ht, HTMLEmbedElement: Ht, HTMLFieldSetElement: Ht, HTMLFontElement: Ht, HTMLFormControlsCollection: Ht, HTMLFormElement: Ht, HTMLFrameElement: Ht, HTMLFrameSetElement: Ht, HTMLHeadElement: Ht, HTMLHeadingElement: Ht, HTMLHRElement: Ht, HTMLHtmlElement: Ht, HTMLIFrameElement: Ht, HTMLImageElement: Ht, HTMLInputElement: Ht, HTMLLabelElement: Ht, HTMLLegendElement: Ht, HTMLLIElement: Ht, HTMLLinkElement: Ht, HTMLMapElement: Ht, HTMLMarqueeElement: Ht, HTMLMediaElement: Ht, HTMLMenuElement: Ht, HTMLMetaElement: Ht, HTMLMeterElement: Ht, HTMLModElement: Ht, HTMLObjectElement: Ht, HTMLOListElement: Ht, HTMLOptGroupElement: Ht, HTMLOptionElement: Ht, HTMLOptionsCollection: Ht, HTMLOutputElement: Ht, HTMLParagraphElement: Ht, HTMLParamElement: Ht, HTMLPictureElement: Ht, HTMLPreElement: Ht, HTMLProgressElement: Ht, HTMLQuoteElement: Ht, HTMLScriptElement: Ht, HTMLSelectElement: Ht, HTMLShadowElement: Ht, HTMLSlotElement: Ht, HTMLSourceElement: Ht, HTMLSpanElement: Ht, HTMLStyleElement: Ht, HTMLTableCaptionElement: Ht, HTMLTableCellElement: Ht, HTMLTableColElement: Ht, HTMLTableElement: Ht, HTMLTableRowElement: Ht, HTMLTableSectionElement: Ht, HTMLTemplateElement: Ht, HTMLTextAreaElement: Ht, HTMLTimeElement: Ht, HTMLTitleElement: Ht, HTMLTrackElement: Ht, HTMLUListElement: Ht, HTMLUnknownElement: Ht, HTMLVideoElement: Ht, IDBCursor: Ht, IDBCursorWithValue: Ht, IDBDatabase: Ht, IDBFactory: Ht, IDBIndex: Ht, IDBKeyRange: Ht, IDBObjectStore: Ht, IDBOpenDBRequest: Ht, IDBRequest: Ht, IDBTransaction: Ht, IDBVersionChangeEvent: Ht, IdleDeadline: Ht, IIRFilterNode: Ht, Image: Ht, ImageBitmap: Ht, ImageBitmapRenderingContext: Ht, ImageCapture: Ht, ImageData: Ht, indexedDB: jt, innerHeight: jt, innerWidth: jt, InputEvent: Ht, IntersectionObserver: Ht, IntersectionObserverEntry: Ht, isSecureContext: jt, KeyboardEvent: Ht, KeyframeEffect: Ht, length: jt, localStorage: jt, location: jt, Location: Ht, locationbar: jt, matchMedia: jt, MediaDeviceInfo: Ht, MediaDevices: Ht, MediaElementAudioSourceNode: Ht, MediaEncryptedEvent: Ht, MediaError: Ht, MediaKeyMessageEvent: Ht, MediaKeySession: Ht, MediaKeyStatusMap: Ht, MediaKeySystemAccess: Ht, MediaList: Ht, MediaQueryList: Ht, MediaQueryListEvent: Ht, MediaRecorder: Ht, MediaSettingsRange: Ht, MediaSource: Ht, MediaStream: Ht, MediaStreamAudioDestinationNode: Ht, MediaStreamAudioSourceNode: Ht, MediaStreamEvent: Ht, MediaStreamTrack: Ht, MediaStreamTrackEvent: Ht, menubar: jt, MessageChannel: Ht, MessageEvent: Ht, MessagePort: Ht, MIDIAccess: Ht, MIDIConnectionEvent: Ht, MIDIInput: Ht, MIDIInputMap: Ht, MIDIMessageEvent: Ht, MIDIOutput: Ht, MIDIOutputMap: Ht, MIDIPort: Ht, MimeType: Ht, MimeTypeArray: Ht, MouseEvent: Ht, moveBy: jt, moveTo: jt, MutationEvent: Ht, MutationObserver: Ht, MutationRecord: Ht, name: jt, NamedNodeMap: Ht, NavigationPreloadManager: Ht, navigator: jt, Navigator: Ht, NetworkInformation: Ht, Node: Ht, NodeFilter: jt, NodeIterator: Ht, NodeList: Ht, Notification: Ht, OfflineAudioCompletionEvent: Ht, OfflineAudioContext: Ht, offscreenBuffering: jt, OffscreenCanvas: Ht, open: jt, openDatabase: jt, Option: Ht, origin: jt, OscillatorNode: Ht, outerHeight: jt, outerWidth: jt, PageTransitionEvent: Ht, pageXOffset: jt, pageYOffset: jt, PannerNode: Ht, parent: jt, Path2D: Ht, PaymentAddress: Ht, PaymentRequest: Ht, PaymentRequestUpdateEvent: Ht, PaymentResponse: Ht, performance: jt, Performance: Ht, PerformanceEntry: Ht, PerformanceLongTaskTiming: Ht, PerformanceMark: Ht, PerformanceMeasure: Ht, PerformanceNavigation: Ht, PerformanceNavigationTiming: Ht, PerformanceObserver: Ht, PerformanceObserverEntryList: Ht, PerformancePaintTiming: Ht, PerformanceResourceTiming: Ht, PerformanceTiming: Ht, PeriodicWave: Ht, Permissions: Ht, PermissionStatus: Ht, personalbar: jt, PhotoCapabilities: Ht, Plugin: Ht, PluginArray: Ht, PointerEvent: Ht, PopStateEvent: Ht, postMessage: jt, Presentation: Ht, PresentationAvailability: Ht, PresentationConnection: Ht, PresentationConnectionAvailableEvent: Ht, PresentationConnectionCloseEvent: Ht, PresentationConnectionList: Ht, PresentationReceiver: Ht, PresentationRequest: Ht, print: jt, ProcessingInstruction: Ht, ProgressEvent: Ht, PromiseRejectionEvent: Ht, prompt: jt, PushManager: Ht, PushSubscription: Ht, PushSubscriptionOptions: Ht, queueMicrotask: jt, RadioNodeList: Ht, Range: Ht, ReadableStream: Ht, RemotePlayback: Ht, removeEventListener: jt, Request: Ht, requestAnimationFrame: jt, requestIdleCallback: jt, resizeBy: jt, ResizeObserver: Ht, ResizeObserverEntry: Ht, resizeTo: jt, Response: Ht, RTCCertificate: Ht, RTCDataChannel: Ht, RTCDataChannelEvent: Ht, RTCDtlsTransport: Ht, RTCIceCandidate: Ht, RTCIceTransport: Ht, RTCPeerConnection: Ht, RTCPeerConnectionIceEvent: Ht, RTCRtpReceiver: Ht, RTCRtpSender: Ht, RTCSctpTransport: Ht, RTCSessionDescription: Ht, RTCStatsReport: Ht, RTCTrackEvent: Ht, screen: jt, Screen: Ht, screenLeft: jt, ScreenOrientation: Ht, screenTop: jt, screenX: jt, screenY: jt, ScriptProcessorNode: Ht, scroll: jt, scrollbars: jt, scrollBy: jt, scrollTo: jt, scrollX: jt, scrollY: jt, SecurityPolicyViolationEvent: Ht, Selection: Ht, ServiceWorker: Ht, ServiceWorkerContainer: Ht, ServiceWorkerRegistration: Ht, sessionStorage: jt, ShadowRoot: Ht, SharedWorker: Ht, SourceBuffer: Ht, SourceBufferList: Ht, speechSynthesis: jt, SpeechSynthesisEvent: Ht, SpeechSynthesisUtterance: Ht, StaticRange: Ht, status: jt, statusbar: jt, StereoPannerNode: Ht, stop: jt, Storage: Ht, StorageEvent: Ht, StorageManager: Ht, styleMedia: jt, StyleSheet: Ht, StyleSheetList: Ht, SubtleCrypto: Ht, SVGAElement: Ht, SVGAngle: Ht, SVGAnimatedAngle: Ht, SVGAnimatedBoolean: Ht, SVGAnimatedEnumeration: Ht, SVGAnimatedInteger: Ht, SVGAnimatedLength: Ht, SVGAnimatedLengthList: Ht, SVGAnimatedNumber: Ht, SVGAnimatedNumberList: Ht, SVGAnimatedPreserveAspectRatio: Ht, SVGAnimatedRect: Ht, SVGAnimatedString: Ht, SVGAnimatedTransformList: Ht, SVGAnimateElement: Ht, SVGAnimateMotionElement: Ht, SVGAnimateTransformElement: Ht, SVGAnimationElement: Ht, SVGCircleElement: Ht, SVGClipPathElement: Ht, SVGComponentTransferFunctionElement: Ht, SVGDefsElement: Ht, SVGDescElement: Ht, SVGDiscardElement: Ht, SVGElement: Ht, SVGEllipseElement: Ht, SVGFEBlendElement: Ht, SVGFEColorMatrixElement: Ht, SVGFEComponentTransferElement: Ht, SVGFECompositeElement: Ht, SVGFEConvolveMatrixElement: Ht, SVGFEDiffuseLightingElement: Ht, SVGFEDisplacementMapElement: Ht, SVGFEDistantLightElement: Ht, SVGFEDropShadowElement: Ht, SVGFEFloodElement: Ht, SVGFEFuncAElement: Ht, SVGFEFuncBElement: Ht, SVGFEFuncGElement: Ht, SVGFEFuncRElement: Ht, SVGFEGaussianBlurElement: Ht, SVGFEImageElement: Ht, SVGFEMergeElement: Ht, SVGFEMergeNodeElement: Ht, SVGFEMorphologyElement: Ht, SVGFEOffsetElement: Ht, SVGFEPointLightElement: Ht, SVGFESpecularLightingElement: Ht, SVGFESpotLightElement: Ht, SVGFETileElement: Ht, SVGFETurbulenceElement: Ht, SVGFilterElement: Ht, SVGForeignObjectElement: Ht, SVGGElement: Ht, SVGGeometryElement: Ht, SVGGradientElement: Ht, SVGGraphicsElement: Ht, SVGImageElement: Ht, SVGLength: Ht, SVGLengthList: Ht, SVGLinearGradientElement: Ht, SVGLineElement: Ht, SVGMarkerElement: Ht, SVGMaskElement: Ht, SVGMatrix: Ht, SVGMetadataElement: Ht, SVGMPathElement: Ht, SVGNumber: Ht, SVGNumberList: Ht, SVGPathElement: Ht, SVGPatternElement: Ht, SVGPoint: Ht, SVGPointList: Ht, SVGPolygonElement: Ht, SVGPolylineElement: Ht, SVGPreserveAspectRatio: Ht, SVGRadialGradientElement: Ht, SVGRect: Ht, SVGRectElement: Ht, SVGScriptElement: Ht, SVGSetElement: Ht, SVGStopElement: Ht, SVGStringList: Ht, SVGStyleElement: Ht, SVGSVGElement: Ht, SVGSwitchElement: Ht, SVGSymbolElement: Ht, SVGTextContentElement: Ht, SVGTextElement: Ht, SVGTextPathElement: Ht, SVGTextPositioningElement: Ht, SVGTitleElement: Ht, SVGTransform: Ht, SVGTransformList: Ht, SVGTSpanElement: Ht, SVGUnitTypes: Ht, SVGUseElement: Ht, SVGViewElement: Ht, TaskAttributionTiming: Ht, Text: Ht, TextEvent: Ht, TextMetrics: Ht, TextTrack: Ht, TextTrackCue: Ht, TextTrackCueList: Ht, TextTrackList: Ht, TimeRanges: Ht, toolbar: jt, top: jt, Touch: Ht, TouchEvent: Ht, TouchList: Ht, TrackEvent: Ht, TransitionEvent: Ht, TreeWalker: Ht, UIEvent: Ht, ValidityState: Ht, visualViewport: jt, VisualViewport: Ht, VTTCue: Ht, WaveShaperNode: Ht, WebAssembly: jt, WebGL2RenderingContext: Ht, WebGLActiveInfo: Ht, WebGLBuffer: Ht, WebGLContextEvent: Ht, WebGLFramebuffer: Ht, WebGLProgram: Ht, WebGLQuery: Ht, WebGLRenderbuffer: Ht, WebGLRenderingContext: Ht, WebGLSampler: Ht, WebGLShader: Ht, WebGLShaderPrecisionFormat: Ht, WebGLSync: Ht, WebGLTexture: Ht, WebGLTransformFeedback: Ht, WebGLUniformLocation: Ht, WebGLVertexArrayObject: Ht, WebSocket: Ht, WheelEvent: Ht, Window: Ht, Worker: Ht, WritableStream: Ht, XMLDocument: Ht, XMLHttpRequest: Ht, XMLHttpRequestEventTarget: Ht, XMLHttpRequestUpload: Ht, XMLSerializer: Ht, XPathEvaluator: Ht, XPathExpression: Ht, XPathResult: Ht, XSLTProcessor: Ht };
for (const e of ["window", "global", "self", "globalThis"])
  Yt[e] = Yt;
function Qt(e) {
  let t = Yt;
  for (const s of e) {
    if (typeof s != "string")
      return null;
    if (t = t[s], !t)
      return null;
  }
  return t[Ft];
}
class Zt extends X {
  constructor() {
    super(...arguments), this.isReassigned = true;
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length === 0 ? this.name !== "undefined" && Qt([this.name]) === null : Qt([this.name, ...e].slice(0, -1)) === null;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    const i = Qt([this.name, ...e]);
    return i === null || i.hasEffectsWhenCalled(t, s);
  }
}
const Jt = { __proto__: null, class: true, const: true, let: true, var: true };
class es extends ot {
  constructor() {
    super(...arguments), this.variable = null, this.deoptimized = false, this.isTDZAccess = null;
  }
  addExportedVariables(e, t) {
    this.variable !== null && t.has(this.variable) && e.push(this.variable);
  }
  bind() {
    this.variable === null && Bt(this, this.parent) && (this.variable = this.scope.findVariable(this.name), this.variable.addReference(this));
  }
  declare(e, t) {
    let s;
    const { treeshake: i } = this.context.options;
    switch (e) {
      case "var":
        s = this.scope.addDeclaration(this, this.context, t, true), i && i.correctVarValueBeforeDeclaration && s.markInitializersForDeoptimization();
        break;
      case "function":
      case "let":
      case "const":
      case "class":
        s = this.scope.addDeclaration(this, this.context, t, false);
        break;
      case "parameter":
        s = this.scope.addParameterDeclaration(this);
        break;
      default:
        throw new Error(`Internal Error: Unexpected identifier kind ${e}.`);
    }
    return s.kind = e, [this.variable = s];
  }
  deoptimizePath(e) {
    e.length !== 0 || this.scope.contains(this.name) || this.disallowImportReassignment(), this.variable.deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.variable.deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getVariableRespectingTDZ().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getVariableRespectingTDZ().getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffects() {
    return this.deoptimized || this.applyDeoptimizations(), !(!this.isPossibleTDZ() || this.variable.kind === "var") || this.context.options.treeshake.unknownGlobalSideEffects && this.variable instanceof Zt && this.variable.hasEffectsWhenAccessedAtPath(V);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return this.variable !== null && this.getVariableRespectingTDZ().hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return !this.variable || (e.length > 0 ? this.getVariableRespectingTDZ() : this.variable).hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return !this.variable || this.getVariableRespectingTDZ().hasEffectsWhenCalledAtPath(e, t, s);
  }
  include() {
    this.deoptimized || this.applyDeoptimizations(), this.included || (this.included = true, this.variable !== null && this.context.includeVariableInModule(this.variable));
  }
  includeCallArguments(e, t) {
    this.getVariableRespectingTDZ().includeCallArguments(e, t);
  }
  isPossibleTDZ() {
    if (this.isTDZAccess !== null)
      return this.isTDZAccess;
    if (!(this.variable instanceof Tt && this.variable.kind && this.variable.kind in Jt))
      return this.isTDZAccess = false;
    let e;
    return this.variable.declarations && this.variable.declarations.length === 1 && (e = this.variable.declarations[0]) && this.start < e.start && ts(this) === ts(e) ? this.isTDZAccess = true : this.variable.initReached ? this.isTDZAccess = false : this.isTDZAccess = true;
  }
  markDeclarationReached() {
    this.variable.initReached = true;
  }
  render(e, { snippets: { getPropertyAccess: t } }, { renderedParentType: s, isCalleeOfRenderedParent: i, isShorthandProperty: n2 } = Q) {
    if (this.variable) {
      const r2 = this.variable.getName(t);
      r2 !== this.name && (e.overwrite(this.start, this.end, r2, { contentOnly: true, storeName: true }), n2 && e.prependRight(this.start, `${this.name}: `)), r2 === "eval" && s === "CallExpression" && i && e.appendRight(this.start, "0, ");
    }
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.variable !== null && this.variable instanceof Tt && (this.variable.consolidateInitializers(), this.context.requestTreeshakingPass());
  }
  disallowImportReassignment() {
    return this.context.error({ code: "ILLEGAL_REASSIGNMENT", message: `Illegal reassignment to import '${this.name}'` }, this.start);
  }
  getVariableRespectingTDZ() {
    return this.isPossibleTDZ() ? K : this.variable;
  }
}
function ts(e) {
  for (; e && !/^Program|Function/.test(e.type); )
    e = e.parent;
  return e;
}
function ss(e, t, s, i) {
  if (t.remove(s, i), e.annotations)
    for (const i2 of e.annotations) {
      if (!(i2.start < s))
        return;
      t.remove(i2.start, i2.end);
    }
}
function is(e, t) {
  if (e.annotations || e.parent.type !== "ExpressionStatement" || (e = e.parent), e.annotations)
    for (const s of e.annotations)
      t.remove(s.start, s.end);
}
const ns = { isNoStatement: true };
function rs(e, t, s = 0) {
  let i, n2;
  for (i = e.indexOf(t, s); ; ) {
    if ((s = e.indexOf("/", s)) === -1 || s >= i)
      return i;
    n2 = e.charCodeAt(++s), ++s, (s = n2 === 47 ? e.indexOf("\n", s) + 1 : e.indexOf("*/", s) + 2) > i && (i = e.indexOf(t, s));
  }
}
const as = /\S/g;
function os(e, t) {
  as.lastIndex = t;
  return as.exec(e).index;
}
function hs(e) {
  let t, s, i = 0;
  for (t = e.indexOf("\n", i); ; ) {
    if (i = e.indexOf("/", i), i === -1 || i > t)
      return [t, t + 1];
    if (s = e.charCodeAt(i + 1), s === 47)
      return [i, t + 1];
    i = e.indexOf("*/", i + 3) + 2, i > t && (t = e.indexOf("\n", i));
  }
}
function ls(e, t, s, i, n2) {
  let r2, a2, o2, h2, l2 = e[0], c2 = !l2.included || l2.needsBoundaries;
  c2 && (h2 = s + hs(t.original.slice(s, l2.start))[1]);
  for (let s2 = 1; s2 <= e.length; s2++)
    r2 = l2, a2 = h2, o2 = c2, l2 = e[s2], c2 = l2 !== void 0 && (!l2.included || l2.needsBoundaries), o2 || c2 ? (h2 = r2.end + hs(t.original.slice(r2.end, l2 === void 0 ? i : l2.start))[1], r2.included ? o2 ? r2.render(t, n2, { end: h2, start: a2 }) : r2.render(t, n2) : ss(r2, t, a2, h2)) : r2.render(t, n2);
}
function cs(e, t, s, i) {
  const n2 = [];
  let r2, a2, o2, h2, l2, c2 = s - 1;
  for (let i2 = 0; i2 < e.length; i2++) {
    for (a2 = e[i2], r2 !== void 0 && (c2 = r2.end + rs(t.original.slice(r2.end, a2.start), ",")), o2 = h2 = c2 + 1 + hs(t.original.slice(c2 + 1, a2.start))[1]; l2 = t.original.charCodeAt(o2), l2 === 32 || l2 === 9 || l2 === 10 || l2 === 13; )
      o2++;
    r2 !== void 0 && n2.push({ contentEnd: h2, end: o2, node: r2, separator: c2, start: s }), r2 = a2, s = o2;
  }
  return n2.push({ contentEnd: i, end: i, node: r2, separator: null, start: s }), n2;
}
function us(e, t, s) {
  for (; ; ) {
    const [i, n2] = hs(e.original.slice(t, s));
    if (i === -1)
      break;
    e.remove(t + i, t += n2);
  }
}
class ds extends Lt {
  addDeclaration(e, t, s, i) {
    if (i) {
      const n2 = this.parent.addDeclaration(e, t, s, i);
      return n2.markInitializersForDeoptimization(), n2;
    }
    return super.addDeclaration(e, t, s, false);
  }
}
class ps extends ot {
  initialise() {
    this.directive && this.directive !== "use strict" && this.parent.type === "Program" && this.context.warn({ code: "MODULE_LEVEL_DIRECTIVE", message: `Module level directives cause errors when bundled, '${this.directive}' was ignored.` }, this.start);
  }
  render(e, t) {
    super.render(e, t), this.included && this.insertSemicolon(e);
  }
  shouldBeIncluded(e) {
    return this.directive && this.directive !== "use strict" ? this.parent.type !== "Program" : super.shouldBeIncluded(e);
  }
}
class fs extends ot {
  constructor() {
    super(...arguments), this.directlyIncluded = false;
  }
  addImplicitReturnExpressionToScope() {
    const e = this.body[this.body.length - 1];
    e && e.type === "ReturnStatement" || this.scope.addReturnExpression(K);
  }
  createScope(e) {
    this.scope = this.parent.preventChildBlockScope ? e : new ds(e);
  }
  hasEffects(e) {
    if (this.deoptimizeBody)
      return true;
    for (const t of this.body) {
      if (e.brokenFlow)
        break;
      if (t.hasEffects(e))
        return true;
    }
    return false;
  }
  include(e, t) {
    if (!this.deoptimizeBody || !this.directlyIncluded) {
      this.included = true, this.directlyIncluded = true, this.deoptimizeBody && (t = true);
      for (const s of this.body)
        (t || s.shouldBeIncluded(e)) && s.include(e, t);
    }
  }
  initialise() {
    const e = this.body[0];
    this.deoptimizeBody = e instanceof ps && e.directive === "use asm";
  }
  render(e, t) {
    this.body.length ? ls(this.body, e, this.start + 1, this.end - 1, t) : super.render(e, t);
  }
}
class ms extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false, this.declarationInit = null;
  }
  addExportedVariables(e, t) {
    this.argument.addExportedVariables(e, t);
  }
  declare(e, t) {
    return this.declarationInit = t, this.argument.declare(e, K);
  }
  deoptimizePath(e) {
    e.length === 0 && this.argument.deoptimizePath(V);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return e.length > 0 || this.argument.hasEffectsWhenAssignedAtPath(V, t);
  }
  markDeclarationReached() {
    this.argument.markDeclarationReached();
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.declarationInit !== null && (this.declarationInit.deoptimizePath([D, D]), this.context.requestTreeshakingPass());
  }
}
class gs extends ot {
  constructor() {
    super(...arguments), this.objectEntity = null, this.deoptimizedReturn = false;
  }
  deoptimizePath(e) {
    this.getObjectEntity().deoptimizePath(e), e.length === 1 && e[0] === D && this.scope.getReturnExpression().deoptimizePath(B);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    t.length > 0 && this.getObjectEntity().deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getObjectEntity().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return e.length > 0 ? this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t, s, i) : this.async ? (this.deoptimizedReturn || (this.deoptimizedReturn = true, this.scope.getReturnExpression().deoptimizePath(B), this.context.requestTreeshakingPass()), K) : this.scope.getReturnExpression();
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return this.getObjectEntity().hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.getObjectEntity().hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    if (e.length > 0)
      return this.getObjectEntity().hasEffectsWhenCalledAtPath(e, t, s);
    if (this.async) {
      const { propertyReadSideEffects: e2 } = this.context.options.treeshake, t2 = this.scope.getReturnExpression();
      if (t2.hasEffectsWhenCalledAtPath(["then"], { args: $e, thisParam: null, withNew: false }, s) || e2 && (e2 === "always" || t2.hasEffectsWhenAccessedAtPath(["then"], s)))
        return true;
    }
    for (const e2 of this.params)
      if (e2.hasEffects(s))
        return true;
    return false;
  }
  include(e, t) {
    this.included = true;
    const { brokenFlow: s } = e;
    e.brokenFlow = 0, this.body.include(e, t), e.brokenFlow = s;
  }
  includeCallArguments(e, t) {
    this.scope.includeCallArguments(e, t);
  }
  initialise() {
    this.scope.addParameterVariables(this.params.map((e) => e.declare("parameter", K)), this.params[this.params.length - 1] instanceof ms), this.body instanceof fs ? this.body.addImplicitReturnExpressionToScope() : this.scope.addReturnExpression(this.body);
  }
  parseNode(e) {
    e.body.type === "BlockStatement" && (this.body = new fs(e.body, this, this.scope.hoistedBodyVarScope)), super.parseNode(e);
  }
}
gs.prototype.preventChildBlockScope = true;
class ys extends gs {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  createScope(e) {
    this.scope = new Vt(e, this.context);
  }
  hasEffects() {
    return false;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    if (super.hasEffectsWhenCalledAtPath(e, t, s))
      return true;
    const { ignore: i, brokenFlow: n2 } = s;
    return s.ignore = { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: true }, !!this.body.hasEffects(s) || (s.ignore = i, s.brokenFlow = n2, false);
  }
  include(e, t) {
    super.include(e, t);
    for (const s of this.params)
      s instanceof es || s.include(e, t);
  }
  getObjectEntity() {
    return this.objectEntity !== null ? this.objectEntity : this.objectEntity = new mt([], Et);
  }
}
function Es(e, { exportNamesByVariable: t, snippets: { _: s, getObject: i, getPropertyAccess: n2 } }, r2 = "") {
  if (e.length === 1 && t.get(e[0]).length === 1) {
    const i2 = e[0];
    return `exports('${t.get(i2)}',${s}${i2.getName(n2)}${r2})`;
  }
  {
    const s2 = [];
    for (const i2 of e)
      for (const e2 of t.get(i2))
        s2.push([e2, i2.getName(n2) + r2]);
    return `exports(${i(s2, { lineBreakIndent: null })})`;
  }
}
function xs(e, t, s, i, { exportNamesByVariable: n2, snippets: { _: r2 } }) {
  i.prependRight(t, `exports('${n2.get(e)}',${r2}`), i.appendLeft(s, ")");
}
function bs(e, t, s, i, n2, r2) {
  const { _: a2, getPropertyAccess: o2 } = r2.snippets;
  n2.appendLeft(s, `,${a2}${Es([e], r2)},${a2}${e.getName(o2)}`), i && (n2.prependRight(t, "("), n2.appendLeft(s, ")"));
}
class vs extends ot {
  addExportedVariables(e, t) {
    for (const s of this.properties)
      s.type === "Property" ? s.value.addExportedVariables(e, t) : s.argument.addExportedVariables(e, t);
  }
  declare(e, t) {
    const s = [];
    for (const i of this.properties)
      s.push(...i.declare(e, t));
    return s;
  }
  deoptimizePath(e) {
    if (e.length === 0)
      for (const t of this.properties)
        t.deoptimizePath(e);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    if (e.length > 0)
      return true;
    for (const e2 of this.properties)
      if (e2.hasEffectsWhenAssignedAtPath(V, t))
        return true;
    return false;
  }
  markDeclarationReached() {
    for (const e of this.properties)
      e.markDeclarationReached();
  }
}
class As extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  hasEffects(e) {
    return this.deoptimized || this.applyDeoptimizations(), this.right.hasEffects(e) || this.left.hasEffects(e) || this.left.hasEffectsWhenAssignedAtPath(V, e);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return e.length > 0 && this.right.hasEffectsWhenAccessedAtPath(e, t);
  }
  include(e, t) {
    let s;
    this.deoptimized || this.applyDeoptimizations(), this.included = true, (t || this.operator !== "=" || this.left.included || (s = Ne(), this.left.hasEffects(s) || this.left.hasEffectsWhenAssignedAtPath(V, s))) && this.left.include(e, t), this.right.include(e, t);
  }
  render(e, t, { preventASI: s, renderedParentType: i, renderedSurroundingElement: n2 } = Q) {
    if (this.left.included)
      this.left.render(e, t), this.right.render(e, t);
    else {
      const r2 = os(e.original, rs(e.original, "=", this.left.end) + 1);
      e.remove(this.start, r2), s && us(e, r2, this.right.start), this.right.render(e, t, { renderedParentType: i || this.parent.type, renderedSurroundingElement: n2 || this.parent.type });
    }
    if (t.format === "system")
      if (this.left instanceof es) {
        const s2 = this.left.variable, i2 = t.exportNamesByVariable.get(s2);
        if (i2)
          return void (i2.length === 1 ? xs(s2, this.start, this.end, e, t) : bs(s2, this.start, this.end, this.parent.type !== "ExpressionStatement", e, t));
      } else {
        const s2 = [];
        if (this.left.addExportedVariables(s2, t.exportNamesByVariable), s2.length > 0)
          return void function(e2, t2, s3, i2, n3, r2) {
            const { _: a2, getDirectReturnIifeLeft: o2 } = r2.snippets;
            n3.prependRight(t2, o2(["v"], `${Es(e2, r2)},${a2}v`, { needsArrowReturnParens: true, needsWrappedFunction: i2 })), n3.appendLeft(s3, ")");
          }(s2, this.start, this.end, n2 === "ExpressionStatement", e, t);
      }
    this.left.included && this.left instanceof vs && (n2 === "ExpressionStatement" || n2 === "ArrowFunctionExpression") && (e.appendRight(this.start, "("), e.prependLeft(this.end, ")"));
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.left.deoptimizePath(V), this.right.deoptimizePath(B), this.context.requestTreeshakingPass();
  }
}
class Ss extends Tt {
  constructor(e) {
    super("arguments", null, K, e);
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  hasEffectsWhenAssignedAtPath() {
    return true;
  }
  hasEffectsWhenCalledAtPath() {
    return true;
  }
}
class Ps extends Tt {
  constructor(e) {
    super("this", null, null, e), this.deoptimizedPaths = [], this.entitiesToBeDeoptimized = /* @__PURE__ */ new Set(), this.thisDeoptimizationList = [], this.thisDeoptimizations = new G();
  }
  addEntityToBeDeoptimized(e) {
    for (const t of this.deoptimizedPaths)
      e.deoptimizePath(t);
    for (const t of this.thisDeoptimizationList)
      this.applyThisDeoptimizationEvent(e, t);
    this.entitiesToBeDeoptimized.add(e);
  }
  deoptimizePath(e) {
    if (e.length !== 0 && !this.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(e, this)) {
      this.deoptimizedPaths.push(e);
      for (const t of this.entitiesToBeDeoptimized)
        t.deoptimizePath(e);
    }
  }
  deoptimizeThisOnEventAtPath(e, t, s) {
    const i = { event: e, path: t, thisParameter: s };
    if (!this.thisDeoptimizations.trackEntityAtPathAndGetIfTracked(t, e, s)) {
      for (const e2 of this.entitiesToBeDeoptimized)
        this.applyThisDeoptimizationEvent(e2, i);
      this.thisDeoptimizationList.push(i);
    }
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return this.getInit(t).hasEffectsWhenAccessedAtPath(e, t) || super.hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.getInit(t).hasEffectsWhenAssignedAtPath(e, t) || super.hasEffectsWhenAssignedAtPath(e, t);
  }
  applyThisDeoptimizationEvent(e, { event: t, path: s, thisParameter: i }) {
    e.deoptimizeThisOnEventAtPath(t, s, i === this ? e : i, U);
  }
  getInit(e) {
    return e.replacedVariableInits.get(this) || K;
  }
}
class ks extends Vt {
  constructor(e, t) {
    super(e, t), this.variables.set("arguments", this.argumentsVariable = new Ss(t)), this.variables.set("this", this.thisVariable = new Ps(t));
  }
  findLexicalBoundary() {
    return this;
  }
  includeCallArguments(e, t) {
    if (super.includeCallArguments(e, t), this.argumentsVariable.included)
      for (const s of t)
        s.included || s.include(e, false);
  }
}
class ws extends gs {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  createScope(e) {
    this.scope = new ks(e, this.context);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    super.deoptimizeThisOnEventAtPath(e, t, s, i), e === 2 && t.length === 0 && this.scope.thisVariable.addEntityToBeDeoptimized(s);
  }
  hasEffects() {
    return this.id !== null && this.id.hasEffects();
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    if (super.hasEffectsWhenCalledAtPath(e, t, s))
      return true;
    const i = s.replacedVariableInits.get(this.scope.thisVariable);
    s.replacedVariableInits.set(this.scope.thisVariable, t.withNew ? new mt(/* @__PURE__ */ Object.create(null), Et) : K);
    const { brokenFlow: n2, ignore: r2 } = s;
    return s.ignore = { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: true }, !!this.body.hasEffects(s) || (s.brokenFlow = n2, i ? s.replacedVariableInits.set(this.scope.thisVariable, i) : s.replacedVariableInits.delete(this.scope.thisVariable), s.ignore = r2, false);
  }
  include(e, t) {
    super.include(e, t), this.id && this.id.include();
    const s = this.scope.argumentsVariable.included;
    for (const i of this.params)
      i instanceof es && !s || i.include(e, t);
  }
  initialise() {
    var e;
    super.initialise(), (e = this.id) === null || e === void 0 || e.declare("function", this);
  }
  getObjectEntity() {
    return this.objectEntity !== null ? this.objectEntity : this.objectEntity = new mt([{ key: "prototype", kind: "init", property: new mt([], Et) }], Et);
  }
}
const Cs = { "!=": (e, t) => e != t, "!==": (e, t) => e !== t, "%": (e, t) => e % t, "&": (e, t) => e & t, "*": (e, t) => e * t, "**": (e, t) => e ** t, "+": (e, t) => e + t, "-": (e, t) => e - t, "/": (e, t) => e / t, "<": (e, t) => e < t, "<<": (e, t) => e << t, "<=": (e, t) => e <= t, "==": (e, t) => e == t, "===": (e, t) => e === t, ">": (e, t) => e > t, ">=": (e, t) => e >= t, ">>": (e, t) => e >> t, ">>>": (e, t) => e >>> t, "^": (e, t) => e ^ t, in: () => H, instanceof: () => H, "|": (e, t) => e | t };
class Is extends ot {
  deoptimizeThisOnEventAtPath() {
  }
  getLiteralValueAtPath(e) {
    return e.length > 0 || this.value === null && this.context.code.charCodeAt(this.start) !== 110 || typeof this.value == "bigint" || this.context.code.charCodeAt(this.start) === 47 ? H : this.value;
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return e.length !== 1 ? K : qe(this.members, e[0]);
  }
  hasEffectsWhenAccessedAtPath(e) {
    return this.value === null ? e.length > 0 : e.length > 1;
  }
  hasEffectsWhenAssignedAtPath(e) {
    return e.length > 0;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return e.length !== 1 || He(this.members, e[0], t, s);
  }
  initialise() {
    this.members = function(e) {
      switch (typeof e) {
        case "boolean":
          return je;
        case "number":
          return Ue;
        case "string":
          return Ge;
      }
      return /* @__PURE__ */ Object.create(null);
    }(this.value);
  }
  parseNode(e) {
    this.value = e.value, this.regex = e.regex, super.parseNode(e);
  }
  render(e) {
    typeof this.value == "string" && e.indentExclusionRanges.push([this.start + 1, this.end - 1]);
  }
}
function _s(e) {
  return e.computed ? function(e2) {
    if (e2 instanceof Is)
      return String(e2.value);
    return null;
  }(e.property) : e.property.name;
}
function Ns(e) {
  const t = e.propertyKey, s = e.object;
  if (typeof t == "string") {
    if (s instanceof es)
      return [{ key: s.name, pos: s.start }, { key: t, pos: e.property.start }];
    if (s instanceof $s) {
      const i = Ns(s);
      return i && [...i, { key: t, pos: e.property.start }];
    }
  }
  return null;
}
class $s extends ot {
  constructor() {
    super(...arguments), this.variable = null, this.deoptimized = false, this.bound = false, this.expressionsToBeDeoptimized = [], this.replacement = null;
  }
  bind() {
    this.bound = true;
    const e = Ns(this), t = e && this.scope.findVariable(e[0].key);
    if (t && t.isNamespace) {
      const s = this.resolveNamespaceVariables(t, e.slice(1));
      s ? typeof s == "string" ? this.replacement = s : (this.variable = s, this.scope.addNamespaceMemberAccess(function(e2) {
        let t2 = e2[0].key;
        for (let s2 = 1; s2 < e2.length; s2++)
          t2 += "." + e2[s2].key;
        return t2;
      }(e), s)) : super.bind();
    } else
      super.bind();
  }
  deoptimizeCache() {
    const e = this.expressionsToBeDeoptimized;
    this.expressionsToBeDeoptimized = [], this.propertyKey = D, this.object.deoptimizePath(B);
    for (const t of e)
      t.deoptimizeCache();
  }
  deoptimizePath(e) {
    if (e.length === 0 && this.disallowNamespaceReassignment(), this.variable)
      this.variable.deoptimizePath(e);
    else if (!this.replacement && e.length < 7) {
      const t = this.getPropertyKey();
      this.object.deoptimizePath([t === D ? L : t, ...e]);
    }
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.variable ? this.variable.deoptimizeThisOnEventAtPath(e, t, s, i) : this.replacement || (t.length < 7 ? this.object.deoptimizeThisOnEventAtPath(e, [this.getPropertyKey(), ...t], s, i) : s.deoptimizePath(B));
  }
  getLiteralValueAtPath(e, t, s) {
    return this.variable !== null ? this.variable.getLiteralValueAtPath(e, t, s) : this.replacement ? H : (this.expressionsToBeDeoptimized.push(s), e.length < 7 ? this.object.getLiteralValueAtPath([this.getPropertyKey(), ...e], t, s) : H);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.variable !== null ? this.variable.getReturnExpressionWhenCalledAtPath(e, t, s, i) : this.replacement ? K : (this.expressionsToBeDeoptimized.push(i), e.length < 7 ? this.object.getReturnExpressionWhenCalledAtPath([this.getPropertyKey(), ...e], t, s, i) : K);
  }
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    const { propertyReadSideEffects: t } = this.context.options.treeshake;
    return this.property.hasEffects(e) || this.object.hasEffects(e) || !(this.variable || this.replacement || this.parent instanceof As && this.parent.operator === "=") && t && (t === "always" || this.object.hasEffectsWhenAccessedAtPath([this.getPropertyKey()], e));
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return this.variable !== null ? this.variable.hasEffectsWhenAccessedAtPath(e, t) : !!this.replacement || (!(e.length < 7) || this.object.hasEffectsWhenAccessedAtPath([this.getPropertyKey(), ...e], t));
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.variable !== null ? this.variable.hasEffectsWhenAssignedAtPath(e, t) : !!this.replacement || (!(e.length < 7) || this.object.hasEffectsWhenAssignedAtPath([this.getPropertyKey(), ...e], t));
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return this.variable !== null ? this.variable.hasEffectsWhenCalledAtPath(e, t, s) : !!this.replacement || (!(e.length < 7) || this.object.hasEffectsWhenCalledAtPath([this.getPropertyKey(), ...e], t, s));
  }
  include(e, t) {
    this.deoptimized || this.applyDeoptimizations(), this.included || (this.included = true, this.variable !== null && this.context.includeVariableInModule(this.variable)), this.object.include(e, t), this.property.include(e, t);
  }
  includeCallArguments(e, t) {
    this.variable ? this.variable.includeCallArguments(e, t) : super.includeCallArguments(e, t);
  }
  initialise() {
    this.propertyKey = _s(this);
  }
  render(e, t, { renderedParentType: s, isCalleeOfRenderedParent: i, renderedSurroundingElement: n2 } = Q) {
    if (this.variable || this.replacement) {
      const { snippets: { getPropertyAccess: n3 } } = t;
      let r2 = this.variable ? this.variable.getName(n3) : this.replacement;
      s && i && (r2 = "0, " + r2), e.overwrite(this.start, this.end, r2, { contentOnly: true, storeName: true });
    } else
      s && i && e.appendRight(this.start, "0, "), this.object.render(e, t, { renderedSurroundingElement: n2 }), this.property.render(e, t);
  }
  applyDeoptimizations() {
    this.deoptimized = true;
    const { propertyReadSideEffects: e } = this.context.options.treeshake;
    this.bound && e && !this.variable && !this.replacement && (this.parent instanceof As && this.parent.operator === "=" || this.object.deoptimizeThisOnEventAtPath(0, [this.propertyKey], this.object, U), this.parent instanceof As && this.object.deoptimizeThisOnEventAtPath(1, [this.propertyKey], this.object, U), this.context.requestTreeshakingPass());
  }
  disallowNamespaceReassignment() {
    if (this.object instanceof es) {
      this.scope.findVariable(this.object.name).isNamespace && (this.variable && this.context.includeVariableInModule(this.variable), this.context.warn({ code: "ILLEGAL_NAMESPACE_REASSIGNMENT", message: `Illegal reassignment to import '${this.object.name}'` }, this.start));
    }
  }
  getPropertyKey() {
    if (this.propertyKey === null) {
      this.propertyKey = D;
      const e = this.property.getLiteralValueAtPath(V, U, this);
      return this.propertyKey = e === H ? D : String(e);
    }
    return this.propertyKey;
  }
  resolveNamespaceVariables(e, t) {
    if (t.length === 0)
      return e;
    if (!e.isNamespace || e instanceof Y)
      return null;
    const s = t[0].key, i = e.context.traceExport(s);
    if (!i) {
      const i2 = e.context.fileName;
      return this.context.warn({ code: "MISSING_EXPORT", exporter: ne(i2), importer: ne(this.context.fileName), message: `'${s}' is not exported by '${ne(i2)}'`, missing: s, url: "https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module" }, t[0].pos), "undefined";
    }
    return this.resolveNamespaceVariables(i, t.slice(1));
  }
}
class Ts extends Ot {
  addDeclaration(e, t, s, i) {
    const n2 = this.variables.get(e.name);
    return n2 ? (this.parent.addDeclaration(e, t, Re, i), n2.addDeclaration(e, s), n2) : this.parent.addDeclaration(e, t, s, i);
  }
}
class Rs extends Lt {
  constructor(e, t, s) {
    super(e), this.variables.set("this", this.thisVariable = new Tt("this", null, t, s)), this.instanceScope = new Lt(this), this.instanceScope.variables.set("this", new Ps(s));
  }
  findLexicalBoundary() {
    return this;
  }
}
class Ms extends ot {
  constructor() {
    super(...arguments), this.accessedValue = null, this.accessorCallOptions = { args: $e, thisParam: null, withNew: false };
  }
  deoptimizeCache() {
  }
  deoptimizePath(e) {
    this.getAccessedValue().deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    return e === 0 && this.kind === "get" && t.length === 0 || e === 1 && this.kind === "set" && t.length === 0 ? this.value.deoptimizeThisOnEventAtPath(2, V, s, i) : void this.getAccessedValue().deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getAccessedValue().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getAccessedValue().getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffects(e) {
    return this.key.hasEffects(e);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return this.kind === "get" && e.length === 0 ? this.value.hasEffectsWhenCalledAtPath(V, this.accessorCallOptions, t) : this.getAccessedValue().hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.kind === "set" ? this.value.hasEffectsWhenCalledAtPath(V, this.accessorCallOptions, t) : this.getAccessedValue().hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return this.getAccessedValue().hasEffectsWhenCalledAtPath(e, t, s);
  }
  getAccessedValue() {
    return this.accessedValue === null ? this.kind === "get" ? (this.accessedValue = K, this.accessedValue = this.value.getReturnExpressionWhenCalledAtPath(V, this.accessorCallOptions, U, this)) : this.accessedValue = this.value : this.accessedValue;
  }
}
class Ds extends Ms {
}
class Ls extends q {
  constructor(e, t) {
    super(), this.object = e, this.key = t;
  }
  deoptimizePath(e) {
    this.object.deoptimizePath([this.key, ...e]);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.object.deoptimizeThisOnEventAtPath(e, [this.key, ...t], s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.object.getLiteralValueAtPath([this.key, ...e], t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.object.getReturnExpressionWhenCalledAtPath([this.key, ...e], t, s, i);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return e.length !== 0 && this.object.hasEffectsWhenAccessedAtPath([this.key, ...e], t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.object.hasEffectsWhenAssignedAtPath([this.key, ...e], t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return this.object.hasEffectsWhenCalledAtPath([this.key, ...e], t, s);
  }
}
class Os extends ot {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  createScope(e) {
    this.scope = new Lt(e);
  }
  deoptimizeCache() {
    this.getObjectEntity().deoptimizeAllProperties();
  }
  deoptimizePath(e) {
    this.getObjectEntity().deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.getObjectEntity().deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getObjectEntity().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffects(e) {
    var t, s;
    const i = ((t = this.superClass) === null || t === void 0 ? void 0 : t.hasEffects(e)) || this.body.hasEffects(e);
    return (s = this.id) === null || s === void 0 || s.markDeclarationReached(), i || super.hasEffects(e);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return this.getObjectEntity().hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.getObjectEntity().hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return e.length === 0 ? !t.withNew || (this.classConstructor !== null ? this.classConstructor.hasEffectsWhenCalledAtPath(V, t, s) : this.superClass !== null && this.superClass.hasEffectsWhenCalledAtPath(e, t, s)) : this.getObjectEntity().hasEffectsWhenCalledAtPath(e, t, s);
  }
  include(e, t) {
    var s;
    this.included = true, (s = this.superClass) === null || s === void 0 || s.include(e, t), this.body.include(e, t), this.id && (this.id.markDeclarationReached(), this.id.include());
  }
  initialise() {
    var e;
    (e = this.id) === null || e === void 0 || e.declare("class", this);
    for (const e2 of this.body.body)
      if (e2 instanceof Ds && e2.kind === "constructor")
        return void (this.classConstructor = e2);
    this.classConstructor = null;
  }
  getObjectEntity() {
    if (this.objectEntity !== null)
      return this.objectEntity;
    const e = [], t = [];
    for (const s of this.body.body) {
      const i = s.static ? e : t, n2 = s.kind;
      if (i === t && !n2)
        continue;
      const r2 = n2 === "set" || n2 === "get" ? n2 : "init";
      let a2;
      if (s.computed) {
        const e2 = s.key.getLiteralValueAtPath(V, U, this);
        if (e2 === H) {
          i.push({ key: D, kind: r2, property: s });
          continue;
        }
        a2 = String(e2);
      } else
        a2 = s.key instanceof es ? s.key.name : String(s.key.value);
      i.push({ key: a2, kind: r2, property: s });
    }
    return e.unshift({ key: "prototype", kind: "init", property: new mt(t, this.superClass ? new Ls(this.superClass, "prototype") : Et) }), this.objectEntity = new mt(e, this.superClass || Et);
  }
}
class Vs extends Os {
  initialise() {
    super.initialise(), this.id !== null && (this.id.variable.isId = true);
  }
  parseNode(e) {
    e.id !== null && (this.id = new es(e.id, this, this.scope.parent)), super.parseNode(e);
  }
  render(e, t) {
    const { exportNamesByVariable: s, format: i, snippets: { _: n2 } } = t;
    i === "system" && this.id && s.has(this.id.variable) && e.appendLeft(this.end, `${n2}${Es([this.id.variable], t)};`), super.render(e, t);
  }
}
class Bs extends q {
  constructor(e) {
    super(), this.expressions = e, this.included = false;
  }
  deoptimizePath(e) {
    for (const t of this.expressions)
      t.deoptimizePath(e);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return new Bs(this.expressions.map((n2) => n2.getReturnExpressionWhenCalledAtPath(e, t, s, i)));
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    for (const s of this.expressions)
      if (s.hasEffectsWhenAccessedAtPath(e, t))
        return true;
    return false;
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    for (const s of this.expressions)
      if (s.hasEffectsWhenAssignedAtPath(e, t))
        return true;
    return false;
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    for (const i of this.expressions)
      if (i.hasEffectsWhenCalledAtPath(e, t, s))
        return true;
    return false;
  }
  include(e, t) {
    for (const s of this.expressions)
      s.included || s.include(e, t);
  }
}
class Fs extends ot {
  hasEffects() {
    return false;
  }
  initialise() {
    this.context.addExport(this);
  }
  render(e, t, s) {
    e.remove(s.start, s.end);
  }
}
Fs.prototype.needsBoundaries = true;
class zs extends ws {
  initialise() {
    super.initialise(), this.id !== null && (this.id.variable.isId = true);
  }
  parseNode(e) {
    e.id !== null && (this.id = new es(e.id, this, this.scope.parent)), super.parseNode(e);
  }
}
class Ws extends ot {
  include(e, t) {
    super.include(e, t), t && this.context.includeVariableInModule(this.variable);
  }
  initialise() {
    const e = this.declaration;
    this.declarationName = e.id && e.id.name || this.declaration.name, this.variable = this.scope.addExportDefaultDeclaration(this.declarationName || this.context.getModuleName(), this, this.context), this.context.addExport(this);
  }
  render(e, t, s) {
    const { start: i, end: n2 } = s, r2 = function(e2, t2) {
      return os(e2, rs(e2, "default", t2) + 7);
    }(e.original, this.start);
    if (this.declaration instanceof zs)
      this.renderNamedDeclaration(e, r2, "function", "(", this.declaration.id === null, t);
    else if (this.declaration instanceof Vs)
      this.renderNamedDeclaration(e, r2, "class", "{", this.declaration.id === null, t);
    else {
      if (this.variable.getOriginalVariable() !== this.variable)
        return void ss(this, e, i, n2);
      if (!this.variable.included)
        return e.remove(this.start, r2), this.declaration.render(e, t, { renderedSurroundingElement: "ExpressionStatement" }), void (e.original[this.end - 1] !== ";" && e.appendLeft(this.end, ";"));
      this.renderVariableDeclaration(e, r2, t);
    }
    this.declaration.render(e, t);
  }
  renderNamedDeclaration(e, t, s, i, n2, r2) {
    const { exportNamesByVariable: a2, format: o2, snippets: { getPropertyAccess: h2 } } = r2, l2 = this.variable.getName(h2);
    e.remove(this.start, t), n2 && e.appendLeft(function(e2, t2, s2, i2) {
      const n3 = rs(e2, t2, i2) + t2.length;
      e2 = e2.slice(n3, rs(e2, s2, n3));
      const r3 = rs(e2, "*");
      return r3 === -1 ? n3 : n3 + r3 + 1;
    }(e.original, s, i, t), ` ${l2}`), o2 === "system" && this.declaration instanceof Vs && a2.has(this.variable) && e.appendLeft(this.end, ` ${Es([this.variable], r2)};`);
  }
  renderVariableDeclaration(e, t, { format: s, exportNamesByVariable: i, snippets: { cnst: n2, getPropertyAccess: r2 } }) {
    const a2 = e.original.charCodeAt(this.end - 1) === 59, o2 = s === "system" && i.get(this.variable);
    o2 ? (e.overwrite(this.start, t, `${n2} ${this.variable.getName(r2)} = exports('${o2[0]}', `), e.appendRight(a2 ? this.end - 1 : this.end, ")" + (a2 ? "" : ";"))) : (e.overwrite(this.start, t, `${n2} ${this.variable.getName(r2)} = `), a2 || e.appendLeft(this.end, ";"));
  }
}
Ws.prototype.needsBoundaries = true;
class js extends ot {
  bind() {
    this.declaration !== null && this.declaration.bind();
  }
  hasEffects(e) {
    return this.declaration !== null && this.declaration.hasEffects(e);
  }
  initialise() {
    this.context.addExport(this);
  }
  render(e, t, s) {
    const { start: i, end: n2 } = s;
    this.declaration === null ? e.remove(i, n2) : (e.remove(this.start, this.declaration.start), this.declaration.render(e, t, { end: n2, start: i }));
  }
}
js.prototype.needsBoundaries = true;
class Us extends ds {
  constructor() {
    super(...arguments), this.hoistedDeclarations = [];
  }
  addDeclaration(e, t, s, i) {
    return this.hoistedDeclarations.push(e), super.addDeclaration(e, t, s, i);
  }
}
const Gs = Symbol("unset");
class Hs extends ot {
  constructor() {
    super(...arguments), this.testValue = Gs;
  }
  deoptimizeCache() {
    this.testValue = H;
  }
  hasEffects(e) {
    if (this.test.hasEffects(e))
      return true;
    const t = this.getTestValue();
    if (t === H) {
      const { brokenFlow: t2 } = e;
      if (this.consequent.hasEffects(e))
        return true;
      const s = e.brokenFlow;
      return e.brokenFlow = t2, this.alternate === null ? false : !!this.alternate.hasEffects(e) || (e.brokenFlow = e.brokenFlow < s ? e.brokenFlow : s, false);
    }
    return t ? this.consequent.hasEffects(e) : this.alternate !== null && this.alternate.hasEffects(e);
  }
  include(e, t) {
    if (this.included = true, t)
      this.includeRecursively(t, e);
    else {
      const t2 = this.getTestValue();
      t2 === H ? this.includeUnknownTest(e) : this.includeKnownTest(e, t2);
    }
  }
  parseNode(e) {
    this.consequentScope = new Us(this.scope), this.consequent = new (this.context.getNodeConstructor(e.consequent.type))(e.consequent, this, this.consequentScope), e.alternate && (this.alternateScope = new Us(this.scope), this.alternate = new (this.context.getNodeConstructor(e.alternate.type))(e.alternate, this, this.alternateScope)), super.parseNode(e);
  }
  render(e, t) {
    const { snippets: { getPropertyAccess: s } } = t, i = this.getTestValue(), n2 = [], r2 = this.test.included, a2 = !this.context.options.treeshake;
    r2 ? this.test.render(e, t) : e.remove(this.start, this.consequent.start), this.consequent.included && (a2 || i === H || i) ? this.consequent.render(e, t) : (e.overwrite(this.consequent.start, this.consequent.end, r2 ? ";" : ""), n2.push(...this.consequentScope.hoistedDeclarations)), this.alternate && (!this.alternate.included || !a2 && i !== H && i ? (r2 && this.shouldKeepAlternateBranch() ? e.overwrite(this.alternate.start, this.end, ";") : e.remove(this.consequent.end, this.end), n2.push(...this.alternateScope.hoistedDeclarations)) : (r2 ? e.original.charCodeAt(this.alternate.start - 1) === 101 && e.prependLeft(this.alternate.start, " ") : e.remove(this.consequent.end, this.alternate.start), this.alternate.render(e, t))), this.renderHoistedDeclarations(n2, e, s);
  }
  getTestValue() {
    return this.testValue === Gs ? this.testValue = this.test.getLiteralValueAtPath(V, U, this) : this.testValue;
  }
  includeKnownTest(e, t) {
    this.test.shouldBeIncluded(e) && this.test.include(e, false), t && this.consequent.shouldBeIncluded(e) && this.consequent.includeAsSingleStatement(e, false), this.alternate !== null && !t && this.alternate.shouldBeIncluded(e) && this.alternate.includeAsSingleStatement(e, false);
  }
  includeRecursively(e, t) {
    this.test.include(t, e), this.consequent.include(t, e), this.alternate !== null && this.alternate.include(t, e);
  }
  includeUnknownTest(e) {
    this.test.include(e, false);
    const { brokenFlow: t } = e;
    let s = 0;
    this.consequent.shouldBeIncluded(e) && (this.consequent.includeAsSingleStatement(e, false), s = e.brokenFlow, e.brokenFlow = t), this.alternate !== null && this.alternate.shouldBeIncluded(e) && (this.alternate.includeAsSingleStatement(e, false), e.brokenFlow = e.brokenFlow < s ? e.brokenFlow : s);
  }
  renderHoistedDeclarations(e, t, s) {
    const i = [...new Set(e.map((e2) => {
      const t2 = e2.variable;
      return t2.included ? t2.getName(s) : "";
    }))].filter(Boolean).join(", ");
    if (i) {
      const e2 = this.parent.type, s2 = e2 !== "Program" && e2 !== "BlockStatement";
      t.prependRight(this.start, `${s2 ? "{ " : ""}var ${i}; `), s2 && t.appendLeft(this.end, " }");
    }
  }
  shouldKeepAlternateBranch() {
    let e = this.parent;
    do {
      if (e instanceof Hs && e.alternate)
        return true;
      if (e instanceof fs)
        return false;
      e = e.parent;
    } while (e);
    return false;
  }
}
class qs extends ot {
  bind() {
  }
  hasEffects() {
    return false;
  }
  initialise() {
    this.context.addImport(this);
  }
  render(e, t, s) {
    e.remove(s.start, s.end);
  }
}
qs.prototype.needsBoundaries = true;
const Ks = { auto: "_interopDefault", default: null, defaultOnly: null, esModule: null, false: null, true: "_interopDefaultLegacy" }, Xs = (e, t) => e === "esModule" || t && (e === "auto" || e === "true"), Ys = { auto: "_interopNamespace", default: "_interopNamespaceDefault", defaultOnly: "_interopNamespaceDefaultOnly", esModule: null, false: null, true: "_interopNamespace" }, Qs = (e, t) => Xs(e, t) && Ks[e] === "_interopDefault", Zs = (e, t, s, i, n2, r2, a2) => {
  const o2 = new Set(e);
  for (const e2 of ui)
    t.has(e2) && o2.add(e2);
  return ui.map((e2) => o2.has(e2) ? Js[e2](s, i, n2, r2, a2, o2) : "").join("");
}, Js = { _interopDefaultLegacy(e, t, s) {
  const { _: i, getDirectReturnFunction: n2, n: r2 } = t, [a2, o2] = n2(["e"], { functionReturn: true, lineBreakIndent: null, name: "_interopDefaultLegacy" });
  return `${a2}e${i}&&${i}typeof e${i}===${i}'object'${i}&&${i}'default'${i}in e${i}?${i}${s ? ei(t) : ti(t)}${o2}${r2}${r2}`;
}, _interopDefault(e, t, s) {
  const { _: i, getDirectReturnFunction: n2, n: r2 } = t, [a2, o2] = n2(["e"], { functionReturn: true, lineBreakIndent: null, name: "_interopDefault" });
  return `${a2}e${i}&&${i}e.__esModule${i}?${i}${s ? ei(t) : ti(t)}${o2}${r2}${r2}`;
}, _interopNamespaceDefaultOnly(e, t, s, i, n2) {
  const { getDirectReturnFunction: r2, getObject: a2, n: o2 } = t, [h2, l2] = r2(["e"], { functionReturn: true, lineBreakIndent: null, name: "_interopNamespaceDefaultOnly" });
  return `${h2}${li(i, ci(n2, a2([["__proto__", "null"], ["default", "e"]], { lineBreakIndent: null }), t))}${l2}${o2}${o2}`;
}, _interopNamespaceDefault(e, t, s, i, n2) {
  const { _: r2, n: a2 } = t;
  return `function _interopNamespaceDefault(e)${r2}{${a2}` + si(e, e, t, s, i, n2) + `}${a2}${a2}`;
}, _interopNamespace(e, t, s, i, n2, r2) {
  const { _: a2, getDirectReturnFunction: o2, n: h2 } = t;
  if (r2.has("_interopNamespaceDefault")) {
    const [e2, t2] = o2(["e"], { functionReturn: true, lineBreakIndent: null, name: "_interopNamespace" });
    return `${e2}e${a2}&&${a2}e.__esModule${a2}?${a2}e${a2}:${a2}_interopNamespaceDefault(e)${t2}${h2}${h2}`;
  }
  return `function _interopNamespace(e)${a2}{${h2}${e}if${a2}(e${a2}&&${a2}e.__esModule)${a2}return e;${h2}` + si(e, e, t, s, i, n2) + `}${h2}${h2}`;
}, _mergeNamespaces(e, t, s, i, n2) {
  const { _: r2, cnst: a2, n: o2 } = t, h2 = a2 === "var" && s;
  return `function _mergeNamespaces(n, m)${r2}{${o2}${e}${ni(`{${o2}${e}${e}${e}if${r2}(k${r2}!==${r2}'default'${r2}&&${r2}!(k in n))${r2}{${o2}` + (s ? h2 ? ai : oi : hi)(e, e + e + e + e, t) + `${e}${e}${e}}${o2}${e}${e}}`, h2, e, t)}${o2}${e}return ${li(i, ci(n2, "n", t))};${o2}}${o2}${o2}`;
} }, ei = ({ _: e, getObject: t }) => `e${e}:${e}${t([["default", "e"]], { lineBreakIndent: null })}`, ti = ({ _: e, getPropertyAccess: t }) => `e${t("default")}${e}:${e}e`, si = (e, t, s, i, n2, r2) => {
  const { _: a2, cnst: o2, getObject: h2, getPropertyAccess: l2, n: c2, s: u2 } = s, d2 = `{${c2}` + (i ? ri : hi)(e, t + e + e, s) + `${t}${e}}`;
  return `${t}${o2} n${a2}=${a2}Object.create(null${r2 ? `,${a2}{${a2}[Symbol.toStringTag]:${a2}${di(h2)}${a2}}` : ""});${c2}${t}if${a2}(e)${a2}{${c2}${t}${e}${ii(d2, !i, s)}${c2}${t}}${c2}${t}n${l2("default")}${a2}=${a2}e;${c2}${t}return ${li(n2, "n")}${u2}${c2}`;
}, ii = (e, t, { _: s, cnst: i, getFunctionIntro: n2, s: r2 }) => i !== "var" || t ? `for${s}(${i} k in e)${s}${e}` : `Object.keys(e).forEach(${n2(["k"], { isAsync: false, name: null })}${e})${r2}`, ni = (e, t, s, { _: i, cnst: n2, getDirectReturnFunction: r2, getFunctionIntro: a2, n: o2 }) => {
  if (t) {
    const [t2, n3] = r2(["e"], { functionReturn: false, lineBreakIndent: { base: s, t: s }, name: null });
    return `m.forEach(${t2}e${i}&&${i}typeof e${i}!==${i}'string'${i}&&${i}!Array.isArray(e)${i}&&${i}Object.keys(e).forEach(${a2(["k"], { isAsync: false, name: null })}${e})${n3});`;
  }
  return `for${i}(var i${i}=${i}0;${i}i${i}<${i}m.length;${i}i++)${i}{${o2}${s}${s}${n2} e${i}=${i}m[i];${o2}${s}${s}if${i}(typeof e${i}!==${i}'string'${i}&&${i}!Array.isArray(e))${i}{${i}for${i}(${n2} k in e)${i}${e}${i}}${o2}${s}}`;
}, ri = (e, t, s) => {
  const { _: i, n: n2 } = s;
  return `${t}if${i}(k${i}!==${i}'default')${i}{${n2}` + ai(e, t + e, s) + `${t}}${n2}`;
}, ai = (e, t, { _: s, cnst: i, getDirectReturnFunction: n2, n: r2 }) => {
  const [a2, o2] = n2([], { functionReturn: true, lineBreakIndent: null, name: null });
  return `${t}${i} d${s}=${s}Object.getOwnPropertyDescriptor(e,${s}k);${r2}${t}Object.defineProperty(n,${s}k,${s}d.get${s}?${s}d${s}:${s}{${r2}${t}${e}enumerable:${s}true,${r2}${t}${e}get:${s}${a2}e[k]${o2}${r2}${t}});${r2}`;
}, oi = (e, t, { _: s, cnst: i, getDirectReturnFunction: n2, n: r2 }) => {
  const [a2, o2] = n2([], { functionReturn: true, lineBreakIndent: null, name: null });
  return `${t}${i} d${s}=${s}Object.getOwnPropertyDescriptor(e,${s}k);${r2}${t}if${s}(d)${s}{${r2}${t}${e}Object.defineProperty(n,${s}k,${s}d.get${s}?${s}d${s}:${s}{${r2}${t}${e}${e}enumerable:${s}true,${r2}${t}${e}${e}get:${s}${a2}e[k]${o2}${r2}${t}${e}});${r2}${t}}${r2}`;
}, hi = (e, t, { _: s, n: i }) => `${t}n[k]${s}=${s}e[k];${i}`, li = (e, t) => e ? `Object.freeze(${t})` : t, ci = (e, t, { _: s, getObject: i }) => e ? `Object.defineProperty(${t},${s}Symbol.toStringTag,${s}${di(i)})` : t, ui = Object.keys(Js);
function di(e) {
  return e([["value", "'Module'"]], { lineBreakIndent: null });
}
function pi(e, t, s) {
  return t === "external" ? Ys[String(s(e instanceof we ? e.id : null))] : t === "default" ? "_interopNamespaceDefaultOnly" : null;
}
const fi = { amd: ["require"], cjs: ["require"], system: ["module"] };
const mi = "ROLLUP_ASSET_URL_", gi = "ROLLUP_FILE_URL_";
const yi = { amd: ["document", "module", "URL"], cjs: ["document", "require", "URL"], es: [], iife: ["document", "URL"], system: ["module"], umd: ["document", "require", "URL"] }, Ei = { amd: ["document", "require", "URL"], cjs: ["document", "require", "URL"], es: [], iife: ["document", "URL"], system: ["module", "URL"], umd: ["document", "require", "URL"] }, xi = (e, t = "URL") => `new ${t}(${e}).href`, bi = (e, t = false) => xi(`'${e}', ${t ? "typeof document === 'undefined' ? location.href : " : ""}document.currentScript && document.currentScript.src || document.baseURI`), vi = (e) => (t, { chunkId: s }) => {
  const i = e(s);
  return t === null ? `({ url: ${i} })` : t === "url" ? i : "undefined";
}, Ai = (e, t = false) => `${t ? "typeof document === 'undefined' ? location.href : " : ""}(document.currentScript && document.currentScript.src || new URL('${e}', document.baseURI).href)`, Si = { amd: (e) => (e[0] !== "." && (e = "./" + e), xi(`require.toUrl('${e}'), document.baseURI`)), cjs: (e) => `(typeof document === 'undefined' ? ${xi(`'file:' + __dirname + '/${e}'`, "(require('u' + 'rl').URL)")} : ${bi(e)})`, es: (e) => xi(`'${e}', self.location.href`), iife: (e) => bi(e), system: (e) => xi(`'${e}', module.meta.url`), umd: (e) => `(typeof document === 'undefined' && typeof location === 'undefined' ? ${xi(`'file:' + __dirname + '/${e}'`, "(require('u' + 'rl').URL)")} : ${bi(e, true)})` }, Pi = { amd: vi(() => xi("module.uri, document.baseURI")), cjs: vi((e) => `(typeof document === 'undefined' ? ${xi("'file:' + __filename", "(require('u' + 'rl').URL)")} : ${Ai(e)})`), iife: vi((e) => Ai(e)), system: (e, { snippets: { getPropertyAccess: t } }) => e === null ? "module.meta" : `module.meta${t(e)}`, umd: vi((e) => `(typeof document === 'undefined' && typeof location === 'undefined' ? ${xi("'file:' + __filename", "(require('u' + 'rl').URL)")} : ${Ai(e, true)})`) };
class ki extends ot {
  constructor() {
    super(...arguments), this.hasCachedEffect = false;
  }
  hasEffects(e) {
    if (this.hasCachedEffect)
      return true;
    for (const t of this.body)
      if (t.hasEffects(e))
        return this.hasCachedEffect = true;
    return false;
  }
  include(e, t) {
    this.included = true;
    for (const s of this.body)
      (t || s.shouldBeIncluded(e)) && s.include(e, t);
  }
  render(e, t) {
    this.body.length ? ls(this.body, e, this.start, this.end, t) : super.render(e, t);
  }
}
class wi extends ot {
  hasEffects(e) {
    if (this.test && this.test.hasEffects(e))
      return true;
    for (const t of this.consequent) {
      if (e.brokenFlow)
        break;
      if (t.hasEffects(e))
        return true;
    }
    return false;
  }
  include(e, t) {
    this.included = true, this.test && this.test.include(e, t);
    for (const s of this.consequent)
      (t || s.shouldBeIncluded(e)) && s.include(e, t);
  }
  render(e, t, s) {
    if (this.consequent.length) {
      this.test && this.test.render(e, t);
      const i = this.test ? this.test.end : rs(e.original, "default", this.start) + 7, n2 = rs(e.original, ":", i) + 1;
      ls(this.consequent, e, n2, s.end, t);
    } else
      super.render(e, t);
  }
}
wi.prototype.needsBoundaries = true;
class Ci extends ot {
  getLiteralValueAtPath(e) {
    return e.length > 0 || this.quasis.length !== 1 ? H : this.quasis[0].value.cooked;
  }
  render(e, t) {
    e.indentExclusionRanges.push([this.start, this.end]), super.render(e, t);
  }
}
class Ii extends X {
  constructor() {
    super("undefined");
  }
  getLiteralValueAtPath() {
  }
}
class _i extends Tt {
  constructor(e, t, s) {
    super(e, t, t.declaration, s), this.hasId = false, this.originalId = null, this.originalVariable = null;
    const i = t.declaration;
    (i instanceof zs || i instanceof Vs) && i.id ? (this.hasId = true, this.originalId = i.id) : i instanceof es && (this.originalId = i);
  }
  addReference(e) {
    this.hasId || (this.name = e.name);
  }
  getAssignedVariableName() {
    return this.originalId && this.originalId.name || null;
  }
  getBaseVariableName() {
    const e = this.getOriginalVariable();
    return e === this ? super.getBaseVariableName() : e.getBaseVariableName();
  }
  getDirectOriginalVariable() {
    return !this.originalId || !this.hasId && (this.originalId.isPossibleTDZ() || this.originalId.variable.isReassigned || this.originalId.variable instanceof Ii || "syntheticNamespace" in this.originalId.variable) ? null : this.originalId.variable;
  }
  getName(e) {
    const t = this.getOriginalVariable();
    return t === this ? super.getName(e) : t.getName(e);
  }
  getOriginalVariable() {
    if (this.originalVariable)
      return this.originalVariable;
    let e, t = this;
    const s = /* @__PURE__ */ new Set();
    do {
      s.add(t), e = t, t = e.getDirectOriginalVariable();
    } while (t instanceof _i && !s.has(t));
    return this.originalVariable = t || e;
  }
}
class Ni extends Lt {
  constructor(e, t) {
    super(e), this.context = t, this.variables.set("this", new Tt("this", null, Re, t));
  }
  addExportDefaultDeclaration(e, t, s) {
    const i = new _i(e, t, s);
    return this.variables.set("default", i), i;
  }
  addNamespaceMemberAccess() {
  }
  deconflict(e, t, s) {
    for (const i of this.children)
      i.deconflict(e, t, s);
  }
  findLexicalBoundary() {
    return this;
  }
  findVariable(e) {
    const t = this.variables.get(e) || this.accessedOutsideVariables.get(e);
    if (t)
      return t;
    const s = this.context.traceVariable(e) || this.parent.findVariable(e);
    return s instanceof Zt && this.accessedOutsideVariables.set(e, s), s;
  }
}
const $i = { "!": (e) => !e, "+": (e) => +e, "-": (e) => -e, delete: () => H, typeof: (e) => typeof e, void: () => {
}, "~": (e) => ~e };
function Ti(e, t) {
  return e.renderBaseName !== null && t.has(e) && e.isReassigned;
}
class Ri extends ot {
  deoptimizePath() {
    for (const e of this.declarations)
      e.deoptimizePath(V);
  }
  hasEffectsWhenAssignedAtPath() {
    return false;
  }
  include(e, t) {
    this.included = true;
    for (const s of this.declarations)
      (t || s.shouldBeIncluded(e)) && s.include(e, t);
  }
  includeAsSingleStatement(e, t) {
    this.included = true;
    for (const s of this.declarations)
      (t || s.shouldBeIncluded(e)) && (s.include(e, t), s.id.include(e, t));
  }
  initialise() {
    for (const e of this.declarations)
      e.declareDeclarator(this.kind);
  }
  render(e, t, s = Q) {
    if (function(e2, t2) {
      for (const s2 of e2) {
        if (!s2.id.included)
          return false;
        if (s2.id.type === "Identifier") {
          if (t2.has(s2.id.variable))
            return false;
        } else {
          const e3 = [];
          if (s2.id.addExportedVariables(e3, t2), e3.length > 0)
            return false;
        }
      }
      return true;
    }(this.declarations, t.exportNamesByVariable)) {
      for (const s2 of this.declarations)
        s2.render(e, t);
      s.isNoStatement || e.original.charCodeAt(this.end - 1) === 59 || e.appendLeft(this.end, ";");
    } else
      this.renderReplacedDeclarations(e, t, s);
  }
  renderDeclarationEnd(e, t, s, i, n2, r2, a2, o2) {
    e.original.charCodeAt(this.end - 1) === 59 && e.remove(this.end - 1, this.end), o2 || (t += ";"), s !== null ? (e.original.charCodeAt(i - 1) !== 10 || e.original.charCodeAt(this.end) !== 10 && e.original.charCodeAt(this.end) !== 13 || (i--, e.original.charCodeAt(i) === 13 && i--), i === s + 1 ? e.overwrite(s, n2, t) : (e.overwrite(s, s + 1, t), e.remove(i, n2))) : e.appendLeft(n2, t), r2.length > 0 && e.appendLeft(n2, ` ${Es(r2, a2)};`);
  }
  renderReplacedDeclarations(e, t, { isNoStatement: s }) {
    const i = cs(this.declarations, e, this.start + this.kind.length, this.end - (e.original.charCodeAt(this.end - 1) === 59 ? 1 : 0));
    let n2, r2;
    r2 = os(e.original, this.start + this.kind.length);
    let a2 = r2 - 1;
    e.remove(this.start, a2);
    let o2, l2 = false, c2 = false, u2 = "";
    const d2 = [], p2 = function(e2, t2, s2) {
      var i2;
      let n3 = null;
      if (t2.format === "system") {
        for (const { node: r3 } of e2)
          r3.id instanceof es && r3.init && s2.length === 0 && ((i2 = t2.exportNamesByVariable.get(r3.id.variable)) === null || i2 === void 0 ? void 0 : i2.length) === 1 ? (n3 = r3.id.variable, s2.push(n3)) : r3.id.addExportedVariables(s2, t2.exportNamesByVariable);
        s2.length > 1 ? n3 = null : n3 && (s2.length = 0);
      }
      return n3;
    }(i, t, d2);
    for (const { node: s2, start: d3, separator: f2, contentEnd: m2, end: g2 } of i)
      if (s2.included) {
        if (s2.render(e, t), o2 = "", !s2.id.included || s2.id instanceof es && Ti(s2.id.variable, t.exportNamesByVariable))
          c2 && (u2 += ";"), l2 = false;
        else {
          if (p2 && p2 === s2.id.variable) {
            const i2 = rs(e.original, "=", s2.id.end);
            xs(p2, os(e.original, i2 + 1), f2 === null ? m2 : f2, e, t);
          }
          l2 ? u2 += "," : (c2 && (u2 += ";"), o2 += `${this.kind} `, l2 = true);
        }
        r2 === a2 + 1 ? e.overwrite(a2, r2, u2 + o2) : (e.overwrite(a2, a2 + 1, u2), e.appendLeft(r2, o2)), n2 = m2, r2 = g2, c2 = true, a2 = f2, u2 = "";
      } else
        e.remove(d3, g2);
    this.renderDeclarationEnd(e, u2, a2, n2, r2, d2, t, s);
  }
}
const Mi = { ArrayExpression: class extends ot {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  deoptimizePath(e) {
    this.getObjectEntity().deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.getObjectEntity().deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getObjectEntity().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return this.getObjectEntity().hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.getObjectEntity().hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return this.getObjectEntity().hasEffectsWhenCalledAtPath(e, t, s);
  }
  getObjectEntity() {
    if (this.objectEntity !== null)
      return this.objectEntity;
    const e = [{ key: "length", kind: "init", property: Oe }];
    let t = false;
    for (let s = 0; s < this.elements.length; s++) {
      const i = this.elements[s];
      i instanceof ht || t ? i && (t = true, e.unshift({ key: O, kind: "init", property: i })) : i ? e.push({ key: String(s), kind: "init", property: i }) : e.push({ key: String(s), kind: "init", property: Re });
    }
    return this.objectEntity = new mt(e, $t);
  }
}, ArrayPattern: class extends ot {
  addExportedVariables(e, t) {
    for (const s of this.elements)
      s !== null && s.addExportedVariables(e, t);
  }
  declare(e) {
    const t = [];
    for (const s of this.elements)
      s !== null && t.push(...s.declare(e, K));
    return t;
  }
  deoptimizePath(e) {
    if (e.length === 0)
      for (const t of this.elements)
        t !== null && t.deoptimizePath(e);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    if (e.length > 0)
      return true;
    for (const e2 of this.elements)
      if (e2 !== null && e2.hasEffectsWhenAssignedAtPath(V, t))
        return true;
    return false;
  }
  markDeclarationReached() {
    for (const e of this.elements)
      e !== null && e.markDeclarationReached();
  }
}, ArrowFunctionExpression: ys, AssignmentExpression: As, AssignmentPattern: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  addExportedVariables(e, t) {
    this.left.addExportedVariables(e, t);
  }
  declare(e, t) {
    return this.left.declare(e, t);
  }
  deoptimizePath(e) {
    e.length === 0 && this.left.deoptimizePath(e);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return e.length > 0 || this.left.hasEffectsWhenAssignedAtPath(V, t);
  }
  markDeclarationReached() {
    this.left.markDeclarationReached();
  }
  render(e, t, { isShorthandProperty: s } = Q) {
    this.left.render(e, t, { isShorthandProperty: s }), this.right.render(e, t);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.left.deoptimizePath(V), this.right.deoptimizePath(B), this.context.requestTreeshakingPass();
  }
}, AwaitExpression: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  hasEffects() {
    return this.deoptimized || this.applyDeoptimizations(), true;
  }
  include(e, t) {
    if (this.deoptimized || this.applyDeoptimizations(), !this.included) {
      this.included = true;
      e:
        if (!this.context.usesTopLevelAwait) {
          let e2 = this.parent;
          do {
            if (e2 instanceof ws || e2 instanceof ys)
              break e;
          } while (e2 = e2.parent);
          this.context.usesTopLevelAwait = true;
        }
    }
    this.argument.include(e, t);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.argument.deoptimizePath(B), this.context.requestTreeshakingPass();
  }
}, BinaryExpression: class extends ot {
  deoptimizeCache() {
  }
  getLiteralValueAtPath(e, t, s) {
    if (e.length > 0)
      return H;
    const i = this.left.getLiteralValueAtPath(V, t, s);
    if (i === H)
      return H;
    const n2 = this.right.getLiteralValueAtPath(V, t, s);
    if (n2 === H)
      return H;
    const r2 = Cs[this.operator];
    return r2 ? r2(i, n2) : H;
  }
  hasEffects(e) {
    return this.operator === "+" && this.parent instanceof ps && this.left.getLiteralValueAtPath(V, U, this) === "" || super.hasEffects(e);
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  render(e, t, { renderedSurroundingElement: s } = Q) {
    this.left.render(e, t, { renderedSurroundingElement: s }), this.right.render(e, t);
  }
}, BlockStatement: fs, BreakStatement: class extends ot {
  hasEffects(e) {
    if (this.label) {
      if (!e.ignore.labels.has(this.label.name))
        return true;
      e.includedLabels.add(this.label.name), e.brokenFlow = 2;
    } else {
      if (!e.ignore.breaks)
        return true;
      e.brokenFlow = 1;
    }
    return false;
  }
  include(e) {
    this.included = true, this.label && (this.label.include(), e.includedLabels.add(this.label.name)), e.brokenFlow = this.label ? 2 : 1;
  }
}, CallExpression: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false, this.deoptimizableDependentExpressions = [], this.expressionsToBeDeoptimized = /* @__PURE__ */ new Set(), this.returnExpression = null;
  }
  bind() {
    if (super.bind(), this.callee instanceof es) {
      this.scope.findVariable(this.callee.name).isNamespace && this.context.warn({ code: "CANNOT_CALL_NAMESPACE", message: `Cannot call a namespace ('${this.callee.name}')` }, this.start), this.callee.name === "eval" && this.context.warn({ code: "EVAL", message: "Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification", url: "https://rollupjs.org/guide/en/#avoiding-eval" }, this.start);
    }
    this.callOptions = { args: this.arguments, thisParam: this.callee instanceof $s && !this.callee.variable ? this.callee.object : null, withNew: false };
  }
  deoptimizeCache() {
    if (this.returnExpression !== K) {
      this.returnExpression = K;
      for (const e of this.deoptimizableDependentExpressions)
        e.deoptimizeCache();
      for (const e of this.expressionsToBeDeoptimized)
        e.deoptimizePath(B);
    }
  }
  deoptimizePath(e) {
    if (e.length === 0 || this.context.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(e, this))
      return;
    const t = this.getReturnExpression();
    t !== K && t.deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    const n2 = this.getReturnExpression(i);
    n2 === K ? s.deoptimizePath(B) : i.withTrackedEntityAtPath(t, n2, () => {
      this.expressionsToBeDeoptimized.add(s), n2.deoptimizeThisOnEventAtPath(e, t, s, i);
    }, void 0);
  }
  getLiteralValueAtPath(e, t, s) {
    const i = this.getReturnExpression(t);
    return i === K ? H : t.withTrackedEntityAtPath(e, i, () => (this.deoptimizableDependentExpressions.push(s), i.getLiteralValueAtPath(e, t, s)), H);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    const n2 = this.getReturnExpression(s);
    return this.returnExpression === K ? K : s.withTrackedEntityAtPath(e, n2, () => (this.deoptimizableDependentExpressions.push(i), n2.getReturnExpressionWhenCalledAtPath(e, t, s, i)), K);
  }
  hasEffects(e) {
    try {
      for (const t of this.arguments)
        if (t.hasEffects(e))
          return true;
      return (!this.context.options.treeshake.annotations || !this.annotations) && (this.callee.hasEffects(e) || this.callee.hasEffectsWhenCalledAtPath(V, this.callOptions, e));
    } finally {
      this.deoptimized || this.applyDeoptimizations();
    }
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return !t.accessed.trackEntityAtPathAndGetIfTracked(e, this) && this.getReturnExpression().hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return !t.assigned.trackEntityAtPathAndGetIfTracked(e, this) && this.getReturnExpression().hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return !(t.withNew ? s.instantiated : s.called).trackEntityAtPathAndGetIfTracked(e, t, this) && this.getReturnExpression().hasEffectsWhenCalledAtPath(e, t, s);
  }
  include(e, t) {
    this.deoptimized || this.applyDeoptimizations(), t ? (super.include(e, t), t === "variables" && this.callee instanceof es && this.callee.variable && this.callee.variable.markCalledFromTryStatement()) : (this.included = true, this.callee.include(e, false)), this.callee.includeCallArguments(e, this.arguments);
    const s = this.getReturnExpression();
    s.included || s.include(e, false);
  }
  render(e, t, { renderedSurroundingElement: s } = Q) {
    if (this.callee.render(e, t, { isCalleeOfRenderedParent: true, renderedSurroundingElement: s }), this.arguments.length > 0)
      if (this.arguments[this.arguments.length - 1].included)
        for (const s2 of this.arguments)
          s2.render(e, t);
      else {
        let s2 = this.arguments.length - 2;
        for (; s2 >= 0 && !this.arguments[s2].included; )
          s2--;
        if (s2 >= 0) {
          for (let i = 0; i <= s2; i++)
            this.arguments[i].render(e, t);
          e.remove(rs(e.original, ",", this.arguments[s2].end), this.end - 1);
        } else
          e.remove(rs(e.original, "(", this.callee.end) + 1, this.end - 1);
      }
  }
  applyDeoptimizations() {
    this.deoptimized = true;
    const { thisParam: e } = this.callOptions;
    e && this.callee.deoptimizeThisOnEventAtPath(2, V, e, U);
    for (const e2 of this.arguments)
      e2.deoptimizePath(B);
    this.context.requestTreeshakingPass();
  }
  getReturnExpression(e = U) {
    return this.returnExpression === null ? (this.returnExpression = K, this.returnExpression = this.callee.getReturnExpressionWhenCalledAtPath(V, this.callOptions, e, this)) : this.returnExpression;
  }
}, CatchClause: class extends ot {
  createScope(e) {
    this.scope = new Ts(e, this.context);
  }
  parseNode(e) {
    const { param: t } = e;
    t && (this.param = new (this.context.getNodeConstructor(t.type))(t, this, this.scope), this.param.declare("parameter", K)), super.parseNode(e);
  }
}, ChainExpression: class extends ot {
}, ClassBody: class extends ot {
  createScope(e) {
    this.scope = new Rs(e, this.parent, this.context);
  }
  include(e, t) {
    this.included = true, this.context.includeVariableInModule(this.scope.thisVariable);
    for (const s of this.body)
      s.include(e, t);
  }
  parseNode(e) {
    const t = this.body = [];
    for (const s of e.body)
      t.push(new (this.context.getNodeConstructor(s.type))(s, this, s.static ? this.scope : this.scope.instanceScope));
    super.parseNode(e);
  }
}, ClassDeclaration: Vs, ClassExpression: class extends Os {
  render(e, t, { renderedSurroundingElement: s } = Q) {
    super.render(e, t), s === "ExpressionStatement" && (e.appendRight(this.start, "("), e.prependLeft(this.end, ")"));
  }
}, ConditionalExpression: class extends ot {
  constructor() {
    super(...arguments), this.expressionsToBeDeoptimized = [], this.isBranchResolutionAnalysed = false, this.usedBranch = null;
  }
  deoptimizeCache() {
    if (this.usedBranch !== null) {
      const e = this.usedBranch === this.consequent ? this.alternate : this.consequent;
      this.usedBranch = null, e.deoptimizePath(B);
      for (const e2 of this.expressionsToBeDeoptimized)
        e2.deoptimizeCache();
    }
  }
  deoptimizePath(e) {
    const t = this.getUsedBranch();
    t === null ? (this.consequent.deoptimizePath(e), this.alternate.deoptimizePath(e)) : t.deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.consequent.deoptimizeThisOnEventAtPath(e, t, s, i), this.alternate.deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    const i = this.getUsedBranch();
    return i === null ? H : (this.expressionsToBeDeoptimized.push(s), i.getLiteralValueAtPath(e, t, s));
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    const n2 = this.getUsedBranch();
    return n2 === null ? new Bs([this.consequent.getReturnExpressionWhenCalledAtPath(e, t, s, i), this.alternate.getReturnExpressionWhenCalledAtPath(e, t, s, i)]) : (this.expressionsToBeDeoptimized.push(i), n2.getReturnExpressionWhenCalledAtPath(e, t, s, i));
  }
  hasEffects(e) {
    if (this.test.hasEffects(e))
      return true;
    const t = this.getUsedBranch();
    return t === null ? this.consequent.hasEffects(e) || this.alternate.hasEffects(e) : t.hasEffects(e);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    const s = this.getUsedBranch();
    return s === null ? this.consequent.hasEffectsWhenAccessedAtPath(e, t) || this.alternate.hasEffectsWhenAccessedAtPath(e, t) : s.hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    const s = this.getUsedBranch();
    return s === null ? this.consequent.hasEffectsWhenAssignedAtPath(e, t) || this.alternate.hasEffectsWhenAssignedAtPath(e, t) : s.hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    const i = this.getUsedBranch();
    return i === null ? this.consequent.hasEffectsWhenCalledAtPath(e, t, s) || this.alternate.hasEffectsWhenCalledAtPath(e, t, s) : i.hasEffectsWhenCalledAtPath(e, t, s);
  }
  include(e, t) {
    this.included = true;
    const s = this.getUsedBranch();
    t || this.test.shouldBeIncluded(e) || s === null ? (this.test.include(e, t), this.consequent.include(e, t), this.alternate.include(e, t)) : s.include(e, t);
  }
  includeCallArguments(e, t) {
    const s = this.getUsedBranch();
    s === null ? (this.consequent.includeCallArguments(e, t), this.alternate.includeCallArguments(e, t)) : s.includeCallArguments(e, t);
  }
  render(e, t, { isCalleeOfRenderedParent: s, preventASI: i, renderedParentType: n2, renderedSurroundingElement: r2 } = Q) {
    const a2 = this.getUsedBranch();
    if (this.test.included)
      this.test.render(e, t, { renderedSurroundingElement: r2 }), this.consequent.render(e, t), this.alternate.render(e, t);
    else {
      const o2 = rs(e.original, ":", this.consequent.end), h2 = os(e.original, (this.consequent.included ? rs(e.original, "?", this.test.end) : o2) + 1);
      i && us(e, h2, a2.start), e.remove(this.start, h2), this.consequent.included && e.remove(o2, this.end), is(this, e), a2.render(e, t, { isCalleeOfRenderedParent: s, preventASI: true, renderedParentType: n2 || this.parent.type, renderedSurroundingElement: r2 || this.parent.type });
    }
  }
  getUsedBranch() {
    if (this.isBranchResolutionAnalysed)
      return this.usedBranch;
    this.isBranchResolutionAnalysed = true;
    const e = this.test.getLiteralValueAtPath(V, U, this);
    return e === H ? null : this.usedBranch = e ? this.consequent : this.alternate;
  }
}, ContinueStatement: class extends ot {
  hasEffects(e) {
    if (this.label) {
      if (!e.ignore.labels.has(this.label.name))
        return true;
      e.includedLabels.add(this.label.name), e.brokenFlow = 2;
    } else {
      if (!e.ignore.continues)
        return true;
      e.brokenFlow = 1;
    }
    return false;
  }
  include(e) {
    this.included = true, this.label && (this.label.include(), e.includedLabels.add(this.label.name)), e.brokenFlow = this.label ? 2 : 1;
  }
}, DoWhileStatement: class extends ot {
  hasEffects(e) {
    if (this.test.hasEffects(e))
      return true;
    const { brokenFlow: t, ignore: { breaks: s, continues: i } } = e;
    return e.ignore.breaks = true, e.ignore.continues = true, !!this.body.hasEffects(e) || (e.ignore.breaks = s, e.ignore.continues = i, e.brokenFlow = t, false);
  }
  include(e, t) {
    this.included = true, this.test.include(e, t);
    const { brokenFlow: s } = e;
    this.body.includeAsSingleStatement(e, t), e.brokenFlow = s;
  }
}, EmptyStatement: class extends ot {
  hasEffects() {
    return false;
  }
}, ExportAllDeclaration: Fs, ExportDefaultDeclaration: Ws, ExportNamedDeclaration: js, ExportSpecifier: class extends ot {
}, ExpressionStatement: ps, ForInStatement: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  createScope(e) {
    this.scope = new ds(e);
  }
  hasEffects(e) {
    if (this.deoptimized || this.applyDeoptimizations(), this.left && (this.left.hasEffects(e) || this.left.hasEffectsWhenAssignedAtPath(V, e)) || this.right && this.right.hasEffects(e))
      return true;
    const { brokenFlow: t, ignore: { breaks: s, continues: i } } = e;
    return e.ignore.breaks = true, e.ignore.continues = true, !!this.body.hasEffects(e) || (e.ignore.breaks = s, e.ignore.continues = i, e.brokenFlow = t, false);
  }
  include(e, t) {
    this.deoptimized || this.applyDeoptimizations(), this.included = true, this.left.include(e, t || true), this.right.include(e, t);
    const { brokenFlow: s } = e;
    this.body.includeAsSingleStatement(e, t), e.brokenFlow = s;
  }
  render(e, t) {
    this.left.render(e, t, ns), this.right.render(e, t, ns), e.original.charCodeAt(this.right.start - 1) === 110 && e.prependLeft(this.right.start, " "), this.body.render(e, t);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.left.deoptimizePath(V), this.context.requestTreeshakingPass();
  }
}, ForOfStatement: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  createScope(e) {
    this.scope = new ds(e);
  }
  hasEffects() {
    return this.deoptimized || this.applyDeoptimizations(), true;
  }
  include(e, t) {
    this.deoptimized || this.applyDeoptimizations(), this.included = true, this.left.include(e, t || true), this.right.include(e, t);
    const { brokenFlow: s } = e;
    this.body.includeAsSingleStatement(e, t), e.brokenFlow = s;
  }
  render(e, t) {
    this.left.render(e, t, ns), this.right.render(e, t, ns), e.original.charCodeAt(this.right.start - 1) === 102 && e.prependLeft(this.right.start, " "), this.body.render(e, t);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.left.deoptimizePath(V), this.context.requestTreeshakingPass();
  }
}, ForStatement: class extends ot {
  createScope(e) {
    this.scope = new ds(e);
  }
  hasEffects(e) {
    if (this.init && this.init.hasEffects(e) || this.test && this.test.hasEffects(e) || this.update && this.update.hasEffects(e))
      return true;
    const { brokenFlow: t, ignore: { breaks: s, continues: i } } = e;
    return e.ignore.breaks = true, e.ignore.continues = true, !!this.body.hasEffects(e) || (e.ignore.breaks = s, e.ignore.continues = i, e.brokenFlow = t, false);
  }
  include(e, t) {
    this.included = true, this.init && this.init.includeAsSingleStatement(e, t), this.test && this.test.include(e, t);
    const { brokenFlow: s } = e;
    this.update && this.update.include(e, t), this.body.includeAsSingleStatement(e, t), e.brokenFlow = s;
  }
  render(e, t) {
    this.init && this.init.render(e, t, ns), this.test && this.test.render(e, t, ns), this.update && this.update.render(e, t, ns), this.body.render(e, t);
  }
}, FunctionDeclaration: zs, FunctionExpression: class extends ws {
  render(e, t, { renderedSurroundingElement: s } = Q) {
    super.render(e, t), s === "ExpressionStatement" && (e.appendRight(this.start, "("), e.prependLeft(this.end, ")"));
  }
}, Identifier: es, IfStatement: Hs, ImportDeclaration: qs, ImportDefaultSpecifier: class extends ot {
}, ImportExpression: class extends ot {
  constructor() {
    super(...arguments), this.inlineNamespace = null, this.mechanism = null, this.resolution = null;
  }
  hasEffects() {
    return true;
  }
  include(e, t) {
    this.included || (this.included = true, this.context.includeDynamicImport(this), this.scope.addAccessedDynamicImport(this)), this.source.include(e, t);
  }
  initialise() {
    this.context.addDynamicImport(this);
  }
  render(e, t) {
    if (this.inlineNamespace) {
      const { snippets: { getDirectReturnFunction: s, getPropertyAccess: i } } = t, [n2, r2] = s([], { functionReturn: true, lineBreakIndent: null, name: null });
      e.overwrite(this.start, this.end, `Promise.resolve().then(${n2}${this.inlineNamespace.getName(i)}${r2})`, { contentOnly: true });
    } else
      this.mechanism && (e.overwrite(this.start, rs(e.original, "(", this.start + 6) + 1, this.mechanism.left, { contentOnly: true }), e.overwrite(this.end - 1, this.end, this.mechanism.right, { contentOnly: true })), this.source.render(e, t);
  }
  renderFinalResolution(e, t, s, { getDirectReturnFunction: i }) {
    if (e.overwrite(this.source.start, this.source.end, t), s) {
      const [t2, n2] = i(["n"], { functionReturn: true, lineBreakIndent: null, name: null });
      e.prependLeft(this.end, `.then(${t2}n.${s}${n2})`);
    }
  }
  setExternalResolution(e, t, s, i, n2, r2) {
    const { format: a2 } = s;
    this.resolution = t;
    const o2 = [...fi[a2] || []];
    let h2;
    ({ helper: h2, mechanism: this.mechanism } = this.getDynamicImportMechanismAndHelper(t, e, s, i, n2)), h2 && o2.push(h2), o2.length > 0 && this.scope.addAccessedGlobals(o2, r2);
  }
  setInternalResolution(e) {
    this.inlineNamespace = e;
  }
  getDynamicImportMechanismAndHelper(e, t, { compact: s, dynamicImportFunction: i, format: n2, generatedCode: { arrowFunctions: r2 }, interop: a2 }, { _: o2, getDirectReturnFunction: h2, getDirectReturnIifeLeft: l2 }, c2) {
    const u2 = c2.hookFirstSync("renderDynamicImport", [{ customResolution: typeof this.resolution == "string" ? this.resolution : null, format: n2, moduleId: this.context.module.id, targetModuleId: this.resolution && typeof this.resolution != "string" ? this.resolution.id : null }]);
    if (u2)
      return { helper: null, mechanism: u2 };
    const d2 = !this.resolution || typeof this.resolution == "string";
    switch (n2) {
      case "cjs": {
        const s2 = pi(e, t, a2);
        let i2 = "require(", n3 = ")";
        s2 && (i2 = `/*#__PURE__*/${s2}(${i2}`, n3 += ")");
        const [o3, c3] = h2([], { functionReturn: true, lineBreakIndent: null, name: null });
        return i2 = `Promise.resolve().then(${o3}${i2}`, n3 += `${c3})`, !r2 && d2 && (i2 = l2(["t"], `${i2}t${n3}`, { needsArrowReturnParens: false, needsWrappedFunction: true }), n3 = ")"), { helper: s2, mechanism: { left: i2, right: n3 } };
      }
      case "amd": {
        const i2 = s ? "c" : "resolve", n3 = s ? "e" : "reject", c3 = pi(e, t, a2), [u3, p2] = h2(["m"], { functionReturn: false, lineBreakIndent: null, name: null }), f2 = c3 ? `${u3}${i2}(/*#__PURE__*/${c3}(m))${p2}` : i2, [m2, g2] = h2([i2, n3], { functionReturn: false, lineBreakIndent: null, name: null });
        let y2 = `new Promise(${m2}require([`, E2 = `],${o2}${f2},${o2}${n3})${g2})`;
        return !r2 && d2 && (y2 = l2(["t"], `${y2}t${E2}`, { needsArrowReturnParens: false, needsWrappedFunction: true }), E2 = ")"), { helper: c3, mechanism: { left: y2, right: E2 } };
      }
      case "system":
        return { helper: null, mechanism: { left: "module.import(", right: ")" } };
      case "es":
        if (i)
          return { helper: null, mechanism: { left: `${i}(`, right: ")" } };
    }
    return { helper: null, mechanism: null };
  }
}, ImportNamespaceSpecifier: class extends ot {
}, ImportSpecifier: class extends ot {
}, LabeledStatement: class extends ot {
  hasEffects(e) {
    const t = e.brokenFlow;
    return e.ignore.labels.add(this.label.name), !!this.body.hasEffects(e) || (e.ignore.labels.delete(this.label.name), e.includedLabels.has(this.label.name) && (e.includedLabels.delete(this.label.name), e.brokenFlow = t), false);
  }
  include(e, t) {
    this.included = true;
    const s = e.brokenFlow;
    this.body.include(e, t), (t || e.includedLabels.has(this.label.name)) && (this.label.include(), e.includedLabels.delete(this.label.name), e.brokenFlow = s);
  }
  render(e, t) {
    this.label.included ? this.label.render(e, t) : e.remove(this.start, os(e.original, rs(e.original, ":", this.label.end) + 1)), this.body.render(e, t);
  }
}, Literal: Is, LogicalExpression: class extends ot {
  constructor() {
    super(...arguments), this.expressionsToBeDeoptimized = [], this.isBranchResolutionAnalysed = false, this.usedBranch = null;
  }
  deoptimizeCache() {
    if (this.usedBranch !== null) {
      const e = this.usedBranch === this.left ? this.right : this.left;
      this.usedBranch = null, e.deoptimizePath(B);
      for (const e2 of this.expressionsToBeDeoptimized)
        e2.deoptimizeCache();
    }
  }
  deoptimizePath(e) {
    const t = this.getUsedBranch();
    t === null ? (this.left.deoptimizePath(e), this.right.deoptimizePath(e)) : t.deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.left.deoptimizeThisOnEventAtPath(e, t, s, i), this.right.deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    const i = this.getUsedBranch();
    return i === null ? H : (this.expressionsToBeDeoptimized.push(s), i.getLiteralValueAtPath(e, t, s));
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    const n2 = this.getUsedBranch();
    return n2 === null ? new Bs([this.left.getReturnExpressionWhenCalledAtPath(e, t, s, i), this.right.getReturnExpressionWhenCalledAtPath(e, t, s, i)]) : (this.expressionsToBeDeoptimized.push(i), n2.getReturnExpressionWhenCalledAtPath(e, t, s, i));
  }
  hasEffects(e) {
    return !!this.left.hasEffects(e) || this.getUsedBranch() !== this.left && this.right.hasEffects(e);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    const s = this.getUsedBranch();
    return s === null ? this.left.hasEffectsWhenAccessedAtPath(e, t) || this.right.hasEffectsWhenAccessedAtPath(e, t) : s.hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    const s = this.getUsedBranch();
    return s === null ? this.left.hasEffectsWhenAssignedAtPath(e, t) || this.right.hasEffectsWhenAssignedAtPath(e, t) : s.hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    const i = this.getUsedBranch();
    return i === null ? this.left.hasEffectsWhenCalledAtPath(e, t, s) || this.right.hasEffectsWhenCalledAtPath(e, t, s) : i.hasEffectsWhenCalledAtPath(e, t, s);
  }
  include(e, t) {
    this.included = true;
    const s = this.getUsedBranch();
    t || s === this.right && this.left.shouldBeIncluded(e) || s === null ? (this.left.include(e, t), this.right.include(e, t)) : s.include(e, t);
  }
  render(e, t, { isCalleeOfRenderedParent: s, preventASI: i, renderedParentType: n2, renderedSurroundingElement: r2 } = Q) {
    if (this.left.included && this.right.included)
      this.left.render(e, t, { preventASI: i, renderedSurroundingElement: r2 }), this.right.render(e, t);
    else {
      const a2 = rs(e.original, this.operator, this.left.end);
      if (this.right.included) {
        const t2 = os(e.original, a2 + 2);
        e.remove(this.start, t2), i && us(e, t2, this.right.start);
      } else
        e.remove(a2, this.end);
      is(this, e), this.getUsedBranch().render(e, t, { isCalleeOfRenderedParent: s, preventASI: i, renderedParentType: n2 || this.parent.type, renderedSurroundingElement: r2 || this.parent.type });
    }
  }
  getUsedBranch() {
    if (!this.isBranchResolutionAnalysed) {
      this.isBranchResolutionAnalysed = true;
      const e = this.left.getLiteralValueAtPath(V, U, this);
      if (e === H)
        return null;
      this.usedBranch = this.operator === "||" && e || this.operator === "&&" && !e || this.operator === "??" && e != null ? this.left : this.right;
    }
    return this.usedBranch;
  }
}, MemberExpression: $s, MetaProperty: class extends ot {
  addAccessedGlobals(e, t) {
    const s = this.metaProperty, i = (s && (s.startsWith(gi) || s.startsWith(mi) || s.startsWith("ROLLUP_CHUNK_URL_")) ? Ei : yi)[e];
    i.length > 0 && this.scope.addAccessedGlobals(i, t);
  }
  getReferencedFileName(e) {
    const t = this.metaProperty;
    return t && t.startsWith(gi) ? e.getFileName(t.substring(gi.length)) : null;
  }
  hasEffects() {
    return false;
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  include() {
    if (!this.included && (this.included = true, this.meta.name === "import")) {
      this.context.addImportMeta(this);
      const e = this.parent;
      this.metaProperty = e instanceof $s && typeof e.propertyKey == "string" ? e.propertyKey : null;
    }
  }
  renderFinalMechanism(e, t, s, i, n2) {
    var r2;
    const a2 = this.parent, o2 = this.metaProperty;
    if (o2 && (o2.startsWith(gi) || o2.startsWith(mi) || o2.startsWith("ROLLUP_CHUNK_URL_"))) {
      let i2, r3 = null, h3 = null, l2 = null;
      o2.startsWith(gi) ? (r3 = o2.substring(gi.length), i2 = n2.getFileName(r3)) : o2.startsWith(mi) ? (be(`Using the "${mi}" prefix to reference files is deprecated. Use the "${gi}" prefix instead.`, true, this.context.options), h3 = o2.substring(mi.length), i2 = n2.getFileName(h3)) : (be(`Using the "ROLLUP_CHUNK_URL_" prefix to reference files is deprecated. Use the "${gi}" prefix instead.`, true, this.context.options), l2 = o2.substring("ROLLUP_CHUNK_URL_".length), i2 = n2.getFileName(l2));
      const c2 = I(T(N(t), i2));
      let u2;
      return h3 !== null && (u2 = n2.hookFirstSync("resolveAssetUrl", [{ assetFileName: i2, chunkId: t, format: s, moduleId: this.context.module.id, relativeAssetPath: c2 }])), u2 || (u2 = n2.hookFirstSync("resolveFileUrl", [{ assetReferenceId: h3, chunkId: t, chunkReferenceId: l2, fileName: i2, format: s, moduleId: this.context.module.id, referenceId: r3 || h3 || l2, relativePath: c2 }]) || Si[s](c2)), void e.overwrite(a2.start, a2.end, u2, { contentOnly: true });
    }
    const h2 = n2.hookFirstSync("resolveImportMeta", [o2, { chunkId: t, format: s, moduleId: this.context.module.id }]) || ((r2 = Pi[s]) === null || r2 === void 0 ? void 0 : r2.call(Pi, o2, { chunkId: t, snippets: i }));
    typeof h2 == "string" && (a2 instanceof $s ? e.overwrite(a2.start, a2.end, h2, { contentOnly: true }) : e.overwrite(this.start, this.end, h2, { contentOnly: true }));
  }
}, MethodDefinition: Ds, NewExpression: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    for (const t of this.arguments)
      if (t.hasEffects(e))
        return true;
    return (!this.context.options.treeshake.annotations || !this.annotations) && (this.callee.hasEffects(e) || this.callee.hasEffectsWhenCalledAtPath(V, this.callOptions, e));
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 0;
  }
  initialise() {
    this.callOptions = { args: this.arguments, thisParam: null, withNew: true };
  }
  applyDeoptimizations() {
    this.deoptimized = true;
    for (const e of this.arguments)
      e.deoptimizePath(B);
    this.context.requestTreeshakingPass();
  }
}, ObjectExpression: class extends ot {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  deoptimizeCache() {
    this.getObjectEntity().deoptimizeAllProperties();
  }
  deoptimizePath(e) {
    this.getObjectEntity().deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.getObjectEntity().deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getObjectEntity().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return this.getObjectEntity().hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.getObjectEntity().hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return this.getObjectEntity().hasEffectsWhenCalledAtPath(e, t, s);
  }
  render(e, t, { renderedSurroundingElement: s } = Q) {
    super.render(e, t), s !== "ExpressionStatement" && s !== "ArrowFunctionExpression" || (e.appendRight(this.start, "("), e.prependLeft(this.end, ")"));
  }
  getObjectEntity() {
    if (this.objectEntity !== null)
      return this.objectEntity;
    let e = Et;
    const t = [];
    for (const s of this.properties) {
      if (s instanceof ht) {
        t.push({ key: D, kind: "init", property: s });
        continue;
      }
      let i;
      if (s.computed) {
        const e2 = s.key.getLiteralValueAtPath(V, U, this);
        if (e2 === H) {
          t.push({ key: D, kind: s.kind, property: s });
          continue;
        }
        i = String(e2);
      } else if (i = s.key instanceof es ? s.key.name : String(s.key.value), i === "__proto__" && s.kind === "init") {
        e = s.value instanceof Is && s.value.value === null ? null : s.value;
        continue;
      }
      t.push({ key: i, kind: s.kind, property: s });
    }
    return this.objectEntity = new mt(t, e);
  }
}, ObjectPattern: vs, PrivateIdentifier: class extends ot {
}, Program: ki, Property: class extends Ms {
  constructor() {
    super(...arguments), this.deoptimized = false, this.declarationInit = null;
  }
  declare(e, t) {
    return this.declarationInit = t, this.value.declare(e, K);
  }
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    const t = this.context.options.treeshake.propertyReadSideEffects;
    return this.parent.type === "ObjectPattern" && t === "always" || this.key.hasEffects(e) || this.value.hasEffects(e);
  }
  markDeclarationReached() {
    this.value.markDeclarationReached();
  }
  render(e, t) {
    this.shorthand || this.key.render(e, t), this.value.render(e, t, { isShorthandProperty: this.shorthand });
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.declarationInit !== null && (this.declarationInit.deoptimizePath([D, D]), this.context.requestTreeshakingPass());
  }
}, PropertyDefinition: class extends ot {
  deoptimizePath(e) {
    var t;
    (t = this.value) === null || t === void 0 || t.deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    var n2;
    (n2 = this.value) === null || n2 === void 0 || n2.deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.value ? this.value.getLiteralValueAtPath(e, t, s) : H;
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.value ? this.value.getReturnExpressionWhenCalledAtPath(e, t, s, i) : K;
  }
  hasEffects(e) {
    return this.key.hasEffects(e) || this.static && this.value !== null && this.value.hasEffects(e);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return !this.value || this.value.hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return !this.value || this.value.hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return !this.value || this.value.hasEffectsWhenCalledAtPath(e, t, s);
  }
}, RestElement: ms, ReturnStatement: class extends ot {
  hasEffects(e) {
    return !(e.ignore.returnYield && (this.argument === null || !this.argument.hasEffects(e))) || (e.brokenFlow = 2, false);
  }
  include(e, t) {
    this.included = true, this.argument && this.argument.include(e, t), e.brokenFlow = 2;
  }
  initialise() {
    this.scope.addReturnExpression(this.argument || K);
  }
  render(e, t) {
    this.argument && (this.argument.render(e, t, { preventASI: true }), this.argument.start === this.start + 6 && e.prependLeft(this.start + 6, " "));
  }
}, SequenceExpression: class extends ot {
  deoptimizePath(e) {
    this.expressions[this.expressions.length - 1].deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.expressions[this.expressions.length - 1].deoptimizeThisOnEventAtPath(e, t, s, i);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.expressions[this.expressions.length - 1].getLiteralValueAtPath(e, t, s);
  }
  hasEffects(e) {
    for (const t of this.expressions)
      if (t.hasEffects(e))
        return true;
    return false;
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return e.length > 0 && this.expressions[this.expressions.length - 1].hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.expressions[this.expressions.length - 1].hasEffectsWhenAssignedAtPath(e, t);
  }
  hasEffectsWhenCalledAtPath(e, t, s) {
    return this.expressions[this.expressions.length - 1].hasEffectsWhenCalledAtPath(e, t, s);
  }
  include(e, t) {
    this.included = true;
    const s = this.expressions[this.expressions.length - 1];
    for (const i of this.expressions)
      (t || i === s && !(this.parent instanceof ps) || i.shouldBeIncluded(e)) && i.include(e, t);
  }
  render(e, t, { renderedParentType: s, isCalleeOfRenderedParent: i, preventASI: n2 } = Q) {
    let r2 = 0, a2 = null;
    const o2 = this.expressions[this.expressions.length - 1];
    for (const { node: h2, separator: l2, start: c2, end: u2 } of cs(this.expressions, e, this.start, this.end))
      if (h2.included)
        if (r2++, a2 = l2, r2 === 1 && n2 && us(e, c2, h2.start), r2 === 1) {
          const n3 = s || this.parent.type;
          h2.render(e, t, { isCalleeOfRenderedParent: i && h2 === o2, renderedParentType: n3, renderedSurroundingElement: n3 });
        } else
          h2.render(e, t);
      else
        ss(h2, e, c2, u2);
    a2 && e.remove(a2, this.end);
  }
}, SpreadElement: ht, StaticBlock: class extends ot {
  createScope(e) {
    this.scope = new ds(e);
  }
  hasEffects(e) {
    for (const t of this.body)
      if (t.hasEffects(e))
        return true;
    return false;
  }
  include(e, t) {
    this.included = true;
    for (const s of this.body)
      (t || s.shouldBeIncluded(e)) && s.include(e, t);
  }
  render(e, t) {
    this.body.length ? ls(this.body, e, this.start + 1, this.end - 1, t) : super.render(e, t);
  }
}, Super: class extends ot {
  bind() {
    this.variable = this.scope.findVariable("this");
  }
  deoptimizePath(e) {
    this.variable.deoptimizePath(e);
  }
  include() {
    this.included || (this.included = true, this.context.includeVariableInModule(this.variable));
  }
}, SwitchCase: wi, SwitchStatement: class extends ot {
  createScope(e) {
    this.scope = new ds(e);
  }
  hasEffects(e) {
    if (this.discriminant.hasEffects(e))
      return true;
    const { brokenFlow: t, ignore: { breaks: s } } = e;
    let i = 1 / 0;
    e.ignore.breaks = true;
    for (const s2 of this.cases) {
      if (s2.hasEffects(e))
        return true;
      i = e.brokenFlow < i ? e.brokenFlow : i, e.brokenFlow = t;
    }
    return this.defaultCase !== null && i !== 1 && (e.brokenFlow = i), e.ignore.breaks = s, false;
  }
  include(e, t) {
    this.included = true, this.discriminant.include(e, t);
    const { brokenFlow: s } = e;
    let i = 1 / 0, n2 = t || this.defaultCase !== null && this.defaultCase < this.cases.length - 1;
    for (let r2 = this.cases.length - 1; r2 >= 0; r2--) {
      const a2 = this.cases[r2];
      if (a2.included && (n2 = true), !n2) {
        const e2 = Ne();
        e2.ignore.breaks = true, n2 = a2.hasEffects(e2);
      }
      n2 ? (a2.include(e, t), i = i < e.brokenFlow ? i : e.brokenFlow, e.brokenFlow = s) : i = s;
    }
    n2 && this.defaultCase !== null && i !== 1 && (e.brokenFlow = i);
  }
  initialise() {
    for (let e = 0; e < this.cases.length; e++)
      if (this.cases[e].test === null)
        return void (this.defaultCase = e);
    this.defaultCase = null;
  }
  render(e, t) {
    this.discriminant.render(e, t), this.cases.length > 0 && ls(this.cases, e, this.cases[0].start, this.end - 1, t);
  }
}, TaggedTemplateExpression: class extends ot {
  bind() {
    if (super.bind(), this.tag.type === "Identifier") {
      const e = this.tag.name;
      this.scope.findVariable(e).isNamespace && this.context.warn({ code: "CANNOT_CALL_NAMESPACE", message: `Cannot call a namespace ('${e}')` }, this.start);
    }
  }
  hasEffects(e) {
    return super.hasEffects(e) || this.tag.hasEffectsWhenCalledAtPath(V, this.callOptions, e);
  }
  initialise() {
    this.callOptions = { args: $e, thisParam: null, withNew: false };
  }
  render(e, t) {
    this.tag.render(e, t, { isCalleeOfRenderedParent: true }), this.quasi.render(e, t);
  }
}, TemplateElement: class extends ot {
  bind() {
  }
  hasEffects() {
    return false;
  }
  include() {
    this.included = true;
  }
  parseNode(e) {
    this.value = e.value, super.parseNode(e);
  }
  render() {
  }
}, TemplateLiteral: Ci, ThisExpression: class extends ot {
  bind() {
    this.variable = this.scope.findVariable("this");
  }
  deoptimizePath(e) {
    this.variable.deoptimizePath(e);
  }
  deoptimizeThisOnEventAtPath(e, t, s, i) {
    this.variable.deoptimizeThisOnEventAtPath(e, t, s === this ? this.variable : s, i);
  }
  hasEffectsWhenAccessedAtPath(e, t) {
    return e.length > 0 && this.variable.hasEffectsWhenAccessedAtPath(e, t);
  }
  hasEffectsWhenAssignedAtPath(e, t) {
    return this.variable.hasEffectsWhenAssignedAtPath(e, t);
  }
  include() {
    this.included || (this.included = true, this.context.includeVariableInModule(this.variable));
  }
  initialise() {
    this.alias = this.scope.findLexicalBoundary() instanceof Ni ? this.context.moduleContext : null, this.alias === "undefined" && this.context.warn({ code: "THIS_IS_UNDEFINED", message: "The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten", url: "https://rollupjs.org/guide/en/#error-this-is-undefined" }, this.start);
  }
  render(e) {
    this.alias !== null && e.overwrite(this.start, this.end, this.alias, { contentOnly: false, storeName: true });
  }
}, ThrowStatement: class extends ot {
  hasEffects() {
    return true;
  }
  include(e, t) {
    this.included = true, this.argument.include(e, t), e.brokenFlow = 2;
  }
  render(e, t) {
    this.argument.render(e, t, { preventASI: true }), this.argument.start === this.start + 5 && e.prependLeft(this.start + 5, " ");
  }
}, TryStatement: class extends ot {
  constructor() {
    super(...arguments), this.directlyIncluded = false, this.includedLabelsAfterBlock = null;
  }
  hasEffects(e) {
    return (this.context.options.treeshake.tryCatchDeoptimization ? this.block.body.length > 0 : this.block.hasEffects(e)) || this.finalizer !== null && this.finalizer.hasEffects(e);
  }
  include(e, t) {
    var s;
    const i = (s = this.context.options.treeshake) === null || s === void 0 ? void 0 : s.tryCatchDeoptimization, { brokenFlow: n2 } = e;
    if (this.directlyIncluded && i) {
      if (this.includedLabelsAfterBlock)
        for (const t2 of this.includedLabelsAfterBlock)
          e.includedLabels.add(t2);
    } else
      this.included = true, this.directlyIncluded = true, this.block.include(e, i ? "variables" : t), e.includedLabels.size > 0 && (this.includedLabelsAfterBlock = [...e.includedLabels]), e.brokenFlow = n2;
    this.handler !== null && (this.handler.include(e, t), e.brokenFlow = n2), this.finalizer !== null && this.finalizer.include(e, t);
  }
}, UnaryExpression: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  getLiteralValueAtPath(e, t, s) {
    if (e.length > 0)
      return H;
    const i = this.argument.getLiteralValueAtPath(V, t, s);
    return i === H ? H : $i[this.operator](i);
  }
  hasEffects(e) {
    return this.deoptimized || this.applyDeoptimizations(), !(this.operator === "typeof" && this.argument instanceof es) && (this.argument.hasEffects(e) || this.operator === "delete" && this.argument.hasEffectsWhenAssignedAtPath(V, e));
  }
  hasEffectsWhenAccessedAtPath(e) {
    return this.operator === "void" ? e.length > 0 : e.length > 1;
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.operator === "delete" && (this.argument.deoptimizePath(V), this.context.requestTreeshakingPass());
  }
}, UnknownNode: class extends ot {
  hasEffects() {
    return true;
  }
  include(e) {
    super.include(e, true);
  }
}, UpdateExpression: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  hasEffects(e) {
    return this.deoptimized || this.applyDeoptimizations(), this.argument.hasEffects(e) || this.argument.hasEffectsWhenAssignedAtPath(V, e);
  }
  hasEffectsWhenAccessedAtPath(e) {
    return e.length > 1;
  }
  render(e, t) {
    const { exportNamesByVariable: s, format: i, snippets: { _: n2 } } = t;
    if (this.argument.render(e, t), i === "system") {
      const i2 = this.argument.variable, r2 = s.get(i2);
      if (r2)
        if (this.prefix)
          r2.length === 1 ? xs(i2, this.start, this.end, e, t) : bs(i2, this.start, this.end, this.parent.type !== "ExpressionStatement", e, t);
        else {
          const s2 = this.operator[0];
          !function(e2, t2, s3, i3, n3, r3, a2) {
            const { _: o2 } = r3.snippets;
            n3.prependRight(t2, `${Es([e2], r3, a2)},${o2}`), i3 && (n3.prependRight(t2, "("), n3.appendLeft(s3, ")"));
          }(i2, this.start, this.end, this.parent.type !== "ExpressionStatement", e, t, `${n2}${s2}${n2}1`);
        }
    }
  }
  applyDeoptimizations() {
    if (this.deoptimized = true, this.argument.deoptimizePath(V), this.argument instanceof es) {
      this.scope.findVariable(this.argument.name).isReassigned = true;
    }
    this.context.requestTreeshakingPass();
  }
}, VariableDeclaration: Ri, VariableDeclarator: class extends ot {
  declareDeclarator(e) {
    this.id.declare(e, this.init || Re);
  }
  deoptimizePath(e) {
    this.id.deoptimizePath(e);
  }
  hasEffects(e) {
    const t = this.init !== null && this.init.hasEffects(e);
    return this.id.markDeclarationReached(), t || this.id.hasEffects(e);
  }
  include(e, t) {
    this.included = true, this.init && this.init.include(e, t), this.id.markDeclarationReached(), (t || this.id.shouldBeIncluded(e)) && this.id.include(e, t);
  }
  render(e, t) {
    const { exportNamesByVariable: s, snippets: { _: i } } = t, n2 = this.id.included;
    if (n2)
      this.id.render(e, t);
    else {
      const t2 = rs(e.original, "=", this.id.end);
      e.remove(this.start, os(e.original, t2 + 1));
    }
    this.init ? this.init.render(e, t, n2 ? Q : { renderedSurroundingElement: "ExpressionStatement" }) : this.id instanceof es && Ti(this.id.variable, s) && e.appendLeft(this.end, `${i}=${i}void 0`);
  }
}, WhileStatement: class extends ot {
  hasEffects(e) {
    if (this.test.hasEffects(e))
      return true;
    const { brokenFlow: t, ignore: { breaks: s, continues: i } } = e;
    return e.ignore.breaks = true, e.ignore.continues = true, !!this.body.hasEffects(e) || (e.ignore.breaks = s, e.ignore.continues = i, e.brokenFlow = t, false);
  }
  include(e, t) {
    this.included = true, this.test.include(e, t);
    const { brokenFlow: s } = e;
    this.body.includeAsSingleStatement(e, t), e.brokenFlow = s;
  }
}, YieldExpression: class extends ot {
  constructor() {
    super(...arguments), this.deoptimized = false;
  }
  hasEffects(e) {
    return this.deoptimized || this.applyDeoptimizations(), !e.ignore.returnYield || this.argument !== null && this.argument.hasEffects(e);
  }
  render(e, t) {
    this.argument && (this.argument.render(e, t, { preventASI: true }), this.argument.start === this.start + 5 && e.prependLeft(this.start + 5, " "));
  }
  applyDeoptimizations() {
    this.deoptimized = true;
    const { argument: e } = this;
    e && (e.deoptimizePath(B), this.context.requestTreeshakingPass());
  }
} };
class Di extends X {
  constructor(e) {
    super("_missingExportShim"), this.module = e;
  }
  include() {
    super.include(), this.module.needsExportShim = true;
  }
}
class Li extends X {
  constructor(e) {
    super(e.getModuleName()), this.memberVariables = null, this.mergedNamespaces = [], this.referencedEarly = false, this.references = [], this.context = e, this.module = e.module;
  }
  addReference(e) {
    this.references.push(e), this.name = e.name;
  }
  getMemberVariables() {
    if (this.memberVariables)
      return this.memberVariables;
    const e = /* @__PURE__ */ Object.create(null);
    for (const t of this.context.getExports().concat(this.context.getReexports()))
      if (t[0] !== "*" && t !== this.module.info.syntheticNamedExports) {
        const s = this.context.traceExport(t);
        s && (e[t] = s);
      }
    return this.memberVariables = e;
  }
  include() {
    this.included = true, this.context.includeAllExports();
  }
  prepare(e) {
    this.mergedNamespaces.length > 0 && this.module.scope.addAccessedGlobals(["_mergeNamespaces"], e);
  }
  renderBlock(e) {
    const { exportNamesByVariable: t, format: s, freeze: i, indent: n2, namespaceToStringTag: r2, snippets: { _: a2, cnst: o2, getObject: h2, getPropertyAccess: l2, n: c2, s: u2 } } = e, d2 = this.getMemberVariables(), p2 = Object.entries(d2).map(([e2, t2]) => this.referencedEarly || t2.isReassigned ? [null, `get ${e2}${a2}()${a2}{${a2}return ${t2.getName(l2)}${u2}${a2}}`] : [e2, t2.getName(l2)]);
    p2.unshift([null, `__proto__:${a2}null`]);
    let f2 = h2(p2, { lineBreakIndent: { base: "", t: n2 } });
    if (this.mergedNamespaces.length > 0) {
      const e2 = this.mergedNamespaces.map((e3) => e3.getName(l2));
      f2 = `/*#__PURE__*/_mergeNamespaces(${f2},${a2}[${e2.join(`,${a2}`)}])`;
    } else
      r2 && (f2 = `/*#__PURE__*/Object.defineProperty(${f2},${a2}Symbol.toStringTag,${a2}${di(h2)})`), i && (f2 = `/*#__PURE__*/Object.freeze(${f2})`);
    return f2 = `${o2} ${this.getName(l2)}${a2}=${a2}${f2};`, s === "system" && t.has(this) && (f2 += `${c2}${Es([this], e)};`), f2;
  }
  renderFirst() {
    return this.referencedEarly;
  }
  setMergedNamespaces(e) {
    this.mergedNamespaces = e;
    const t = this.context.getModuleExecIndex();
    for (const e2 of this.references)
      if (e2.context.getModuleExecIndex() <= t) {
        this.referencedEarly = true;
        break;
      }
  }
}
Li.prototype.isNamespace = true;
class Oi extends X {
  constructor(e, t, s) {
    super(t), this.baseVariable = null, this.context = e, this.module = e.module, this.syntheticNamespace = s;
  }
  getBaseVariable() {
    if (this.baseVariable)
      return this.baseVariable;
    let e = this.syntheticNamespace;
    for (; e instanceof _i || e instanceof Oi; ) {
      if (e instanceof _i) {
        const t = e.getOriginalVariable();
        if (t === e)
          break;
        e = t;
      }
      e instanceof Oi && (e = e.syntheticNamespace);
    }
    return this.baseVariable = e;
  }
  getBaseVariableName() {
    return this.syntheticNamespace.getBaseVariableName();
  }
  getName(e) {
    return `${this.syntheticNamespace.getName(e)}${e(this.name)}`;
  }
  include() {
    this.included = true, this.context.includeVariableInModule(this.syntheticNamespace);
  }
  setRenderNames(e, t) {
    super.setRenderNames(e, t);
  }
}
var Vi;
function Bi(e) {
  return e.id;
}
!function(e) {
  e[e.LOAD_AND_PARSE = 0] = "LOAD_AND_PARSE", e[e.ANALYSE = 1] = "ANALYSE", e[e.GENERATE = 2] = "GENERATE";
}(Vi || (Vi = {}));
var Fi = "performance" in (typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {}) ? performance : { now: () => 0 }, zi = { memoryUsage: () => ({ heapUsed: 0 }) };
const Wi = () => {
};
let ji = /* @__PURE__ */ new Map();
function Ui(e, t) {
  switch (t) {
    case 1:
      return `# ${e}`;
    case 2:
      return `## ${e}`;
    case 3:
      return e;
    default:
      return `${"  ".repeat(t - 4)}- ${e}`;
  }
}
function Gi(e, t = 3) {
  e = Ui(e, t);
  const s = zi.memoryUsage().heapUsed, i = Fi.now(), n2 = ji.get(e);
  n2 === void 0 ? ji.set(e, { memory: 0, startMemory: s, startTime: i, time: 0, totalMemory: 0 }) : (n2.startMemory = s, n2.startTime = i);
}
function Hi(e, t = 3) {
  e = Ui(e, t);
  const s = ji.get(e);
  if (s !== void 0) {
    const e2 = zi.memoryUsage().heapUsed;
    s.memory += e2 - s.startMemory, s.time += Fi.now() - s.startTime, s.totalMemory = Math.max(s.totalMemory, e2);
  }
}
function qi() {
  const e = {};
  for (const [t, { memory: s, time: i, totalMemory: n2 }] of ji)
    e[t] = [i, s, n2];
  return e;
}
let Ki = Wi, Xi = Wi;
const Yi = ["load", "resolveDynamicImport", "resolveId", "transform"];
function Qi(e, t) {
  for (const s of Yi)
    if (s in e) {
      let i = `plugin ${t}`;
      e.name && (i += ` (${e.name})`), i += ` - ${s}`;
      const n2 = e[s];
      e[s] = function(...e2) {
        Ki(i, 4);
        const t2 = n2.apply(this, e2);
        return Xi(i, 4), t2 && typeof t2.then == "function" ? (Ki(`${i} (async)`, 4), t2.then((e3) => (Xi(`${i} (async)`, 4), e3))) : t2;
      };
    }
  return e;
}
function Zi(e) {
  e.isExecuted = true;
  const t = [e], s = /* @__PURE__ */ new Set();
  for (const e2 of t)
    for (const i of [...e2.dependencies, ...e2.implicitlyLoadedBefore])
      i instanceof we || i.isExecuted || !i.info.moduleSideEffects && !e2.implicitlyLoadedBefore.has(i) || s.has(i.id) || (i.isExecuted = true, s.add(i.id), t.push(i));
}
const Ji = { identifier: null, localName: "_missingExportShim" };
function en(e, t, s, i, n2 = /* @__PURE__ */ new Map()) {
  const r2 = n2.get(t);
  if (r2) {
    if (r2.has(e))
      return i ? [null] : he((a2 = t, o2 = e.id, { code: ce.CIRCULAR_REEXPORT, id: o2, message: `"${a2}" cannot be exported from ${ne(o2)} as it is a reexport that references itself.` }));
    r2.add(e);
  } else
    n2.set(t, /* @__PURE__ */ new Set([e]));
  var a2, o2;
  return e.getVariableForExportName(t, { importerForSideEffects: s, isExportAllSearch: i, searchedNamesAndModules: n2 });
}
class tn {
  constructor(e, t, s, i, n2, r2, a2) {
    this.graph = e, this.id = t, this.options = s, this.alternativeReexportModules = /* @__PURE__ */ new Map(), this.chunkFileNames = /* @__PURE__ */ new Set(), this.chunkNames = [], this.cycles = /* @__PURE__ */ new Set(), this.dependencies = /* @__PURE__ */ new Set(), this.dynamicDependencies = /* @__PURE__ */ new Set(), this.dynamicImporters = [], this.dynamicImports = [], this.execIndex = 1 / 0, this.implicitlyLoadedAfter = /* @__PURE__ */ new Set(), this.implicitlyLoadedBefore = /* @__PURE__ */ new Set(), this.importDescriptions = /* @__PURE__ */ new Map(), this.importMetas = [], this.importedFromNotTreeshaken = false, this.importers = [], this.imports = /* @__PURE__ */ new Set(), this.includedDynamicImporters = [], this.isExecuted = false, this.isUserDefinedEntryPoint = false, this.needsExportShim = false, this.sideEffectDependenciesByVariable = /* @__PURE__ */ new Map(), this.sources = /* @__PURE__ */ new Set(), this.usesTopLevelAwait = false, this.allExportNames = null, this.ast = null, this.exportAllModules = [], this.exportAllSources = /* @__PURE__ */ new Set(), this.exportNamesByVariable = null, this.exportShimVariable = new Di(this), this.exports = /* @__PURE__ */ new Map(), this.namespaceReexportsByName = /* @__PURE__ */ new Map(), this.reexportDescriptions = /* @__PURE__ */ new Map(), this.relevantDependencies = null, this.syntheticExports = /* @__PURE__ */ new Map(), this.syntheticNamespace = null, this.transformDependencies = [], this.transitiveReexports = null, this.excludeFromSourcemap = /\0/.test(t), this.context = s.moduleContext(t), this.preserveSignature = this.options.preserveEntrySignatures;
    const o2 = this, { dynamicImports: h2, dynamicImporters: l2, implicitlyLoadedAfter: c2, implicitlyLoadedBefore: u2, importers: d2, reexportDescriptions: p2, sources: f2 } = this;
    this.info = { ast: null, code: null, get dynamicallyImportedIdResolutions() {
      return h2.map(({ argument: e2 }) => typeof e2 == "string" && o2.resolvedIds[e2]).filter(Boolean);
    }, get dynamicallyImportedIds() {
      return h2.map(({ id: e2 }) => e2).filter((e2) => e2 != null);
    }, get dynamicImporters() {
      return l2.sort();
    }, get hasDefaultExport() {
      return o2.ast ? o2.exports.has("default") || p2.has("default") : null;
    }, get hasModuleSideEffects() {
      return be("Accessing ModuleInfo.hasModuleSideEffects from plugins is deprecated. Please use ModuleInfo.moduleSideEffects instead.", false, s), this.moduleSideEffects;
    }, id: t, get implicitlyLoadedAfterOneOf() {
      return Array.from(c2, Bi).sort();
    }, get implicitlyLoadedBefore() {
      return Array.from(u2, Bi).sort();
    }, get importedIdResolutions() {
      return Array.from(f2, (e2) => o2.resolvedIds[e2]).filter(Boolean);
    }, get importedIds() {
      return Array.from(f2, (e2) => {
        var t2;
        return (t2 = o2.resolvedIds[e2]) === null || t2 === void 0 ? void 0 : t2.id;
      }).filter(Boolean);
    }, get importers() {
      return d2.sort();
    }, isEntry: i, isExternal: false, get isIncluded() {
      return e.phase !== Vi.GENERATE ? null : o2.isIncluded();
    }, meta: __spreadValues({}, a2), moduleSideEffects: n2, syntheticNamedExports: r2 }, Object.defineProperty(this.info, "hasModuleSideEffects", { enumerable: false });
  }
  basename() {
    const e = _(this.id), t = $(this.id);
    return ke(t ? e.slice(0, -t.length) : e);
  }
  bindReferences() {
    this.ast.bind();
  }
  error(e, t) {
    return this.addLocationToLogProps(e, t), he(e);
  }
  getAllExportNames() {
    if (this.allExportNames)
      return this.allExportNames;
    this.allExportNames = /* @__PURE__ */ new Set([...this.exports.keys(), ...this.reexportDescriptions.keys()]);
    for (const e of this.exportAllModules)
      if (e instanceof we)
        this.allExportNames.add(`*${e.id}`);
      else
        for (const t of e.getAllExportNames())
          t !== "default" && this.allExportNames.add(t);
    return typeof this.info.syntheticNamedExports == "string" && this.allExportNames.delete(this.info.syntheticNamedExports), this.allExportNames;
  }
  getDependenciesToBeIncluded() {
    if (this.relevantDependencies)
      return this.relevantDependencies;
    this.relevantDependencies = /* @__PURE__ */ new Set();
    const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), s = new Set(this.imports);
    if (this.info.isEntry || this.includedDynamicImporters.length > 0 || this.namespace.included || this.implicitlyLoadedAfter.size > 0)
      for (const e2 of [...this.getReexports(), ...this.getExports()]) {
        const [t2] = this.getVariableForExportName(e2);
        t2 && s.add(t2);
      }
    for (let i of s) {
      const s2 = this.sideEffectDependenciesByVariable.get(i);
      if (s2)
        for (const e2 of s2)
          t.add(e2);
      i instanceof Oi ? i = i.getBaseVariable() : i instanceof _i && (i = i.getOriginalVariable()), e.add(i.module);
    }
    if (this.options.treeshake && this.info.moduleSideEffects !== "no-treeshake")
      this.addRelevantSideEffectDependencies(this.relevantDependencies, e, t);
    else
      for (const e2 of this.dependencies)
        this.relevantDependencies.add(e2);
    for (const t2 of e)
      this.relevantDependencies.add(t2);
    return this.relevantDependencies;
  }
  getExportNamesByVariable() {
    if (this.exportNamesByVariable)
      return this.exportNamesByVariable;
    const e = /* @__PURE__ */ new Map();
    for (const t of this.getAllExportNames()) {
      let [s] = this.getVariableForExportName(t);
      if (s instanceof _i && (s = s.getOriginalVariable()), !s || !(s.included || s instanceof Y))
        continue;
      const i = e.get(s);
      i ? i.push(t) : e.set(s, [t]);
    }
    return this.exportNamesByVariable = e;
  }
  getExports() {
    return Array.from(this.exports.keys());
  }
  getReexports() {
    if (this.transitiveReexports)
      return this.transitiveReexports;
    this.transitiveReexports = [];
    const e = new Set(this.reexportDescriptions.keys());
    for (const t of this.exportAllModules)
      if (t instanceof we)
        e.add(`*${t.id}`);
      else
        for (const s of [...t.getReexports(), ...t.getExports()])
          s !== "default" && e.add(s);
    return this.transitiveReexports = [...e];
  }
  getRenderedExports() {
    const e = [], t = [];
    for (const s of this.exports.keys()) {
      const [i] = this.getVariableForExportName(s);
      (i && i.included ? e : t).push(s);
    }
    return { removedExports: t, renderedExports: e };
  }
  getSyntheticNamespace() {
    return this.syntheticNamespace === null && (this.syntheticNamespace = void 0, [this.syntheticNamespace] = this.getVariableForExportName(typeof this.info.syntheticNamedExports == "string" ? this.info.syntheticNamedExports : "default", { onlyExplicit: true })), this.syntheticNamespace ? this.syntheticNamespace : he((e = this.id, t = this.info.syntheticNamedExports, { code: ce.SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT, id: e, message: `Module "${ne(e)}" that is marked with 'syntheticNamedExports: ${JSON.stringify(t)}' needs ${typeof t == "string" && t !== "default" ? `an explicit export named "${t}"` : "a default export"} that does not reexport an unresolved named export of the same module.` }));
    var e, t;
  }
  getVariableForExportName(e, { importerForSideEffects: t, isExportAllSearch: s, onlyExplicit: i, searchedNamesAndModules: n2 } = Z) {
    var r2;
    if (e[0] === "*") {
      if (e.length === 1)
        return [this.namespace];
      return this.graph.modulesById.get(e.slice(1)).getVariableForExportName("*");
    }
    const a2 = this.reexportDescriptions.get(e);
    if (a2) {
      const [e2] = en(a2.module, a2.localName, t, false, n2);
      return e2 ? (t && sn(e2, t, this), [e2]) : this.error(fe(a2.localName, this.id, a2.module.id), a2.start);
    }
    const o2 = this.exports.get(e);
    if (o2) {
      if (o2 === Ji)
        return [this.exportShimVariable];
      const e2 = o2.localName, s2 = this.traceVariable(e2, { importerForSideEffects: t, searchedNamesAndModules: n2 });
      return t && (M(t.sideEffectDependenciesByVariable, s2, () => /* @__PURE__ */ new Set()).add(this), sn(s2, t, this)), [s2];
    }
    if (i)
      return [null];
    if (e !== "default") {
      const s2 = (r2 = this.namespaceReexportsByName.get(e)) !== null && r2 !== void 0 ? r2 : this.getVariableFromNamespaceReexports(e, t, n2);
      if (this.namespaceReexportsByName.set(e, s2), s2[0])
        return s2;
    }
    return this.info.syntheticNamedExports ? [M(this.syntheticExports, e, () => new Oi(this.astContext, e, this.getSyntheticNamespace()))] : !s && this.options.shimMissingExports ? (this.shimMissingExport(e), [this.exportShimVariable]) : [null];
  }
  hasEffects() {
    return this.info.moduleSideEffects === "no-treeshake" || this.ast.included && this.ast.hasEffects(Ne());
  }
  include() {
    const e = _e();
    this.ast.shouldBeIncluded(e) && this.ast.include(e, false);
  }
  includeAllExports(e) {
    this.isExecuted || (Zi(this), this.graph.needsTreeshakingPass = true);
    for (const t of this.exports.keys())
      if (e || t !== this.info.syntheticNamedExports) {
        const e2 = this.getVariableForExportName(t)[0];
        e2.deoptimizePath(B), e2.included || this.includeVariable(e2);
      }
    for (const e2 of this.getReexports()) {
      const [t] = this.getVariableForExportName(e2);
      t && (t.deoptimizePath(B), t.included || this.includeVariable(t), t instanceof Y && (t.module.reexported = true));
    }
    e && this.namespace.setMergedNamespaces(this.includeAndGetAdditionalMergedNamespaces());
  }
  includeAllInBundle() {
    this.ast.include(_e(), true), this.includeAllExports(false);
  }
  isIncluded() {
    return this.ast.included || this.namespace.included || this.importedFromNotTreeshaken;
  }
  linkImports() {
    this.addModulesToImportDescriptions(this.importDescriptions), this.addModulesToImportDescriptions(this.reexportDescriptions);
    const e = [];
    for (const t of this.exportAllSources) {
      const s = this.graph.modulesById.get(this.resolvedIds[t].id);
      s instanceof we ? e.push(s) : this.exportAllModules.push(s);
    }
    this.exportAllModules.push(...e);
  }
  render(e) {
    const t = this.magicString.clone();
    return this.ast.render(t, e), this.usesTopLevelAwait = this.astContext.usesTopLevelAwait, t;
  }
  setSource(_a2) {
    var _b = _a2, { ast: e, code: t, customTransformCache: s, originalCode: i, originalSourcemap: n2, resolvedIds: r2, sourcemapChain: a2, transformDependencies: o2, transformFiles: h2 } = _b, l2 = __objRest(_b, ["ast", "code", "customTransformCache", "originalCode", "originalSourcemap", "resolvedIds", "sourcemapChain", "transformDependencies", "transformFiles"]);
    this.info.code = t, this.originalCode = i, this.originalSourcemap = n2, this.sourcemapChain = a2, h2 && (this.transformFiles = h2), this.transformDependencies = o2, this.customTransformCache = s, this.updateOptions(l2), Ki("generate ast", 3), e || (e = this.tryParse()), Xi("generate ast", 3), this.resolvedIds = r2 || /* @__PURE__ */ Object.create(null);
    const c2 = this.id;
    this.magicString = new E(t, { filename: this.excludeFromSourcemap ? null : c2, indentExclusionRanges: [] }), Ki("analyse ast", 3), this.astContext = { addDynamicImport: this.addDynamicImport.bind(this), addExport: this.addExport.bind(this), addImport: this.addImport.bind(this), addImportMeta: this.addImportMeta.bind(this), code: t, deoptimizationTracker: this.graph.deoptimizationTracker, error: this.error.bind(this), fileName: c2, getExports: this.getExports.bind(this), getModuleExecIndex: () => this.execIndex, getModuleName: this.basename.bind(this), getNodeConstructor: (e2) => Mi[e2] || Mi.UnknownNode, getReexports: this.getReexports.bind(this), importDescriptions: this.importDescriptions, includeAllExports: () => this.includeAllExports(true), includeDynamicImport: this.includeDynamicImport.bind(this), includeVariableInModule: this.includeVariableInModule.bind(this), magicString: this.magicString, module: this, moduleContext: this.context, options: this.options, requestTreeshakingPass: () => this.graph.needsTreeshakingPass = true, traceExport: (e2) => this.getVariableForExportName(e2)[0], traceVariable: this.traceVariable.bind(this), usesTopLevelAwait: false, warn: this.warn.bind(this) }, this.scope = new Ni(this.graph.scope, this.astContext), this.namespace = new Li(this.astContext), this.ast = new ki(e, { context: this.astContext, type: "Module" }, this.scope), this.info.ast = e, Xi("analyse ast", 3);
  }
  toJSON() {
    return { ast: this.ast.esTreeNode, code: this.info.code, customTransformCache: this.customTransformCache, dependencies: Array.from(this.dependencies, Bi), id: this.id, meta: this.info.meta, moduleSideEffects: this.info.moduleSideEffects, originalCode: this.originalCode, originalSourcemap: this.originalSourcemap, resolvedIds: this.resolvedIds, sourcemapChain: this.sourcemapChain, syntheticNamedExports: this.info.syntheticNamedExports, transformDependencies: this.transformDependencies, transformFiles: this.transformFiles };
  }
  traceVariable(e, { importerForSideEffects: t, isExportAllSearch: s, searchedNamesAndModules: i } = Z) {
    const n2 = this.scope.variables.get(e);
    if (n2)
      return n2;
    const r2 = this.importDescriptions.get(e);
    if (r2) {
      const e2 = r2.module;
      if (e2 instanceof tn && r2.name === "*")
        return e2.namespace;
      const [n3] = en(e2, r2.name, t || this, s, i);
      return n3 || this.error(fe(r2.name, this.id, e2.id), r2.start);
    }
    return null;
  }
  tryParse() {
    try {
      return this.graph.contextParse(this.info.code);
    } catch (e) {
      let t = e.message.replace(/ \(\d+:\d+\)$/, "");
      return this.id.endsWith(".json") ? t += " (Note that you need @rollup/plugin-json to import JSON files)" : this.id.endsWith(".js") || (t += " (Note that you need plugins to import files that are not JavaScript)"), this.error({ code: "PARSE_ERROR", message: t, parserError: e }, e.pos);
    }
  }
  updateOptions({ meta: e, moduleSideEffects: t, syntheticNamedExports: s }) {
    t != null && (this.info.moduleSideEffects = t), s != null && (this.info.syntheticNamedExports = s), e != null && Object.assign(this.info.meta, e);
  }
  warn(e, t) {
    this.addLocationToLogProps(e, t), this.options.onwarn(e);
  }
  addDynamicImport(e) {
    let t = e.source;
    t instanceof Ci ? t.quasis.length === 1 && t.quasis[0].value.cooked && (t = t.quasis[0].value.cooked) : t instanceof Is && typeof t.value == "string" && (t = t.value), this.dynamicImports.push({ argument: t, id: null, node: e, resolution: null });
  }
  addExport(e) {
    if (e instanceof Ws)
      this.exports.set("default", { identifier: e.variable.getAssignedVariableName(), localName: "default" });
    else if (e instanceof Fs) {
      const t = e.source.value;
      if (this.sources.add(t), e.exported) {
        const s = e.exported.name;
        this.reexportDescriptions.set(s, { localName: "*", module: null, source: t, start: e.start });
      } else
        this.exportAllSources.add(t);
    } else if (e.source instanceof Is) {
      const t = e.source.value;
      this.sources.add(t);
      for (const s of e.specifiers) {
        const e2 = s.exported.name;
        this.reexportDescriptions.set(e2, { localName: s.local.name, module: null, source: t, start: s.start });
      }
    } else if (e.declaration) {
      const t = e.declaration;
      if (t instanceof Ri)
        for (const e2 of t.declarations)
          for (const t2 of Ie(e2.id))
            this.exports.set(t2, { identifier: null, localName: t2 });
      else {
        const e2 = t.id.name;
        this.exports.set(e2, { identifier: null, localName: e2 });
      }
    } else
      for (const t of e.specifiers) {
        const e2 = t.local.name, s = t.exported.name;
        this.exports.set(s, { identifier: null, localName: e2 });
      }
  }
  addImport(e) {
    const t = e.source.value;
    this.sources.add(t);
    for (const s of e.specifiers) {
      const e2 = s.type === "ImportDefaultSpecifier", i = s.type === "ImportNamespaceSpecifier", n2 = e2 ? "default" : i ? "*" : s.imported.name;
      this.importDescriptions.set(s.local.name, { module: null, name: n2, source: t, start: s.start });
    }
  }
  addImportMeta(e) {
    this.importMetas.push(e);
  }
  addLocationToLogProps(e, t) {
    e.id = this.id, e.pos = t;
    let s = this.info.code;
    const i = ee(s, t, { offsetLine: 1 });
    if (i) {
      let { column: n2, line: r2 } = i;
      try {
        ({ column: n2, line: r2 } = function(e2, t2) {
          const s2 = e2.filter((e3) => !!e3.mappings);
          e:
            for (; s2.length > 0; ) {
              const e3 = s2.pop().mappings[t2.line - 1];
              if (e3) {
                const s3 = e3.filter((e4) => e4.length > 1), i2 = s3[s3.length - 1];
                for (const e4 of s3)
                  if (e4[0] >= t2.column || e4 === i2) {
                    t2 = { column: e4[3], line: e4[2] + 1 };
                    continue e;
                  }
              }
              throw new Error("Can't resolve original location of error.");
            }
          return t2;
        }(this.sourcemapChain, { column: n2, line: r2 })), s = this.originalCode;
      } catch (e2) {
        this.options.onwarn({ code: "SOURCEMAP_ERROR", id: this.id, loc: { column: n2, file: this.id, line: r2 }, message: `Error when using sourcemap for reporting an error: ${e2.message}`, pos: t });
      }
      le(e, { column: n2, line: r2 }, s, this.id);
    }
  }
  addModulesToImportDescriptions(e) {
    for (const t of e.values()) {
      const { id: e2 } = this.resolvedIds[t.source];
      t.module = this.graph.modulesById.get(e2);
    }
  }
  addRelevantSideEffectDependencies(e, t, s) {
    const i = /* @__PURE__ */ new Set(), n2 = (r2) => {
      for (const a2 of r2)
        i.has(a2) || (i.add(a2), t.has(a2) ? e.add(a2) : (a2.info.moduleSideEffects || s.has(a2)) && (a2 instanceof we || a2.hasEffects() ? e.add(a2) : n2(a2.dependencies)));
    };
    n2(this.dependencies), n2(s);
  }
  getVariableFromNamespaceReexports(e, t, s) {
    let i = null;
    const n2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Set();
    for (const a2 of this.exportAllModules) {
      if (a2.info.syntheticNamedExports === e)
        continue;
      const [o2, h2] = en(a2, e, t, true, nn(s));
      a2 instanceof we || h2 ? r2.add(o2) : o2 instanceof Oi ? i || (i = o2) : o2 && n2.set(o2, a2);
    }
    if (n2.size > 0) {
      const t2 = [...n2], s2 = t2[0][0];
      return t2.length === 1 ? [s2] : (this.options.onwarn(function(e2, t3, s3) {
        return { code: ce.NAMESPACE_CONFLICT, message: `Conflicting namespaces: "${ne(t3)}" re-exports "${e2}" from one of the modules ${se(s3.map((e3) => ne(e3)))} (will be ignored)`, name: e2, reexporter: t3, sources: s3 };
      }(e, this.id, t2.map(([, e2]) => e2.id))), [null]);
    }
    if (r2.size > 0) {
      const t2 = [...r2], s2 = t2[0];
      return t2.length > 1 && this.options.onwarn(function(e2, t3, s3, i2) {
        return { code: ce.AMBIGUOUS_EXTERNAL_NAMESPACES, message: `Ambiguous external namespace resolution: "${ne(t3)}" re-exports "${e2}" from one of the external modules ${se(i2.map((e3) => ne(e3)))}, guessing "${ne(s3)}".`, name: e2, reexporter: t3, sources: i2 };
      }(e, this.id, s2.module.id, t2.map((e2) => e2.module.id))), [s2, true];
    }
    return i ? [i] : [null];
  }
  includeAndGetAdditionalMergedNamespaces() {
    const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
    for (const s of [this, ...this.exportAllModules])
      if (s instanceof we) {
        const [t2] = s.getVariableForExportName("*");
        t2.include(), this.imports.add(t2), e.add(t2);
      } else if (s.info.syntheticNamedExports) {
        const e2 = s.getSyntheticNamespace();
        e2.include(), this.imports.add(e2), t.add(e2);
      }
    return [...t, ...e];
  }
  includeDynamicImport(e) {
    const t = this.dynamicImports.find((t2) => t2.node === e).resolution;
    t instanceof tn && (t.includedDynamicImporters.push(this), t.includeAllExports(true));
  }
  includeVariable(e) {
    if (!e.included) {
      e.include(), this.graph.needsTreeshakingPass = true;
      const t = e.module;
      if (t instanceof tn && (t.isExecuted || Zi(t), t !== this)) {
        const t2 = function(e2, t3) {
          const s = M(t3.sideEffectDependenciesByVariable, e2, () => /* @__PURE__ */ new Set());
          let i = e2;
          const n2 = /* @__PURE__ */ new Set([i]);
          for (; ; ) {
            const e3 = i.module;
            if (i = i instanceof _i ? i.getDirectOriginalVariable() : i instanceof Oi ? i.syntheticNamespace : null, !i || n2.has(i))
              break;
            n2.add(i), s.add(e3);
            const t4 = e3.sideEffectDependenciesByVariable.get(i);
            if (t4)
              for (const e4 of t4)
                s.add(e4);
          }
          return s;
        }(e, this);
        for (const e2 of t2)
          e2.isExecuted || Zi(e2);
      }
    }
  }
  includeVariableInModule(e) {
    this.includeVariable(e);
    const t = e.module;
    t && t !== this && this.imports.add(e);
  }
  shimMissingExport(e) {
    this.options.onwarn({ code: "SHIMMED_EXPORT", exporter: ne(this.id), exportName: e, message: `Missing export "${e}" has been shimmed in module ${ne(this.id)}.` }), this.exports.set(e, Ji);
  }
}
function sn(e, t, s) {
  if (e.module instanceof tn && e.module !== s) {
    const i = e.module.cycles;
    if (i.size > 0) {
      const n2 = s.cycles;
      for (const r2 of n2)
        if (i.has(r2)) {
          t.alternativeReexportModules.set(e, s);
          break;
        }
    }
  }
}
const nn = (e) => e && new Map(Array.from(e, ([e2, t]) => [e2, new Set(t)]));
function rn(e) {
  return e.endsWith(".js") ? e.slice(0, -3) : e;
}
function an(e, t) {
  return e.autoId ? `${e.basePath ? e.basePath + "/" : ""}${rn(t)}` : e.id || "";
}
function on(e, t, s, i, n2, r2, a2, o2 = "return ") {
  const { _: h2, cnst: l2, getDirectReturnFunction: c2, getFunctionIntro: u2, getPropertyAccess: d2, n: p2, s: f2 } = n2;
  if (!s)
    return `${p2}${p2}${o2}${function(e2, t2, s2, i2, n3) {
      if (e2.length > 0)
        return e2[0].local;
      for (const { defaultVariableName: e3, id: r3, isChunk: a3, name: o3, namedExportsMode: h3, namespaceVariableName: l3, reexports: c3 } of t2)
        if (c3)
          return hn(o3, c3[0].imported, h3, a3, e3, l3, s2, r3, i2, n3);
    }(e, t, i, a2, d2)};`;
  let m2 = "";
  for (const { defaultVariableName: e2, id: n3, isChunk: o3, name: l3, namedExportsMode: u3, namespaceVariableName: f3, reexports: g2 } of t)
    if (g2 && s) {
      for (const t2 of g2)
        if (t2.reexported !== "*") {
          const s2 = hn(l3, t2.imported, u3, o3, e2, f3, i, n3, a2, d2);
          if (m2 && (m2 += p2), t2.imported !== "*" && t2.needsLiveBinding) {
            const [e3, i2] = c2([], { functionReturn: true, lineBreakIndent: null, name: null });
            m2 += `Object.defineProperty(exports,${h2}'${t2.reexported}',${h2}{${p2}${r2}enumerable:${h2}true,${p2}${r2}get:${h2}${e3}${s2}${i2}${p2}});`;
          } else
            m2 += `exports${d2(t2.reexported)}${h2}=${h2}${s2};`;
        }
    }
  for (const { exported: t2, local: s2 } of e) {
    const e2 = `exports${d2(t2)}`, i2 = s2;
    e2 !== i2 && (m2 && (m2 += p2), m2 += `${e2}${h2}=${h2}${i2};`);
  }
  for (const { name: e2, reexports: i2 } of t)
    if (i2 && s) {
      for (const t2 of i2)
        if (t2.reexported === "*") {
          m2 && (m2 += p2);
          const s2 = `{${p2}${r2}if${h2}(k${h2}!==${h2}'default'${h2}&&${h2}!exports.hasOwnProperty(k))${h2}${un(e2, t2.needsLiveBinding, r2, n2)}${f2}${p2}}`;
          m2 += l2 === "var" && t2.needsLiveBinding ? `Object.keys(${e2}).forEach(${u2(["k"], { isAsync: false, name: null })}${s2});` : `for${h2}(${l2} k in ${e2})${h2}${s2}`;
        }
    }
  return m2 ? `${p2}${p2}${m2}` : "";
}
function hn(e, t, s, i, n2, r2, a2, o2, h2, l2) {
  if (t === "default") {
    if (!i) {
      const t2 = String(a2(o2)), s2 = Ks[t2] ? n2 : e;
      return Xs(t2, h2) ? `${s2}${l2("default")}` : s2;
    }
    return s ? `${e}${l2("default")}` : e;
  }
  return t === "*" ? (i ? !s : Ys[String(a2(o2))]) ? r2 : e : `${e}${l2(t)}`;
}
function ln(e) {
  return e([["value", "true"]], { lineBreakIndent: null });
}
function cn(e, t, s, { _: i, getObject: n2 }) {
  if (e) {
    if (t)
      return s ? `Object.defineProperties(exports,${i}${n2([["__esModule", ln(n2)], [null, `[Symbol.toStringTag]:${i}${di(n2)}`]], { lineBreakIndent: null })});` : `Object.defineProperty(exports,${i}'__esModule',${i}${ln(n2)});`;
    if (s)
      return `Object.defineProperty(exports,${i}Symbol.toStringTag,${i}${di(n2)});`;
  }
  return "";
}
const un = (e, t, s, { _: i, getDirectReturnFunction: n2, n: r2 }) => {
  if (t) {
    const [t2, a2] = n2([], { functionReturn: true, lineBreakIndent: null, name: null });
    return `Object.defineProperty(exports,${i}k,${i}{${r2}${s}${s}enumerable:${i}true,${r2}${s}${s}get:${i}${t2}${e}[k]${a2}${r2}${s}})`;
  }
  return `exports[k]${i}=${i}${e}[k]`;
};
function dn(e, t, s, i, n2, r2, a2, o2) {
  const { _: h2, cnst: l2, n: c2 } = o2, u2 = /* @__PURE__ */ new Set(), d2 = [], p2 = (e2, t2, s2) => {
    u2.add(t2), d2.push(`${l2} ${e2}${h2}=${h2}/*#__PURE__*/${t2}(${s2});`);
  };
  for (const { defaultVariableName: s2, imports: i2, id: n3, isChunk: r3, name: a3, namedExportsMode: o3, namespaceVariableName: h3, reexports: l3 } of e)
    if (r3) {
      for (const { imported: e2, reexported: t2 } of [...i2 || [], ...l3 || []])
        if (e2 === "*" && t2 !== "*") {
          o3 || p2(h3, "_interopNamespaceDefaultOnly", a3);
          break;
        }
    } else {
      const e2 = String(t(n3));
      let r4 = false, o4 = false;
      for (const { imported: t2, reexported: n4 } of [...i2 || [], ...l3 || []]) {
        let i3, l4;
        t2 === "default" ? r4 || (r4 = true, s2 !== h3 && (l4 = s2, i3 = Ks[e2])) : t2 === "*" && n4 !== "*" && (o4 || (o4 = true, i3 = Ys[e2], l4 = h3)), i3 && p2(l4, i3, a3);
      }
    }
  return `${Zs(u2, r2, a2, o2, s, i, n2)}${d2.length > 0 ? `${d2.join(c2)}${c2}${c2}` : ""}`;
}
function pn(e) {
  return e[0] === "." ? rn(e) : e;
}
const fn = { assert: true, buffer: true, console: true, constants: true, domain: true, events: true, http: true, https: true, os: true, path: true, process: true, punycode: true, querystring: true, stream: true, string_decoder: true, timers: true, tty: true, url: true, util: true, vm: true, zlib: true };
function mn(e, t) {
  const s = t.map(({ id: e2 }) => e2).filter((e2) => e2 in fn);
  s.length && e({ code: "MISSING_NODE_BUILTINS", message: `Creating a browser bundle that depends on Node.js built-in modules (${se(s)}). You might need to include https://github.com/snowpackjs/rollup-plugin-polyfill-node`, modules: s });
}
const gn = (e, t) => e.split(".").map(t).join("");
function yn(e, t, s, i, { _: n2, getPropertyAccess: r2 }) {
  const a2 = e.split(".");
  a2[0] = (typeof s == "function" ? s(a2[0]) : s[a2[0]]) || a2[0];
  const o2 = a2.pop();
  let h2 = t, l2 = a2.map((e2) => (h2 += r2(e2), `${h2}${n2}=${n2}${h2}${n2}||${n2}{}`)).concat(`${h2}${r2(o2)}`).join(`,${n2}`) + `${n2}=${n2}${i}`;
  return a2.length > 0 && (l2 = `(${l2})`), l2;
}
function En(e) {
  let t = e.length;
  for (; t--; ) {
    const { imports: s, reexports: i } = e[t];
    if (s || i)
      return e.slice(0, t + 1);
  }
  return [];
}
const xn = ({ dependencies: e, exports: t }) => {
  const s = new Set(t.map((e2) => e2.exported));
  s.add("default");
  for (const { reexports: t2 } of e)
    if (t2)
      for (const e2 of t2)
        e2.reexported !== "*" && s.add(e2.reexported);
  return s;
}, bn = (e, t, { _: s, cnst: i, getObject: n2, n: r2 }) => e ? `${r2}${t}${i} _starExcludes${s}=${s}${n2([...e].map((e2) => [e2, "1"]), { lineBreakIndent: { base: t, t } })};` : "", vn = (e, t, { _: s, n: i }) => e.length ? `${i}${t}var ${e.join(`,${s}`)};` : "", An = (e, t, s) => Sn(e.filter((e2) => e2.hoisted).map((e2) => ({ name: e2.exported, value: e2.local })), t, s);
function Sn(e, t, { _: s, n: i }) {
  return e.length === 0 ? "" : e.length === 1 ? `exports('${e[0].name}',${s}${e[0].value});${i}${i}` : `exports({${i}` + e.map(({ name: e2, value: i2 }) => `${t}${e2}:${s}${i2}`).join(`,${i}`) + `${i}});${i}${i}`;
}
const Pn = (e, t, s) => Sn(e.filter((e2) => e2.expression).map((e2) => ({ name: e2.exported, value: e2.local })), t, s), kn = (e, t, s) => Sn(e.filter((e2) => e2.local === "_missingExportShim").map((e2) => ({ name: e2.exported, value: "_missingExportShim" })), t, s);
function wn(e, t, s) {
  return e ? `${t}${gn(e, s)}` : "null";
}
var Cn = { amd: function(e, { accessedGlobals: t, dependencies: s, exports: i, hasExports: n2, id: r2, indent: a2, intro: o2, isEntryFacade: h2, isModuleFacade: l2, namedExportsMode: c2, outro: u2, snippets: d2, warn: p2 }, { amd: f2, esModule: m2, externalLiveBindings: g2, freeze: y2, interop: E2, namespaceToStringTag: x2, strict: b2 }) {
  mn(p2, s);
  const v2 = s.map((e2) => `'${pn(e2.id)}'`), A2 = s.map((e2) => e2.name), { n: S2, getNonArrowFunctionIntro: P2, _: k2 } = d2;
  c2 && n2 && (A2.unshift("exports"), v2.unshift("'exports'")), t.has("require") && (A2.unshift("require"), v2.unshift("'require'")), t.has("module") && (A2.unshift("module"), v2.unshift("'module'"));
  const w2 = an(f2, r2), C2 = (w2 ? `'${w2}',${k2}` : "") + (v2.length ? `[${v2.join(`,${k2}`)}],${k2}` : ""), I2 = b2 ? `${k2}'use strict';` : "";
  e.prepend(`${o2}${dn(s, E2, g2, y2, x2, t, a2, d2)}`);
  const _2 = on(i, s, c2, E2, d2, a2, g2);
  let N2 = cn(c2 && n2, h2 && m2, l2 && x2, d2);
  return N2 && (N2 = S2 + S2 + N2), e.append(`${_2}${N2}${u2}`), e.indent(a2).prepend(`${f2.define}(${C2}(${P2(A2, { isAsync: false, name: null })}{${I2}${S2}${S2}`).append(`${S2}${S2}}));`);
}, cjs: function(e, { accessedGlobals: t, dependencies: s, exports: i, hasExports: n2, indent: r2, intro: a2, isEntryFacade: o2, isModuleFacade: h2, namedExportsMode: l2, outro: c2, snippets: u2 }, { compact: d2, esModule: p2, externalLiveBindings: f2, freeze: m2, interop: g2, namespaceToStringTag: y2, strict: E2 }) {
  const { _: x2, n: b2 } = u2, v2 = E2 ? `'use strict';${b2}${b2}` : "";
  let A2 = cn(l2 && n2, o2 && p2, h2 && y2, u2);
  A2 && (A2 += b2 + b2);
  const S2 = function(e2, { _: t2, cnst: s2, n: i2 }, n3) {
    let r3 = "", a3 = false;
    for (const { id: o3, name: h3, reexports: l3, imports: c3 } of e2)
      l3 || c3 ? (r3 += n3 && a3 ? "," : `${r3 ? `;${i2}` : ""}${s2} `, a3 = true, r3 += `${h3}${t2}=${t2}require('${o3}')`) : (r3 && (r3 += n3 && !a3 ? "," : `;${i2}`), a3 = false, r3 += `require('${o3}')`);
    if (r3)
      return `${r3};${i2}${i2}`;
    return "";
  }(s, u2, d2), P2 = dn(s, g2, f2, m2, y2, t, r2, u2);
  e.prepend(`${v2}${a2}${A2}${S2}${P2}`);
  const k2 = on(i, s, l2, g2, u2, r2, f2, `module.exports${x2}=${x2}`);
  return e.append(`${k2}${c2}`);
}, es: function(e, { accessedGlobals: t, indent: s, intro: i, outro: n2, dependencies: r2, exports: a2, snippets: o2 }, { externalLiveBindings: h2, freeze: l2, namespaceToStringTag: c2 }) {
  const { _: u2, n: d2 } = o2, p2 = function(e2, t2) {
    const s2 = [];
    for (const { id: i2, reexports: n3, imports: r3, name: a3 } of e2)
      if (n3 || r3) {
        if (r3) {
          let e3 = null, n4 = null;
          const a4 = [];
          for (const t3 of r3)
            t3.imported === "default" ? e3 = t3 : t3.imported === "*" ? n4 = t3 : a4.push(t3);
          n4 && s2.push(`import${t2}*${t2}as ${n4.local} from${t2}'${i2}';`), e3 && a4.length === 0 ? s2.push(`import ${e3.local} from${t2}'${i2}';`) : a4.length > 0 && s2.push(`import ${e3 ? `${e3.local},${t2}` : ""}{${t2}${a4.map((e4) => e4.imported === e4.local ? e4.imported : `${e4.imported} as ${e4.local}`).join(`,${t2}`)}${t2}}${t2}from${t2}'${i2}';`);
        }
        if (n3) {
          let e3 = null;
          const o3 = [], h3 = [];
          for (const t3 of n3)
            t3.reexported === "*" ? e3 = t3 : t3.imported === "*" ? o3.push(t3) : h3.push(t3);
          if (e3 && s2.push(`export${t2}*${t2}from${t2}'${i2}';`), o3.length > 0) {
            r3 && r3.some((e4) => e4.imported === "*" && e4.local === a3) || s2.push(`import${t2}*${t2}as ${a3} from${t2}'${i2}';`);
            for (const e4 of o3)
              s2.push(`export${t2}{${t2}${a3 === e4.reexported ? a3 : `${a3} as ${e4.reexported}`} };`);
          }
          h3.length > 0 && s2.push(`export${t2}{${t2}${h3.map((e4) => e4.imported === e4.reexported ? e4.imported : `${e4.imported} as ${e4.reexported}`).join(`,${t2}`)}${t2}}${t2}from${t2}'${i2}';`);
        }
      } else
        s2.push(`import${t2}'${i2}';`);
    return s2;
  }(r2, u2);
  p2.length > 0 && (i += p2.join(d2) + d2 + d2), (i += Zs(null, t, s, o2, h2, l2, c2)) && e.prepend(i);
  const f2 = function(e2, { _: t2, cnst: s2 }) {
    const i2 = [], n3 = [];
    for (const r3 of e2)
      r3.expression && i2.push(`${s2} ${r3.local}${t2}=${t2}${r3.expression};`), n3.push(r3.exported === r3.local ? r3.local : `${r3.local} as ${r3.exported}`);
    n3.length && i2.push(`export${t2}{${t2}${n3.join(`,${t2}`)}${t2}};`);
    return i2;
  }(a2, o2);
  return f2.length && e.append(d2 + d2 + f2.join(d2).trim()), n2 && e.append(n2), e.trim();
}, iife: function(e, { accessedGlobals: t, dependencies: s, exports: i, hasExports: n2, indent: r2, intro: a2, namedExportsMode: o2, outro: h2, snippets: l2, warn: c2 }, { compact: u2, esModule: d2, extend: p2, freeze: f2, externalLiveBindings: m2, globals: g2, interop: y2, name: E2, namespaceToStringTag: x2, strict: b2 }) {
  const { _: v2, cnst: A2, getNonArrowFunctionIntro: S2, getPropertyAccess: P2, n: k2 } = l2, w2 = E2 && E2.includes("."), C2 = !p2 && !w2;
  if (E2 && C2 && (Pe(I2 = E2) || Ae.has(I2) || Se.test(I2)))
    return he({ code: "ILLEGAL_IDENTIFIER_AS_NAME", message: `Given name "${E2}" is not a legal JS identifier. If you need this, you can try "output.extend: true".` });
  var I2;
  mn(c2, s);
  const _2 = En(s), N2 = _2.map((e2) => e2.globalName || "null"), $2 = _2.map((e2) => e2.name);
  n2 && !E2 && c2({ code: "MISSING_NAME_OPTION_FOR_IIFE_EXPORT", message: 'If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.' }), o2 && n2 && (p2 ? (N2.unshift(`this${gn(E2, P2)}${v2}=${v2}this${gn(E2, P2)}${v2}||${v2}{}`), $2.unshift("exports")) : (N2.unshift("{}"), $2.unshift("exports")));
  const T2 = b2 ? `${r2}'use strict';${k2}` : "", R2 = dn(s, y2, m2, f2, x2, t, r2, l2);
  e.prepend(`${a2}${R2}`);
  let M2 = `(${S2($2, { isAsync: false, name: null })}{${k2}${T2}${k2}`;
  n2 && (!E2 || p2 && o2 || (M2 = (C2 ? `${A2} ${E2}` : `this${gn(E2, P2)}`) + `${v2}=${v2}${M2}`), w2 && (M2 = function(e2, t2, s2, { _: i2, getPropertyAccess: n3, s: r3 }, a3) {
    const o3 = e2.split(".");
    o3[0] = (typeof s2 == "function" ? s2(o3[0]) : s2[o3[0]]) || o3[0], o3.pop();
    let h3 = t2;
    return o3.map((e3) => (h3 += n3(e3), `${h3}${i2}=${i2}${h3}${i2}||${i2}{}${r3}`)).join(a3 ? "," : "\n") + (a3 && o3.length ? ";" : "\n");
  }(E2, "this", g2, l2, u2) + M2));
  let D2 = `${k2}${k2}})(${N2.join(`,${v2}`)});`;
  n2 && !p2 && o2 && (D2 = `${k2}${k2}${r2}return exports;${D2}`);
  const L2 = on(i, s, o2, y2, l2, r2, m2);
  let O2 = cn(o2 && n2, d2, x2, l2);
  return O2 && (O2 = k2 + k2 + O2), e.append(`${L2}${O2}${h2}`), e.indent(r2).prepend(M2).append(D2);
}, system: function(e, { accessedGlobals: t, dependencies: s, exports: i, hasExports: n2, indent: r2, intro: a2, snippets: o2, outro: h2, usesTopLevelAwait: l2 }, { externalLiveBindings: c2, freeze: u2, name: d2, namespaceToStringTag: p2, strict: f2, systemNullSetters: m2 }) {
  const { _: g2, getFunctionIntro: y2, getNonArrowFunctionIntro: E2, n: x2, s: b2 } = o2, { importBindings: v2, setters: A2, starExcludes: S2 } = function(e2, t2, s2, { _: i2, cnst: n3, getObject: r3, getPropertyAccess: a3, n: o3 }) {
    const h3 = [], l3 = [];
    let c3 = null;
    for (const { imports: u3, reexports: d3 } of e2) {
      const p3 = [];
      if (u3)
        for (const e3 of u3)
          h3.push(e3.local), e3.imported === "*" ? p3.push(`${e3.local}${i2}=${i2}module;`) : p3.push(`${e3.local}${i2}=${i2}module${a3(e3.imported)};`);
      if (d3) {
        const o4 = [];
        let h4 = false;
        for (const { imported: e3, reexported: t3 } of d3)
          t3 === "*" ? h4 = true : o4.push([t3, e3 === "*" ? "module" : `module${a3(e3)}`]);
        if (o4.length > 1 || h4) {
          const a4 = r3(o4, { lineBreakIndent: null });
          h4 ? (c3 || (c3 = xn({ dependencies: e2, exports: t2 })), p3.push(`${n3} setter${i2}=${i2}${a4};`, `for${i2}(${n3} name in module)${i2}{`, `${s2}if${i2}(!_starExcludes[name])${i2}setter[name]${i2}=${i2}module[name];`, "}", "exports(setter);")) : p3.push(`exports(${a4});`);
        } else {
          const [e3, t3] = o4[0];
          p3.push(`exports('${e3}',${i2}${t3});`);
        }
      }
      l3.push(p3.join(`${o3}${s2}${s2}${s2}`));
    }
    return { importBindings: h3, setters: l3, starExcludes: c3 };
  }(s, i, r2, o2), P2 = d2 ? `'${d2}',${g2}` : "", k2 = t.has("module") ? ["exports", "module"] : n2 ? ["exports"] : [];
  let w2 = `System.register(${P2}[` + s.map(({ id: e2 }) => `'${e2}'`).join(`,${g2}`) + `],${g2}(${E2(k2, { isAsync: false, name: null })}{${x2}${r2}${f2 ? "'use strict';" : ""}` + bn(S2, r2, o2) + vn(v2, r2, o2) + `${x2}${r2}return${g2}{${A2.length ? `${x2}${r2}${r2}setters:${g2}[${A2.map((e2) => e2 ? `${y2(["module"], { isAsync: false, name: null })}{${x2}${r2}${r2}${r2}${e2}${x2}${r2}${r2}}` : m2 ? "null" : `${y2([], { isAsync: false, name: null })}{}`).join(`,${g2}`)}],` : ""}${x2}`;
  w2 += `${r2}${r2}execute:${g2}(${E2([], { isAsync: l2, name: null })}{${x2}${x2}`;
  const C2 = `${r2}${r2}})${x2}${r2}}${b2}${x2}}));`;
  return e.prepend(a2 + Zs(null, t, r2, o2, c2, u2, p2) + An(i, r2, o2)), e.append(`${h2}${x2}${x2}` + Pn(i, r2, o2) + kn(i, r2, o2)), e.indent(`${r2}${r2}${r2}`).append(C2).prepend(w2);
}, umd: function(e, { accessedGlobals: t, dependencies: s, exports: i, hasExports: n2, id: r2, indent: a2, intro: o2, namedExportsMode: h2, outro: l2, snippets: c2, warn: u2 }, { amd: d2, compact: p2, esModule: f2, extend: m2, externalLiveBindings: g2, freeze: y2, interop: E2, name: x2, namespaceToStringTag: b2, globals: v2, noConflict: A2, strict: S2 }) {
  const { _: P2, cnst: k2, getFunctionIntro: w2, getNonArrowFunctionIntro: C2, getPropertyAccess: I2, n: _2, s: N2 } = c2, $2 = p2 ? "f" : "factory", T2 = p2 ? "g" : "global";
  if (n2 && !x2)
    return he({ code: "MISSING_NAME_OPTION_FOR_IIFE_EXPORT", message: 'You must supply "output.name" for UMD bundles that have exports so that the exports are accessible in environments without a module loader.' });
  mn(u2, s);
  const R2 = s.map((e2) => `'${pn(e2.id)}'`), M2 = s.map((e2) => `require('${e2.id}')`), D2 = En(s), L2 = D2.map((e2) => wn(e2.globalName, T2, I2)), O2 = D2.map((e2) => e2.name);
  h2 && (n2 || A2) && (R2.unshift("'exports'"), M2.unshift("exports"), L2.unshift(yn(x2, T2, v2, (m2 ? `${wn(x2, T2, I2)}${P2}||${P2}` : "") + "{}", c2)), O2.unshift("exports"));
  const V2 = an(d2, r2), B2 = (V2 ? `'${V2}',${P2}` : "") + (R2.length ? `[${R2.join(`,${P2}`)}],${P2}` : ""), F2 = d2.define, z2 = !h2 && n2 ? `module.exports${P2}=${P2}` : "", W2 = S2 ? `${P2}'use strict';${_2}` : "";
  let j2;
  if (A2) {
    const e2 = p2 ? "e" : "exports";
    let t2;
    if (!h2 && n2)
      t2 = `${k2} ${e2}${P2}=${P2}${yn(x2, T2, v2, `${$2}(${L2.join(`,${P2}`)})`, c2)};`;
    else {
      t2 = `${k2} ${e2}${P2}=${P2}${L2.shift()};${_2}${a2}${a2}${$2}(${[e2].concat(L2).join(`,${P2}`)});`;
    }
    j2 = `(${w2([], { isAsync: false, name: null })}{${_2}${a2}${a2}${k2} current${P2}=${P2}${function(e3, t3, { _: s2, getPropertyAccess: i2 }) {
      let n3 = t3;
      return e3.split(".").map((e4) => n3 += i2(e4)).join(`${s2}&&${s2}`);
    }(x2, T2, c2)};${_2}${a2}${a2}${t2}${_2}${a2}${a2}${e2}.noConflict${P2}=${P2}${w2([], { isAsync: false, name: null })}{${P2}${wn(x2, T2, I2)}${P2}=${P2}current;${P2}return ${e2}${N2}${P2}};${_2}${a2}})()`;
  } else
    j2 = `${$2}(${L2.join(`,${P2}`)})`, !h2 && n2 && (j2 = yn(x2, T2, v2, j2, c2));
  const U2 = n2 || A2 && h2 || L2.length > 0, G2 = [$2];
  U2 && G2.unshift(T2);
  const H2 = U2 ? `this,${P2}` : "", q2 = U2 ? `(${T2}${P2}=${P2}typeof globalThis${P2}!==${P2}'undefined'${P2}?${P2}globalThis${P2}:${P2}${T2}${P2}||${P2}self,${P2}` : "", K2 = U2 ? ")" : "", X2 = U2 ? `${a2}typeof exports${P2}===${P2}'object'${P2}&&${P2}typeof module${P2}!==${P2}'undefined'${P2}?${P2}${z2}${$2}(${M2.join(`,${P2}`)})${P2}:${_2}` : "", Y2 = `(${C2(G2, { isAsync: false, name: null })}{${_2}` + X2 + `${a2}typeof ${F2}${P2}===${P2}'function'${P2}&&${P2}${F2}.amd${P2}?${P2}${F2}(${B2}${$2})${P2}:${_2}${a2}${q2}${j2}${K2};${_2}})(${H2}(${C2(O2, { isAsync: false, name: null })}{${W2}${_2}`, Q2 = _2 + _2 + "}));";
  e.prepend(`${o2}${dn(s, E2, g2, y2, b2, t, a2, c2)}`);
  const Z2 = on(i, s, h2, E2, c2, a2, g2);
  let J2 = cn(h2 && n2, f2, b2, c2);
  return J2 && (J2 = _2 + _2 + J2), e.append(`${Z2}${J2}${l2}`), e.trim().indent(a2).append(Q2).prepend(Y2);
} };
class In {
  constructor(e, t) {
    this.isOriginal = true, this.filename = e, this.content = t;
  }
  traceSegment(e, t, s) {
    return { column: t, line: e, name: s, source: this };
  }
}
class _n {
  constructor(e, t) {
    this.sources = t, this.names = e.names, this.mappings = e.mappings;
  }
  traceMappings() {
    const e = [], t = /* @__PURE__ */ new Map(), s = [], i = [], n2 = /* @__PURE__ */ new Map(), r2 = [];
    for (const a2 of this.mappings) {
      const o2 = [];
      for (const r3 of a2) {
        if (r3.length === 1)
          continue;
        const a3 = this.sources[r3[1]];
        if (!a3)
          continue;
        const h2 = a3.traceSegment(r3[2], r3[3], r3.length === 5 ? this.names[r3[4]] : "");
        if (h2) {
          const { column: a4, line: l2, name: c2, source: { content: u2, filename: d2 } } = h2;
          let p2 = t.get(d2);
          if (p2 === void 0)
            p2 = e.length, e.push(d2), t.set(d2, p2), s[p2] = u2;
          else if (s[p2] == null)
            s[p2] = u2;
          else if (u2 != null && s[p2] !== u2)
            return he({ message: `Multiple conflicting contents for sourcemap source ${d2}` });
          const f2 = [r3[0], p2, l2, a4];
          if (c2) {
            let e2 = n2.get(c2);
            e2 === void 0 && (e2 = i.length, i.push(c2), n2.set(c2, e2)), f2[4] = e2;
          }
          o2.push(f2);
        }
      }
      r2.push(o2);
    }
    return { mappings: r2, names: i, sources: e, sourcesContent: s };
  }
  traceSegment(e, t, s) {
    const i = this.mappings[e];
    if (!i)
      return null;
    let n2 = 0, r2 = i.length - 1;
    for (; n2 <= r2; ) {
      const e2 = n2 + r2 >> 1, a2 = i[e2];
      if (a2[0] === t || n2 === r2) {
        if (a2.length == 1)
          return null;
        const e3 = this.sources[a2[1]];
        return e3 ? e3.traceSegment(a2[2], a2[3], a2.length === 5 ? this.names[a2[4]] : s) : null;
      }
      a2[0] > t ? r2 = e2 - 1 : n2 = e2 + 1;
    }
    return null;
  }
}
function Nn(e) {
  return function(t, s) {
    return s.mappings ? new _n(s, [t]) : (e({ code: "SOURCEMAP_BROKEN", message: `Sourcemap is likely to be incorrect: a plugin (${s.plugin}) was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help`, plugin: s.plugin, url: "https://rollupjs.org/guide/en/#warning-sourcemap-is-likely-to-be-incorrect" }), new _n({ mappings: [], names: [] }, [t]));
  };
}
function $n(e, t, s, i, n2) {
  let r2;
  if (s) {
    const t2 = s.sources, i2 = s.sourcesContent || [], n3 = N(e) || ".", a2 = s.sourceRoot || ".", o2 = t2.map((e2, t3) => new In(R(n3, a2, e2), i2[t3]));
    r2 = new _n(s, o2);
  } else
    r2 = new In(e, t);
  return i.reduce(n2, r2);
}
var Tn = {}, Rn = Mn;
function Mn(e, t) {
  if (!e)
    throw new Error(t || "Assertion failed");
}
Mn.equal = function(e, t, s) {
  if (e != t)
    throw new Error(s || "Assertion failed: " + e + " != " + t);
};
var Dn = { exports: {} };
typeof Object.create == "function" ? Dn.exports = function(e, t) {
  t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
} : Dn.exports = function(e, t) {
  if (t) {
    e.super_ = t;
    var s = function() {
    };
    s.prototype = t.prototype, e.prototype = new s(), e.prototype.constructor = e;
  }
};
var Ln = Rn, On = Dn.exports;
function Vn(e, t) {
  return (64512 & e.charCodeAt(t)) == 55296 && (!(t < 0 || t + 1 >= e.length) && (64512 & e.charCodeAt(t + 1)) == 56320);
}
function Bn(e) {
  return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0;
}
function Fn(e) {
  return e.length === 1 ? "0" + e : e;
}
function zn(e) {
  return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Tn.inherits = On, Tn.toArray = function(e, t) {
  if (Array.isArray(e))
    return e.slice();
  if (!e)
    return [];
  var s = [];
  if (typeof e == "string")
    if (t) {
      if (t === "hex")
        for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n2 = 0; n2 < e.length; n2 += 2)
          s.push(parseInt(e[n2] + e[n2 + 1], 16));
    } else
      for (var i = 0, n2 = 0; n2 < e.length; n2++) {
        var r2 = e.charCodeAt(n2);
        r2 < 128 ? s[i++] = r2 : r2 < 2048 ? (s[i++] = r2 >> 6 | 192, s[i++] = 63 & r2 | 128) : Vn(e, n2) ? (r2 = 65536 + ((1023 & r2) << 10) + (1023 & e.charCodeAt(++n2)), s[i++] = r2 >> 18 | 240, s[i++] = r2 >> 12 & 63 | 128, s[i++] = r2 >> 6 & 63 | 128, s[i++] = 63 & r2 | 128) : (s[i++] = r2 >> 12 | 224, s[i++] = r2 >> 6 & 63 | 128, s[i++] = 63 & r2 | 128);
      }
  else
    for (n2 = 0; n2 < e.length; n2++)
      s[n2] = 0 | e[n2];
  return s;
}, Tn.toHex = function(e) {
  for (var t = "", s = 0; s < e.length; s++)
    t += Fn(e[s].toString(16));
  return t;
}, Tn.htonl = Bn, Tn.toHex32 = function(e, t) {
  for (var s = "", i = 0; i < e.length; i++) {
    var n2 = e[i];
    t === "little" && (n2 = Bn(n2)), s += zn(n2.toString(16));
  }
  return s;
}, Tn.zero2 = Fn, Tn.zero8 = zn, Tn.join32 = function(e, t, s, i) {
  var n2 = s - t;
  Ln(n2 % 4 == 0);
  for (var r2 = new Array(n2 / 4), a2 = 0, o2 = t; a2 < r2.length; a2++, o2 += 4) {
    var h2;
    h2 = i === "big" ? e[o2] << 24 | e[o2 + 1] << 16 | e[o2 + 2] << 8 | e[o2 + 3] : e[o2 + 3] << 24 | e[o2 + 2] << 16 | e[o2 + 1] << 8 | e[o2], r2[a2] = h2 >>> 0;
  }
  return r2;
}, Tn.split32 = function(e, t) {
  for (var s = new Array(4 * e.length), i = 0, n2 = 0; i < e.length; i++, n2 += 4) {
    var r2 = e[i];
    t === "big" ? (s[n2] = r2 >>> 24, s[n2 + 1] = r2 >>> 16 & 255, s[n2 + 2] = r2 >>> 8 & 255, s[n2 + 3] = 255 & r2) : (s[n2 + 3] = r2 >>> 24, s[n2 + 2] = r2 >>> 16 & 255, s[n2 + 1] = r2 >>> 8 & 255, s[n2] = 255 & r2);
  }
  return s;
}, Tn.rotr32 = function(e, t) {
  return e >>> t | e << 32 - t;
}, Tn.rotl32 = function(e, t) {
  return e << t | e >>> 32 - t;
}, Tn.sum32 = function(e, t) {
  return e + t >>> 0;
}, Tn.sum32_3 = function(e, t, s) {
  return e + t + s >>> 0;
}, Tn.sum32_4 = function(e, t, s, i) {
  return e + t + s + i >>> 0;
}, Tn.sum32_5 = function(e, t, s, i, n2) {
  return e + t + s + i + n2 >>> 0;
}, Tn.sum64 = function(e, t, s, i) {
  var n2 = e[t], r2 = i + e[t + 1] >>> 0, a2 = (r2 < i ? 1 : 0) + s + n2;
  e[t] = a2 >>> 0, e[t + 1] = r2;
}, Tn.sum64_hi = function(e, t, s, i) {
  return (t + i >>> 0 < t ? 1 : 0) + e + s >>> 0;
}, Tn.sum64_lo = function(e, t, s, i) {
  return t + i >>> 0;
}, Tn.sum64_4_hi = function(e, t, s, i, n2, r2, a2, o2) {
  var h2 = 0, l2 = t;
  return h2 += (l2 = l2 + i >>> 0) < t ? 1 : 0, h2 += (l2 = l2 + r2 >>> 0) < r2 ? 1 : 0, e + s + n2 + a2 + (h2 += (l2 = l2 + o2 >>> 0) < o2 ? 1 : 0) >>> 0;
}, Tn.sum64_4_lo = function(e, t, s, i, n2, r2, a2, o2) {
  return t + i + r2 + o2 >>> 0;
}, Tn.sum64_5_hi = function(e, t, s, i, n2, r2, a2, o2, h2, l2) {
  var c2 = 0, u2 = t;
  return c2 += (u2 = u2 + i >>> 0) < t ? 1 : 0, c2 += (u2 = u2 + r2 >>> 0) < r2 ? 1 : 0, c2 += (u2 = u2 + o2 >>> 0) < o2 ? 1 : 0, e + s + n2 + a2 + h2 + (c2 += (u2 = u2 + l2 >>> 0) < l2 ? 1 : 0) >>> 0;
}, Tn.sum64_5_lo = function(e, t, s, i, n2, r2, a2, o2, h2, l2) {
  return t + i + r2 + o2 + l2 >>> 0;
}, Tn.rotr64_hi = function(e, t, s) {
  return (t << 32 - s | e >>> s) >>> 0;
}, Tn.rotr64_lo = function(e, t, s) {
  return (e << 32 - s | t >>> s) >>> 0;
}, Tn.shr64_hi = function(e, t, s) {
  return e >>> s;
}, Tn.shr64_lo = function(e, t, s) {
  return (e << 32 - s | t >>> s) >>> 0;
};
var Wn = {}, jn = Tn, Un = Rn;
function Gn() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
Wn.BlockHash = Gn, Gn.prototype.update = function(e, t) {
  if (e = jn.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
    var s = (e = this.pending).length % this._delta8;
    this.pending = e.slice(e.length - s, e.length), this.pending.length === 0 && (this.pending = null), e = jn.join32(e, 0, e.length - s, this.endian);
    for (var i = 0; i < e.length; i += this._delta32)
      this._update(e, i, i + this._delta32);
  }
  return this;
}, Gn.prototype.digest = function(e) {
  return this.update(this._pad()), Un(this.pending === null), this._digest(e);
}, Gn.prototype._pad = function() {
  var e = this.pendingTotal, t = this._delta8, s = t - (e + this.padLength) % t, i = new Array(s + this.padLength);
  i[0] = 128;
  for (var n2 = 1; n2 < s; n2++)
    i[n2] = 0;
  if (e <<= 3, this.endian === "big") {
    for (var r2 = 8; r2 < this.padLength; r2++)
      i[n2++] = 0;
    i[n2++] = 0, i[n2++] = 0, i[n2++] = 0, i[n2++] = 0, i[n2++] = e >>> 24 & 255, i[n2++] = e >>> 16 & 255, i[n2++] = e >>> 8 & 255, i[n2++] = 255 & e;
  } else
    for (i[n2++] = 255 & e, i[n2++] = e >>> 8 & 255, i[n2++] = e >>> 16 & 255, i[n2++] = e >>> 24 & 255, i[n2++] = 0, i[n2++] = 0, i[n2++] = 0, i[n2++] = 0, r2 = 8; r2 < this.padLength; r2++)
      i[n2++] = 0;
  return i;
};
var Hn = {}, qn = Tn.rotr32;
function Kn(e, t, s) {
  return e & t ^ ~e & s;
}
function Xn(e, t, s) {
  return e & t ^ e & s ^ t & s;
}
function Yn(e, t, s) {
  return e ^ t ^ s;
}
Hn.ft_1 = function(e, t, s, i) {
  return e === 0 ? Kn(t, s, i) : e === 1 || e === 3 ? Yn(t, s, i) : e === 2 ? Xn(t, s, i) : void 0;
}, Hn.ch32 = Kn, Hn.maj32 = Xn, Hn.p32 = Yn, Hn.s0_256 = function(e) {
  return qn(e, 2) ^ qn(e, 13) ^ qn(e, 22);
}, Hn.s1_256 = function(e) {
  return qn(e, 6) ^ qn(e, 11) ^ qn(e, 25);
}, Hn.g0_256 = function(e) {
  return qn(e, 7) ^ qn(e, 18) ^ e >>> 3;
}, Hn.g1_256 = function(e) {
  return qn(e, 17) ^ qn(e, 19) ^ e >>> 10;
};
var Qn = Tn, Zn = Wn, Jn = Hn, er = Rn, tr = Qn.sum32, sr = Qn.sum32_4, ir = Qn.sum32_5, nr = Jn.ch32, rr = Jn.maj32, ar = Jn.s0_256, or = Jn.s1_256, hr = Jn.g0_256, lr = Jn.g1_256, cr = Zn.BlockHash, ur = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function dr() {
  if (!(this instanceof dr))
    return new dr();
  cr.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ur, this.W = new Array(64);
}
Qn.inherits(dr, cr);
var pr = dr;
dr.blockSize = 512, dr.outSize = 256, dr.hmacStrength = 192, dr.padLength = 64, dr.prototype._update = function(e, t) {
  for (var s = this.W, i = 0; i < 16; i++)
    s[i] = e[t + i];
  for (; i < s.length; i++)
    s[i] = sr(lr(s[i - 2]), s[i - 7], hr(s[i - 15]), s[i - 16]);
  var n2 = this.h[0], r2 = this.h[1], a2 = this.h[2], o2 = this.h[3], h2 = this.h[4], l2 = this.h[5], c2 = this.h[6], u2 = this.h[7];
  for (er(this.k.length === s.length), i = 0; i < s.length; i++) {
    var d2 = ir(u2, or(h2), nr(h2, l2, c2), this.k[i], s[i]), p2 = tr(ar(n2), rr(n2, r2, a2));
    u2 = c2, c2 = l2, l2 = h2, h2 = tr(o2, d2), o2 = a2, a2 = r2, r2 = n2, n2 = tr(d2, p2);
  }
  this.h[0] = tr(this.h[0], n2), this.h[1] = tr(this.h[1], r2), this.h[2] = tr(this.h[2], a2), this.h[3] = tr(this.h[3], o2), this.h[4] = tr(this.h[4], h2), this.h[5] = tr(this.h[5], l2), this.h[6] = tr(this.h[6], c2), this.h[7] = tr(this.h[7], u2);
}, dr.prototype._digest = function(e) {
  return e === "hex" ? Qn.toHex32(this.h, "big") : Qn.split32(this.h, "big");
};
var fr = pr;
const mr = () => fr(), gr = { amd: xr, cjs: xr, es: Er, iife: xr, system: Er, umd: xr };
function yr(e, t, s, i, n2, r2, a2, o2, h2, l2, c2, u2, d2) {
  const p2 = e.slice().reverse();
  for (const e2 of p2)
    e2.scope.addUsedOutsideNames(i, n2, c2, u2);
  !function(e2, t2, s2) {
    for (const i2 of t2) {
      for (const t3 of i2.scope.variables.values())
        t3.included && !(t3.renderBaseName || t3 instanceof _i && t3.getOriginalVariable() !== t3) && t3.setRenderNames(null, Mt(t3.name, e2));
      if (s2.has(i2)) {
        const t3 = i2.namespace;
        t3.setRenderNames(null, Mt(t3.name, e2));
      }
    }
  }(i, p2, d2), gr[n2](i, s, t, r2, a2, o2, h2, l2);
  for (const e2 of p2)
    e2.scope.deconflict(n2, c2, u2);
}
function Er(e, t, s, i, n2, r2, a2, o2) {
  for (const t2 of s.dependencies)
    (n2 || t2 instanceof we) && (t2.variableName = Mt(t2.suggestedVariableName, e));
  for (const s2 of t) {
    const t2 = s2.module, i2 = s2.name;
    s2.isNamespace && (n2 || t2 instanceof we) ? s2.setRenderNames(null, (t2 instanceof we ? t2 : a2.get(t2)).variableName) : t2 instanceof we && i2 === "default" ? s2.setRenderNames(null, Mt([...t2.exportedVariables].some(([e2, t3]) => t3 === "*" && e2.included) ? t2.suggestedVariableName + "__default" : t2.suggestedVariableName, e)) : s2.setRenderNames(null, Mt(i2, e));
  }
  for (const t2 of o2)
    t2.setRenderNames(null, Mt(t2.name, e));
}
function xr(e, t, { deconflictedDefault: s, deconflictedNamespace: i, dependencies: n2 }, r2, a2, o2, h2) {
  for (const t2 of n2)
    t2.variableName = Mt(t2.suggestedVariableName, e);
  for (const t2 of i)
    t2.namespaceVariableName = Mt(`${t2.suggestedVariableName}__namespace`, e);
  for (const t2 of s)
    i.has(t2) && Qs(String(r2(t2.id)), o2) ? t2.defaultVariableName = t2.namespaceVariableName : t2.defaultVariableName = Mt(`${t2.suggestedVariableName}__default`, e);
  for (const e2 of t) {
    const t2 = e2.module;
    if (t2 instanceof we) {
      const s2 = e2.name;
      if (s2 === "default") {
        const s3 = String(r2(t2.id)), i2 = Ks[s3] ? t2.defaultVariableName : t2.variableName;
        Xs(s3, o2) ? e2.setRenderNames(i2, "default") : e2.setRenderNames(null, i2);
      } else
        s2 === "*" ? e2.setRenderNames(null, Ys[String(r2(t2.id))] ? t2.namespaceVariableName : t2.variableName) : e2.setRenderNames(t2.variableName, null);
    } else {
      const s2 = h2.get(t2);
      a2 && e2.isNamespace ? e2.setRenderNames(null, s2.exportMode === "default" ? s2.namespaceVariableName : s2.variableName) : s2.exportMode === "default" ? e2.setRenderNames(null, s2.variableName) : e2.setRenderNames(s2.variableName, s2.getVariableExportName(e2));
    }
  }
}
const br = /[\\'\r\n\u2028\u2029]/, vr = /(['\r\n\u2028\u2029])/g, Ar = /\\/g;
function Sr(e) {
  return e.match(br) ? e.replace(Ar, "\\\\").replace(vr, "\\$1") : e;
}
function Pr(e, { exports: t, name: s, format: i }, n2, r2, a2) {
  const o2 = e.getExportNames();
  if (t === "default") {
    if (o2.length !== 1 || o2[0] !== "default")
      return he(de("default", o2, r2));
  } else if (t === "none" && o2.length)
    return he(de("none", o2, r2));
  return t === "auto" && (o2.length === 0 ? t = "none" : o2.length === 1 && o2[0] === "default" ? (i === "cjs" && n2.has("exports") && a2(function(e2) {
    const t2 = ne(e2);
    return { code: ce.PREFER_NAMED_EXPORTS, id: e2, message: `Entry module "${t2}" is implicitly using "default" export mode, which means for CommonJS output that its default export is assigned to "module.exports". For many tools, such CommonJS output will not be interchangeable with the original ES module. If this is intended, explicitly set "output.exports" to either "auto" or "default", otherwise you might want to consider changing the signature of "${t2}" to use named exports only.`, url: "https://rollupjs.org/guide/en/#outputexports" };
  }(r2)), t = "default") : (i !== "es" && i !== "system" && o2.includes("default") && a2(function(e2, t2) {
    return { code: ce.MIXED_EXPORTS, id: e2, message: `Entry module "${ne(e2)}" is using named and default exports together. Consumers of your bundle will have to use \`${t2 || "chunk"}["default"]\` to access the default export, which may not be what you want. Use \`output.exports: "named"\` to disable this warning`, url: "https://rollupjs.org/guide/en/#outputexports" };
  }(r2, s)), t = "named")), t;
}
function kr(e) {
  const t = e.split("\n"), s = t.filter((e2) => /^\t+/.test(e2)), i = t.filter((e2) => /^ {2,}/.test(e2));
  if (s.length === 0 && i.length === 0)
    return null;
  if (s.length >= i.length)
    return "	";
  const n2 = i.reduce((e2, t2) => {
    const s2 = /^ +/.exec(t2)[0].length;
    return Math.min(s2, e2);
  }, 1 / 0);
  return new Array(n2 + 1).join(" ");
}
function wr(e, t, s, i, n2) {
  const r2 = e.getDependenciesToBeIncluded();
  for (const e2 of r2) {
    if (e2 instanceof we) {
      t.push(e2);
      continue;
    }
    const r3 = n2.get(e2);
    r3 === i ? s.has(e2) || (s.add(e2), wr(e2, t, s, i, n2)) : t.push(r3);
  }
}
function Cr(e) {
  if (!e)
    return null;
  if (typeof e == "string" && (e = JSON.parse(e)), e.mappings === "")
    return { mappings: [], names: [], sources: [], version: 3 };
  const s = typeof e.mappings == "string" ? function(e2) {
    for (var s2 = [], i = [], r2 = [0, 0, 0, 0, 0], a2 = 0, o2 = 0, h2 = 0, l2 = 0; o2 < e2.length; o2++) {
      var c2 = e2.charCodeAt(o2);
      if (c2 === 44)
        n(i, r2, a2), a2 = 0;
      else if (c2 === 59)
        n(i, r2, a2), a2 = 0, s2.push(i), i = [], r2[0] = 0;
      else {
        var u2 = t[c2];
        if (u2 === void 0)
          throw new Error("Invalid character (" + String.fromCharCode(c2) + ")");
        var d2 = 32 & u2;
        if (l2 += (u2 &= 31) << h2, d2)
          h2 += 5;
        else {
          var p2 = 1 & l2;
          l2 >>>= 1, p2 && (l2 = l2 === 0 ? -2147483648 : -l2), r2[a2] += l2, a2++, l2 = h2 = 0;
        }
      }
    }
    return n(i, r2, a2), s2.push(i), s2;
  }(e.mappings) : e.mappings;
  return __spreadProps(__spreadValues({}, e), { mappings: s });
}
function Ir(e, t, s) {
  return re(e) ? he(Ee(`Invalid pattern "${e}" for "${t}", patterns can be neither absolute nor relative paths.`)) : e.replace(/\[(\w+)\]/g, (e2, i) => {
    if (!s.hasOwnProperty(i))
      return he(Ee(`"[${i}]" is not a valid placeholder in "${t}" pattern.`));
    const n2 = s[i]();
    return re(n2) ? he(Ee(`Invalid substitution "${n2}" for placeholder "[${i}]" in "${t}" pattern, can be neither absolute nor relative path.`)) : n2;
  });
}
function _r(e, t) {
  const s = new Set(Object.keys(t).map((e2) => e2.toLowerCase()));
  if (!s.has(e.toLocaleLowerCase()))
    return e;
  const i = $(e);
  e = e.substring(0, e.length - i.length);
  let n2, r2 = 1;
  for (; s.has((n2 = e + ++r2 + i).toLowerCase()); )
    ;
  return n2;
}
const Nr = [".js", ".jsx", ".ts", ".tsx"];
function $r(e, t, s, i) {
  const n2 = typeof t == "function" ? t(e.id) : t[e.id];
  return n2 || (s ? (i({ code: "MISSING_GLOBAL_NAME", guess: e.variableName, message: `No name was provided for external module '${e.id}' in output.globals \u2013 guessing '${e.variableName}'`, source: e.id }), e.variableName) : void 0);
}
class Tr {
  constructor(e, t, s, i, n2, r2, a2, o2, h2, l2) {
    this.orderedModules = e, this.inputOptions = t, this.outputOptions = s, this.unsetOptions = i, this.pluginDriver = n2, this.modulesById = r2, this.chunkByModule = a2, this.facadeChunkByModule = o2, this.includedNamespaces = h2, this.manualChunkAlias = l2, this.entryModules = [], this.exportMode = "named", this.facadeModule = null, this.id = null, this.namespaceVariableName = "", this.needsExportsShim = false, this.variableName = "", this.accessedGlobalsByScope = /* @__PURE__ */ new Map(), this.dependencies = /* @__PURE__ */ new Set(), this.dynamicDependencies = /* @__PURE__ */ new Set(), this.dynamicEntryModules = [], this.dynamicName = null, this.exportNamesByVariable = /* @__PURE__ */ new Map(), this.exports = /* @__PURE__ */ new Set(), this.exportsByName = /* @__PURE__ */ new Map(), this.fileName = null, this.implicitEntryModules = [], this.implicitlyLoadedBefore = /* @__PURE__ */ new Set(), this.imports = /* @__PURE__ */ new Set(), this.indentString = void 0, this.isEmpty = true, this.name = null, this.renderedDependencies = null, this.renderedExports = null, this.renderedHash = void 0, this.renderedModuleSources = /* @__PURE__ */ new Map(), this.renderedModules = /* @__PURE__ */ Object.create(null), this.renderedSource = null, this.sortedExportNames = null, this.strictFacade = false, this.usedModules = void 0, this.execIndex = e.length > 0 ? e[0].execIndex : 1 / 0;
    const c2 = new Set(e);
    for (const t2 of e) {
      t2.namespace.included && h2.add(t2), this.isEmpty && t2.isIncluded() && (this.isEmpty = false), (t2.info.isEntry || s.preserveModules) && this.entryModules.push(t2);
      for (const e2 of t2.includedDynamicImporters)
        c2.has(e2) || (this.dynamicEntryModules.push(t2), t2.info.syntheticNamedExports && !s.preserveModules && (h2.add(t2), this.exports.add(t2.namespace)));
      t2.implicitlyLoadedAfter.size > 0 && this.implicitEntryModules.push(t2);
    }
    this.suggestedVariableName = ke(this.generateVariableName());
  }
  static generateFacade(e, t, s, i, n2, r2, a2, o2, h2, l2) {
    const c2 = new Tr([], e, t, s, i, n2, r2, a2, o2, null);
    c2.assignFacadeName(l2, h2), a2.has(h2) || a2.set(h2, c2);
    for (const e2 of h2.getDependenciesToBeIncluded())
      c2.dependencies.add(e2 instanceof tn ? r2.get(e2) : e2);
    return !c2.dependencies.has(r2.get(h2)) && h2.info.moduleSideEffects && h2.hasEffects() && c2.dependencies.add(r2.get(h2)), c2.ensureReexportsAreAvailableForModule(h2), c2.facadeModule = h2, c2.strictFacade = true, c2;
  }
  canModuleBeFacade(e, t) {
    const s = e.getExportNamesByVariable();
    for (const t2 of this.exports)
      if (!s.has(t2))
        return s.size === 0 && e.isUserDefinedEntryPoint && e.preserveSignature === "strict" && this.unsetOptions.has("preserveEntrySignatures") && this.inputOptions.onwarn({ code: "EMPTY_FACADE", id: e.id, message: `To preserve the export signature of the entry module "${ne(e.id)}", an empty facade chunk was created. This often happens when creating a bundle for a web app where chunks are placed in script tags and exports are ignored. In this case it is recommended to set "preserveEntrySignatures: false" to avoid this and reduce the number of chunks. Otherwise if this is intentional, set "preserveEntrySignatures: 'strict'" explicitly to silence this warning.`, url: "https://rollupjs.org/guide/en/#preserveentrysignatures" }), false;
    for (const i of t)
      if (!s.has(i) && i.module !== e)
        return false;
    return true;
  }
  generateExports() {
    this.sortedExportNames = null;
    const e = new Set(this.exports);
    if (this.facadeModule !== null && (this.facadeModule.preserveSignature !== false || this.strictFacade)) {
      const t = this.facadeModule.getExportNamesByVariable();
      for (const [s, i] of t) {
        this.exportNamesByVariable.set(s, [...i]);
        for (const e2 of i)
          this.exportsByName.set(e2, s);
        e.delete(s);
      }
    }
    this.outputOptions.minifyInternalExports ? function(e2, t, s) {
      let i = 0;
      for (const n2 of e2) {
        let [e3] = n2.name;
        if (t.has(e3))
          do {
            e3 = Rt(++i), e3.charCodeAt(0) === 49 && (i += 9 * 64 ** (e3.length - 1), e3 = Rt(i));
          } while (Ae.has(e3) || t.has(e3));
        t.set(e3, n2), s.set(n2, [e3]);
      }
    }(e, this.exportsByName, this.exportNamesByVariable) : function(e2, t, s) {
      for (const i of e2) {
        let e3 = 0, n2 = i.name;
        for (; t.has(n2); )
          n2 = i.name + "$" + ++e3;
        t.set(n2, i), s.set(i, [n2]);
      }
    }(e, this.exportsByName, this.exportNamesByVariable), (this.outputOptions.preserveModules || this.facadeModule && this.facadeModule.info.isEntry) && (this.exportMode = Pr(this, this.outputOptions, this.unsetOptions, this.facadeModule.id, this.inputOptions.onwarn));
  }
  generateFacades() {
    var e;
    const t = [], s = /* @__PURE__ */ new Set([...this.entryModules, ...this.implicitEntryModules]), i = new Set(this.dynamicEntryModules.map(({ namespace: e2 }) => e2));
    for (const e2 of s)
      if (e2.preserveSignature)
        for (const t2 of e2.getExportNamesByVariable().keys())
          i.add(t2);
    for (const e2 of s) {
      const s2 = Array.from(new Set(e2.chunkNames.filter(({ isUserDefined: e3 }) => e3).map(({ name: e3 }) => e3)), (e3) => ({ name: e3 }));
      if (s2.length === 0 && e2.isUserDefinedEntryPoint && s2.push({}), s2.push(...Array.from(e2.chunkFileNames, (e3) => ({ fileName: e3 }))), s2.length === 0 && s2.push({}), !this.facadeModule) {
        const t2 = e2.preserveSignature === "strict" || e2.preserveSignature === "exports-only" && e2.getExportNamesByVariable().size !== 0;
        (!t2 || this.outputOptions.preserveModules || this.canModuleBeFacade(e2, i)) && (this.facadeModule = e2, this.facadeChunkByModule.set(e2, this), e2.preserveSignature && (this.strictFacade = t2), this.assignFacadeName(s2.shift(), e2));
      }
      for (const i2 of s2)
        t.push(Tr.generateFacade(this.inputOptions, this.outputOptions, this.unsetOptions, this.pluginDriver, this.modulesById, this.chunkByModule, this.facadeChunkByModule, this.includedNamespaces, e2, i2));
    }
    for (const t2 of this.dynamicEntryModules)
      t2.info.syntheticNamedExports || (!this.facadeModule && this.canModuleBeFacade(t2, i) ? (this.facadeModule = t2, this.facadeChunkByModule.set(t2, this), this.strictFacade = true, this.dynamicName = Rr(t2)) : this.facadeModule === t2 && !this.strictFacade && this.canModuleBeFacade(t2, i) ? this.strictFacade = true : ((e = this.facadeChunkByModule.get(t2)) === null || e === void 0 ? void 0 : e.strictFacade) || (this.includedNamespaces.add(t2), this.exports.add(t2.namespace)));
    return t;
  }
  generateId(e, t, s, i) {
    if (this.fileName !== null)
      return this.fileName;
    const [n2, r2] = this.facadeModule && this.facadeModule.isUserDefinedEntryPoint ? [t.entryFileNames, "output.entryFileNames"] : [t.chunkFileNames, "output.chunkFileNames"];
    return _r(Ir(typeof n2 == "function" ? n2(this.getChunkInfo()) : n2, r2, { format: () => t.format, hash: () => i ? this.computeContentHashWithDependencies(e, t, s) : "[hash]", name: () => this.getChunkName() }), s);
  }
  generateIdPreserveModules(e, t, s, i) {
    const [{ id: n2 }] = this.orderedModules, r2 = this.outputOptions.sanitizeFileName(n2.split(Mr, 1)[0]);
    let a2;
    const o2 = i.has("entryFileNames") ? "[name][assetExtname].js" : t.entryFileNames, h2 = typeof o2 == "function" ? o2(this.getChunkInfo()) : o2;
    if (w(r2)) {
      const s2 = N(r2), i2 = $(r2), n3 = `${s2}/${Ir(h2, "output.entryFileNames", { assetExtname: () => Nr.includes(i2) ? "" : i2, ext: () => i2.substring(1), extname: () => i2, format: () => t.format, name: () => this.getChunkName() })}`, { preserveModulesRoot: o3 } = t;
      a2 = o3 && n3.startsWith(o3) ? n3.slice(o3.length).replace(/^[\\/]/, "") : T(e, n3);
    } else {
      const e2 = $(r2);
      a2 = `_virtual/${Ir(h2, "output.entryFileNames", { assetExtname: () => Nr.includes(e2) ? "" : e2, ext: () => e2.substring(1), extname: () => e2, format: () => t.format, name: () => ie(r2) })}`;
    }
    return _r(I(a2), s);
  }
  getChunkInfo() {
    const e = this.facadeModule, t = this.getChunkName.bind(this);
    return { exports: this.getExportNames(), facadeModuleId: e && e.id, isDynamicEntry: this.dynamicEntryModules.length > 0, isEntry: e !== null && e.info.isEntry, isImplicitEntry: this.implicitEntryModules.length > 0, modules: this.renderedModules, get name() {
      return t();
    }, type: "chunk" };
  }
  getChunkInfoWithFileNames() {
    return Object.assign(this.getChunkInfo(), { code: void 0, dynamicImports: Array.from(this.dynamicDependencies, Bi), fileName: this.id, implicitlyLoadedBefore: Array.from(this.implicitlyLoadedBefore, Bi), importedBindings: this.getImportedBindingsPerDependency(), imports: Array.from(this.dependencies, Bi), map: void 0, referencedFiles: this.getReferencedFiles() });
  }
  getChunkName() {
    var e;
    return (e = this.name) !== null && e !== void 0 ? e : this.name = this.outputOptions.sanitizeFileName(this.getFallbackChunkName());
  }
  getExportNames() {
    var e;
    return (e = this.sortedExportNames) !== null && e !== void 0 ? e : this.sortedExportNames = Array.from(this.exportsByName.keys()).sort();
  }
  getRenderedHash() {
    if (this.renderedHash)
      return this.renderedHash;
    const e = mr(), t = this.pluginDriver.hookReduceValueSync("augmentChunkHash", "", [this.getChunkInfo()], (e2, t2) => (t2 && (e2 += t2), e2));
    return e.update(t), e.update(this.renderedSource.toString()), e.update(this.getExportNames().map((e2) => {
      const t2 = this.exportsByName.get(e2);
      return `${ne(t2.module.id).replace(/\\/g, "/")}:${t2.name}:${e2}`;
    }).join(",")), this.renderedHash = e.digest("hex");
  }
  getVariableExportName(e) {
    return this.outputOptions.preserveModules && e instanceof Li ? "*" : this.exportNamesByVariable.get(e)[0];
  }
  link() {
    this.dependencies = function(e, t, s) {
      const i = [], n2 = /* @__PURE__ */ new Set();
      for (let r3 = t.length - 1; r3 >= 0; r3--) {
        const a2 = t[r3];
        if (!n2.has(a2)) {
          const t2 = [];
          wr(a2, t2, n2, e, s), i.unshift(t2);
        }
      }
      const r2 = /* @__PURE__ */ new Set();
      for (const e2 of i)
        for (const t2 of e2)
          r2.add(t2);
      return r2;
    }(this, this.orderedModules, this.chunkByModule);
    for (const e of this.orderedModules)
      this.addDependenciesToChunk(e.dynamicDependencies, this.dynamicDependencies), this.addDependenciesToChunk(e.implicitlyLoadedBefore, this.implicitlyLoadedBefore), this.setUpChunkImportsAndExportsForModule(e);
  }
  preRender(e, t, s) {
    const { _: i, getPropertyAccess: n2, n: r2 } = s, a2 = new b({ separator: `${r2}${r2}` });
    this.usedModules = [], this.indentString = function(e2, t2) {
      if (t2.indent !== true)
        return t2.indent;
      for (const t3 of e2) {
        const e3 = kr(t3.originalCode);
        if (e3 !== null)
          return e3;
      }
      return "	";
    }(this.orderedModules, e);
    const o2 = { dynamicImportFunction: e.dynamicImportFunction, exportNamesByVariable: this.exportNamesByVariable, format: e.format, freeze: e.freeze, indent: this.indentString, namespaceToStringTag: e.namespaceToStringTag, outputPluginDriver: this.pluginDriver, snippets: s };
    if (e.hoistTransitiveImports && !this.outputOptions.preserveModules && this.facadeModule !== null)
      for (const e2 of this.dependencies)
        e2 instanceof Tr && this.inlineChunkDependencies(e2);
    this.prepareModulesForRendering(s), this.setIdentifierRenderResolutions(e);
    let h2 = "";
    const l2 = this.renderedModules;
    for (const t2 of this.orderedModules) {
      let s2 = 0;
      if (t2.isIncluded() || this.includedNamespaces.has(t2)) {
        const i3 = t2.render(o2).trim();
        s2 = i3.length(), s2 && (e.compact && i3.lastLine().includes("//") && i3.append("\n"), this.renderedModuleSources.set(t2, i3), a2.addSource(i3), this.usedModules.push(t2));
        const n4 = t2.namespace;
        if (this.includedNamespaces.has(t2) && !this.outputOptions.preserveModules) {
          const e2 = n4.renderBlock(o2);
          n4.renderFirst() ? h2 += r2 + e2 : a2.addSource(new E(e2));
        }
      }
      const { renderedExports: i2, removedExports: n3 } = t2.getRenderedExports(), { renderedModuleSources: c2 } = this;
      l2[t2.id] = { get code() {
        var e2, s3;
        return (s3 = (e2 = c2.get(t2)) === null || e2 === void 0 ? void 0 : e2.toString()) !== null && s3 !== void 0 ? s3 : null;
      }, originalLength: t2.originalCode.length, removedExports: n3, renderedExports: i2, renderedLength: s2 };
    }
    if (h2 && a2.prepend(h2 + r2 + r2), this.needsExportsShim && a2.prepend(`${r2}${s.cnst} _missingExportShim${i}=${i}void 0;${r2}${r2}`), e.compact ? this.renderedSource = a2 : this.renderedSource = a2.trim(), this.renderedHash = void 0, this.isEmpty && this.getExportNames().length === 0 && this.dependencies.size === 0) {
      const e2 = this.getChunkName();
      this.inputOptions.onwarn({ chunkName: e2, code: "EMPTY_BUNDLE", message: `Generated an empty chunk: "${e2}"` });
    }
    this.setExternalRenderPaths(e, t), this.renderedDependencies = this.getChunkDependencyDeclarations(e, n2), this.renderedExports = this.exportMode === "none" ? [] : this.getChunkExportDeclarations(e.format, n2);
  }
  async render(e, t, s, i) {
    Ki("render format", 2);
    const n2 = e.format, r2 = Cn[n2];
    e.dynamicImportFunction && n2 !== "es" && this.inputOptions.onwarn(pe("output.dynamicImportFunction", "outputdynamicImportFunction", 'this option is ignored for formats other than "es"'));
    for (const e2 of this.dependencies) {
      const t2 = this.renderedDependencies.get(e2);
      if (e2 instanceof we) {
        const s2 = e2.renderPath;
        t2.id = Sr(e2.renormalizeRenderPath ? oe(this.id, s2, false, false) : s2);
      } else
        t2.namedExportsMode = e2.exportMode !== "default", t2.id = Sr(oe(this.id, e2.id, false, true));
    }
    this.finaliseDynamicImports(e, i), this.finaliseImportMetas(n2, i);
    const a2 = this.renderedExports.length !== 0 || [...this.renderedDependencies.values()].some((e2) => e2.reexports && e2.reexports.length !== 0);
    let o2 = null;
    const h2 = /* @__PURE__ */ new Set();
    for (const e2 of this.orderedModules) {
      e2.usesTopLevelAwait && (o2 = e2.id);
      const t2 = this.accessedGlobalsByScope.get(e2.scope);
      if (t2)
        for (const e3 of t2)
          h2.add(e3);
    }
    if (o2 !== null && n2 !== "es" && n2 !== "system")
      return he({ code: "INVALID_TLA_FORMAT", id: o2, message: `Module format ${n2} does not support top-level await. Use the "es" or "system" output formats rather.` });
    if (!this.id)
      throw new Error("Internal Error: expecting chunk id");
    const c2 = r2(this.renderedSource, { accessedGlobals: h2, dependencies: [...this.renderedDependencies.values()], exports: this.renderedExports, hasExports: a2, id: this.id, indent: this.indentString, intro: t.intro, isEntryFacade: this.outputOptions.preserveModules || this.facadeModule !== null && this.facadeModule.info.isEntry, isModuleFacade: this.facadeModule !== null, namedExportsMode: this.exportMode !== "default", outro: t.outro, snippets: i, usesTopLevelAwait: o2 !== null, warn: this.inputOptions.onwarn }, e);
    t.banner && c2.prepend(t.banner), t.footer && c2.append(t.footer);
    const u2 = c2.toString();
    Xi("render format", 2);
    let d2 = null;
    const p2 = [];
    let f2 = await function({ code: e2, options: t2, outputPluginDriver: s2, renderChunk: i2, sourcemapChain: n3 }) {
      return s2.hookReduceArg0("renderChunk", [e2, i2, t2], (e3, t3, s3) => {
        if (t3 == null)
          return e3;
        if (typeof t3 == "string" && (t3 = { code: t3, map: void 0 }), t3.map !== null) {
          const e4 = Cr(t3.map);
          n3.push(e4 || { missing: true, plugin: s3.name });
        }
        return t3.code;
      });
    }({ code: u2, options: e, outputPluginDriver: this.pluginDriver, renderChunk: s, sourcemapChain: p2 });
    if (e.sourcemap) {
      let t2;
      Ki("sourcemap", 2), t2 = e.file ? R(e.sourcemapFile || e.file) : e.dir ? R(e.dir, this.id) : R(this.id);
      const s2 = c2.generateDecodedMap({});
      d2 = function(e2, t3, s3, i2, n3, r3) {
        const a3 = Nn(r3), o3 = s3.filter((e3) => !e3.excludeFromSourcemap).map((e3) => $n(e3.id, e3.originalCode, e3.originalSourcemap, e3.sourcemapChain, a3)), h3 = new _n(t3, o3), c3 = i2.reduce(a3, h3);
        let { sources: u3, sourcesContent: d3, names: p3, mappings: f3 } = c3.traceMappings();
        if (e2) {
          const t4 = N(e2);
          u3 = u3.map((e3) => T(t4, e3)), e2 = _(e2);
        }
        return d3 = n3 ? null : d3, new l({ file: e2, mappings: f3, names: p3, sources: u3, sourcesContent: d3 });
      }(t2, s2, this.usedModules, p2, e.sourcemapExcludeSources, this.inputOptions.onwarn), d2.sources = d2.sources.map((s3) => {
        const { sourcemapPathTransform: i2 } = e;
        if (i2) {
          const e2 = i2(s3, `${t2}.map`);
          return typeof e2 != "string" && he(Ee("sourcemapPathTransform function must return a string.")), e2;
        }
        return s3;
      }).map(I), Xi("sourcemap", 2);
    }
    return e.compact || f2[f2.length - 1] === "\n" || (f2 += "\n"), { code: f2, map: d2 };
  }
  addDependenciesToChunk(e, t) {
    for (const s of e)
      if (s instanceof tn) {
        const e2 = this.chunkByModule.get(s);
        e2 && e2 !== this && t.add(e2);
      } else
        t.add(s);
  }
  assignFacadeName({ fileName: e, name: t }, s) {
    e ? this.fileName = e : this.name = this.outputOptions.sanitizeFileName(t || Rr(s));
  }
  checkCircularDependencyImport(e, t) {
    const s = e.module;
    if (s instanceof tn) {
      const o2 = this.chunkByModule.get(s);
      let h2;
      do {
        if (h2 = t.alternativeReexportModules.get(e), h2) {
          const l2 = this.chunkByModule.get(h2);
          l2 && l2 !== o2 && this.inputOptions.onwarn((i = s.getExportNamesByVariable().get(e)[0], n2 = s.id, r2 = h2.id, a2 = t.id, { code: ce.CYCLIC_CROSS_CHUNK_REEXPORT, exporter: n2, importer: a2, message: `Export "${i}" of module ${ne(n2)} was reexported through module ${ne(r2)} while both modules are dependencies of each other and will end up in different chunks by current Rollup settings. This scenario is not well supported at the moment as it will produce a circular dependency between chunks and will likely lead to broken execution order.
Either change the import in ${ne(a2)} to point directly to the exporting module or do not use "preserveModules" to ensure these modules end up in the same chunk.`, reexporter: r2 })), t = h2;
        }
      } while (h2);
    }
    var i, n2, r2, a2;
  }
  computeContentHashWithDependencies(e, t, s) {
    const i = mr();
    i.update([e.intro, e.outro, e.banner, e.footer].join(":")), i.update(t.format);
    const n2 = /* @__PURE__ */ new Set([this]);
    for (const r2 of n2)
      if (r2 instanceof we ? i.update(`:${r2.renderPath}`) : (i.update(r2.getRenderedHash()), i.update(r2.generateId(e, t, s, false))), !(r2 instanceof we))
        for (const e2 of [...r2.dependencies, ...r2.dynamicDependencies])
          n2.add(e2);
    return i.digest("hex").substr(0, 8);
  }
  ensureReexportsAreAvailableForModule(e) {
    const t = e.getExportNamesByVariable();
    for (const s of t.keys()) {
      const t2 = s instanceof Oi, i = t2 ? s.getBaseVariable() : s;
      if (!(i instanceof Li && this.outputOptions.preserveModules)) {
        this.checkCircularDependencyImport(i, e);
        const s2 = i.module;
        if (s2 instanceof tn) {
          const e2 = this.chunkByModule.get(s2);
          e2 && e2 !== this && (e2.exports.add(i), t2 && this.imports.add(i));
        }
      }
    }
  }
  finaliseDynamicImports(e, t) {
    const s = e.format === "amd";
    for (const [e2, i] of this.renderedModuleSources)
      for (const { node: n2, resolution: r2 } of e2.dynamicImports) {
        const e3 = this.chunkByModule.get(r2), a2 = this.facadeChunkByModule.get(r2);
        if (!r2 || !n2.included || e3 === this)
          continue;
        const o2 = r2 instanceof tn ? `'${Sr(oe(this.id, (a2 || e3).id, s, true))}'` : r2 instanceof we ? `'${Sr(r2.renormalizeRenderPath ? oe(this.id, r2.renderPath, s, false) : r2.renderPath)}'` : r2;
        n2.renderFinalResolution(i, o2, r2 instanceof tn && !(a2 == null ? void 0 : a2.strictFacade) && e3.exportNamesByVariable.get(r2.namespace)[0], t);
      }
  }
  finaliseImportMetas(e, t) {
    for (const [s, i] of this.renderedModuleSources)
      for (const n2 of s.importMetas)
        n2.renderFinalMechanism(i, this.id, e, t, this.pluginDriver);
  }
  generateVariableName() {
    if (this.manualChunkAlias)
      return this.manualChunkAlias;
    const e = this.entryModules[0] || this.implicitEntryModules[0] || this.dynamicEntryModules[0] || this.orderedModules[this.orderedModules.length - 1];
    return e ? Rr(e) : "chunk";
  }
  getChunkDependencyDeclarations(e, t) {
    const s = this.getImportSpecifiers(t), i = this.getReexportSpecifiers(), n2 = /* @__PURE__ */ new Map();
    for (const t2 of this.dependencies) {
      const r2 = s.get(t2) || null, a2 = i.get(t2) || null, o2 = t2 instanceof we || t2.exportMode !== "default";
      n2.set(t2, { defaultVariableName: t2.defaultVariableName, globalName: t2 instanceof we && (e.format === "umd" || e.format === "iife") && $r(t2, e.globals, (r2 || a2) !== null, this.inputOptions.onwarn), id: void 0, imports: r2, isChunk: t2 instanceof Tr, name: t2.variableName, namedExportsMode: o2, namespaceVariableName: t2.namespaceVariableName, reexports: a2 });
    }
    return n2;
  }
  getChunkExportDeclarations(e, t) {
    const s = [];
    for (const i of this.getExportNames()) {
      if (i[0] === "*")
        continue;
      const n2 = this.exportsByName.get(i);
      if (!(n2 instanceof Oi)) {
        const e2 = n2.module;
        if (e2 && this.chunkByModule.get(e2) !== this)
          continue;
      }
      let r2 = null, a2 = false, o2 = n2.getName(t);
      if (n2 instanceof Tt) {
        for (const e2 of n2.declarations)
          if (e2.parent instanceof zs || e2 instanceof Ws && e2.declaration instanceof zs) {
            a2 = true;
            break;
          }
      } else
        n2 instanceof Oi && (r2 = o2, e === "es" && (o2 = n2.renderName));
      s.push({ exported: i, expression: r2, hoisted: a2, local: o2 });
    }
    return s;
  }
  getDependenciesToBeDeconflicted(e, t, s) {
    const i = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set();
    for (const t2 of [...this.exportNamesByVariable.keys(), ...this.imports])
      if (e || t2.isNamespace) {
        const a2 = t2.module;
        if (a2 instanceof we)
          i.add(a2), e && (t2.name === "default" ? Ks[String(s(a2.id))] && n2.add(a2) : t2.name === "*" && Ys[String(s(a2.id))] && r2.add(a2));
        else {
          const s2 = this.chunkByModule.get(a2);
          s2 !== this && (i.add(s2), e && s2.exportMode === "default" && t2.isNamespace && r2.add(s2));
        }
      }
    if (t)
      for (const e2 of this.dependencies)
        i.add(e2);
    return { deconflictedDefault: n2, deconflictedNamespace: r2, dependencies: i };
  }
  getFallbackChunkName() {
    return this.manualChunkAlias ? this.manualChunkAlias : this.dynamicName ? this.dynamicName : this.fileName ? ie(this.fileName) : ie(this.orderedModules[this.orderedModules.length - 1].id);
  }
  getImportSpecifiers(e) {
    const { interop: t } = this.outputOptions, s = /* @__PURE__ */ new Map();
    for (const i of this.imports) {
      const n2 = i.module;
      let r2, a2;
      if (n2 instanceof we) {
        if (r2 = n2, a2 = i.name, a2 !== "default" && a2 !== "*" && t(n2.id) === "defaultOnly")
          return he(ge(n2.id, a2, false));
      } else
        r2 = this.chunkByModule.get(n2), a2 = r2.getVariableExportName(i);
      M(s, r2, () => []).push({ imported: a2, local: i.getName(e) });
    }
    return s;
  }
  getImportedBindingsPerDependency() {
    const e = {};
    for (const [t, s] of this.renderedDependencies) {
      const i = /* @__PURE__ */ new Set();
      if (s.imports)
        for (const { imported: e2 } of s.imports)
          i.add(e2);
      if (s.reexports)
        for (const { imported: e2 } of s.reexports)
          i.add(e2);
      e[t.id] = [...i];
    }
    return e;
  }
  getReexportSpecifiers() {
    const { externalLiveBindings: e, interop: t } = this.outputOptions, s = /* @__PURE__ */ new Map();
    for (let i of this.getExportNames()) {
      let n2, r2, a2 = false;
      if (i[0] === "*") {
        const s2 = i.substring(1);
        t(s2) === "defaultOnly" && this.inputOptions.onwarn(ye(s2)), a2 = e, n2 = this.modulesById.get(s2), r2 = i = "*";
      } else {
        const s2 = this.exportsByName.get(i);
        if (s2 instanceof Oi)
          continue;
        const o2 = s2.module;
        if (o2 instanceof tn) {
          if (n2 = this.chunkByModule.get(o2), n2 === this)
            continue;
          r2 = n2.getVariableExportName(s2), a2 = s2.isReassigned;
        } else {
          if (n2 = o2, r2 = s2.name, r2 !== "default" && r2 !== "*" && t(o2.id) === "defaultOnly")
            return he(ge(o2.id, r2, true));
          a2 = e && (r2 !== "default" || Xs(String(t(o2.id)), true));
        }
      }
      M(s, n2, () => []).push({ imported: r2, needsLiveBinding: a2, reexported: i });
    }
    return s;
  }
  getReferencedFiles() {
    const e = [];
    for (const t of this.orderedModules)
      for (const s of t.importMetas) {
        const t2 = s.getReferencedFileName(this.pluginDriver);
        t2 && e.push(t2);
      }
    return e;
  }
  inlineChunkDependencies(e) {
    for (const t of e.dependencies)
      this.dependencies.has(t) || (this.dependencies.add(t), t instanceof Tr && this.inlineChunkDependencies(t));
  }
  prepareModulesForRendering(e) {
    var t;
    const s = this.accessedGlobalsByScope;
    for (const i of this.orderedModules) {
      for (const { node: n2, resolution: r2 } of i.dynamicImports)
        if (n2.included)
          if (r2 instanceof tn) {
            const i2 = this.chunkByModule.get(r2);
            i2 === this ? n2.setInternalResolution(r2.namespace) : n2.setExternalResolution(((t = this.facadeChunkByModule.get(r2)) === null || t === void 0 ? void 0 : t.exportMode) || i2.exportMode, r2, this.outputOptions, e, this.pluginDriver, s);
          } else
            n2.setExternalResolution("external", r2, this.outputOptions, e, this.pluginDriver, s);
      for (const e2 of i.importMetas)
        e2.addAccessedGlobals(this.outputOptions.format, s);
      this.includedNamespaces.has(i) && !this.outputOptions.preserveModules && i.namespace.prepare(s);
    }
  }
  setExternalRenderPaths(e, t) {
    for (const s of [...this.dependencies, ...this.dynamicDependencies])
      s instanceof we && s.setRenderPath(e, t);
  }
  setIdentifierRenderResolutions({ format: e, interop: t, namespaceToStringTag: s }) {
    const i = /* @__PURE__ */ new Set();
    for (const t2 of this.getExportNames()) {
      const s2 = this.exportsByName.get(t2);
      e !== "es" && e !== "system" && s2.isReassigned && !s2.isId ? s2.setRenderNames("exports", t2) : s2 instanceof Oi ? i.add(s2) : s2.setRenderNames(null, null);
    }
    for (const e2 of this.orderedModules)
      if (e2.needsExportShim) {
        this.needsExportsShim = true;
        break;
      }
    const n2 = /* @__PURE__ */ new Set(["Object", "Promise"]);
    switch (this.needsExportsShim && n2.add("_missingExportShim"), s && n2.add("Symbol"), e) {
      case "system":
        n2.add("module").add("exports");
        break;
      case "es":
        break;
      case "cjs":
        n2.add("module").add("require").add("__filename").add("__dirname");
      default:
        n2.add("exports");
        for (const e2 of ui)
          n2.add(e2);
    }
    yr(this.orderedModules, this.getDependenciesToBeDeconflicted(e !== "es" && e !== "system", e === "amd" || e === "umd" || e === "iife", t), this.imports, n2, e, t, this.outputOptions.preserveModules, this.outputOptions.externalLiveBindings, this.chunkByModule, i, this.exportNamesByVariable, this.accessedGlobalsByScope, this.includedNamespaces);
  }
  setUpChunkImportsAndExportsForModule(e) {
    const t = new Set(e.imports);
    if (!this.outputOptions.preserveModules && this.includedNamespaces.has(e)) {
      const s = e.namespace.getMemberVariables();
      for (const e2 of Object.values(s))
        t.add(e2);
    }
    for (let s of t) {
      s instanceof _i && (s = s.getOriginalVariable()), s instanceof Oi && (s = s.getBaseVariable());
      const t2 = this.chunkByModule.get(s.module);
      t2 !== this && (this.imports.add(s), !(s instanceof Li && this.outputOptions.preserveModules) && s.module instanceof tn && (t2.exports.add(s), this.checkCircularDependencyImport(s, e)));
    }
    (this.includedNamespaces.has(e) || e.info.isEntry && e.preserveSignature !== false || e.includedDynamicImporters.some((e2) => this.chunkByModule.get(e2) !== this)) && this.ensureReexportsAreAvailableForModule(e);
    for (const { node: t2, resolution: s } of e.dynamicImports)
      t2.included && s instanceof tn && this.chunkByModule.get(s) === this && !this.includedNamespaces.has(s) && (this.includedNamespaces.add(s), this.ensureReexportsAreAvailableForModule(s));
  }
}
function Rr(e) {
  var t, s, i, n2;
  return (n2 = (s = (t = e.chunkNames.find(({ isUserDefined: e2 }) => e2)) === null || t === void 0 ? void 0 : t.name) !== null && s !== void 0 ? s : (i = e.chunkNames[0]) === null || i === void 0 ? void 0 : i.name) !== null && n2 !== void 0 ? n2 : ie(e.id);
}
const Mr = /[?#]/;
function Dr(e, t, s) {
  e in t && s(function(e2) {
    return { code: ce.FILE_NAME_CONFLICT, message: `The emitted file "${e2}" overwrites a previously emitted file of the same name.` };
  }(e)), t[e] = Lr;
}
const Lr = { type: "placeholder" };
function Or(e, t, s) {
  if (!(typeof e == "string" || e instanceof Uint8Array)) {
    const e2 = t.fileName || t.name || s;
    return he(Ee(`Could not set source for ${typeof e2 == "string" ? `asset "${e2}"` : "unnamed asset"}, asset source needs to be a string, Uint8Array or Buffer.`));
  }
  return e;
}
function Vr(e, t) {
  return typeof e.fileName != "string" ? he((s = e.name || t, { code: ce.ASSET_NOT_FINALISED, message: `Plugin error - Unable to get file name for asset "${s}". Ensure that the source is set and that generate is called first.` })) : e.fileName;
  var s;
}
function Br(e, t) {
  var s;
  const i = e.fileName || e.module && ((s = t == null ? void 0 : t.get(e.module)) === null || s === void 0 ? void 0 : s.id);
  return i || he((n2 = e.fileName || e.name, { code: ce.CHUNK_NOT_GENERATED, message: `Plugin error - Unable to get file name for chunk "${n2}". Ensure that generate is called first.` }));
  var n2;
}
class Fr {
  constructor(e, t, s) {
    this.graph = e, this.options = t, this.bundle = null, this.facadeChunkByModule = null, this.outputOptions = null, this.assertAssetsFinalized = () => {
      for (const [t2, s2] of this.filesByReferenceId)
        if (s2.type === "asset" && typeof s2.fileName != "string")
          return he((e2 = s2.name || t2, { code: ce.ASSET_SOURCE_MISSING, message: `Plugin error creating asset "${e2}" - no asset source set.` }));
      var e2;
    }, this.emitFile = (e2) => function(e3) {
      return Boolean(e3 && (e3.type === "asset" || e3.type === "chunk"));
    }(e2) ? function(e3) {
      const t2 = e3.fileName || e3.name;
      return !t2 || typeof t2 == "string" && !re(t2);
    }(e2) ? e2.type === "chunk" ? this.emitChunk(e2) : this.emitAsset(e2) : he(Ee(`The "fileName" or "name" properties of emitted files must be strings that are neither absolute nor relative paths, received "${e2.fileName || e2.name}".`)) : he(Ee(`Emitted files must be of type "asset" or "chunk", received "${e2 && e2.type}".`)), this.getFileName = (e2) => {
      const t2 = this.filesByReferenceId.get(e2);
      return t2 ? t2.type === "chunk" ? Br(t2, this.facadeChunkByModule) : Vr(t2, e2) : he((s2 = e2, { code: ce.FILE_NOT_FOUND, message: `Plugin error - Unable to get file name for unknown file "${s2}".` }));
      var s2;
    }, this.setAssetSource = (e2, t2) => {
      const s2 = this.filesByReferenceId.get(e2);
      if (!s2)
        return he((i = e2, { code: ce.ASSET_NOT_FOUND, message: `Plugin error - Unable to set the source for unknown asset "${i}".` }));
      var i, n2;
      if (s2.type !== "asset")
        return he(Ee(`Asset sources can only be set for emitted assets but "${e2}" is an emitted chunk.`));
      if (s2.source !== void 0)
        return he((n2 = s2.name || e2, { code: ce.ASSET_SOURCE_ALREADY_SET, message: `Unable to set the source for asset "${n2}", source already set.` }));
      const r2 = Or(t2, s2, e2);
      this.bundle ? this.finalizeAsset(s2, r2, e2, this.bundle) : s2.source = r2;
    }, this.setOutputBundle = (e2, t2, s2) => {
      this.outputOptions = t2, this.bundle = e2, this.facadeChunkByModule = s2;
      for (const e3 of this.filesByReferenceId.values())
        e3.fileName && Dr(e3.fileName, this.bundle, this.options.onwarn);
      for (const [e3, t3] of this.filesByReferenceId)
        t3.type === "asset" && t3.source !== void 0 && this.finalizeAsset(t3, t3.source, e3, this.bundle);
    }, this.filesByReferenceId = s ? new Map(s.filesByReferenceId) : /* @__PURE__ */ new Map();
  }
  assignReferenceId(e, t) {
    let s;
    do {
      s = mr().update(s || t).digest("hex").substring(0, 8);
    } while (this.filesByReferenceId.has(s));
    return this.filesByReferenceId.set(s, e), s;
  }
  emitAsset(e) {
    const t = e.source !== void 0 ? Or(e.source, e, null) : void 0, s = { fileName: e.fileName, name: e.name, source: t, type: "asset" }, i = this.assignReferenceId(s, e.fileName || e.name || e.type);
    return this.bundle && (e.fileName && Dr(e.fileName, this.bundle, this.options.onwarn), t !== void 0 && this.finalizeAsset(s, t, i, this.bundle)), i;
  }
  emitChunk(e) {
    if (this.graph.phase > Vi.LOAD_AND_PARSE)
      return he({ code: ce.INVALID_ROLLUP_PHASE, message: "Cannot emit chunks after module loading has finished." });
    if (typeof e.id != "string")
      return he(Ee(`Emitted chunks need to have a valid string id, received "${e.id}"`));
    const t = { fileName: e.fileName, module: null, name: e.name || e.id, type: "chunk" };
    return this.graph.moduleLoader.emitChunk(e).then((e2) => t.module = e2).catch(() => {
    }), this.assignReferenceId(t, e.id);
  }
  finalizeAsset(e, t, s, i) {
    const n2 = e.fileName || function(e2, t2) {
      for (const [s2, i2] of Object.entries(e2))
        if (i2.type === "asset" && zr(t2, i2.source))
          return s2;
      return null;
    }(i, t) || function(e2, t2, s2, i2) {
      const n3 = s2.sanitizeFileName(e2 || "asset");
      return _r(Ir(typeof s2.assetFileNames == "function" ? s2.assetFileNames({ name: e2, source: t2, type: "asset" }) : s2.assetFileNames, "output.assetFileNames", { ext: () => $(n3).substring(1), extname: () => $(n3), hash: () => mr().update(n3).update(":").update(t2).digest("hex").substring(0, 8), name: () => n3.substring(0, n3.length - $(n3).length) }), i2);
    }(e.name, t, this.outputOptions, i), r2 = __spreadProps(__spreadValues({}, e), { fileName: n2, source: t });
    this.filesByReferenceId.set(s, r2);
    const { options: a2 } = this;
    i[n2] = { fileName: n2, get isAsset() {
      return be(`Accessing "isAsset" on files in the bundle is deprecated, please use "type === 'asset'" instead`, true, a2), true;
    }, name: e.name, source: t, type: "asset" };
  }
}
function zr(e, t) {
  if (typeof e == "string")
    return e === t;
  if (typeof t == "string")
    return false;
  if ("equals" in e)
    return e.equals(t);
  if (e.length !== t.length)
    return false;
  for (let s = 0; s < e.length; s++)
    if (e[s] !== t[s])
      return false;
  return true;
}
const Wr = (e, t) => t ? `${e}
${t}` : e, jr = (e, t) => t ? `${e}

${t}` : e;
function Ur(e, t) {
  const s = [], i = new Set(t.keys()), n2 = /* @__PURE__ */ Object.create(null);
  for (const [e2, s2] of t) {
    Gr(e2, n2[s2] = n2[s2] || [], i);
  }
  for (const [e2, t2] of Object.entries(n2))
    s.push({ alias: e2, modules: t2 });
  const r2 = /* @__PURE__ */ new Map(), { dependentEntryPointsByModule: a2, dynamicEntryModules: o2 } = function(e2) {
    const t2 = /* @__PURE__ */ new Set(), s2 = /* @__PURE__ */ new Map(), i2 = new Set(e2);
    for (const e3 of i2) {
      const n3 = /* @__PURE__ */ new Set([e3]);
      for (const r3 of n3) {
        M(s2, r3, () => /* @__PURE__ */ new Set()).add(e3);
        for (const e4 of r3.getDependenciesToBeIncluded())
          e4 instanceof we || n3.add(e4);
        for (const { resolution: e4 } of r3.dynamicImports)
          e4 instanceof tn && e4.includedDynamicImporters.length > 0 && (t2.add(e4), i2.add(e4));
        for (const e4 of r3.implicitlyLoadedBefore)
          t2.add(e4), i2.add(e4);
      }
    }
    return { dependentEntryPointsByModule: s2, dynamicEntryModules: t2 };
  }(e), h2 = function(e2, t2) {
    const s2 = /* @__PURE__ */ new Map();
    for (const i2 of t2) {
      const t3 = M(s2, i2, () => /* @__PURE__ */ new Set());
      for (const s3 of [...i2.includedDynamicImporters, ...i2.implicitlyLoadedAfter])
        for (const i3 of e2.get(s3))
          t3.add(i3);
    }
    return s2;
  }(a2, o2), l2 = new Set(e);
  function c2(e2, t2) {
    const s2 = /* @__PURE__ */ new Set([e2]);
    for (const n3 of s2) {
      const o3 = M(r2, n3, () => /* @__PURE__ */ new Set());
      if (!t2 || !u2(t2, a2.get(n3))) {
        o3.add(e2);
        for (const e3 of n3.getDependenciesToBeIncluded())
          e3 instanceof we || i.has(e3) || s2.add(e3);
      }
    }
  }
  function u2(e2, t2) {
    const s2 = new Set(e2);
    for (const e3 of s2)
      if (!t2.has(e3)) {
        if (l2.has(e3))
          return false;
        const t3 = h2.get(e3);
        for (const e4 of t3)
          s2.add(e4);
      }
    return true;
  }
  for (const t2 of e)
    i.has(t2) || c2(t2, null);
  for (const e2 of o2)
    i.has(e2) || c2(e2, h2.get(e2));
  return s.push(...function(e2, t2) {
    const s2 = /* @__PURE__ */ Object.create(null);
    for (const [i2, n3] of t2) {
      let t3 = "";
      for (const s3 of e2)
        t3 += n3.has(s3) ? "X" : "_";
      const r3 = s2[t3];
      r3 ? r3.push(i2) : s2[t3] = [i2];
    }
    return Object.values(s2).map((e3) => ({ alias: null, modules: e3 }));
  }([...e, ...o2], r2)), s;
}
function Gr(e, t, s) {
  const i = /* @__PURE__ */ new Set([e]);
  for (const e2 of i) {
    s.add(e2), t.push(e2);
    for (const t2 of e2.dependencies)
      t2 instanceof we || s.has(t2) || i.add(t2);
  }
}
const Hr = (e, t) => e.execIndex > t.execIndex ? 1 : -1;
function qr(e, t, s) {
  const i = Symbol(e.id), n2 = [ne(e.id)];
  let r2 = t;
  for (e.cycles.add(i); r2 !== e; )
    r2.cycles.add(i), n2.push(ne(r2.id)), r2 = s.get(r2);
  return n2.push(n2[0]), n2.reverse(), n2;
}
const Kr = (e, t) => t ? `(${e})` : e, Xr = /^(?!\d)[\w$]+$/;
class Yr {
  constructor(e, t, s, i, n2) {
    this.outputOptions = e, this.unsetOptions = t, this.inputOptions = s, this.pluginDriver = i, this.graph = n2, this.facadeChunkByModule = /* @__PURE__ */ new Map(), this.includedNamespaces = /* @__PURE__ */ new Set();
  }
  async generate(e) {
    Ki("GENERATE", 1);
    const t = /* @__PURE__ */ Object.create(null);
    this.pluginDriver.setOutputBundle(t, this.outputOptions, this.facadeChunkByModule);
    try {
      await this.pluginDriver.hookParallel("renderStart", [this.outputOptions, this.inputOptions]), Ki("generate chunks", 2);
      const e2 = await this.generateChunks();
      e2.length > 1 && function(e3, t2) {
        if (e3.format === "umd" || e3.format === "iife")
          return he(pe("output.format", "outputformat", "UMD and IIFE output formats are not supported for code-splitting builds", e3.format));
        if (typeof e3.file == "string")
          return he(pe("output.file", "outputdir", 'when building multiple chunks, the "output.dir" option must be used, not "output.file". To inline dynamic imports, set the "inlineDynamicImports" option'));
        if (e3.sourcemapFile)
          return he(pe("output.sourcemapFile", "outputsourcemapfile", '"output.sourcemapFile" is only supported for single-file builds'));
        !e3.amd.autoId && e3.amd.id && t2(pe("output.amd.id", "outputamd", 'this option is only properly supported for single-file builds. Use "output.amd.autoId" and "output.amd.basePath" instead'));
      }(this.outputOptions, this.inputOptions.onwarn);
      const s = function(e3) {
        if (e3.length === 0)
          return "/";
        if (e3.length === 1)
          return N(e3[0]);
        const t2 = e3.slice(1).reduce((e4, t3) => {
          const s2 = t3.split(/\/+|\\+/);
          let i2;
          for (i2 = 0; e4[i2] === s2[i2] && i2 < Math.min(e4.length, s2.length); i2++)
            ;
          return e4.slice(0, i2);
        }, e3[0].split(/\/+|\\+/));
        return t2.length > 1 ? t2.join("/") : "/";
      }(function(e3) {
        const t2 = [];
        for (const s2 of e3)
          for (const e4 of s2.entryModules)
            w(e4.id) && t2.push(e4.id);
        return t2;
      }(e2));
      Xi("generate chunks", 2), Ki("render modules", 2);
      const i = await async function(e3, t2) {
        try {
          let [s2, i2, n3, r2] = await Promise.all([t2.hookReduceValue("banner", e3.banner(), [], Wr), t2.hookReduceValue("footer", e3.footer(), [], Wr), t2.hookReduceValue("intro", e3.intro(), [], jr), t2.hookReduceValue("outro", e3.outro(), [], jr)]);
          return n3 && (n3 += "\n\n"), r2 && (r2 = `

${r2}`), s2.length && (s2 += "\n"), i2.length && (i2 = "\n" + i2), { banner: s2, footer: i2, intro: n3, outro: r2 };
        } catch (e4) {
          return he({ code: "ADDON_ERROR", message: `Could not retrieve ${e4.hook}. Check configuration of plugin ${e4.plugin}.
	Error Message: ${e4.message}` });
        }
      }(this.outputOptions, this.pluginDriver), n2 = function({ compact: e3, generatedCode: { arrowFunctions: t2, constBindings: s2, objectShorthand: i2, reservedNamesAsProps: n3 } }) {
        const { _: r2, n: a2, s: o2 } = e3 ? { _: "", n: "", s: "" } : { _: " ", n: "\n", s: ";" }, h2 = s2 ? "const" : "var", l2 = (e4, { isAsync: t3, name: s3 }) => `${t3 ? "async " : ""}function${s3 ? ` ${s3}` : ""}${r2}(${e4.join(`,${r2}`)})${r2}`, c2 = t2 ? (e4, { isAsync: t3, name: s3 }) => {
          const i3 = e4.length === 1;
          return `${s3 ? `${h2} ${s3}${r2}=${r2}` : ""}${t3 ? `async${i3 ? " " : r2}` : ""}${i3 ? e4[0] : `(${e4.join(`,${r2}`)})`}${r2}=>${r2}`;
        } : l2, u2 = (e4, { functionReturn: s3, lineBreakIndent: i3, name: n4 }) => [`${c2(e4, { isAsync: false, name: n4 })}${t2 ? i3 ? `${a2}${i3.base}${i3.t}` : "" : `{${i3 ? `${a2}${i3.base}${i3.t}` : r2}${s3 ? "return " : ""}`}`, t2 ? `${n4 ? ";" : ""}${i3 ? `${a2}${i3.base}` : ""}` : `${o2}${i3 ? `${a2}${i3.base}` : r2}}`], d2 = n3 ? (e4) => Xr.test(e4) : (e4) => !Ae.has(e4) && Xr.test(e4);
        return { _: r2, cnst: h2, getDirectReturnFunction: u2, getDirectReturnIifeLeft: (e4, s3, { needsArrowReturnParens: i3, needsWrappedFunction: n4 }) => {
          const [r3, a3] = u2(e4, { functionReturn: true, lineBreakIndent: null, name: null });
          return `${Kr(`${r3}${Kr(s3, t2 && i3)}${a3}`, t2 || n4)}(`;
        }, getFunctionIntro: c2, getNonArrowFunctionIntro: l2, getObject(e4, { lineBreakIndent: t3 }) {
          const s3 = t3 ? `${a2}${t3.base}${t3.t}` : r2;
          return `{${e4.map(([e5, t4]) => {
            if (e5 === null)
              return `${s3}${t4}`;
            const n4 = !d2(e5);
            return e5 === t4 && i2 && !n4 ? s3 + e5 : `${s3}${n4 ? `'${e5}'` : e5}:${r2}${t4}`;
          }).join(",")}${e4.length === 0 ? "" : t3 ? `${a2}${t3.base}` : r2}}`;
        }, getPropertyAccess: (e4) => d2(e4) ? `.${e4}` : `[${JSON.stringify(e4)}]`, n: a2, s: o2 };
      }(this.outputOptions);
      this.prerenderChunks(e2, s, n2), Xi("render modules", 2), await this.addFinalizedChunksToBundle(e2, s, i, t, n2);
    } catch (e2) {
      throw await this.pluginDriver.hookParallel("renderError", [e2]), e2;
    }
    return await this.pluginDriver.hookSeq("generateBundle", [this.outputOptions, t, e]), this.finaliseAssets(t), Xi("GENERATE", 1), t;
  }
  async addFinalizedChunksToBundle(e, t, s, i, n2) {
    this.assignChunkIds(e, t, s, i);
    for (const t2 of e)
      i[t2.id] = t2.getChunkInfoWithFileNames();
    await Promise.all(e.map(async (e2) => {
      const t2 = i[e2.id];
      Object.assign(t2, await e2.render(this.outputOptions, s, t2, n2));
    }));
  }
  async addManualChunks(e) {
    const t = /* @__PURE__ */ new Map(), s = await Promise.all(Object.entries(e).map(async ([e2, t2]) => ({ alias: e2, entries: await this.graph.moduleLoader.addAdditionalModules(t2) })));
    for (const { alias: e2, entries: i } of s)
      for (const s2 of i)
        Zr(e2, s2, t);
    return t;
  }
  assignChunkIds(e, t, s, i) {
    const n2 = [], r2 = [];
    for (const t2 of e)
      (t2.facadeModule && t2.facadeModule.isUserDefinedEntryPoint ? n2 : r2).push(t2);
    const a2 = n2.concat(r2);
    for (const e2 of a2)
      this.outputOptions.file ? e2.id = _(this.outputOptions.file) : this.outputOptions.preserveModules ? e2.id = e2.generateIdPreserveModules(t, this.outputOptions, i, this.unsetOptions) : e2.id = e2.generateId(s, this.outputOptions, i, true), i[e2.id] = Lr;
  }
  assignManualChunks(e) {
    const t = [], s = { getModuleIds: () => this.graph.modulesById.keys(), getModuleInfo: this.graph.getModuleInfo };
    for (const i2 of this.graph.modulesById.values())
      if (i2 instanceof tn) {
        const n2 = e(i2.id, s);
        typeof n2 == "string" && t.push([n2, i2]);
      }
    t.sort(([e2], [t2]) => e2 > t2 ? 1 : e2 < t2 ? -1 : 0);
    const i = /* @__PURE__ */ new Map();
    for (const [e2, s2] of t)
      Zr(e2, s2, i);
    return i;
  }
  finaliseAssets(e) {
    for (const t of Object.values(e))
      if (t.type || (be('A plugin is directly adding properties to the bundle object in the "generateBundle" hook. This is deprecated and will be removed in a future Rollup version, please use "this.emitFile" instead.', true, this.inputOptions), t.type = "asset"), this.outputOptions.validate && "code" in t)
        try {
          this.graph.contextParse(t.code, { allowHashBang: true, ecmaVersion: "latest" });
        } catch (e2) {
          this.inputOptions.onwarn(ue(t, e2));
        }
    this.pluginDriver.finaliseAssets();
  }
  async generateChunks() {
    const { manualChunks: e } = this.outputOptions, t = typeof e == "object" ? await this.addManualChunks(e) : this.assignManualChunks(e), s = [], i = /* @__PURE__ */ new Map();
    for (const { alias: e2, modules: n3 } of this.outputOptions.inlineDynamicImports ? [{ alias: null, modules: Qr(this.graph.modulesById) }] : this.outputOptions.preserveModules ? Qr(this.graph.modulesById).map((e3) => ({ alias: null, modules: [e3] })) : Ur(this.graph.entryModules, t)) {
      n3.sort(Hr);
      const t2 = new Tr(n3, this.inputOptions, this.outputOptions, this.unsetOptions, this.pluginDriver, this.graph.modulesById, i, this.facadeChunkByModule, this.includedNamespaces, e2);
      s.push(t2);
      for (const e3 of n3)
        i.set(e3, t2);
    }
    for (const e2 of s)
      e2.link();
    const n2 = [];
    for (const e2 of s)
      n2.push(...e2.generateFacades());
    return [...s, ...n2];
  }
  prerenderChunks(e, t, s) {
    for (const t2 of e)
      t2.generateExports();
    for (const i of e)
      i.preRender(this.outputOptions, t, s);
  }
}
function Qr(e) {
  return [...e.values()].filter((e2) => e2 instanceof tn && (e2.isIncluded() || e2.info.isEntry || e2.includedDynamicImporters.length > 0));
}
function Zr(e, t, s) {
  const i = s.get(t);
  if (typeof i == "string" && i !== e)
    return he((n2 = t.id, r2 = e, a2 = i, { code: ce.INVALID_CHUNK, message: `Cannot assign ${ne(n2)} to the "${r2}" chunk as it is already in the "${a2}" chunk.` }));
  var n2, r2, a2;
  s.set(t, e);
}
var Jr = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], ea = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], ta = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", sa = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" }, ia = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", na = { 5: ia, "5module": ia + " export import", 6: ia + " const class extends export import super" }, ra = /^in(stanceof)?$/, aa = new RegExp("[" + ta + "]"), oa = new RegExp("[" + ta + "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F]");
function ha(e, t) {
  for (var s = 65536, i = 0; i < t.length; i += 2) {
    if ((s += t[i]) > e)
      return false;
    if ((s += t[i + 1]) >= e)
      return true;
  }
}
function la(e, t) {
  return e < 65 ? e === 36 : e < 91 || (e < 97 ? e === 95 : e < 123 || (e <= 65535 ? e >= 170 && aa.test(String.fromCharCode(e)) : t !== false && ha(e, ea)));
}
function ca(e, t) {
  return e < 48 ? e === 36 : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? e === 95 : e < 123 || (e <= 65535 ? e >= 170 && oa.test(String.fromCharCode(e)) : t !== false && (ha(e, ea) || ha(e, Jr)))));
}
var ua = function(e, t) {
  t === void 0 && (t = {}), this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop || null, this.updateContext = null;
};
function da(e, t) {
  return new ua(e, { beforeExpr: true, binop: t });
}
var pa = { beforeExpr: true }, fa = { startsExpr: true }, ma = {};
function ga(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, ma[e] = new ua(e, t);
}
var ya = { num: new ua("num", fa), regexp: new ua("regexp", fa), string: new ua("string", fa), name: new ua("name", fa), privateId: new ua("privateId", fa), eof: new ua("eof"), bracketL: new ua("[", { beforeExpr: true, startsExpr: true }), bracketR: new ua("]"), braceL: new ua("{", { beforeExpr: true, startsExpr: true }), braceR: new ua("}"), parenL: new ua("(", { beforeExpr: true, startsExpr: true }), parenR: new ua(")"), comma: new ua(",", pa), semi: new ua(";", pa), colon: new ua(":", pa), dot: new ua("."), question: new ua("?", pa), questionDot: new ua("?."), arrow: new ua("=>", pa), template: new ua("template"), invalidTemplate: new ua("invalidTemplate"), ellipsis: new ua("...", pa), backQuote: new ua("`", fa), dollarBraceL: new ua("${", { beforeExpr: true, startsExpr: true }), eq: new ua("=", { beforeExpr: true, isAssign: true }), assign: new ua("_=", { beforeExpr: true, isAssign: true }), incDec: new ua("++/--", { prefix: true, postfix: true, startsExpr: true }), prefix: new ua("!/~", { beforeExpr: true, prefix: true, startsExpr: true }), logicalOR: da("||", 1), logicalAND: da("&&", 2), bitwiseOR: da("|", 3), bitwiseXOR: da("^", 4), bitwiseAND: da("&", 5), equality: da("==/!=/===/!==", 6), relational: da("</>/<=/>=", 7), bitShift: da("<</>>/>>>", 8), plusMin: new ua("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }), modulo: da("%", 10), star: da("*", 10), slash: da("/", 10), starstar: new ua("**", { beforeExpr: true }), coalesce: da("??", 1), _break: ga("break"), _case: ga("case", pa), _catch: ga("catch"), _continue: ga("continue"), _debugger: ga("debugger"), _default: ga("default", pa), _do: ga("do", { isLoop: true, beforeExpr: true }), _else: ga("else", pa), _finally: ga("finally"), _for: ga("for", { isLoop: true }), _function: ga("function", fa), _if: ga("if"), _return: ga("return", pa), _switch: ga("switch"), _throw: ga("throw", pa), _try: ga("try"), _var: ga("var"), _const: ga("const"), _while: ga("while", { isLoop: true }), _with: ga("with"), _new: ga("new", { beforeExpr: true, startsExpr: true }), _this: ga("this", fa), _super: ga("super", fa), _class: ga("class", fa), _extends: ga("extends", pa), _export: ga("export"), _import: ga("import", fa), _null: ga("null", fa), _true: ga("true", fa), _false: ga("false", fa), _in: ga("in", { beforeExpr: true, binop: 7 }), _instanceof: ga("instanceof", { beforeExpr: true, binop: 7 }), _typeof: ga("typeof", { beforeExpr: true, prefix: true, startsExpr: true }), _void: ga("void", { beforeExpr: true, prefix: true, startsExpr: true }), _delete: ga("delete", { beforeExpr: true, prefix: true, startsExpr: true }) }, Ea = /\r\n?|\n|\u2028|\u2029/, xa = new RegExp(Ea.source, "g");
function ba(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function va(e, t, s) {
  s === void 0 && (s = e.length);
  for (var i = t; i < s; i++) {
    var n2 = e.charCodeAt(i);
    if (ba(n2))
      return i < s - 1 && n2 === 13 && e.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
  }
  return -1;
}
var Aa = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Sa = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Pa = Object.prototype, ka = Pa.hasOwnProperty, wa = Pa.toString, Ca = Object.hasOwn || function(e, t) {
  return ka.call(e, t);
}, Ia = Array.isArray || function(e) {
  return wa.call(e) === "[object Array]";
};
function _a(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
function Na(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
}
var $a = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Ta = function(e, t) {
  this.line = e, this.column = t;
};
Ta.prototype.offset = function(e) {
  return new Ta(this.line, this.column + e);
};
var Ra = function(e, t, s) {
  this.start = t, this.end = s, e.sourceFile !== null && (this.source = e.sourceFile);
};
function Ma(e, t) {
  for (var s = 1, i = 0; ; ) {
    var n2 = va(e, i, t);
    if (n2 < 0)
      return new Ta(s, t - i);
    ++s, i = n2;
  }
}
var Da = { ecmaVersion: null, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: false, allowImportExportEverywhere: false, allowAwaitOutsideFunction: null, allowSuperOutsideMethod: null, allowHashBang: false, locations: false, onToken: null, onComment: null, ranges: false, program: null, sourceFile: null, directSourceFile: null, preserveParens: false }, La = false;
function Oa(e) {
  var t = {};
  for (var s in Da)
    t[s] = e && Ca(e, s) ? e[s] : Da[s];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!La && typeof console == "object" && console.warn && (La = true, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), Ia(t.onToken)) {
    var i = t.onToken;
    t.onToken = function(e2) {
      return i.push(e2);
    };
  }
  return Ia(t.onComment) && (t.onComment = function(e2, t2) {
    return function(s2, i2, n2, r2, a2, o2) {
      var h2 = { type: s2 ? "Block" : "Line", value: i2, start: n2, end: r2 };
      e2.locations && (h2.loc = new Ra(this, a2, o2)), e2.ranges && (h2.range = [n2, r2]), t2.push(h2);
    };
  }(t, t.onComment)), t;
}
function Va(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0);
}
var Ba = function(e, t, s) {
  this.options = e = Oa(e), this.sourceFile = e.sourceFile, this.keywords = _a(na[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
  var i = "";
  e.allowReserved !== true && (i = sa[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (i += " await")), this.reservedWords = _a(i);
  var n2 = (i ? i + " " : "") + sa.strict;
  this.reservedWordsStrict = _a(n2), this.reservedWordsStrictBind = _a(n2 + " " + sa.strictBind), this.input = String(t), this.containsEsc = false, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf("\n", s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(Ea).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = ya.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = true, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = false, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = [];
}, Fa = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
Ba.prototype.parse = function() {
  var e = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(e);
}, Fa.inFunction.get = function() {
  return (2 & this.currentVarScope().flags) > 0;
}, Fa.inGenerator.get = function() {
  return (8 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit;
}, Fa.inAsync.get = function() {
  return (4 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit;
}, Fa.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e];
    if (t.inClassFieldInit || 256 & t.flags)
      return false;
    if (2 & t.flags)
      return (4 & t.flags) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
}, Fa.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags, s = e.inClassFieldInit;
  return (64 & t) > 0 || s || this.options.allowSuperOutsideMethod;
}, Fa.allowDirectSuper.get = function() {
  return (128 & this.currentThisScope().flags) > 0;
}, Fa.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
}, Fa.allowNewDotTarget.get = function() {
  var e = this.currentThisScope(), t = e.flags, s = e.inClassFieldInit;
  return (258 & t) > 0 || s;
}, Fa.inClassStaticBlock.get = function() {
  return (256 & this.currentVarScope().flags) > 0;
}, Ba.extend = function() {
  for (var e = [], t = arguments.length; t--; )
    e[t] = arguments[t];
  for (var s = this, i = 0; i < e.length; i++)
    s = e[i](s);
  return s;
}, Ba.parse = function(e, t) {
  return new this(t, e).parse();
}, Ba.parseExpressionAt = function(e, t, s) {
  var i = new this(s, e, t);
  return i.nextToken(), i.parseExpression();
}, Ba.tokenizer = function(e, t) {
  return new this(t, e);
}, Object.defineProperties(Ba.prototype, Fa);
var za = Ba.prototype, Wa = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
za.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return false;
  for (; ; ) {
    Sa.lastIndex = e, e += Sa.exec(this.input)[0].length;
    var t = Wa.exec(this.input.slice(e));
    if (!t)
      return false;
    if ((t[1] || t[2]) === "use strict") {
      Sa.lastIndex = e + t[0].length;
      var s = Sa.exec(this.input), i = s.index + s[0].length, n2 = this.input.charAt(i);
      return n2 === ";" || n2 === "}" || Ea.test(s[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(n2) || n2 === "!" && this.input.charAt(i + 1) === "=");
    }
    e += t[0].length, Sa.lastIndex = e, e += Sa.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
}, za.eat = function(e) {
  return this.type === e && (this.next(), true);
}, za.isContextual = function(e) {
  return this.type === ya.name && this.value === e && !this.containsEsc;
}, za.eatContextual = function(e) {
  return !!this.isContextual(e) && (this.next(), true);
}, za.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
}, za.canInsertSemicolon = function() {
  return this.type === ya.eof || this.type === ya.braceR || Ea.test(this.input.slice(this.lastTokEnd, this.start));
}, za.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), true;
}, za.semicolon = function() {
  this.eat(ya.semi) || this.insertSemicolon() || this.unexpected();
}, za.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), true;
}, za.expect = function(e) {
  this.eat(e) || this.unexpected();
}, za.unexpected = function(e) {
  this.raise(e != null ? e : this.start, "Unexpected token");
};
var ja = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
za.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var s = t ? e.parenthesizedAssign : e.parenthesizedBind;
    s > -1 && this.raiseRecoverable(s, "Parenthesized pattern");
  }
}, za.checkExpressionErrors = function(e, t) {
  if (!e)
    return false;
  var s = e.shorthandAssign, i = e.doubleProto;
  if (!t)
    return s >= 0 || i >= 0;
  s >= 0 && this.raise(s, "Shorthand property assignments are valid only in destructuring patterns"), i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property");
}, za.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
}, za.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var Ua = Ba.prototype;
Ua.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== ya.eof; ) {
    var s = this.parseStatement(null, true, t);
    e.body.push(s);
  }
  if (this.inModule)
    for (var i = 0, n2 = Object.keys(this.undefinedExports); i < n2.length; i += 1) {
      var r2 = n2[i];
      this.raiseRecoverable(this.undefinedExports[r2].start, "Export '" + r2 + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var Ga = { kind: "loop" }, Ha = { kind: "switch" };
Ua.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return false;
  Sa.lastIndex = this.pos;
  var t = Sa.exec(this.input), s = this.pos + t[0].length, i = this.input.charCodeAt(s);
  if (i === 91 || i === 92 || i > 55295 && i < 56320)
    return true;
  if (e)
    return false;
  if (i === 123)
    return true;
  if (la(i, true)) {
    for (var n2 = s + 1; ca(i = this.input.charCodeAt(n2), true); )
      ++n2;
    if (i === 92 || i > 55295 && i < 56320)
      return true;
    var r2 = this.input.slice(s, n2);
    if (!ra.test(r2))
      return true;
  }
  return false;
}, Ua.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return false;
  Sa.lastIndex = this.pos;
  var e, t = Sa.exec(this.input), s = this.pos + t[0].length;
  return !(Ea.test(this.input.slice(this.pos, s)) || this.input.slice(s, s + 8) !== "function" || s + 8 !== this.input.length && (ca(e = this.input.charCodeAt(s + 8)) || e > 55295 && e < 56320));
}, Ua.parseStatement = function(e, t, s) {
  var i, n2 = this.type, r2 = this.startNode();
  switch (this.isLet(e) && (n2 = ya._var, i = "let"), n2) {
    case ya._break:
    case ya._continue:
      return this.parseBreakContinueStatement(r2, n2.keyword);
    case ya._debugger:
      return this.parseDebuggerStatement(r2);
    case ya._do:
      return this.parseDoStatement(r2);
    case ya._for:
      return this.parseForStatement(r2);
    case ya._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(r2, false, !e);
    case ya._class:
      return e && this.unexpected(), this.parseClass(r2, true);
    case ya._if:
      return this.parseIfStatement(r2);
    case ya._return:
      return this.parseReturnStatement(r2);
    case ya._switch:
      return this.parseSwitchStatement(r2);
    case ya._throw:
      return this.parseThrowStatement(r2);
    case ya._try:
      return this.parseTryStatement(r2);
    case ya._const:
    case ya._var:
      return i = i || this.value, e && i !== "var" && this.unexpected(), this.parseVarStatement(r2, i);
    case ya._while:
      return this.parseWhileStatement(r2);
    case ya._with:
      return this.parseWithStatement(r2);
    case ya.braceL:
      return this.parseBlock(true, r2);
    case ya.semi:
      return this.parseEmptyStatement(r2);
    case ya._export:
    case ya._import:
      if (this.options.ecmaVersion > 10 && n2 === ya._import) {
        Sa.lastIndex = this.pos;
        var a2 = Sa.exec(this.input), o2 = this.pos + a2[0].length, h2 = this.input.charCodeAt(o2);
        if (h2 === 40 || h2 === 46)
          return this.parseExpressionStatement(r2, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n2 === ya._import ? this.parseImport(r2) : this.parseExport(r2, s);
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(r2, true, !e);
      var l2 = this.value, c2 = this.parseExpression();
      return n2 === ya.name && c2.type === "Identifier" && this.eat(ya.colon) ? this.parseLabeledStatement(r2, l2, c2, e) : this.parseExpressionStatement(r2, c2);
  }
}, Ua.parseBreakContinueStatement = function(e, t) {
  var s = t === "break";
  this.next(), this.eat(ya.semi) || this.insertSemicolon() ? e.label = null : this.type !== ya.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var i = 0; i < this.labels.length; ++i) {
    var n2 = this.labels[i];
    if (e.label == null || n2.name === e.label.name) {
      if (n2.kind != null && (s || n2.kind === "loop"))
        break;
      if (e.label && s)
        break;
    }
  }
  return i === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, s ? "BreakStatement" : "ContinueStatement");
}, Ua.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
}, Ua.parseDoStatement = function(e) {
  return this.next(), this.labels.push(Ga), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(ya._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(ya.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
}, Ua.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Ga), this.enterScope(0), this.expect(ya.parenL), this.type === ya.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var s = this.isLet();
  if (this.type === ya._var || this.type === ya._const || s) {
    var i = this.startNode(), n2 = s ? "let" : this.value;
    return this.next(), this.parseVar(i, true, n2), this.finishNode(i, "VariableDeclaration"), (this.type === ya._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && i.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === ya._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, i)) : (t > -1 && this.unexpected(t), this.parseFor(e, i));
  }
  var r2 = this.isContextual("let"), a2 = false, o2 = new ja(), h2 = this.parseExpression(!(t > -1) || "await", o2);
  return this.type === ya._in || (a2 = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (this.options.ecmaVersion >= 9 && (this.type === ya._in ? t > -1 && this.unexpected(t) : e.await = t > -1), r2 && a2 && this.raise(h2.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(h2, false, o2), this.checkLValPattern(h2), this.parseForIn(e, h2)) : (this.checkExpressionErrors(o2, true), t > -1 && this.unexpected(t), this.parseFor(e, h2));
}, Ua.parseFunctionStatement = function(e, t, s) {
  return this.next(), this.parseFunction(e, Ka | (s ? 0 : Xa), false, t);
}, Ua.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(ya._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
}, Ua.parseReturnStatement = function(e) {
  return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(ya.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
}, Ua.parseSwitchStatement = function(e) {
  var t;
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(ya.braceL), this.labels.push(Ha), this.enterScope(0);
  for (var s = false; this.type !== ya.braceR; )
    if (this.type === ya._case || this.type === ya._default) {
      var i = this.type === ya._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), i ? t.test = this.parseExpression() : (s && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), s = true, t.test = null), this.expect(ya.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
}, Ua.parseThrowStatement = function(e) {
  return this.next(), Ea.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var qa = [];
Ua.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === ya._catch) {
    var t = this.startNode();
    if (this.next(), this.eat(ya.parenL)) {
      t.param = this.parseBindingAtom();
      var s = t.param.type === "Identifier";
      this.enterScope(s ? 32 : 0), this.checkLValPattern(t.param, s ? 4 : 2), this.expect(ya.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0);
    t.body = this.parseBlock(false), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(ya._finally) ? this.parseBlock() : null, e.handler || e.finalizer || this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
}, Ua.parseVarStatement = function(e, t) {
  return this.next(), this.parseVar(e, false, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
}, Ua.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(Ga), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
}, Ua.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
}, Ua.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
}, Ua.parseLabeledStatement = function(e, t, s, i) {
  for (var n2 = 0, r2 = this.labels; n2 < r2.length; n2 += 1) {
    r2[n2].name === t && this.raise(s.start, "Label '" + t + "' is already declared");
  }
  for (var a2 = this.type.isLoop ? "loop" : this.type === ya._switch ? "switch" : null, o2 = this.labels.length - 1; o2 >= 0; o2--) {
    var h2 = this.labels[o2];
    if (h2.statementStart !== e.start)
      break;
    h2.statementStart = this.start, h2.kind = a2;
  }
  return this.labels.push({ name: t, kind: a2, statementStart: this.start }), e.body = this.parseStatement(i ? i.indexOf("label") === -1 ? i + "label" : i : "label"), this.labels.pop(), e.label = s, this.finishNode(e, "LabeledStatement");
}, Ua.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
}, Ua.parseBlock = function(e, t, s) {
  for (e === void 0 && (e = true), t === void 0 && (t = this.startNode()), t.body = [], this.expect(ya.braceL), e && this.enterScope(0); this.type !== ya.braceR; ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return s && (this.strict = false), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
}, Ua.parseFor = function(e, t) {
  return e.init = t, this.expect(ya.semi), e.test = this.type === ya.semi ? null : this.parseExpression(), this.expect(ya.semi), e.update = this.type === ya.parenR ? null : this.parseExpression(), this.expect(ya.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
}, Ua.parseForIn = function(e, t) {
  var s = this.type === ya._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!s || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(t.start, (s ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e.left = t, e.right = s ? this.parseExpression() : this.parseMaybeAssign(), this.expect(ya.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, s ? "ForInStatement" : "ForOfStatement");
}, Ua.parseVar = function(e, t, s) {
  for (e.declarations = [], e.kind = s; ; ) {
    var i = this.startNode();
    if (this.parseVarId(i, s), this.eat(ya.eq) ? i.init = this.parseMaybeAssign(t) : s !== "const" || this.type === ya._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? i.id.type === "Identifier" || t && (this.type === ya._in || this.isContextual("of")) ? i.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), e.declarations.push(this.finishNode(i, "VariableDeclarator")), !this.eat(ya.comma))
      break;
  }
  return e;
}, Ua.parseVarId = function(e, t) {
  e.id = this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? 1 : 2, false);
};
var Ka = 1, Xa = 2;
function Ya(e, t) {
  var s = t.key.name, i = e[s], n2 = "true";
  return t.type !== "MethodDefinition" || t.kind !== "get" && t.kind !== "set" || (n2 = (t.static ? "s" : "i") + t.kind), i === "iget" && n2 === "iset" || i === "iset" && n2 === "iget" || i === "sget" && n2 === "sset" || i === "sset" && n2 === "sget" ? (e[s] = "true", false) : !!i || (e[s] = n2, false);
}
function Qa(e, t) {
  var s = e.computed, i = e.key;
  return !s && (i.type === "Identifier" && i.name === t || i.type === "Literal" && i.value === t);
}
Ua.parseFunction = function(e, t, s, i, n2) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !i) && (this.type === ya.star && t & Xa && this.unexpected(), e.generator = this.eat(ya.star)), this.options.ecmaVersion >= 8 && (e.async = !!i), t & Ka && (e.id = 4 & t && this.type !== ya.name ? null : this.parseIdent(), !e.id || t & Xa || this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
  var r2 = this.yieldPos, a2 = this.awaitPos, o2 = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Va(e.async, e.generator)), t & Ka || (e.id = this.type === ya.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, s, false, n2), this.yieldPos = r2, this.awaitPos = a2, this.awaitIdentPos = o2, this.finishNode(e, t & Ka ? "FunctionDeclaration" : "FunctionExpression");
}, Ua.parseFunctionParams = function(e) {
  this.expect(ya.parenL), e.params = this.parseBindingList(ya.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
}, Ua.parseClass = function(e, t) {
  this.next();
  var s = this.strict;
  this.strict = true, this.parseClassId(e, t), this.parseClassSuper(e);
  var i = this.enterClassBody(), n2 = this.startNode(), r2 = false;
  for (n2.body = [], this.expect(ya.braceL); this.type !== ya.braceR; ) {
    var a2 = this.parseClassElement(e.superClass !== null);
    a2 && (n2.body.push(a2), a2.type === "MethodDefinition" && a2.kind === "constructor" ? (r2 && this.raise(a2.start, "Duplicate constructor in the same class"), r2 = true) : a2.key && a2.key.type === "PrivateIdentifier" && Ya(i, a2) && this.raiseRecoverable(a2.key.start, "Identifier '#" + a2.key.name + "' has already been declared"));
  }
  return this.strict = s, this.next(), e.body = this.finishNode(n2, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
}, Ua.parseClassElement = function(e) {
  if (this.eat(ya.semi))
    return null;
  var t = this.options.ecmaVersion, s = this.startNode(), i = "", n2 = false, r2 = false, a2 = "method", o2 = false;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(ya.braceL))
      return this.parseClassStaticBlock(s), s;
    this.isClassElementNameStart() || this.type === ya.star ? o2 = true : i = "static";
  }
  if (s.static = o2, !i && t >= 8 && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== ya.star || this.canInsertSemicolon() ? i = "async" : r2 = true), !i && (t >= 9 || !r2) && this.eat(ya.star) && (n2 = true), !i && !r2 && !n2) {
    var h2 = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? a2 = h2 : i = h2);
  }
  if (i ? (s.computed = false, s.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), s.key.name = i, this.finishNode(s.key, "Identifier")) : this.parseClassElementName(s), t < 13 || this.type === ya.parenL || a2 !== "method" || n2 || r2) {
    var l2 = !s.static && Qa(s, "constructor"), c2 = l2 && e;
    l2 && a2 !== "method" && this.raise(s.key.start, "Constructor can't have get/set modifier"), s.kind = l2 ? "constructor" : a2, this.parseClassMethod(s, n2, r2, c2);
  } else
    this.parseClassField(s);
  return s;
}, Ua.isClassElementNameStart = function() {
  return this.type === ya.name || this.type === ya.privateId || this.type === ya.num || this.type === ya.string || this.type === ya.bracketL || this.type.keyword;
}, Ua.parseClassElementName = function(e) {
  this.type === ya.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = false, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
}, Ua.parseClassMethod = function(e, t, s, i) {
  var n2 = e.key;
  e.kind === "constructor" ? (t && this.raise(n2.start, "Constructor can't be a generator"), s && this.raise(n2.start, "Constructor can't be an async method")) : e.static && Qa(e, "prototype") && this.raise(n2.start, "Classes may not have a static property named prototype");
  var r2 = e.value = this.parseMethod(t, s, i);
  return e.kind === "get" && r2.params.length !== 0 && this.raiseRecoverable(r2.start, "getter should have no params"), e.kind === "set" && r2.params.length !== 1 && this.raiseRecoverable(r2.start, "setter should have exactly one param"), e.kind === "set" && r2.params[0].type === "RestElement" && this.raiseRecoverable(r2.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
}, Ua.parseClassField = function(e) {
  if (Qa(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Qa(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(ya.eq)) {
    var t = this.currentThisScope(), s = t.inClassFieldInit;
    t.inClassFieldInit = true, e.value = this.parseMaybeAssign(), t.inClassFieldInit = s;
  } else
    e.value = null;
  return this.semicolon(), this.finishNode(e, "PropertyDefinition");
}, Ua.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(320); this.type !== ya.braceR; ) {
    var s = this.parseStatement(null);
    e.body.push(s);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
}, Ua.parseClassId = function(e, t) {
  this.type === ya.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, 2, false)) : (t === true && this.unexpected(), e.id = null);
}, Ua.parseClassSuper = function(e) {
  e.superClass = this.eat(ya._extends) ? this.parseExprSubscripts(false) : null;
}, Ua.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
}, Ua.exitClassBody = function() {
  for (var e = this.privateNameStack.pop(), t = e.declared, s = e.used, i = this.privateNameStack.length, n2 = i === 0 ? null : this.privateNameStack[i - 1], r2 = 0; r2 < s.length; ++r2) {
    var a2 = s[r2];
    Ca(t, a2.name) || (n2 ? n2.used.push(a2) : this.raiseRecoverable(a2.start, "Private field '#" + a2.name + "' must be declared in an enclosing class"));
  }
}, Ua.parseExport = function(e, t) {
  if (this.next(), this.eat(ya.star))
    return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== ya.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
  if (this.eat(ya._default)) {
    var s;
    if (this.checkExport(t, "default", this.lastTokStart), this.type === ya._function || (s = this.isAsyncFunction())) {
      var i = this.startNode();
      this.next(), s && this.next(), e.declaration = this.parseFunction(i, 4 | Ka, false, s);
    } else if (this.type === ya._class) {
      var n2 = this.startNode();
      e.declaration = this.parseClass(n2, "nullableID");
    } else
      e.declaration = this.parseMaybeAssign(), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    e.declaration = this.parseStatement(null), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null;
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== ya.string && this.unexpected(), e.source = this.parseExprAtom();
    else {
      for (var r2 = 0, a2 = e.specifiers; r2 < a2.length; r2 += 1) {
        var o2 = a2[r2];
        this.checkUnreserved(o2.local), this.checkLocalExport(o2.local), o2.local.type === "Literal" && this.raise(o2.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
}, Ua.checkExport = function(e, t, s) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), Ca(e, t) && this.raiseRecoverable(s, "Duplicate export '" + t + "'"), e[t] = true);
}, Ua.checkPatternExport = function(e, t) {
  var s = t.type;
  if (s === "Identifier")
    this.checkExport(e, t, t.start);
  else if (s === "ObjectPattern")
    for (var i = 0, n2 = t.properties; i < n2.length; i += 1) {
      var r2 = n2[i];
      this.checkPatternExport(e, r2);
    }
  else if (s === "ArrayPattern")
    for (var a2 = 0, o2 = t.elements; a2 < o2.length; a2 += 1) {
      var h2 = o2[a2];
      h2 && this.checkPatternExport(e, h2);
    }
  else
    s === "Property" ? this.checkPatternExport(e, t.value) : s === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : s === "RestElement" ? this.checkPatternExport(e, t.argument) : s === "ParenthesizedExpression" && this.checkPatternExport(e, t.expression);
}, Ua.checkVariableExport = function(e, t) {
  if (e)
    for (var s = 0, i = t; s < i.length; s += 1) {
      var n2 = i[s];
      this.checkPatternExport(e, n2.id);
    }
}, Ua.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
}, Ua.parseExportSpecifiers = function(e) {
  var t = [], s = true;
  for (this.expect(ya.braceL); !this.eat(ya.braceR); ) {
    if (s)
      s = false;
    else if (this.expect(ya.comma), this.afterTrailingComma(ya.braceR))
      break;
    var i = this.startNode();
    i.local = this.parseModuleExportName(), i.exported = this.eatContextual("as") ? this.parseModuleExportName() : i.local, this.checkExport(e, i.exported, i.exported.start), t.push(this.finishNode(i, "ExportSpecifier"));
  }
  return t;
}, Ua.parseImport = function(e) {
  return this.next(), this.type === ya.string ? (e.specifiers = qa, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === ya.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
}, Ua.parseImportSpecifiers = function() {
  var e = [], t = true;
  if (this.type === ya.name) {
    var s = this.startNode();
    if (s.local = this.parseIdent(), this.checkLValSimple(s.local, 2), e.push(this.finishNode(s, "ImportDefaultSpecifier")), !this.eat(ya.comma))
      return e;
  }
  if (this.type === ya.star) {
    var i = this.startNode();
    return this.next(), this.expectContextual("as"), i.local = this.parseIdent(), this.checkLValSimple(i.local, 2), e.push(this.finishNode(i, "ImportNamespaceSpecifier")), e;
  }
  for (this.expect(ya.braceL); !this.eat(ya.braceR); ) {
    if (t)
      t = false;
    else if (this.expect(ya.comma), this.afterTrailingComma(ya.braceR))
      break;
    var n2 = this.startNode();
    n2.imported = this.parseModuleExportName(), this.eatContextual("as") ? n2.local = this.parseIdent() : (this.checkUnreserved(n2.imported), n2.local = n2.imported), this.checkLValSimple(n2.local, 2), e.push(this.finishNode(n2, "ImportSpecifier"));
  }
  return e;
}, Ua.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === ya.string) {
    var e = this.parseLiteral(this.value);
    return $a.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(true);
}, Ua.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
}, Ua.isDirectiveCandidate = function(e) {
  return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var Za = Ba.prototype;
Za.toAssignable = function(e, t, s) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", s && this.checkPatternErrors(s, true);
        for (var i = 0, n2 = e.properties; i < n2.length; i += 1) {
          var r2 = n2[i];
          this.toAssignable(r2, t), r2.type !== "RestElement" || r2.argument.type !== "ArrayPattern" && r2.argument.type !== "ObjectPattern" || this.raise(r2.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", s && this.checkPatternErrors(s, true), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, s);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else
    s && this.checkPatternErrors(s, true);
  return e;
}, Za.toAssignableList = function(e, t) {
  for (var s = e.length, i = 0; i < s; i++) {
    var n2 = e[i];
    n2 && this.toAssignable(n2, t);
  }
  if (s) {
    var r2 = e[s - 1];
    this.options.ecmaVersion === 6 && t && r2 && r2.type === "RestElement" && r2.argument.type !== "Identifier" && this.unexpected(r2.argument.start);
  }
  return e;
}, Za.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(false, e), this.finishNode(t, "SpreadElement");
}, Za.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== ya.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
}, Za.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case ya.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(ya.bracketR, true, true), this.finishNode(e, "ArrayPattern");
      case ya.braceL:
        return this.parseObj(true);
    }
  return this.parseIdent();
}, Za.parseBindingList = function(e, t, s) {
  for (var i = [], n2 = true; !this.eat(e); )
    if (n2 ? n2 = false : this.expect(ya.comma), t && this.type === ya.comma)
      i.push(null);
    else {
      if (s && this.afterTrailingComma(e))
        break;
      if (this.type === ya.ellipsis) {
        var r2 = this.parseRestBinding();
        this.parseBindingListItem(r2), i.push(r2), this.type === ya.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      }
      var a2 = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(a2), i.push(a2);
    }
  return i;
}, Za.parseBindingListItem = function(e) {
  return e;
}, Za.parseMaybeDefault = function(e, t, s) {
  if (s = s || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(ya.eq))
    return s;
  var i = this.startNodeAt(e, t);
  return i.left = s, i.right = this.parseMaybeAssign(), this.finishNode(i, "AssignmentPattern");
}, Za.checkLValSimple = function(e, t, s) {
  t === void 0 && (t = 0);
  var i = t !== 0;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (i ? "Binding " : "Assigning to ") + e.name + " in strict mode"), i && (t === 2 && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), s && (Ca(s, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), s[e.name] = true), t !== 5 && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      i && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return i && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, s);
    default:
      this.raise(e.start, (i ? "Binding" : "Assigning to") + " rvalue");
  }
}, Za.checkLValPattern = function(e, t, s) {
  switch (t === void 0 && (t = 0), e.type) {
    case "ObjectPattern":
      for (var i = 0, n2 = e.properties; i < n2.length; i += 1) {
        var r2 = n2[i];
        this.checkLValInnerPattern(r2, t, s);
      }
      break;
    case "ArrayPattern":
      for (var a2 = 0, o2 = e.elements; a2 < o2.length; a2 += 1) {
        var h2 = o2[a2];
        h2 && this.checkLValInnerPattern(h2, t, s);
      }
      break;
    default:
      this.checkLValSimple(e, t, s);
  }
}, Za.checkLValInnerPattern = function(e, t, s) {
  switch (t === void 0 && (t = 0), e.type) {
    case "Property":
      this.checkLValInnerPattern(e.value, t, s);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e.left, t, s);
      break;
    case "RestElement":
      this.checkLValPattern(e.argument, t, s);
      break;
    default:
      this.checkLValPattern(e, t, s);
  }
};
var Ja = function(e, t, s, i, n2) {
  this.token = e, this.isExpr = !!t, this.preserveSpace = !!s, this.override = i, this.generator = !!n2;
}, eo = { b_stat: new Ja("{", false), b_expr: new Ja("{", true), b_tmpl: new Ja("${", false), p_stat: new Ja("(", false), p_expr: new Ja("(", true), q_tmpl: new Ja("`", true, true, function(e) {
  return e.tryReadTemplateToken();
}), f_stat: new Ja("function", false), f_expr: new Ja("function", true), f_expr_gen: new Ja("function", true, false, null, true), f_gen: new Ja("function", false, false, null, true) }, to = Ba.prototype;
to.initialContext = function() {
  return [eo.b_stat];
}, to.curContext = function() {
  return this.context[this.context.length - 1];
}, to.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === eo.f_expr || t === eo.f_stat || (e !== ya.colon || t !== eo.b_stat && t !== eo.b_expr ? e === ya._return || e === ya.name && this.exprAllowed ? Ea.test(this.input.slice(this.lastTokEnd, this.start)) : e === ya._else || e === ya.semi || e === ya.eof || e === ya.parenR || e === ya.arrow || (e === ya.braceL ? t === eo.b_stat : e !== ya._var && e !== ya._const && e !== ya.name && !this.exprAllowed) : !t.isExpr);
}, to.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return false;
}, to.updateContext = function(e) {
  var t, s = this.type;
  s.keyword && e === ya.dot ? this.exprAllowed = false : (t = s.updateContext) ? t.call(this, e) : this.exprAllowed = s.beforeExpr;
}, to.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
}, ya.parenR.updateContext = ya.braceR.updateContext = function() {
  if (this.context.length !== 1) {
    var e = this.context.pop();
    e === eo.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
  } else
    this.exprAllowed = true;
}, ya.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? eo.b_stat : eo.b_expr), this.exprAllowed = true;
}, ya.dollarBraceL.updateContext = function() {
  this.context.push(eo.b_tmpl), this.exprAllowed = true;
}, ya.parenL.updateContext = function(e) {
  var t = e === ya._if || e === ya._for || e === ya._with || e === ya._while;
  this.context.push(t ? eo.p_stat : eo.p_expr), this.exprAllowed = true;
}, ya.incDec.updateContext = function() {
}, ya._function.updateContext = ya._class.updateContext = function(e) {
  !e.beforeExpr || e === ya._else || e === ya.semi && this.curContext() !== eo.p_stat || e === ya._return && Ea.test(this.input.slice(this.lastTokEnd, this.start)) || (e === ya.colon || e === ya.braceL) && this.curContext() === eo.b_stat ? this.context.push(eo.f_stat) : this.context.push(eo.f_expr), this.exprAllowed = false;
}, ya.backQuote.updateContext = function() {
  this.curContext() === eo.q_tmpl ? this.context.pop() : this.context.push(eo.q_tmpl), this.exprAllowed = false;
}, ya.star.updateContext = function(e) {
  if (e === ya._function) {
    var t = this.context.length - 1;
    this.context[t] === eo.f_expr ? this.context[t] = eo.f_expr_gen : this.context[t] = eo.f_gen;
  }
  this.exprAllowed = true;
}, ya.name.updateContext = function(e) {
  var t = false;
  this.options.ecmaVersion >= 6 && e !== ya.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = true), this.exprAllowed = t;
};
var so = Ba.prototype;
function io(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && io(e.expression);
}
so.checkPropClash = function(e, t, s) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement" || this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var i, n2 = e.key;
    switch (n2.type) {
      case "Identifier":
        i = n2.name;
        break;
      case "Literal":
        i = String(n2.value);
        break;
      default:
        return;
    }
    var r2 = e.kind;
    if (this.options.ecmaVersion >= 6)
      i === "__proto__" && r2 === "init" && (t.proto && (s ? s.doubleProto < 0 && (s.doubleProto = n2.start) : this.raiseRecoverable(n2.start, "Redefinition of __proto__ property")), t.proto = true);
    else {
      var a2 = t[i = "$" + i];
      if (a2)
        (r2 === "init" ? this.strict && a2.init || a2.get || a2.set : a2.init || a2[r2]) && this.raiseRecoverable(n2.start, "Redefinition of property");
      else
        a2 = t[i] = { init: false, get: false, set: false };
      a2[r2] = true;
    }
  }
}, so.parseExpression = function(e, t) {
  var s = this.start, i = this.startLoc, n2 = this.parseMaybeAssign(e, t);
  if (this.type === ya.comma) {
    var r2 = this.startNodeAt(s, i);
    for (r2.expressions = [n2]; this.eat(ya.comma); )
      r2.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(r2, "SequenceExpression");
  }
  return n2;
}, so.parseMaybeAssign = function(e, t, s) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = false;
  }
  var i = false, n2 = -1, r2 = -1, a2 = -1;
  t ? (n2 = t.parenthesizedAssign, r2 = t.trailingComma, a2 = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new ja(), i = true);
  var o2 = this.start, h2 = this.startLoc;
  this.type !== ya.parenL && this.type !== ya.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var l2 = this.parseMaybeConditional(e, t);
  if (s && (l2 = s.call(this, l2, o2, h2)), this.type.isAssign) {
    var c2 = this.startNodeAt(o2, h2);
    return c2.operator = this.value, this.type === ya.eq && (l2 = this.toAssignable(l2, false, t)), i || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= l2.start && (t.shorthandAssign = -1), this.type === ya.eq ? this.checkLValPattern(l2) : this.checkLValSimple(l2), c2.left = l2, this.next(), c2.right = this.parseMaybeAssign(e), a2 > -1 && (t.doubleProto = a2), this.finishNode(c2, "AssignmentExpression");
  }
  return i && this.checkExpressionErrors(t, true), n2 > -1 && (t.parenthesizedAssign = n2), r2 > -1 && (t.trailingComma = r2), l2;
}, so.parseMaybeConditional = function(e, t) {
  var s = this.start, i = this.startLoc, n2 = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return n2;
  if (this.eat(ya.question)) {
    var r2 = this.startNodeAt(s, i);
    return r2.test = n2, r2.consequent = this.parseMaybeAssign(), this.expect(ya.colon), r2.alternate = this.parseMaybeAssign(e), this.finishNode(r2, "ConditionalExpression");
  }
  return n2;
}, so.parseExprOps = function(e, t) {
  var s = this.start, i = this.startLoc, n2 = this.parseMaybeUnary(t, false, false, e);
  return this.checkExpressionErrors(t) || n2.start === s && n2.type === "ArrowFunctionExpression" ? n2 : this.parseExprOp(n2, s, i, -1, e);
}, so.parseExprOp = function(e, t, s, i, n2) {
  var r2 = this.type.binop;
  if (r2 != null && (!n2 || this.type !== ya._in) && r2 > i) {
    var a2 = this.type === ya.logicalOR || this.type === ya.logicalAND, o2 = this.type === ya.coalesce;
    o2 && (r2 = ya.logicalAND.binop);
    var h2 = this.value;
    this.next();
    var l2 = this.start, c2 = this.startLoc, u2 = this.parseExprOp(this.parseMaybeUnary(null, false, false, n2), l2, c2, r2, n2), d2 = this.buildBinary(t, s, e, u2, h2, a2 || o2);
    return (a2 && this.type === ya.coalesce || o2 && (this.type === ya.logicalOR || this.type === ya.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(d2, t, s, i, n2);
  }
  return e;
}, so.buildBinary = function(e, t, s, i, n2, r2) {
  i.type === "PrivateIdentifier" && this.raise(i.start, "Private identifier can only be left side of binary expression");
  var a2 = this.startNodeAt(e, t);
  return a2.left = s, a2.operator = n2, a2.right = i, this.finishNode(a2, r2 ? "LogicalExpression" : "BinaryExpression");
}, so.parseMaybeUnary = function(e, t, s, i) {
  var n2, r2 = this.start, a2 = this.startLoc;
  if (this.isContextual("await") && this.canAwait)
    n2 = this.parseAwait(i), t = true;
  else if (this.type.prefix) {
    var o2 = this.startNode(), h2 = this.type === ya.incDec;
    o2.operator = this.value, o2.prefix = true, this.next(), o2.argument = this.parseMaybeUnary(null, true, h2, i), this.checkExpressionErrors(e, true), h2 ? this.checkLValSimple(o2.argument) : this.strict && o2.operator === "delete" && o2.argument.type === "Identifier" ? this.raiseRecoverable(o2.start, "Deleting local variable in strict mode") : o2.operator === "delete" && io(o2.argument) ? this.raiseRecoverable(o2.start, "Private fields can not be deleted") : t = true, n2 = this.finishNode(o2, h2 ? "UpdateExpression" : "UnaryExpression");
  } else if (t || this.type !== ya.privateId) {
    if (n2 = this.parseExprSubscripts(e, i), this.checkExpressionErrors(e))
      return n2;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var l2 = this.startNodeAt(r2, a2);
      l2.operator = this.value, l2.prefix = false, l2.argument = n2, this.checkLValSimple(n2), this.next(), n2 = this.finishNode(l2, "UpdateExpression");
    }
  } else
    (i || this.privateNameStack.length === 0) && this.unexpected(), n2 = this.parsePrivateIdent(), this.type !== ya._in && this.unexpected();
  return s || !this.eat(ya.starstar) ? n2 : t ? void this.unexpected(this.lastTokStart) : this.buildBinary(r2, a2, n2, this.parseMaybeUnary(null, false, false, i), "**", false);
}, so.parseExprSubscripts = function(e, t) {
  var s = this.start, i = this.startLoc, n2 = this.parseExprAtom(e, t);
  if (n2.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return n2;
  var r2 = this.parseSubscripts(n2, s, i, false, t);
  return e && r2.type === "MemberExpression" && (e.parenthesizedAssign >= r2.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= r2.start && (e.parenthesizedBind = -1), e.trailingComma >= r2.start && (e.trailingComma = -1)), r2;
}, so.parseSubscripts = function(e, t, s, i, n2) {
  for (var r2 = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start == 5 && this.potentialArrowAt === e.start, a2 = false; ; ) {
    var o2 = this.parseSubscript(e, t, s, i, r2, a2, n2);
    if (o2.optional && (a2 = true), o2 === e || o2.type === "ArrowFunctionExpression") {
      if (a2) {
        var h2 = this.startNodeAt(t, s);
        h2.expression = o2, o2 = this.finishNode(h2, "ChainExpression");
      }
      return o2;
    }
    e = o2;
  }
}, so.parseSubscript = function(e, t, s, i, n2, r2, a2) {
  var o2 = this.options.ecmaVersion >= 11, h2 = o2 && this.eat(ya.questionDot);
  i && h2 && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var l2 = this.eat(ya.bracketL);
  if (l2 || h2 && this.type !== ya.parenL && this.type !== ya.backQuote || this.eat(ya.dot)) {
    var c2 = this.startNodeAt(t, s);
    c2.object = e, l2 ? (c2.property = this.parseExpression(), this.expect(ya.bracketR)) : this.type === ya.privateId && e.type !== "Super" ? c2.property = this.parsePrivateIdent() : c2.property = this.parseIdent(this.options.allowReserved !== "never"), c2.computed = !!l2, o2 && (c2.optional = h2), e = this.finishNode(c2, "MemberExpression");
  } else if (!i && this.eat(ya.parenL)) {
    var u2 = new ja(), d2 = this.yieldPos, p2 = this.awaitPos, f2 = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var m2 = this.parseExprList(ya.parenR, this.options.ecmaVersion >= 8, false, u2);
    if (n2 && !h2 && !this.canInsertSemicolon() && this.eat(ya.arrow))
      return this.checkPatternErrors(u2, false), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = d2, this.awaitPos = p2, this.awaitIdentPos = f2, this.parseArrowExpression(this.startNodeAt(t, s), m2, true, a2);
    this.checkExpressionErrors(u2, true), this.yieldPos = d2 || this.yieldPos, this.awaitPos = p2 || this.awaitPos, this.awaitIdentPos = f2 || this.awaitIdentPos;
    var g2 = this.startNodeAt(t, s);
    g2.callee = e, g2.arguments = m2, o2 && (g2.optional = h2), e = this.finishNode(g2, "CallExpression");
  } else if (this.type === ya.backQuote) {
    (h2 || r2) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var y2 = this.startNodeAt(t, s);
    y2.tag = e, y2.quasi = this.parseTemplate({ isTagged: true }), e = this.finishNode(y2, "TaggedTemplateExpression");
  }
  return e;
}, so.parseExprAtom = function(e, t) {
  this.type === ya.slash && this.readRegexp();
  var s, i = this.potentialArrowAt === this.start;
  switch (this.type) {
    case ya._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), s = this.startNode(), this.next(), this.type !== ya.parenL || this.allowDirectSuper || this.raise(s.start, "super() call outside constructor of a subclass"), this.type !== ya.dot && this.type !== ya.bracketL && this.type !== ya.parenL && this.unexpected(), this.finishNode(s, "Super");
    case ya._this:
      return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");
    case ya.name:
      var n2 = this.start, r2 = this.startLoc, a2 = this.containsEsc, o2 = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !a2 && o2.name === "async" && !this.canInsertSemicolon() && this.eat(ya._function))
        return this.overrideContext(eo.f_expr), this.parseFunction(this.startNodeAt(n2, r2), 0, false, true, t);
      if (i && !this.canInsertSemicolon()) {
        if (this.eat(ya.arrow))
          return this.parseArrowExpression(this.startNodeAt(n2, r2), [o2], false, t);
        if (this.options.ecmaVersion >= 8 && o2.name === "async" && this.type === ya.name && !a2 && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return o2 = this.parseIdent(false), !this.canInsertSemicolon() && this.eat(ya.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(n2, r2), [o2], true, t);
      }
      return o2;
    case ya.regexp:
      var h2 = this.value;
      return (s = this.parseLiteral(h2.value)).regex = { pattern: h2.pattern, flags: h2.flags }, s;
    case ya.num:
    case ya.string:
      return this.parseLiteral(this.value);
    case ya._null:
    case ya._true:
    case ya._false:
      return (s = this.startNode()).value = this.type === ya._null ? null : this.type === ya._true, s.raw = this.type.keyword, this.next(), this.finishNode(s, "Literal");
    case ya.parenL:
      var l2 = this.start, c2 = this.parseParenAndDistinguishExpression(i, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(c2) && (e.parenthesizedAssign = l2), e.parenthesizedBind < 0 && (e.parenthesizedBind = l2)), c2;
    case ya.bracketL:
      return s = this.startNode(), this.next(), s.elements = this.parseExprList(ya.bracketR, true, true, e), this.finishNode(s, "ArrayExpression");
    case ya.braceL:
      return this.overrideContext(eo.b_expr), this.parseObj(false, e);
    case ya._function:
      return s = this.startNode(), this.next(), this.parseFunction(s, 0);
    case ya._class:
      return this.parseClass(this.startNode(), false);
    case ya._new:
      return this.parseNew();
    case ya.backQuote:
      return this.parseTemplate();
    case ya._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
    default:
      this.unexpected();
  }
}, so.parseExprImport = function() {
  var e = this.startNode();
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var t = this.parseIdent(true);
  switch (this.type) {
    case ya.parenL:
      return this.parseDynamicImport(e);
    case ya.dot:
      return e.meta = t, this.parseImportMeta(e);
    default:
      this.unexpected();
  }
}, so.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(ya.parenR)) {
    var t = this.start;
    this.eat(ya.comma) && this.eat(ya.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
}, so.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(true), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType === "module" || this.options.allowImportExportEverywhere || this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
}, so.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
}, so.parseParenExpression = function() {
  this.expect(ya.parenL);
  var e = this.parseExpression();
  return this.expect(ya.parenR), e;
}, so.parseParenAndDistinguishExpression = function(e, t) {
  var s, i = this.start, n2 = this.startLoc, r2 = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a2, o2 = this.start, h2 = this.startLoc, l2 = [], c2 = true, u2 = false, d2 = new ja(), p2 = this.yieldPos, f2 = this.awaitPos;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== ya.parenR; ) {
      if (c2 ? c2 = false : this.expect(ya.comma), r2 && this.afterTrailingComma(ya.parenR, true)) {
        u2 = true;
        break;
      }
      if (this.type === ya.ellipsis) {
        a2 = this.start, l2.push(this.parseParenItem(this.parseRestBinding())), this.type === ya.comma && this.raise(this.start, "Comma is not permitted after the rest element");
        break;
      }
      l2.push(this.parseMaybeAssign(false, d2, this.parseParenItem));
    }
    var m2 = this.lastTokEnd, g2 = this.lastTokEndLoc;
    if (this.expect(ya.parenR), e && !this.canInsertSemicolon() && this.eat(ya.arrow))
      return this.checkPatternErrors(d2, false), this.checkYieldAwaitInDefaultParams(), this.yieldPos = p2, this.awaitPos = f2, this.parseParenArrowList(i, n2, l2, t);
    l2.length && !u2 || this.unexpected(this.lastTokStart), a2 && this.unexpected(a2), this.checkExpressionErrors(d2, true), this.yieldPos = p2 || this.yieldPos, this.awaitPos = f2 || this.awaitPos, l2.length > 1 ? ((s = this.startNodeAt(o2, h2)).expressions = l2, this.finishNodeAt(s, "SequenceExpression", m2, g2)) : s = l2[0];
  } else
    s = this.parseParenExpression();
  if (this.options.preserveParens) {
    var y2 = this.startNodeAt(i, n2);
    return y2.expression = s, this.finishNode(y2, "ParenthesizedExpression");
  }
  return s;
}, so.parseParenItem = function(e) {
  return e;
}, so.parseParenArrowList = function(e, t, s, i) {
  return this.parseArrowExpression(this.startNodeAt(e, t), s, false, i);
};
var no = [];
so.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(), t = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(ya.dot)) {
    e.meta = t;
    var s = this.containsEsc;
    return e.property = this.parseIdent(true), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), s && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var i = this.start, n2 = this.startLoc, r2 = this.type === ya._import;
  return e.callee = this.parseSubscripts(this.parseExprAtom(), i, n2, true, false), r2 && e.callee.type === "ImportExpression" && this.raise(i, "Cannot use new with import()"), this.eat(ya.parenL) ? e.arguments = this.parseExprList(ya.parenR, this.options.ecmaVersion >= 8, false) : e.arguments = no, this.finishNode(e, "NewExpression");
}, so.parseTemplateElement = function(e) {
  var t = e.isTagged, s = this.startNode();
  return this.type === ya.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), s.value = { raw: this.value, cooked: null }) : s.value = { raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"), cooked: this.value }, this.next(), s.tail = this.type === ya.backQuote, this.finishNode(s, "TemplateElement");
}, so.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = false);
  var s = this.startNode();
  this.next(), s.expressions = [];
  var i = this.parseTemplateElement({ isTagged: t });
  for (s.quasis = [i]; !i.tail; )
    this.type === ya.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(ya.dollarBraceL), s.expressions.push(this.parseExpression()), this.expect(ya.braceR), s.quasis.push(i = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(s, "TemplateLiteral");
}, so.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === ya.name || this.type === ya.num || this.type === ya.string || this.type === ya.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === ya.star) && !Ea.test(this.input.slice(this.lastTokEnd, this.start));
}, so.parseObj = function(e, t) {
  var s = this.startNode(), i = true, n2 = {};
  for (s.properties = [], this.next(); !this.eat(ya.braceR); ) {
    if (i)
      i = false;
    else if (this.expect(ya.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(ya.braceR))
      break;
    var r2 = this.parseProperty(e, t);
    e || this.checkPropClash(r2, n2, t), s.properties.push(r2);
  }
  return this.finishNode(s, e ? "ObjectPattern" : "ObjectExpression");
}, so.parseProperty = function(e, t) {
  var s, i, n2, r2, a2 = this.startNode();
  if (this.options.ecmaVersion >= 9 && this.eat(ya.ellipsis))
    return e ? (a2.argument = this.parseIdent(false), this.type === ya.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a2, "RestElement")) : (this.type === ya.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), a2.argument = this.parseMaybeAssign(false, t), this.type === ya.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(a2, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (a2.method = false, a2.shorthand = false, (e || t) && (n2 = this.start, r2 = this.startLoc), e || (s = this.eat(ya.star)));
  var o2 = this.containsEsc;
  return this.parsePropertyName(a2), !e && !o2 && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(a2) ? (i = true, s = this.options.ecmaVersion >= 9 && this.eat(ya.star), this.parsePropertyName(a2, t)) : i = false, this.parsePropertyValue(a2, e, s, i, n2, r2, t, o2), this.finishNode(a2, "Property");
}, so.parsePropertyValue = function(e, t, s, i, n2, r2, a2, o2) {
  if ((s || i) && this.type === ya.colon && this.unexpected(), this.eat(ya.colon))
    e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, a2), e.kind = "init";
  else if (this.options.ecmaVersion >= 6 && this.type === ya.parenL)
    t && this.unexpected(), e.kind = "init", e.method = true, e.value = this.parseMethod(s, i);
  else if (t || o2 || !(this.options.ecmaVersion >= 5) || e.computed || e.key.type !== "Identifier" || e.key.name !== "get" && e.key.name !== "set" || this.type === ya.comma || this.type === ya.braceR || this.type === ya.eq)
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((s || i) && this.unexpected(), this.checkUnreserved(e.key), e.key.name !== "await" || this.awaitIdentPos || (this.awaitIdentPos = n2), e.kind = "init", t ? e.value = this.parseMaybeDefault(n2, r2, this.copyNode(e.key)) : this.type === ya.eq && a2 ? (a2.shorthandAssign < 0 && (a2.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n2, r2, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.shorthand = true) : this.unexpected();
  else {
    (s || i) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(false);
    var h2 = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== h2) {
      var l2 = e.value.start;
      e.kind === "get" ? this.raiseRecoverable(l2, "getter should have no params") : this.raiseRecoverable(l2, "setter should have exactly one param");
    } else
      e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
  }
}, so.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(ya.bracketL))
      return e.computed = true, e.key = this.parseMaybeAssign(), this.expect(ya.bracketR), e.key;
    e.computed = false;
  }
  return e.key = this.type === ya.num || this.type === ya.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
}, so.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = false), this.options.ecmaVersion >= 8 && (e.async = false);
}, so.parseMethod = function(e, t, s) {
  var i = this.startNode(), n2 = this.yieldPos, r2 = this.awaitPos, a2 = this.awaitIdentPos;
  return this.initFunction(i), this.options.ecmaVersion >= 6 && (i.generator = e), this.options.ecmaVersion >= 8 && (i.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Va(t, i.generator) | (s ? 128 : 0)), this.expect(ya.parenL), i.params = this.parseBindingList(ya.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, false, true, false), this.yieldPos = n2, this.awaitPos = r2, this.awaitIdentPos = a2, this.finishNode(i, "FunctionExpression");
}, so.parseArrowExpression = function(e, t, s, i) {
  var n2 = this.yieldPos, r2 = this.awaitPos, a2 = this.awaitIdentPos;
  return this.enterScope(16 | Va(s, false)), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!s), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, true), this.parseFunctionBody(e, true, false, i), this.yieldPos = n2, this.awaitPos = r2, this.awaitIdentPos = a2, this.finishNode(e, "ArrowFunctionExpression");
}, so.parseFunctionBody = function(e, t, s, i) {
  var n2 = t && this.type !== ya.braceL, r2 = this.strict, a2 = false;
  if (n2)
    e.body = this.parseMaybeAssign(i), e.expression = true, this.checkParams(e, false);
  else {
    var o2 = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    r2 && !o2 || (a2 = this.strictDirective(this.end)) && o2 && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
    var h2 = this.labels;
    this.labels = [], a2 && (this.strict = true), this.checkParams(e, !r2 && !a2 && !t && !s && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, 5), e.body = this.parseBlock(false, void 0, a2 && !r2), e.expression = false, this.adaptDirectivePrologue(e.body.body), this.labels = h2;
  }
  this.exitScope();
}, so.isSimpleParamList = function(e) {
  for (var t = 0, s = e; t < s.length; t += 1) {
    if (s[t].type !== "Identifier")
      return false;
  }
  return true;
}, so.checkParams = function(e, t) {
  for (var s = /* @__PURE__ */ Object.create(null), i = 0, n2 = e.params; i < n2.length; i += 1) {
    var r2 = n2[i];
    this.checkLValInnerPattern(r2, 1, t ? null : s);
  }
}, so.parseExprList = function(e, t, s, i) {
  for (var n2 = [], r2 = true; !this.eat(e); ) {
    if (r2)
      r2 = false;
    else if (this.expect(ya.comma), t && this.afterTrailingComma(e))
      break;
    var a2 = void 0;
    s && this.type === ya.comma ? a2 = null : this.type === ya.ellipsis ? (a2 = this.parseSpread(i), i && this.type === ya.comma && i.trailingComma < 0 && (i.trailingComma = this.start)) : a2 = this.parseMaybeAssign(false, i), n2.push(a2);
  }
  return n2;
}, so.checkUnreserved = function(e) {
  var t = e.start, s = e.end, i = e.name;
  (this.inGenerator && i === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && i === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && i === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || i !== "arguments" && i !== "await" || this.raise(t, "Cannot use " + i + " in class static initialization block"), this.keywords.test(i) && this.raise(t, "Unexpected keyword '" + i + "'"), this.options.ecmaVersion < 6 && this.input.slice(t, s).indexOf("\\") !== -1) || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(i) && (this.inAsync || i !== "await" || this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + i + "' is reserved"));
}, so.parseIdent = function(e, t) {
  var s = this.startNode();
  return this.type === ya.name ? s.name = this.value : this.type.keyword ? (s.name = this.type.keyword, s.name !== "class" && s.name !== "function" || this.lastTokEnd === this.lastTokStart + 1 && this.input.charCodeAt(this.lastTokStart) === 46 || this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(s, "Identifier"), e || (this.checkUnreserved(s), s.name !== "await" || this.awaitIdentPos || (this.awaitIdentPos = s.start)), s;
}, so.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === ya.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e), e;
}, so.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === ya.semi || this.canInsertSemicolon() || this.type !== ya.star && !this.type.startsExpr ? (t.delegate = false, t.argument = null) : (t.delegate = this.eat(ya.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
}, so.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, true, false, e), this.finishNode(t, "AwaitExpression");
};
var ro = Ba.prototype;
ro.raise = function(e, t) {
  var s = Ma(this.input, e);
  t += " (" + s.line + ":" + s.column + ")";
  var i = new SyntaxError(t);
  throw i.pos = e, i.loc = s, i.raisedAt = this.pos, i;
}, ro.raiseRecoverable = ro.raise, ro.curPosition = function() {
  if (this.options.locations)
    return new Ta(this.curLine, this.pos - this.lineStart);
};
var ao = Ba.prototype, oo = function(e) {
  this.flags = e, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = false;
};
ao.enterScope = function(e) {
  this.scopeStack.push(new oo(e));
}, ao.exitScope = function() {
  this.scopeStack.pop();
}, ao.treatFunctionsAsVarInScope = function(e) {
  return 2 & e.flags || !this.inModule && 1 & e.flags;
}, ao.declareName = function(e, t, s) {
  var i = false;
  if (t === 2) {
    var n2 = this.currentScope();
    i = n2.lexical.indexOf(e) > -1 || n2.functions.indexOf(e) > -1 || n2.var.indexOf(e) > -1, n2.lexical.push(e), this.inModule && 1 & n2.flags && delete this.undefinedExports[e];
  } else if (t === 4) {
    this.currentScope().lexical.push(e);
  } else if (t === 3) {
    var r2 = this.currentScope();
    i = this.treatFunctionsAsVar ? r2.lexical.indexOf(e) > -1 : r2.lexical.indexOf(e) > -1 || r2.var.indexOf(e) > -1, r2.functions.push(e);
  } else
    for (var a2 = this.scopeStack.length - 1; a2 >= 0; --a2) {
      var o2 = this.scopeStack[a2];
      if (o2.lexical.indexOf(e) > -1 && !(32 & o2.flags && o2.lexical[0] === e) || !this.treatFunctionsAsVarInScope(o2) && o2.functions.indexOf(e) > -1) {
        i = true;
        break;
      }
      if (o2.var.push(e), this.inModule && 1 & o2.flags && delete this.undefinedExports[e], 259 & o2.flags)
        break;
    }
  i && this.raiseRecoverable(s, "Identifier '" + e + "' has already been declared");
}, ao.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
}, ao.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
}, ao.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (259 & t.flags)
      return t;
  }
}, ao.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (259 & t.flags && !(16 & t.flags))
      return t;
  }
};
var ho = function(e, t, s) {
  this.type = "", this.start = t, this.end = 0, e.options.locations && (this.loc = new Ra(e, s)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [t, 0]);
}, lo = Ba.prototype;
function co(e, t, s, i) {
  return e.type = t, e.end = s, this.options.locations && (e.loc.end = i), this.options.ranges && (e.range[1] = s), e;
}
lo.startNode = function() {
  return new ho(this, this.start, this.startLoc);
}, lo.startNodeAt = function(e, t) {
  return new ho(this, e, t);
}, lo.finishNode = function(e, t) {
  return co.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
}, lo.finishNodeAt = function(e, t, s, i) {
  return co.call(this, e, t, s, i);
}, lo.copyNode = function(e) {
  var t = new ho(this, e.start, this.startLoc);
  for (var s in e)
    t[s] = e[s];
  return t;
};
var uo = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", po = uo + " Extended_Pictographic", fo = po + " EBase EComp EMod EPres ExtPict", mo = { 9: uo, 10: po, 11: po, 12: fo, 13: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict" }, go = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", yo = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Eo = yo + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", xo = Eo + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", bo = xo + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", vo = { 9: yo, 10: Eo, 11: xo, 12: bo, 13: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith" }, Ao = {};
function So(e) {
  var t = Ao[e] = { binary: _a(mo[e] + " " + go), nonBinary: { General_Category: _a(go), Script: _a(vo[e]) } };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var Po = 0, ko = [9, 10, 11, 12, 13]; Po < ko.length; Po += 1) {
  So(ko[Po]);
}
var wo = Ba.prototype, Co = function(e) {
  this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : ""), this.unicodeProperties = Ao[e.options.ecmaVersion >= 13 ? 13 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = false, this.switchN = false, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = false, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
};
function Io(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
function _o(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function No(e) {
  return _o(e) || e === 95;
}
function $o(e) {
  return No(e) || To(e);
}
function To(e) {
  return e >= 48 && e <= 57;
}
function Ro(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Mo(e) {
  return e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : e - 48;
}
function Do(e) {
  return e >= 48 && e <= 55;
}
Co.prototype.reset = function(e, t, s) {
  var i = s.indexOf("u") !== -1;
  this.start = 0 | e, this.source = t + "", this.flags = s, this.switchU = i && this.parser.options.ecmaVersion >= 6, this.switchN = i && this.parser.options.ecmaVersion >= 9;
}, Co.prototype.raise = function(e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
}, Co.prototype.at = function(e, t) {
  t === void 0 && (t = false);
  var s = this.source, i = s.length;
  if (e >= i)
    return -1;
  var n2 = s.charCodeAt(e);
  if (!t && !this.switchU || n2 <= 55295 || n2 >= 57344 || e + 1 >= i)
    return n2;
  var r2 = s.charCodeAt(e + 1);
  return r2 >= 56320 && r2 <= 57343 ? (n2 << 10) + r2 - 56613888 : n2;
}, Co.prototype.nextIndex = function(e, t) {
  t === void 0 && (t = false);
  var s = this.source, i = s.length;
  if (e >= i)
    return i;
  var n2, r2 = s.charCodeAt(e);
  return !t && !this.switchU || r2 <= 55295 || r2 >= 57344 || e + 1 >= i || (n2 = s.charCodeAt(e + 1)) < 56320 || n2 > 57343 ? e + 1 : e + 2;
}, Co.prototype.current = function(e) {
  return e === void 0 && (e = false), this.at(this.pos, e);
}, Co.prototype.lookahead = function(e) {
  return e === void 0 && (e = false), this.at(this.nextIndex(this.pos, e), e);
}, Co.prototype.advance = function(e) {
  e === void 0 && (e = false), this.pos = this.nextIndex(this.pos, e);
}, Co.prototype.eat = function(e, t) {
  return t === void 0 && (t = false), this.current(t) === e && (this.advance(t), true);
}, wo.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, s = e.flags, i = 0; i < s.length; i++) {
    var n2 = s.charAt(i);
    t.indexOf(n2) === -1 && this.raise(e.start, "Invalid regular expression flag"), s.indexOf(n2, i + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
  }
}, wo.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = true, this.regexp_pattern(e));
}, wo.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = false, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, s = e.backReferenceNames; t < s.length; t += 1) {
    var i = s[t];
    e.groupNames.indexOf(i) === -1 && e.raise("Invalid named capture referenced");
  }
}, wo.regexp_disjunction = function(e) {
  for (this.regexp_alternative(e); e.eat(124); )
    this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, true) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
}, wo.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
}, wo.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), true) : !!(e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), true);
}, wo.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = false, e.eat(94) || e.eat(36))
    return true;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98))
      return true;
    e.pos = t;
  }
  if (e.eat(40) && e.eat(63)) {
    var s = false;
    if (this.options.ecmaVersion >= 9 && (s = e.eat(60)), e.eat(61) || e.eat(33))
      return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !s, true;
  }
  return e.pos = t, false;
}, wo.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = false), !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), true);
}, wo.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
}, wo.regexp_eatBracedQuantifier = function(e, t) {
  var s = e.pos;
  if (e.eat(123)) {
    var i = 0, n2 = -1;
    if (this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (n2 = e.lastIntValue), e.eat(125)))
      return n2 !== -1 && n2 < i && !t && e.raise("numbers out of order in {} quantifier"), true;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = s;
  }
  return false;
}, wo.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
}, wo.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e))
      return true;
    e.pos = t;
  }
  return false;
}, wo.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if (this.regexp_disjunction(e), e.eat(41))
        return true;
      e.raise("Unterminated group");
    }
    e.pos = t;
  }
  return false;
}, wo.regexp_eatCapturingGroup = function(e) {
  if (e.eat(40)) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41))
      return e.numCapturingParens += 1, true;
    e.raise("Unterminated group");
  }
  return false;
}, wo.regexp_eatExtendedAtom = function(e) {
  return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
}, wo.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, true) && e.raise("Nothing to repeat"), false;
}, wo.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return !!Io(t) && (e.lastIntValue = t, e.advance(), true);
}, wo.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, s = 0; (s = e.current()) !== -1 && !Io(s); )
    e.advance();
  return e.pos !== t;
}, wo.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return !(t === -1 || t === 36 || t >= 40 && t <= 43 || t === 46 || t === 63 || t === 91 || t === 94 || t === 124) && (e.advance(), true);
}, wo.regexp_groupSpecifier = function(e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e))
      return e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"), void e.groupNames.push(e.lastStringValue);
    e.raise("Invalid group");
  }
}, wo.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62))
      return true;
    e.raise("Invalid capture group name");
  }
  return false;
}, wo.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Na(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Na(e.lastIntValue);
    return true;
  }
  return false;
}, wo.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, s = this.options.ecmaVersion >= 11, i = e.current(s);
  return e.advance(s), i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, s) && (i = e.lastIntValue), function(e2) {
    return la(e2, true) || e2 === 36 || e2 === 95;
  }(i) ? (e.lastIntValue = i, true) : (e.pos = t, false);
}, wo.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, s = this.options.ecmaVersion >= 11, i = e.current(s);
  return e.advance(s), i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, s) && (i = e.lastIntValue), function(e2) {
    return ca(e2, true) || e2 === 36 || e2 === 95 || e2 === 8204 || e2 === 8205;
  }(i) ? (e.lastIntValue = i, true) : (e.pos = t, false);
}, wo.regexp_eatAtomEscape = function(e) {
  return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) || (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), false);
}, wo.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var s = e.lastIntValue;
    if (e.switchU)
      return s > e.maxBackReference && (e.maxBackReference = s), true;
    if (s <= e.numCapturingParens)
      return true;
    e.pos = t;
  }
  return false;
}, wo.regexp_eatKGroupName = function(e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), true;
    e.raise("Invalid named reference");
  }
  return false;
}, wo.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, false) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
}, wo.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e))
      return true;
    e.pos = t;
  }
  return false;
}, wo.regexp_eatZero = function(e) {
  return e.current() === 48 && !To(e.lookahead()) && (e.lastIntValue = 0, e.advance(), true);
}, wo.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), true) : t === 110 ? (e.lastIntValue = 10, e.advance(), true) : t === 118 ? (e.lastIntValue = 11, e.advance(), true) : t === 102 ? (e.lastIntValue = 12, e.advance(), true) : t === 114 && (e.lastIntValue = 13, e.advance(), true);
}, wo.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return !!_o(t) && (e.lastIntValue = t % 32, e.advance(), true);
}, wo.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = false);
  var s, i = e.pos, n2 = t || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var r2 = e.lastIntValue;
      if (n2 && r2 >= 55296 && r2 <= 56319) {
        var a2 = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var o2 = e.lastIntValue;
          if (o2 >= 56320 && o2 <= 57343)
            return e.lastIntValue = 1024 * (r2 - 55296) + (o2 - 56320) + 65536, true;
        }
        e.pos = a2, e.lastIntValue = r2;
      }
      return true;
    }
    if (n2 && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && ((s = e.lastIntValue) >= 0 && s <= 1114111))
      return true;
    n2 && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return false;
}, wo.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return !!this.regexp_eatSyntaxCharacter(e) || !!e.eat(47) && (e.lastIntValue = 47, true);
  var t = e.current();
  return !(t === 99 || e.switchN && t === 107) && (e.lastIntValue = t, e.advance(), true);
}, wo.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do {
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    } while ((t = e.current()) >= 48 && t <= 57);
    return true;
  }
  return false;
}, wo.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (function(e2) {
    return e2 === 100 || e2 === 68 || e2 === 115 || e2 === 83 || e2 === 119 || e2 === 87;
  }(t))
    return e.lastIntValue = -1, e.advance(), true;
  if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
    if (e.lastIntValue = -1, e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125))
      return true;
    e.raise("Invalid property name");
  }
  return false;
}, wo.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var s = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var i = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, s, i), true;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var n2 = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, n2), true;
  }
  return false;
}, wo.regexp_validateUnicodePropertyNameAndValue = function(e, t, s) {
  Ca(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(s) || e.raise("Invalid property value");
}, wo.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
}, wo.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; No(t = e.current()); )
    e.lastStringValue += Na(t), e.advance();
  return e.lastStringValue !== "";
}, wo.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; $o(t = e.current()); )
    e.lastStringValue += Na(t), e.advance();
  return e.lastStringValue !== "";
}, wo.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
}, wo.regexp_eatCharacterClass = function(e) {
  if (e.eat(91)) {
    if (e.eat(94), this.regexp_classRanges(e), e.eat(93))
      return true;
    e.raise("Unterminated character class");
  }
  return false;
}, wo.regexp_classRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var s = e.lastIntValue;
      !e.switchU || t !== -1 && s !== -1 || e.raise("Invalid character class"), t !== -1 && s !== -1 && t > s && e.raise("Range out of order in character class");
    }
  }
}, wo.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e))
      return true;
    if (e.switchU) {
      var s = e.current();
      (s === 99 || Do(s)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var i = e.current();
  return i !== 93 && (e.lastIntValue = i, e.advance(), true);
}, wo.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(98))
    return e.lastIntValue = 8, true;
  if (e.switchU && e.eat(45))
    return e.lastIntValue = 45, true;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e))
      return true;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
}, wo.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return !(!To(t) && t !== 95) && (e.lastIntValue = t % 32, e.advance(), true);
}, wo.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return true;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return false;
}, wo.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, s = 0;
  for (e.lastIntValue = 0; To(s = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (s - 48), e.advance();
  return e.pos !== t;
}, wo.regexp_eatHexDigits = function(e) {
  var t = e.pos, s = 0;
  for (e.lastIntValue = 0; Ro(s = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + Mo(s), e.advance();
  return e.pos !== t;
}, wo.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var s = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = 64 * t + 8 * s + e.lastIntValue : e.lastIntValue = 8 * t + s;
    } else
      e.lastIntValue = t;
    return true;
  }
  return false;
}, wo.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return Do(t) ? (e.lastIntValue = t - 48, e.advance(), true) : (e.lastIntValue = 0, false);
}, wo.regexp_eatFixedHexDigits = function(e, t) {
  var s = e.pos;
  e.lastIntValue = 0;
  for (var i = 0; i < t; ++i) {
    var n2 = e.current();
    if (!Ro(n2))
      return e.pos = s, false;
    e.lastIntValue = 16 * e.lastIntValue + Mo(n2), e.advance();
  }
  return true;
};
var Lo = function(e) {
  this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new Ra(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, Oo = Ba.prototype;
function Vo(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
Oo.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Lo(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
}, Oo.getToken = function() {
  return this.next(), new Lo(this);
}, typeof Symbol != "undefined" && (Oo[Symbol.iterator] = function() {
  var e = this;
  return { next: function() {
    var t = e.getToken();
    return { done: t.type === ya.eof, value: t };
  } };
}), Oo.nextToken = function() {
  var e = this.curContext();
  return e && e.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(ya.eof) : e.override ? e.override(this) : void this.readToken(this.fullCharCodeAtPos());
}, Oo.readToken = function(e) {
  return la(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
}, Oo.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
}, Oo.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, s = this.input.indexOf("*/", this.pos += 2);
  if (s === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
    for (var i = void 0, n2 = t; (i = va(this.input, n2, this.pos)) > -1; )
      ++this.curLine, n2 = this.lineStart = i;
  this.options.onComment && this.options.onComment(true, this.input.slice(t + 2, s), t, this.pos, e, this.curPosition());
}, Oo.skipLineComment = function(e) {
  for (var t = this.pos, s = this.options.onComment && this.curPosition(), i = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !ba(i); )
    i = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(false, this.input.slice(t + e, this.pos), t, this.pos, s, this.curPosition());
}, Oo.skipSpace = function() {
  e:
    for (; this.pos < this.input.length; ) {
      var e = this.input.charCodeAt(this.pos);
      switch (e) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break e;
          }
          break;
        default:
          if (!(e > 8 && e < 14 || e >= 5760 && Aa.test(String.fromCharCode(e))))
            break e;
          ++this.pos;
      }
    }
}, Oo.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var s = this.type;
  this.type = e, this.value = t, this.updateContext(s);
}, Oo.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(true);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(ya.ellipsis)) : (++this.pos, this.finishToken(ya.dot));
}, Oo.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(ya.assign, 2) : this.finishOp(ya.slash, 1);
}, Oo.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), s = 1, i = e === 42 ? ya.star : ya.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++s, i = ya.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(ya.assign, s + 1) : this.finishOp(i, s);
}, Oo.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      if (this.input.charCodeAt(this.pos + 2) === 61)
        return this.finishOp(ya.assign, 3);
    }
    return this.finishOp(e === 124 ? ya.logicalOR : ya.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(ya.assign, 2) : this.finishOp(e === 124 ? ya.bitwiseOR : ya.bitwiseAND, 1);
}, Oo.readToken_caret = function() {
  return this.input.charCodeAt(this.pos + 1) === 61 ? this.finishOp(ya.assign, 2) : this.finishOp(ya.bitwiseXOR, 1);
}, Oo.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t !== 45 || this.inModule || this.input.charCodeAt(this.pos + 2) !== 62 || this.lastTokEnd !== 0 && !Ea.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(ya.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : t === 61 ? this.finishOp(ya.assign, 2) : this.finishOp(ya.plusMin, 1);
}, Oo.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), s = 1;
  return t === e ? (s = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + s) === 61 ? this.finishOp(ya.assign, s + 1) : this.finishOp(ya.bitShift, s)) : t !== 33 || e !== 60 || this.inModule || this.input.charCodeAt(this.pos + 2) !== 45 || this.input.charCodeAt(this.pos + 3) !== 45 ? (t === 61 && (s = 2), this.finishOp(ya.relational, s)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
}, Oo.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(ya.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(ya.arrow)) : this.finishOp(e === 61 ? ya.eq : ya.prefix, 1);
}, Oo.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var s = this.input.charCodeAt(this.pos + 2);
      if (s < 48 || s > 57)
        return this.finishOp(ya.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        if (this.input.charCodeAt(this.pos + 2) === 61)
          return this.finishOp(ya.assign, 3);
      }
      return this.finishOp(ya.coalesce, 2);
    }
  }
  return this.finishOp(ya.question, 1);
}, Oo.readToken_numberSign = function() {
  var e = 35;
  if (this.options.ecmaVersion >= 13 && (++this.pos, la(e = this.fullCharCodeAtPos(), true) || e === 92))
    return this.finishToken(ya.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Na(e) + "'");
}, Oo.getTokenFromCode = function(e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(ya.parenL);
    case 41:
      return ++this.pos, this.finishToken(ya.parenR);
    case 59:
      return ++this.pos, this.finishToken(ya.semi);
    case 44:
      return ++this.pos, this.finishToken(ya.comma);
    case 91:
      return ++this.pos, this.finishToken(ya.bracketL);
    case 93:
      return ++this.pos, this.finishToken(ya.bracketR);
    case 123:
      return ++this.pos, this.finishToken(ya.braceL);
    case 125:
      return ++this.pos, this.finishToken(ya.braceR);
    case 58:
      return ++this.pos, this.finishToken(ya.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(ya.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
          return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(ya.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Na(e) + "'");
}, Oo.finishOp = function(e, t) {
  var s = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, s);
}, Oo.readRegexp = function() {
  for (var e, t, s = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(s, "Unterminated regular expression");
    var i = this.input.charAt(this.pos);
    if (Ea.test(i) && this.raise(s, "Unterminated regular expression"), e)
      e = false;
    else {
      if (i === "[")
        t = true;
      else if (i === "]" && t)
        t = false;
      else if (i === "/" && !t)
        break;
      e = i === "\\";
    }
    ++this.pos;
  }
  var n2 = this.input.slice(s, this.pos);
  ++this.pos;
  var r2 = this.pos, a2 = this.readWord1();
  this.containsEsc && this.unexpected(r2);
  var o2 = this.regexpState || (this.regexpState = new Co(this));
  o2.reset(s, n2, a2), this.validateRegExpFlags(o2), this.validateRegExpPattern(o2);
  var h2 = null;
  try {
    h2 = new RegExp(n2, a2);
  } catch (e2) {
  }
  return this.finishToken(ya.regexp, { pattern: n2, flags: a2, value: h2 });
}, Oo.readInt = function(e, t, s) {
  for (var i = this.options.ecmaVersion >= 12 && t === void 0, n2 = s && this.input.charCodeAt(this.pos) === 48, r2 = this.pos, a2 = 0, o2 = 0, h2 = 0, l2 = t == null ? 1 / 0 : t; h2 < l2; ++h2, ++this.pos) {
    var c2 = this.input.charCodeAt(this.pos), u2 = void 0;
    if (i && c2 === 95)
      n2 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), o2 === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), h2 === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o2 = c2;
    else {
      if ((u2 = c2 >= 97 ? c2 - 97 + 10 : c2 >= 65 ? c2 - 65 + 10 : c2 >= 48 && c2 <= 57 ? c2 - 48 : 1 / 0) >= e)
        break;
      o2 = c2, a2 = a2 * e + u2;
    }
  }
  return i && o2 === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === r2 || t != null && this.pos - r2 !== t ? null : a2;
}, Oo.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var s = this.readInt(e);
  return s == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (s = Vo(this.input.slice(t, this.pos)), ++this.pos) : la(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(ya.num, s);
}, Oo.readNumber = function(e) {
  var t = this.pos;
  e || this.readInt(10, void 0, true) !== null || this.raise(t, "Invalid number");
  var s = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  s && this.strict && this.raise(t, "Invalid number");
  var i = this.input.charCodeAt(this.pos);
  if (!s && !e && this.options.ecmaVersion >= 11 && i === 110) {
    var n2 = Vo(this.input.slice(t, this.pos));
    return ++this.pos, la(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(ya.num, n2);
  }
  s && /[89]/.test(this.input.slice(t, this.pos)) && (s = false), i !== 46 || s || (++this.pos, this.readInt(10), i = this.input.charCodeAt(this.pos)), i !== 69 && i !== 101 || s || ((i = this.input.charCodeAt(++this.pos)) !== 43 && i !== 45 || ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), la(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var r2, a2 = (r2 = this.input.slice(t, this.pos), s ? parseInt(r2, 8) : parseFloat(r2.replace(/_/g, "")));
  return this.finishToken(ya.num, a2);
}, Oo.readCodePoint = function() {
  var e;
  if (this.input.charCodeAt(this.pos) === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var t = ++this.pos;
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(t, "Code point out of bounds");
  } else
    e = this.readHexChar(4);
  return e;
}, Oo.readString = function(e) {
  for (var t = "", s = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var i = this.input.charCodeAt(this.pos);
    if (i === e)
      break;
    i === 92 ? (t += this.input.slice(s, this.pos), t += this.readEscapedChar(false), s = this.pos) : i === 8232 || i === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (ba(i) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(s, this.pos++), this.finishToken(ya.string, t);
};
var Bo = {};
Oo.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e !== Bo)
      throw e;
    this.readInvalidTemplateToken();
  }
  this.inTemplateElement = false;
}, Oo.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Bo;
  this.raise(e, t);
}, Oo.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var s = this.input.charCodeAt(this.pos);
    if (s === 96 || s === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos !== this.start || this.type !== ya.template && this.type !== ya.invalidTemplate ? (e += this.input.slice(t, this.pos), this.finishToken(ya.template, e)) : s === 36 ? (this.pos += 2, this.finishToken(ya.dollarBraceL)) : (++this.pos, this.finishToken(ya.backQuote));
    if (s === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(true), t = this.pos;
    else if (ba(s)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, s) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += "\n";
          break;
        default:
          e += String.fromCharCode(s);
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
}, Oo.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      case "`":
        return this.finishToken(ya.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  this.raise(this.start, "Unterminated template");
}, Oo.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return Na(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e) {
        var s = this.pos - 1;
        return this.invalidStringToken(s, "Invalid escape sequence in template string"), null;
      }
    default:
      if (t >= 48 && t <= 55) {
        var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], n2 = parseInt(i, 8);
        return n2 > 255 && (i = i.slice(0, -1), n2 = parseInt(i, 8)), this.pos += i.length - 1, t = this.input.charCodeAt(this.pos), i === "0" && t !== 56 && t !== 57 || !this.strict && !e || this.invalidStringToken(this.pos - 1 - i.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(n2);
      }
      return ba(t) ? "" : String.fromCharCode(t);
  }
}, Oo.readHexChar = function(e) {
  var t = this.pos, s = this.readInt(16, e);
  return s === null && this.invalidStringToken(t, "Bad character escape sequence"), s;
}, Oo.readWord1 = function() {
  this.containsEsc = false;
  for (var e = "", t = true, s = this.pos, i = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var n2 = this.fullCharCodeAtPos();
    if (ca(n2, i))
      this.pos += n2 <= 65535 ? 1 : 2;
    else {
      if (n2 !== 92)
        break;
      this.containsEsc = true, e += this.input.slice(s, this.pos);
      var r2 = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var a2 = this.readCodePoint();
      (t ? la : ca)(a2, i) || this.invalidStringToken(r2, "Invalid Unicode escape"), e += Na(a2), s = this.pos;
    }
    t = false;
  }
  return e + this.input.slice(s, this.pos);
}, Oo.readWord = function() {
  var e = this.readWord1(), t = ya.name;
  return this.keywords.test(e) && (t = ma[e]), this.finishToken(t, e);
};
Ba.acorn = { Parser: Ba, version: "8.7.1", defaultOptions: Da, Position: Ta, SourceLocation: Ra, getLineInfo: Ma, Node: ho, TokenType: ua, tokTypes: ya, keywordTypes: ma, TokContext: Ja, tokContexts: eo, isIdentifierChar: ca, isIdentifierStart: la, Token: Lo, isNewLine: ba, lineBreak: Ea, lineBreakG: xa, nonASCIIwhitespace: Aa };
class Fo {
  constructor(e) {
    this.maxParallel = e, this.queue = [], this.workerCount = 0;
  }
  run(e) {
    return new Promise((t, s) => {
      this.queue.push({ reject: s, resolve: t, task: e }), this.work();
    });
  }
  async work() {
    if (this.workerCount >= this.maxParallel)
      return;
    let e;
    for (this.workerCount++; e = this.queue.shift(); ) {
      const { reject: t, resolve: s, task: i } = e;
      try {
        s(await i());
      } catch (e2) {
        t(e2);
      }
    }
    this.workerCount--;
  }
}
const zo = (e) => () => {
  he({ code: "NO_FS_IN_BROWSER", message: `Cannot access the file system (via "${e}") when using the browser build of Rollup. Make sure you supply a plugin with custom resolveId and load hooks to Rollup.`, url: "https://rollupjs.org/guide/en/#a-simple-example" });
}, Wo = { mkdir: zo("fs.mkdir"), readFile: zo("fs.readFile"), writeFile: zo("fs.writeFile") };
async function jo(e, t, s, i, n2, r2, a2, o2) {
  const h2 = await function(e2, t2, s2, i2, n3, r3, a3) {
    let o3 = null, h3 = null;
    if (n3) {
      o3 = /* @__PURE__ */ new Set();
      for (const s3 of n3)
        e2 === s3.source && t2 === s3.importer && o3.add(s3.plugin);
      h3 = (e3, t3) => __spreadProps(__spreadValues({}, e3), { resolve: (e4, s3, { custom: r4, isEntry: a4, skipSelf: o4 } = Q) => i2(e4, s3, r4, a4, o4 ? [...n3, { importer: s3, plugin: t3, source: e4 }] : n3) });
    }
    return s2.hookFirst("resolveId", [e2, t2, { custom: r3, isEntry: a3 }], h3, o3);
  }(e, t, i, n2, r2, a2, o2);
  return h2;
}
function Uo(e, t, { hook: s, id: i } = {}) {
  return typeof e == "string" && (e = { message: e }), e.code && e.code !== ce.PLUGIN_ERROR && (e.pluginCode = e.code), e.code = ce.PLUGIN_ERROR, e.plugin = t, s && (e.hook = s), i && (e.id = i), he(e);
}
const Go = [{ active: true, deprecated: "resolveAssetUrl", replacement: "resolveFileUrl" }];
const Ho = { delete: () => false, get() {
}, has: () => false, set() {
} };
function qo(e) {
  return e.startsWith("at position ") || e.startsWith("at output position ") ? he({ code: "ANONYMOUS_PLUGIN_CACHE", message: "A plugin is trying to use the Rollup cache but is not declaring a plugin name or cacheKey." }) : he({ code: "DUPLICATE_PLUGIN_NAME", message: `The plugin name ${e} is being used twice in the same build. Plugin names must be distinct or provide a cacheKey (please post an issue to the plugin if you are a plugin user).` });
}
async function Ko(e, t, s, i) {
  const n2 = t.id, r2 = [];
  let a2 = e.map === null ? null : Cr(e.map);
  const o2 = e.code;
  let h2 = e.ast;
  const c2 = [], u2 = [];
  let d2 = false;
  const p2 = () => d2 = true;
  let f2 = "";
  const m2 = e.code;
  let g2;
  try {
    g2 = await s.hookReduceArg0("transform", [m2, n2], function(e2, s2, n3) {
      let a3, o3;
      if (typeof s2 == "string")
        a3 = s2;
      else {
        if (!s2 || typeof s2 != "object")
          return e2;
        if (t.updateOptions(s2), s2.code == null)
          return (s2.map || s2.ast) && i(function(e3) {
            return { code: ce.NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE, message: `The plugin "${e3}" returned a "map" or "ast" without returning a "code". This will be ignored.` };
          }(n3.name)), e2;
        ({ code: a3, map: o3, ast: h2 } = s2);
      }
      return o3 !== null && r2.push(Cr(typeof o3 == "string" ? JSON.parse(o3) : o3) || { missing: true, plugin: n3.name }), a3;
    }, (e2, t2) => {
      return f2 = t2.name, __spreadProps(__spreadValues({}, e2), { addWatchFile(t3) {
        c2.push(t3), e2.addWatchFile(t3);
      }, cache: d2 ? e2.cache : (h3 = e2.cache, g3 = p2, { delete: (e3) => (g3(), h3.delete(e3)), get: (e3) => (g3(), h3.get(e3)), has: (e3) => (g3(), h3.has(e3)), set: (e3, t3) => (g3(), h3.set(e3, t3)) }), emitAsset: (t3, s2) => (u2.push({ name: t3, source: s2, type: "asset" }), e2.emitAsset(t3, s2)), emitChunk: (t3, s2) => (u2.push({ id: t3, name: s2 && s2.name, type: "chunk" }), e2.emitChunk(t3, s2)), emitFile: (e3) => (u2.push(e3), s.emitFile(e3)), error: (t3, s2) => (typeof t3 == "string" && (t3 = { message: t3 }), s2 && le(t3, s2, m2, n2), t3.id = n2, t3.hook = "transform", e2.error(t3)), getCombinedSourcemap() {
        const e3 = function(e4, t3, s2, i2, n3) {
          return i2.length ? __spreadValues({ version: 3 }, $n(e4, t3, s2, i2, Nn(n3)).traceMappings()) : s2;
        }(n2, o2, a2, r2, i);
        if (!e3) {
          return new E(o2).generateMap({ hires: true, includeContent: true, source: n2 });
        }
        return a2 !== e3 && (a2 = e3, r2.length = 0), new l(__spreadProps(__spreadValues({}, e3), { file: null, sourcesContent: e3.sourcesContent }));
      }, setAssetSource() {
        return this.error({ code: "INVALID_SETASSETSOURCE", message: "setAssetSource cannot be called in transform for caching reasons. Use emitFile with a source, or call setAssetSource in another hook." });
      }, warn(t3, s2) {
        typeof t3 == "string" && (t3 = { message: t3 }), s2 && le(t3, s2, m2, n2), t3.id = n2, t3.hook = "transform", e2.warn(t3);
      } });
      var h3, g3;
    });
  } catch (e2) {
    Uo(e2, f2, { hook: "transform", id: n2 });
  }
  return d2 || u2.length && (t.transformFiles = u2), { ast: h2, code: g2, customTransformCache: d2, originalCode: o2, originalSourcemap: a2, sourcemapChain: r2, transformDependencies: c2 };
}
class Xo {
  constructor(e, t, s, i) {
    this.graph = e, this.modulesById = t, this.options = s, this.pluginDriver = i, this.implicitEntryModules = /* @__PURE__ */ new Set(), this.indexedEntryModules = [], this.latestLoadModulesPromise = Promise.resolve(), this.moduleLoadPromises = /* @__PURE__ */ new Map(), this.modulesWithLoadedDependencies = /* @__PURE__ */ new Set(), this.nextChunkNamePriority = 0, this.nextEntryModuleIndex = 0, this.resolveId = async (e2, t2, s2, i2, n2 = null) => this.getResolvedIdWithDefaults(this.getNormalizedResolvedIdWithoutDefaults(!this.options.external(e2, t2, false) && await jo(e2, t2, this.options.preserveSymlinks, this.pluginDriver, this.resolveId, n2, s2, typeof i2 == "boolean" ? i2 : !t2), t2, e2)), this.hasModuleSideEffects = s.treeshake ? s.treeshake.moduleSideEffects : () => true, this.readQueue = new Fo(s.maxParallelFileReads);
  }
  async addAdditionalModules(e) {
    const t = this.extendLoadModulesPromise(Promise.all(e.map((e2) => this.loadEntryModule(e2, false, void 0, null))));
    return await this.awaitLoadModulesPromise(), t;
  }
  async addEntryModules(e, t) {
    const s = this.nextEntryModuleIndex;
    this.nextEntryModuleIndex += e.length;
    const i = this.nextChunkNamePriority;
    this.nextChunkNamePriority += e.length;
    const n2 = await this.extendLoadModulesPromise(Promise.all(e.map(({ id: e2, importer: t2 }) => this.loadEntryModule(e2, true, t2, null))).then((n3) => {
      for (let r2 = 0; r2 < n3.length; r2++) {
        const a2 = n3[r2];
        a2.isUserDefinedEntryPoint = a2.isUserDefinedEntryPoint || t, Qo(a2, e[r2], t, i + r2);
        const o2 = this.indexedEntryModules.find((e2) => e2.module === a2);
        o2 ? o2.index = Math.min(o2.index, s + r2) : this.indexedEntryModules.push({ index: s + r2, module: a2 });
      }
      return this.indexedEntryModules.sort(({ index: e2 }, { index: t2 }) => e2 > t2 ? 1 : -1), n3;
    }));
    return await this.awaitLoadModulesPromise(), { entryModules: this.indexedEntryModules.map(({ module: e2 }) => e2), implicitEntryModules: [...this.implicitEntryModules], newEntryModules: n2 };
  }
  async emitChunk({ fileName: e, id: t, importer: s, name: i, implicitlyLoadedAfterOneOf: n2, preserveSignature: r2 }) {
    const a2 = { fileName: e || null, id: t, importer: s, name: i || null }, o2 = n2 ? await this.addEntryWithImplicitDependants(a2, n2) : (await this.addEntryModules([a2], false)).newEntryModules[0];
    return r2 != null && (o2.preserveSignature = r2), o2;
  }
  async preloadModule(e) {
    return (await this.fetchModule(this.getResolvedIdWithDefaults(e), void 0, false, !e.resolveDependencies || "resolveDependencies")).info;
  }
  addEntryWithImplicitDependants(e, t) {
    const s = this.nextChunkNamePriority++;
    return this.extendLoadModulesPromise(this.loadEntryModule(e.id, false, e.importer, null).then(async (i) => {
      if (Qo(i, e, false, s), !i.info.isEntry) {
        this.implicitEntryModules.add(i);
        const s2 = await Promise.all(t.map((t2) => this.loadEntryModule(t2, false, e.importer, i.id)));
        for (const e2 of s2)
          i.implicitlyLoadedAfter.add(e2);
        for (const e2 of i.implicitlyLoadedAfter)
          e2.implicitlyLoadedBefore.add(i);
      }
      return i;
    }));
  }
  async addModuleSource(e, t, s) {
    let i;
    Ki("load modules", 3);
    try {
      i = await this.readQueue.run(async () => {
        var t2;
        return (t2 = await this.pluginDriver.hookFirst("load", [e])) !== null && t2 !== void 0 ? t2 : await Wo.readFile(e, "utf8");
      });
    } catch (s2) {
      Xi("load modules", 3);
      let i2 = `Could not load ${e}`;
      throw t && (i2 += ` (imported by ${ne(t)})`), i2 += `: ${s2.message}`, s2.message = i2, s2;
    }
    Xi("load modules", 3);
    const n2 = typeof i == "string" ? { code: i } : i != null && typeof i == "object" && typeof i.code == "string" ? i : he(function(e2) {
      return { code: ce.BAD_LOADER, message: `Error loading ${ne(e2)}: plugin load hook should return a string, a { code, map } object, or nothing/null` };
    }(e)), r2 = this.graph.cachedModules.get(e);
    if (!r2 || r2.customTransformCache || r2.originalCode !== n2.code || await this.pluginDriver.hookFirst("shouldTransformCachedModule", [{ ast: r2.ast, code: r2.code, id: r2.id, meta: r2.meta, moduleSideEffects: r2.moduleSideEffects, resolvedSources: r2.resolvedIds, syntheticNamedExports: r2.syntheticNamedExports }]))
      s.updateOptions(n2), s.setSource(await Ko(n2, s, this.pluginDriver, this.options.onwarn));
    else {
      if (r2.transformFiles)
        for (const e2 of r2.transformFiles)
          this.pluginDriver.emitFile(e2);
      s.setSource(r2);
    }
  }
  async awaitLoadModulesPromise() {
    let e;
    do {
      e = this.latestLoadModulesPromise, await e;
    } while (e !== this.latestLoadModulesPromise);
  }
  extendLoadModulesPromise(e) {
    return this.latestLoadModulesPromise = Promise.all([e, this.latestLoadModulesPromise]), this.latestLoadModulesPromise.catch(() => {
    }), e;
  }
  async fetchDynamicDependencies(e, t) {
    const s = await Promise.all(t.map((t2) => t2.then(async ([t3, s2]) => s2 === null ? null : typeof s2 == "string" ? (t3.resolution = s2, null) : t3.resolution = await this.fetchResolvedDependency(ne(s2.id), e.id, s2))));
    for (const t2 of s)
      t2 && (e.dynamicDependencies.add(t2), t2.dynamicImporters.push(e.id));
  }
  async fetchModule({ id: e, meta: t, moduleSideEffects: s, syntheticNamedExports: i }, n2, r2, a2) {
    const o2 = this.modulesById.get(e);
    if (o2 instanceof tn)
      return await this.handleExistingModule(o2, r2, a2), o2;
    const h2 = new tn(this.graph, e, this.options, r2, s, i, t);
    this.modulesById.set(e, h2), this.graph.watchFiles[e] = true;
    const l2 = this.addModuleSource(e, n2, h2).then(() => [this.getResolveStaticDependencyPromises(h2), this.getResolveDynamicImportPromises(h2), c2]), c2 = Jo(l2).then(() => this.pluginDriver.hookParallel("moduleParsed", [h2.info]));
    c2.catch(() => {
    }), this.moduleLoadPromises.set(h2, l2);
    const u2 = await l2;
    return a2 ? a2 === "resolveDependencies" && await c2 : await this.fetchModuleDependencies(h2, ...u2), h2;
  }
  async fetchModuleDependencies(e, t, s, i) {
    this.modulesWithLoadedDependencies.has(e) || (this.modulesWithLoadedDependencies.add(e), await Promise.all([this.fetchStaticDependencies(e, t), this.fetchDynamicDependencies(e, s)]), e.linkImports(), await i);
  }
  fetchResolvedDependency(e, t, s) {
    if (s.external) {
      const { external: i, id: n2, moduleSideEffects: r2, meta: a2 } = s;
      this.modulesById.has(n2) || this.modulesById.set(n2, new we(this.options, n2, r2, a2, i !== "absolute" && w(n2)));
      const o2 = this.modulesById.get(n2);
      return o2 instanceof we ? Promise.resolve(o2) : he(function(e2, t2) {
        return { code: ce.INVALID_EXTERNAL_ID, message: `'${e2}' is imported as an external by ${ne(t2)}, but is already an existing non-external module id.` };
      }(e, t));
    }
    return this.fetchModule(s, t, false, false);
  }
  async fetchStaticDependencies(e, t) {
    for (const s of await Promise.all(t.map((t2) => t2.then(([t3, s2]) => this.fetchResolvedDependency(t3, e.id, s2)))))
      e.dependencies.add(s), s.importers.push(e.id);
    if (!this.options.treeshake || e.info.moduleSideEffects === "no-treeshake")
      for (const t2 of e.dependencies)
        t2 instanceof tn && (t2.importedFromNotTreeshaken = true);
  }
  getNormalizedResolvedIdWithoutDefaults(e, t, s) {
    const { makeAbsoluteExternalsRelative: i } = this.options;
    if (e) {
      if (typeof e == "object") {
        const n4 = e.external || this.options.external(e.id, t, true);
        return __spreadProps(__spreadValues({}, e), { external: n4 && (n4 === "relative" || !w(e.id) || n4 === true && Zo(e.id, s, i) || "absolute") });
      }
      const n3 = this.options.external(e, t, true);
      return { external: n3 && (Zo(e, s, i) || "absolute"), id: n3 && i ? Yo(e, t) : e };
    }
    const n2 = i ? Yo(s, t) : s;
    return e === false || this.options.external(n2, t, true) ? { external: Zo(n2, s, i) || "absolute", id: n2 } : null;
  }
  getResolveDynamicImportPromises(e) {
    return e.dynamicImports.map(async (t) => {
      const s = await this.resolveDynamicImport(e, typeof t.argument == "string" ? t.argument : t.argument.esTreeNode, e.id);
      return s && typeof s == "object" && (t.id = s.id), [t, s];
    });
  }
  getResolveStaticDependencyPromises(e) {
    return Array.from(e.sources, async (t) => [t, e.resolvedIds[t] = e.resolvedIds[t] || this.handleResolveId(await this.resolveId(t, e.id, Z, false), t, e.id)]);
  }
  getResolvedIdWithDefaults(e) {
    var t, s;
    if (!e)
      return null;
    const i = e.external || false;
    return { external: i, id: e.id, meta: e.meta || {}, moduleSideEffects: (t = e.moduleSideEffects) !== null && t !== void 0 ? t : this.hasModuleSideEffects(e.id, !!i), syntheticNamedExports: (s = e.syntheticNamedExports) !== null && s !== void 0 && s };
  }
  async handleExistingModule(e, t, s) {
    const i = this.moduleLoadPromises.get(e);
    if (s)
      return s === "resolveDependencies" ? Jo(i) : i;
    if (t) {
      e.info.isEntry = true, this.implicitEntryModules.delete(e);
      for (const t2 of e.implicitlyLoadedAfter)
        t2.implicitlyLoadedBefore.delete(e);
      e.implicitlyLoadedAfter.clear();
    }
    return this.fetchModuleDependencies(e, ...await i);
  }
  handleResolveId(e, t, s) {
    return e === null ? C(t) ? he(function(e2, t2) {
      return { code: ce.UNRESOLVED_IMPORT, message: `Could not resolve '${e2}' from ${ne(t2)}` };
    }(t, s)) : (this.options.onwarn(function(e2, t2) {
      return { code: ce.UNRESOLVED_IMPORT, importer: ne(t2), message: `'${e2}' is imported by ${ne(t2)}, but could not be resolved \u2013 treating it as an external dependency`, source: e2, url: "https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency" };
    }(t, s)), { external: true, id: t, meta: {}, moduleSideEffects: this.hasModuleSideEffects(t, true), syntheticNamedExports: false }) : (e.external && e.syntheticNamedExports && this.options.onwarn(function(e2, t2) {
      return { code: ce.EXTERNAL_SYNTHETIC_EXPORTS, importer: ne(t2), message: `External '${e2}' can not have 'syntheticNamedExports' enabled.`, source: e2 };
    }(t, s)), e);
  }
  async loadEntryModule(e, t, s, i) {
    const n2 = await jo(e, s, this.options.preserveSymlinks, this.pluginDriver, this.resolveId, null, Z, true);
    return n2 == null ? he(i === null ? function(e2) {
      return { code: ce.UNRESOLVED_ENTRY, message: `Could not resolve entry module (${ne(e2)}).` };
    }(e) : function(e2, t2) {
      return { code: ce.MISSING_IMPLICIT_DEPENDANT, message: `Module "${ne(e2)}" that should be implicitly loaded before "${ne(t2)}" could not be resolved.` };
    }(e, i)) : n2 === false || typeof n2 == "object" && n2.external ? he(i === null ? function(e2) {
      return { code: ce.UNRESOLVED_ENTRY, message: `Entry module cannot be external (${ne(e2)}).` };
    }(e) : function(e2, t2) {
      return { code: ce.MISSING_IMPLICIT_DEPENDANT, message: `Module "${ne(e2)}" that should be implicitly loaded before "${ne(t2)}" cannot be external.` };
    }(e, i)) : this.fetchModule(this.getResolvedIdWithDefaults(typeof n2 == "object" ? n2 : { id: n2 }), void 0, t, false);
  }
  async resolveDynamicImport(e, t, s) {
    var i, n2;
    const r2 = await this.pluginDriver.hookFirst("resolveDynamicImport", [t, s]);
    return typeof t != "string" ? typeof r2 == "string" ? r2 : r2 ? __spreadValues({ external: false, moduleSideEffects: true }, r2) : null : r2 == null ? (i = (n2 = e.resolvedIds)[t]) !== null && i !== void 0 ? i : n2[t] = this.handleResolveId(await this.resolveId(t, e.id, Z, false), t, e.id) : this.handleResolveId(this.getResolvedIdWithDefaults(this.getNormalizedResolvedIdWithoutDefaults(r2, s, t)), t, s);
  }
}
function Yo(e, t) {
  return C(e) ? t ? R(t, "..", e) : R(e) : e;
}
function Qo(e, { fileName: t, name: s }, i, n2) {
  var r2;
  if (t !== null)
    e.chunkFileNames.add(t);
  else if (s !== null) {
    let t2 = 0;
    for (; ((r2 = e.chunkNames[t2]) === null || r2 === void 0 ? void 0 : r2.priority) < n2; )
      t2++;
    e.chunkNames.splice(t2, 0, { isUserDefined: i, name: s, priority: n2 });
  }
}
function Zo(e, t, s) {
  return s === true || s === "ifRelativeSource" && C(t) || !w(e);
}
async function Jo(e) {
  const [t, s] = await e;
  return Promise.all([...t, ...s]);
}
class eh extends Dt {
  constructor() {
    super(), this.parent = null, this.variables.set("undefined", new Ii());
  }
  findVariable(e) {
    let t = this.variables.get(e);
    return t || (t = new Zt(e), this.variables.set(e, t)), t;
  }
}
function th(e, t, s, i, n2, r2) {
  let a2 = false;
  return (...o2) => (a2 || (a2 = true, be({ message: `The "this.${t}" plugin context function used by plugin ${i} is deprecated. The "this.${s}" plugin context function should be used instead.`, plugin: i }, n2, r2)), e(...o2));
}
function sh(e, t, s, i, n2, r2) {
  let a2, o2 = true;
  if (typeof e.cacheKey != "string" && (e.name.startsWith("at position ") || e.name.startsWith("at output position ") || r2.has(e.name) ? o2 = false : r2.add(e.name)), t)
    if (o2) {
      const s2 = e.cacheKey || e.name;
      l2 = t[s2] || (t[s2] = /* @__PURE__ */ Object.create(null)), a2 = { delete: (e2) => delete l2[e2], get(e2) {
        const t2 = l2[e2];
        if (t2)
          return t2[0] = 0, t2[1];
      }, has(e2) {
        const t2 = l2[e2];
        return !!t2 && (t2[0] = 0, true);
      }, set(e2, t2) {
        l2[e2] = [0, t2];
      } };
    } else
      h2 = e.name, a2 = { delete: () => qo(h2), get: () => qo(h2), has: () => qo(h2), set: () => qo(h2) };
  else
    a2 = Ho;
  var h2, l2;
  const c2 = { addWatchFile(e2) {
    if (s.phase >= Vi.GENERATE)
      return this.error({ code: ce.INVALID_ROLLUP_PHASE, message: "Cannot call addWatchFile after the build has finished." });
    s.watchFiles[e2] = true;
  }, cache: a2, emitAsset: th((e2, t2) => n2.emitFile({ name: e2, source: t2, type: "asset" }), "emitAsset", "emitFile", e.name, true, i), emitChunk: th((e2, t2) => n2.emitFile({ id: e2, name: t2 && t2.name, type: "chunk" }), "emitChunk", "emitFile", e.name, true, i), emitFile: n2.emitFile.bind(n2), error: (t2) => Uo(t2, e.name), getAssetFileName: th(n2.getFileName, "getAssetFileName", "getFileName", e.name, true, i), getChunkFileName: th(n2.getFileName, "getChunkFileName", "getFileName", e.name, true, i), getFileName: n2.getFileName, getModuleIds: () => s.modulesById.keys(), getModuleInfo: s.getModuleInfo, getWatchFiles: () => Object.keys(s.watchFiles), isExternal: th((e2, t2, s2 = false) => i.external(e2, t2, s2), "isExternal", "resolve", e.name, true, i), load: (e2) => s.moduleLoader.preloadModule(e2), meta: { rollupVersion: "2.73.0", watchMode: s.watchMode }, get moduleIds() {
    const t2 = s.modulesById.keys();
    return function* () {
      be({ message: `Accessing "this.moduleIds" on the plugin context by plugin ${e.name} is deprecated. The "this.getModuleIds" plugin context function should be used instead.`, plugin: e.name }, false, i), yield* t2;
    }();
  }, parse: s.contextParse.bind(s), resolve: (t2, i2, { custom: n3, isEntry: r3, skipSelf: a3 } = Q) => s.moduleLoader.resolveId(t2, i2, n3, r3, a3 ? [{ importer: i2, plugin: e, source: t2 }] : null), resolveId: th((e2, t2) => s.moduleLoader.resolveId(e2, t2, Q, void 0).then((e3) => e3 && e3.id), "resolveId", "resolve", e.name, true, i), setAssetSource: n2.setAssetSource, warn(t2) {
    typeof t2 == "string" && (t2 = { message: t2 }), t2.code && (t2.pluginCode = t2.code), t2.code = "PLUGIN_WARNING", t2.plugin = e.name, i.onwarn(t2);
  } };
  return c2;
}
const ih = Object.keys({ buildEnd: 1, buildStart: 1, closeBundle: 1, closeWatcher: 1, load: 1, moduleParsed: 1, options: 1, resolveDynamicImport: 1, resolveId: 1, shouldTransformCachedModule: 1, transform: 1, watchChange: 1 });
function nh(e, t) {
  return he({ code: "INVALID_PLUGIN_HOOK", message: `Error running plugin hook ${e} for ${t}, expected a function hook.` });
}
class rh {
  constructor(e, t, s, i, n2) {
    this.graph = e, this.options = t, this.unfulfilledActions = /* @__PURE__ */ new Set(), function(e2, t2) {
      for (const { active: s2, deprecated: i2, replacement: n3 } of Go)
        for (const r3 of e2)
          i2 in r3 && be({ message: `The "${i2}" hook used by plugin ${r3.name} is deprecated. The "${n3}" hook should be used instead.`, plugin: r3.name }, s2, t2);
    }(s, t), this.pluginCache = i, this.fileEmitter = new Fr(e, t, n2 && n2.fileEmitter), this.emitFile = this.fileEmitter.emitFile.bind(this.fileEmitter), this.getFileName = this.fileEmitter.getFileName.bind(this.fileEmitter), this.finaliseAssets = this.fileEmitter.assertAssetsFinalized.bind(this.fileEmitter), this.setOutputBundle = this.fileEmitter.setOutputBundle.bind(this.fileEmitter), this.plugins = s.concat(n2 ? n2.plugins : []);
    const r2 = /* @__PURE__ */ new Set();
    if (this.pluginContexts = new Map(this.plugins.map((s2) => [s2, sh(s2, i, e, t, this.fileEmitter, r2)])), n2)
      for (const e2 of s)
        for (const s2 of ih)
          s2 in e2 && t.onwarn((a2 = e2.name, o2 = s2, { code: ce.INPUT_HOOK_IN_OUTPUT_PLUGIN, message: `The "${o2}" hook used by the output plugin ${a2} is a build time hook and will not be run for that plugin. Either this plugin cannot be used as an output plugin, or it should have an option to configure it as an output plugin.` }));
    var a2, o2;
  }
  createOutputPluginDriver(e) {
    return new rh(this.graph, this.options, e, this.pluginCache, this);
  }
  getUnfulfilledHookActions() {
    return this.unfulfilledActions;
  }
  hookFirst(e, t, s, i) {
    let n2 = Promise.resolve(void 0);
    for (const r2 of this.plugins)
      i && i.has(r2) || (n2 = n2.then((i2) => i2 != null ? i2 : this.runHook(e, t, r2, false, s)));
    return n2;
  }
  hookFirstSync(e, t, s) {
    for (const i of this.plugins) {
      const n2 = this.runHookSync(e, t, i, s);
      if (n2 != null)
        return n2;
    }
    return null;
  }
  hookParallel(e, t, s) {
    const i = [];
    for (const n2 of this.plugins) {
      const r2 = this.runHook(e, t, n2, false, s);
      r2 && i.push(r2);
    }
    return Promise.all(i).then(() => {
    });
  }
  hookReduceArg0(e, [t, ...s], i, n2) {
    let r2 = Promise.resolve(t);
    for (const t2 of this.plugins)
      r2 = r2.then((r3) => {
        const a2 = [r3, ...s], o2 = this.runHook(e, a2, t2, false, n2);
        return o2 ? o2.then((e2) => i.call(this.pluginContexts.get(t2), r3, e2, t2)) : r3;
      });
    return r2;
  }
  hookReduceArg0Sync(e, [t, ...s], i, n2) {
    for (const r2 of this.plugins) {
      const a2 = [t, ...s], o2 = this.runHookSync(e, a2, r2, n2);
      t = i.call(this.pluginContexts.get(r2), t, o2, r2);
    }
    return t;
  }
  hookReduceValue(e, t, s, i, n2) {
    let r2 = Promise.resolve(t);
    for (const t2 of this.plugins)
      r2 = r2.then((r3) => {
        const a2 = this.runHook(e, s, t2, true, n2);
        return a2 ? a2.then((e2) => i.call(this.pluginContexts.get(t2), r3, e2, t2)) : r3;
      });
    return r2;
  }
  hookReduceValueSync(e, t, s, i, n2) {
    let r2 = t;
    for (const t2 of this.plugins) {
      const a2 = this.runHookSync(e, s, t2, n2);
      r2 = i.call(this.pluginContexts.get(t2), r2, a2, t2);
    }
    return r2;
  }
  hookSeq(e, t, s) {
    let i = Promise.resolve();
    for (const n2 of this.plugins)
      i = i.then(() => this.runHook(e, t, n2, false, s));
    return i;
  }
  runHook(e, t, s, i, n2) {
    const r2 = s[e];
    if (!r2)
      return;
    let a2 = this.pluginContexts.get(s);
    n2 && (a2 = n2(a2, s));
    let o2 = null;
    return Promise.resolve().then(() => {
      if (typeof r2 != "function")
        return i ? r2 : nh(e, s.name);
      const n3 = r2.apply(a2, t);
      return n3 && n3.then ? (o2 = [s.name, e, t], this.unfulfilledActions.add(o2), Promise.resolve(n3).then((e2) => (this.unfulfilledActions.delete(o2), e2))) : n3;
    }).catch((t2) => (o2 !== null && this.unfulfilledActions.delete(o2), Uo(t2, s.name, { hook: e })));
  }
  runHookSync(e, t, s, i) {
    const n2 = s[e];
    if (!n2)
      return;
    let r2 = this.pluginContexts.get(s);
    i && (r2 = i(r2, s));
    try {
      return typeof n2 != "function" ? nh(e, s.name) : n2.apply(r2, t);
    } catch (t2) {
      return Uo(t2, s.name, { hook: e });
    }
  }
}
class ah {
  constructor(e, t) {
    var s, i;
    if (this.options = e, this.cachedModules = /* @__PURE__ */ new Map(), this.deoptimizationTracker = new j(), this.entryModules = [], this.modulesById = /* @__PURE__ */ new Map(), this.needsTreeshakingPass = false, this.phase = Vi.LOAD_AND_PARSE, this.scope = new eh(), this.watchFiles = /* @__PURE__ */ Object.create(null), this.watchMode = false, this.externalModules = [], this.implicitEntryModules = [], this.modules = [], this.getModuleInfo = (e2) => {
      const t2 = this.modulesById.get(e2);
      return t2 ? t2.info : null;
    }, e.cache !== false) {
      if ((s = e.cache) === null || s === void 0 ? void 0 : s.modules)
        for (const t2 of e.cache.modules)
          this.cachedModules.set(t2.id, t2);
      this.pluginCache = ((i = e.cache) === null || i === void 0 ? void 0 : i.plugins) || /* @__PURE__ */ Object.create(null);
      for (const e2 in this.pluginCache) {
        const t2 = this.pluginCache[e2];
        for (const e3 of Object.values(t2))
          e3[0]++;
      }
    }
    if (t) {
      this.watchMode = true;
      const e2 = (...e3) => this.pluginDriver.hookParallel("watchChange", e3), s2 = () => this.pluginDriver.hookParallel("closeWatcher", []);
      t.onCurrentAwaited("change", e2), t.onCurrentAwaited("close", s2);
    }
    this.pluginDriver = new rh(this, e, e.plugins, this.pluginCache), this.acornParser = Ba.extend(...e.acornInjectPlugins), this.moduleLoader = new Xo(this, this.modulesById, this.options, this.pluginDriver);
  }
  async build() {
    Ki("generate module graph", 2), await this.generateModuleGraph(), Xi("generate module graph", 2), Ki("sort modules", 2), this.phase = Vi.ANALYSE, this.sortModules(), Xi("sort modules", 2), Ki("mark included statements", 2), this.includeStatements(), Xi("mark included statements", 2), this.phase = Vi.GENERATE;
  }
  contextParse(e, t = {}) {
    const s = t.onComment, i = [];
    t.onComment = s && typeof s == "function" ? (e2, n3, r2, a2, ...o2) => (i.push({ end: a2, start: r2, type: e2 ? "Block" : "Line", value: n3 }), s.call(t, e2, n3, r2, a2, ...o2)) : i;
    const n2 = this.acornParser.parse(e, __spreadValues(__spreadValues({}, this.options.acorn), t));
    return typeof s == "object" && s.push(...i), t.onComment = s, function(e2, t2, s2) {
      const i2 = [], n3 = [];
      for (const t3 of e2)
        nt.test(t3.value) ? i2.push(t3) : Ze.test(t3.value) && n3.push(t3);
      for (const e3 of n3)
        rt(t2, e3, false);
      Je(t2, { annotationIndex: 0, annotations: i2, code: s2 });
    }(i, n2, e), n2;
  }
  getCache() {
    for (const e in this.pluginCache) {
      const t = this.pluginCache[e];
      let s = true;
      for (const [e2, i] of Object.entries(t))
        i[0] >= this.options.experimentalCacheExpiry ? delete t[e2] : s = false;
      s && delete this.pluginCache[e];
    }
    return { modules: this.modules.map((e) => e.toJSON()), plugins: this.pluginCache };
  }
  async generateModuleGraph() {
    var e;
    if ({ entryModules: this.entryModules, implicitEntryModules: this.implicitEntryModules } = await this.moduleLoader.addEntryModules((e = this.options.input, Array.isArray(e) ? e.map((e2) => ({ fileName: null, id: e2, implicitlyLoadedAfter: [], importer: void 0, name: null })) : Object.entries(e).map(([e2, t]) => ({ fileName: null, id: t, implicitlyLoadedAfter: [], importer: void 0, name: e2 }))), true), this.entryModules.length === 0)
      throw new Error("You must supply options.input to rollup");
    for (const e2 of this.modulesById.values())
      e2 instanceof tn ? this.modules.push(e2) : this.externalModules.push(e2);
  }
  includeStatements() {
    for (const e of [...this.entryModules, ...this.implicitEntryModules])
      Zi(e);
    if (this.options.treeshake) {
      let e = 1;
      do {
        Ki(`treeshaking pass ${e}`, 3), this.needsTreeshakingPass = false;
        for (const e2 of this.modules)
          e2.isExecuted && (e2.info.moduleSideEffects === "no-treeshake" ? e2.includeAllInBundle() : e2.include());
        if (e === 1)
          for (const e2 of [...this.entryModules, ...this.implicitEntryModules])
            e2.preserveSignature !== false && (e2.includeAllExports(false), this.needsTreeshakingPass = true);
        Xi("treeshaking pass " + e++, 3);
      } while (this.needsTreeshakingPass);
    } else
      for (const e of this.modules)
        e.includeAllInBundle();
    for (const e of this.externalModules)
      e.warnUnusedImports();
    for (const e of this.implicitEntryModules)
      for (const t of e.implicitlyLoadedAfter)
        t.info.isEntry || t.isIncluded() || he(me(t));
  }
  sortModules() {
    const { orderedModules: e, cyclePaths: t } = function(e2) {
      let t2 = 0;
      const s = [], i = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Map(), a2 = [], o2 = (e3) => {
        if (e3 instanceof tn) {
          for (const t3 of e3.dependencies)
            r2.has(t3) ? i.has(t3) || s.push(qr(t3, e3, r2)) : (r2.set(t3, e3), o2(t3));
          for (const t3 of e3.implicitlyLoadedBefore)
            n2.add(t3);
          for (const { resolution: t3 } of e3.dynamicImports)
            t3 instanceof tn && n2.add(t3);
          a2.push(e3);
        }
        e3.execIndex = t2++, i.add(e3);
      };
      for (const t3 of e2)
        r2.has(t3) || (r2.set(t3, null), o2(t3));
      for (const e3 of n2)
        r2.has(e3) || (r2.set(e3, null), o2(e3));
      return { cyclePaths: s, orderedModules: a2 };
    }(this.entryModules);
    for (const e2 of t)
      this.options.onwarn({ code: "CIRCULAR_DEPENDENCY", cycle: e2, importer: e2[0], message: `Circular dependency: ${e2.join(" -> ")}` });
    this.modules = e;
    for (const e2 of this.modules)
      e2.bindReferences();
    this.warnForMissingExports();
  }
  warnForMissingExports() {
    for (const e of this.modules)
      for (const t of e.importDescriptions.values())
        t.name === "*" || t.module.getVariableForExportName(t.name)[0] || e.warn({ code: "NON_EXISTENT_EXPORT", message: `Non-existent export '${t.name}' is imported from ${ne(t.module.id)}`, name: t.name, source: t.module.id }, t.start);
  }
}
function oh(e) {
  return Array.isArray(e) ? e.filter(Boolean) : e ? [e] : [];
}
function hh(e, t) {
  return t();
}
const lh = (e) => console.warn(e.message || e);
function ch(e, t, s, i, n2 = /$./) {
  const r2 = new Set(t), a2 = Object.keys(e).filter((e2) => !(r2.has(e2) || n2.test(e2)));
  a2.length > 0 && i({ code: "UNKNOWN_OPTION", message: `Unknown ${s}: ${a2.join(", ")}. Allowed options: ${[...r2].sort().join(", ")}` });
}
const uh = { recommended: { annotations: true, correctVarValueBeforeDeclaration: false, moduleSideEffects: () => true, propertyReadSideEffects: true, tryCatchDeoptimization: true, unknownGlobalSideEffects: false }, safest: { annotations: true, correctVarValueBeforeDeclaration: true, moduleSideEffects: () => true, propertyReadSideEffects: true, tryCatchDeoptimization: true, unknownGlobalSideEffects: true }, smallest: { annotations: true, correctVarValueBeforeDeclaration: false, moduleSideEffects: () => false, propertyReadSideEffects: false, tryCatchDeoptimization: false, unknownGlobalSideEffects: false } }, dh = { es2015: { arrowFunctions: true, constBindings: true, objectShorthand: true, reservedNamesAsProps: true, symbols: true }, es5: { arrowFunctions: false, constBindings: false, objectShorthand: false, reservedNamesAsProps: true, symbols: false } }, ph = (e, t, s, i) => {
  const n2 = e == null ? void 0 : e.preset;
  if (n2) {
    const i2 = t[n2];
    if (i2)
      return __spreadValues(__spreadValues({}, i2), e);
    he(pe(`${s}.preset`, fh(s), `valid values are ${se(Object.keys(t))}`, n2));
  }
  return ((e2, t2, s2) => (i2) => {
    if (typeof i2 == "string") {
      const n3 = e2[i2];
      if (n3)
        return n3;
      he(pe(t2, fh(t2), `valid values are ${s2}${se(Object.keys(e2))}. You can also supply an object for more fine-grained control`, i2));
    }
    return ((e3) => e3 && typeof e3 == "object" ? e3 : {})(i2);
  })(t, s, i)(e);
}, fh = (e) => e.split(".").join("").toLowerCase();
const mh = (e) => {
  const { onwarn: t } = e;
  return t ? (e2) => {
    e2.toString = () => {
      let t2 = "";
      return e2.plugin && (t2 += `(${e2.plugin} plugin) `), e2.loc && (t2 += `${ne(e2.loc.file)} (${e2.loc.line}:${e2.loc.column}) `), t2 += e2.message, t2;
    }, t(e2, lh);
  } : lh;
}, gh = (e) => __spreadValues({ allowAwaitOutsideFunction: true, ecmaVersion: "latest", preserveParens: false, sourceType: "module" }, e.acorn), yh = (e) => oh(e.acornInjectPlugins), Eh = (e) => {
  var t;
  return ((t = e.cache) === null || t === void 0 ? void 0 : t.cache) || e.cache;
}, xh = (e) => {
  if (e === true)
    return () => true;
  if (typeof e == "function")
    return (t, ...s) => !t.startsWith("\0") && e(t, ...s) || false;
  if (e) {
    const t = /* @__PURE__ */ new Set(), s = [];
    for (const i of oh(e))
      i instanceof RegExp ? s.push(i) : t.add(i);
    return (e2, ...i) => t.has(e2) || s.some((t2) => t2.test(e2));
  }
  return () => false;
}, bh = (e, t, s) => {
  const i = e.inlineDynamicImports;
  return i && ve('The "inlineDynamicImports" option is deprecated. Use the "output.inlineDynamicImports" option instead.', false, t, s), i;
}, vh = (e) => {
  const t = e.input;
  return t == null ? [] : typeof t == "string" ? [t] : t;
}, Ah = (e, t, s) => {
  const i = e.manualChunks;
  return i && ve('The "manualChunks" option is deprecated. Use the "output.manualChunks" option instead.', false, t, s), i;
}, Sh = (e) => {
  const t = e.maxParallelFileReads;
  return typeof t == "number" ? t <= 0 ? 1 / 0 : t : 20;
}, Ph = (e, t) => {
  const s = e.moduleContext;
  if (typeof s == "function")
    return (e2) => {
      var i;
      return (i = s(e2)) !== null && i !== void 0 ? i : t;
    };
  if (s) {
    const e2 = /* @__PURE__ */ Object.create(null);
    for (const [t2, i] of Object.entries(s))
      e2[R(t2)] = i;
    return (s2) => e2[s2] || t;
  }
  return () => t;
}, kh = (e, t) => {
  const s = e.preserveEntrySignatures;
  return s == null && t.add("preserveEntrySignatures"), s != null ? s : "strict";
}, wh = (e, t, s) => {
  const i = e.preserveModules;
  return i && ve('The "preserveModules" option is deprecated. Use the "output.preserveModules" option instead.', false, t, s), i;
}, Ch = (e, t, s) => {
  const i = e.treeshake;
  if (i === false)
    return false;
  const n2 = ph(e.treeshake, uh, "treeshake", "false, true, ");
  return n2.pureExternalModules !== void 0 && ve(`The "treeshake.pureExternalModules" option is deprecated. The "treeshake.moduleSideEffects" option should be used instead. "treeshake.pureExternalModules: true" is equivalent to "treeshake.moduleSideEffects: 'no-external'"`, true, t, s), { annotations: n2.annotations !== false, correctVarValueBeforeDeclaration: n2.correctVarValueBeforeDeclaration === true, moduleSideEffects: typeof i == "object" && i.pureExternalModules ? Ih(i.moduleSideEffects, i.pureExternalModules) : Ih(n2.moduleSideEffects, void 0), propertyReadSideEffects: n2.propertyReadSideEffects === "always" ? "always" : n2.propertyReadSideEffects !== false, tryCatchDeoptimization: n2.tryCatchDeoptimization !== false, unknownGlobalSideEffects: n2.unknownGlobalSideEffects !== false };
}, Ih = (e, t) => {
  if (typeof e == "boolean")
    return () => e;
  if (e === "no-external")
    return (e2, t2) => !t2;
  if (typeof e == "function")
    return (t2, s2) => !!t2.startsWith("\0") || e(t2, s2) !== false;
  if (Array.isArray(e)) {
    const t2 = new Set(e);
    return (e2) => t2.has(e2);
  }
  e && he(pe("treeshake.moduleSideEffects", "treeshake", 'please use one of false, "no-external", a function or an array'));
  const s = xh(t);
  return (e2, t2) => !(t2 && s(e2));
}, _h = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g, Nh = /^[a-z]:/i;
function $h(e) {
  const t = Nh.exec(e), s = t ? t[0] : "";
  return s + e.substr(s.length).replace(_h, "_");
}
const Th = (e, t, s) => {
  const { file: i } = e;
  if (typeof i == "string") {
    if (t)
      return he(pe("output.file", "outputdir", 'you must set "output.dir" instead of "output.file" when using the "output.preserveModules" option'));
    if (!Array.isArray(s.input))
      return he(pe("output.file", "outputdir", 'you must set "output.dir" instead of "output.file" when providing named inputs'));
  }
  return i;
}, Rh = (e) => {
  const t = e.format;
  switch (t) {
    case void 0:
    case "es":
    case "esm":
    case "module":
      return "es";
    case "cjs":
    case "commonjs":
      return "cjs";
    case "system":
    case "systemjs":
      return "system";
    case "amd":
    case "iife":
    case "umd":
      return t;
    default:
      return he({ message: 'You must specify "output.format", which can be one of "amd", "cjs", "system", "es", "iife" or "umd".', url: "https://rollupjs.org/guide/en/#outputformat" });
  }
}, Mh = (e, t) => {
  var s;
  const i = ((s = e.inlineDynamicImports) !== null && s !== void 0 ? s : t.inlineDynamicImports) || false, { input: n2 } = t;
  return i && (Array.isArray(n2) ? n2 : Object.keys(n2)).length > 1 ? he(pe("output.inlineDynamicImports", "outputinlinedynamicimports", 'multiple inputs are not supported when "output.inlineDynamicImports" is true')) : i;
}, Dh = (e, t, s) => {
  var i;
  const n2 = ((i = e.preserveModules) !== null && i !== void 0 ? i : s.preserveModules) || false;
  if (n2) {
    if (t)
      return he(pe("output.inlineDynamicImports", "outputinlinedynamicimports", 'this option is not supported for "output.preserveModules"'));
    if (s.preserveEntrySignatures === false)
      return he(pe("preserveEntrySignatures", "preserveentrysignatures", 'setting this option to false is not supported for "output.preserveModules"'));
  }
  return n2;
}, Lh = (e, t) => {
  const s = e.preferConst;
  return s != null && be('The "output.preferConst" option is deprecated. Use the "output.generatedCode.constBindings" option instead.', false, t), !!s;
}, Oh = (e) => {
  const { preserveModulesRoot: t } = e;
  if (t != null)
    return R(t);
}, Vh = (e) => {
  const t = __spreadValues({ autoId: false, basePath: "", define: "define" }, e.amd);
  if ((t.autoId || t.basePath) && t.id)
    return he(pe("output.amd.id", "outputamd", 'this option cannot be used together with "output.amd.autoId"/"output.amd.basePath"'));
  if (t.basePath && !t.autoId)
    return he(pe("output.amd.basePath", "outputamd", 'this option only works with "output.amd.autoId"'));
  let s;
  return s = t.autoId ? { autoId: true, basePath: t.basePath, define: t.define } : { autoId: false, define: t.define, id: t.id }, s;
}, Bh = (e, t) => {
  const s = e[t];
  return typeof s == "function" ? s : () => s || "";
}, Fh = (e, t) => {
  const { dir: s } = e;
  return typeof s == "string" && typeof t == "string" ? he(pe("output.dir", "outputdir", 'you must set either "output.file" for a single-file build or "output.dir" when generating multiple chunks')) : s;
}, zh = (e, t) => {
  const s = e.dynamicImportFunction;
  return s && be('The "output.dynamicImportFunction" option is deprecated. Use the "renderDynamicImport" plugin hook instead.', false, t), s;
}, Wh = (e, t) => {
  const s = e.entryFileNames;
  return s == null && t.add("entryFileNames"), s != null ? s : "[name].js";
};
function jh(e, t) {
  const s = e.exports;
  if (s == null)
    t.add("exports");
  else if (!["default", "named", "none", "auto"].includes(s))
    return he((i = s, { code: ce.INVALID_EXPORT_OPTION, message: `"output.exports" must be "default", "named", "none", "auto", or left unspecified (defaults to "auto"), received "${i}"`, url: "https://rollupjs.org/guide/en/#outputexports" }));
  var i;
  return s || "auto";
}
const Uh = (e, t) => {
  const s = ph(e.generatedCode, dh, "output.generatedCode", "");
  return { arrowFunctions: s.arrowFunctions === true, constBindings: s.constBindings === true || t, objectShorthand: s.objectShorthand === true, reservedNamesAsProps: s.reservedNamesAsProps === true, symbols: s.symbols === true };
}, Gh = (e, t) => {
  if (t)
    return "";
  const s = e.indent;
  return s === false ? "" : s == null || s;
}, Hh = /* @__PURE__ */ new Set(["auto", "esModule", "default", "defaultOnly", true, false]), qh = (e, t) => {
  const s = e.interop, i = /* @__PURE__ */ new Set(), n2 = (e2) => {
    if (!i.has(e2)) {
      if (i.add(e2), !Hh.has(e2))
        return he(pe("output.interop", "outputinterop", `use one of ${Array.from(Hh, (e3) => JSON.stringify(e3)).join(", ")}`, e2));
      typeof e2 == "boolean" && be({ message: `The boolean value "${e2}" for the "output.interop" option is deprecated. Use ${e2 ? '"auto"' : '"esModule", "default" or "defaultOnly"'} instead.`, url: "https://rollupjs.org/guide/en/#outputinterop" }, false, t);
    }
    return e2;
  };
  if (typeof s == "function") {
    const e2 = /* @__PURE__ */ Object.create(null);
    let t2 = null;
    return (i2) => i2 === null ? t2 || n2(t2 = s(i2)) : i2 in e2 ? e2[i2] : n2(e2[i2] = s(i2));
  }
  return s === void 0 ? () => true : () => n2(s);
}, Kh = (e, t, s, i) => {
  const n2 = e.manualChunks || i.manualChunks;
  if (n2) {
    if (t)
      return he(pe("output.manualChunks", "outputmanualchunks", 'this option is not supported for "output.inlineDynamicImports"'));
    if (s)
      return he(pe("output.manualChunks", "outputmanualchunks", 'this option is not supported for "output.preserveModules"'));
  }
  return n2 || {};
}, Xh = (e, t, s) => {
  var i;
  return (i = e.minifyInternalExports) !== null && i !== void 0 ? i : s || t === "es" || t === "system";
}, Yh = (e, t, s) => {
  const i = e.namespaceToStringTag;
  return i != null ? (be('The "output.namespaceToStringTag" option is deprecated. Use the "output.generatedCode.symbols" option instead.', false, s), i) : t.symbols || false;
};
function Qh(e) {
  return async function(e2, t) {
    const { options: s, unsetOptions: i } = await async function(e3, t2) {
      if (!e3)
        throw new Error("You must supply an options object to rollup");
      const s2 = oh(e3.plugins), { options: i2, unsetOptions: n3 } = function(e4) {
        var t3, s3, i3;
        const n4 = /* @__PURE__ */ new Set(), r3 = (t3 = e4.context) !== null && t3 !== void 0 ? t3 : "undefined", a3 = mh(e4), o2 = e4.strictDeprecations || false, h2 = { acorn: gh(e4), acornInjectPlugins: yh(e4), cache: Eh(e4), context: r3, experimentalCacheExpiry: (s3 = e4.experimentalCacheExpiry) !== null && s3 !== void 0 ? s3 : 10, external: xh(e4.external), inlineDynamicImports: bh(e4, a3, o2), input: vh(e4), makeAbsoluteExternalsRelative: (i3 = e4.makeAbsoluteExternalsRelative) === null || i3 === void 0 || i3, manualChunks: Ah(e4, a3, o2), maxParallelFileReads: Sh(e4), moduleContext: Ph(e4, r3), onwarn: a3, perf: e4.perf || false, plugins: oh(e4.plugins), preserveEntrySignatures: kh(e4, n4), preserveModules: wh(e4, a3, o2), preserveSymlinks: e4.preserveSymlinks || false, shimMissingExports: e4.shimMissingExports || false, strictDeprecations: o2, treeshake: Ch(e4, a3, o2) };
        return ch(e4, [...Object.keys(h2), "watch"], "input options", h2.onwarn, /^(output)$/), { options: h2, unsetOptions: n4 };
      }(await s2.reduce(function(e4) {
        return async (t3, s3) => s3.options && await s3.options.call({ meta: { rollupVersion: "2.73.0", watchMode: e4 } }, await t3) || t3;
      }(t2), Promise.resolve(e3)));
      return Zh(i2.plugins, "at position "), { options: i2, unsetOptions: n3 };
    }(e2, t !== null);
    !function(e3) {
      e3.perf ? (ji = /* @__PURE__ */ new Map(), Ki = Gi, Xi = Hi, e3.plugins = e3.plugins.map(Qi)) : (Ki = Wi, Xi = Wi);
    }(s);
    const n2 = new ah(s, t), r2 = e2.cache !== false;
    delete s.cache, delete e2.cache, Ki("BUILD", 1), await hh(n2.pluginDriver, async () => {
      try {
        await n2.pluginDriver.hookParallel("buildStart", [s]), await n2.build();
      } catch (e3) {
        const t2 = Object.keys(n2.watchFiles);
        throw t2.length > 0 && (e3.watchFiles = t2), await n2.pluginDriver.hookParallel("buildEnd", [e3]), await n2.pluginDriver.hookParallel("closeBundle", []), e3;
      }
      await n2.pluginDriver.hookParallel("buildEnd", []);
    }), Xi("BUILD", 1);
    const a2 = { cache: r2 ? n2.getCache() : void 0, async close() {
      a2.closed || (a2.closed = true, await n2.pluginDriver.hookParallel("closeBundle", []));
    }, closed: false, generate: async (e3) => a2.closed ? he(xe()) : Jh(false, s, i, e3, n2), watchFiles: Object.keys(n2.watchFiles), write: async (e3) => a2.closed ? he(xe()) : Jh(true, s, i, e3, n2) };
    s.perf && (a2.getTimings = qi);
    return a2;
  }(e, null);
}
function Zh(e, t) {
  e.forEach((e2, s) => {
    e2.name || (e2.name = `${t}${s + 1}`);
  });
}
function Jh(e, t, s, i, n2) {
  const { options: r2, outputPluginDriver: a2, unsetOptions: o2 } = function(e2, t2, s2, i2) {
    if (!e2)
      throw new Error("You must supply an options object");
    const n3 = oh(e2.plugins);
    Zh(n3, "at output position ");
    const r3 = t2.createOutputPluginDriver(n3);
    return __spreadProps(__spreadValues({}, el(s2, i2, e2, r3)), { outputPluginDriver: r3 });
  }(i, n2.pluginDriver, t, s);
  return hh(0, async () => {
    const s2 = new Yr(r2, o2, t, a2, n2), i2 = await s2.generate(e);
    if (e) {
      if (!r2.dir && !r2.file)
        return he({ code: "MISSING_OPTION", message: 'You must specify "output.file" or "output.dir" for the build.' });
      await Promise.all(Object.values(i2).map((e2) => async function(e3, t2) {
        const s3 = R(t2.dir || N(t2.file), e3.fileName);
        let i3, n3;
        if (await Wo.mkdir(N(s3), { recursive: true }), e3.type === "asset")
          n3 = e3.source;
        else if (n3 = e3.code, t2.sourcemap && e3.map) {
          let r3;
          t2.sourcemap === "inline" ? r3 = e3.map.toUrl() : (r3 = `${_(e3.fileName)}.map`, i3 = Wo.writeFile(`${s3}.map`, e3.map.toString())), t2.sourcemap !== "hidden" && (n3 += `//# sourceMappingURL=${r3}
`);
        }
        return Promise.all([Wo.writeFile(s3, n3), i3]);
      }(e2, r2))), await a2.hookParallel("writeBundle", [r2, i2]);
    }
    return h2 = i2, { output: Object.values(h2).filter((e2) => Object.keys(e2).length > 0).sort((e2, t2) => {
      const s3 = sl(e2), i3 = sl(t2);
      return s3 === i3 ? 0 : s3 < i3 ? -1 : 1;
    }) };
    var h2;
  });
}
function el(e, t, s, i) {
  return function(e2, t2, s2) {
    var i2, n2, r2, a2, o2, h2, l2;
    const c2 = new Set(s2), u2 = e2.compact || false, d2 = Rh(e2), p2 = Mh(e2, t2), f2 = Dh(e2, p2, t2), m2 = Th(e2, f2, t2), g2 = Lh(e2, t2), y2 = Uh(e2, g2), E2 = { amd: Vh(e2), assetFileNames: (i2 = e2.assetFileNames) !== null && i2 !== void 0 ? i2 : "assets/[name]-[hash][extname]", banner: Bh(e2, "banner"), chunkFileNames: (n2 = e2.chunkFileNames) !== null && n2 !== void 0 ? n2 : "[name]-[hash].js", compact: u2, dir: Fh(e2, m2), dynamicImportFunction: zh(e2, t2), entryFileNames: Wh(e2, c2), esModule: (r2 = e2.esModule) === null || r2 === void 0 || r2, exports: jh(e2, c2), extend: e2.extend || false, externalLiveBindings: (a2 = e2.externalLiveBindings) === null || a2 === void 0 || a2, file: m2, footer: Bh(e2, "footer"), format: d2, freeze: (o2 = e2.freeze) === null || o2 === void 0 || o2, generatedCode: y2, globals: e2.globals || {}, hoistTransitiveImports: (h2 = e2.hoistTransitiveImports) === null || h2 === void 0 || h2, indent: Gh(e2, u2), inlineDynamicImports: p2, interop: qh(e2, t2), intro: Bh(e2, "intro"), manualChunks: Kh(e2, p2, f2, t2), minifyInternalExports: Xh(e2, d2, u2), name: e2.name, namespaceToStringTag: Yh(e2, y2, t2), noConflict: e2.noConflict || false, outro: Bh(e2, "outro"), paths: e2.paths || {}, plugins: oh(e2.plugins), preferConst: g2, preserveModules: f2, preserveModulesRoot: Oh(e2), sanitizeFileName: typeof e2.sanitizeFileName == "function" ? e2.sanitizeFileName : e2.sanitizeFileName === false ? (e3) => e3 : $h, sourcemap: e2.sourcemap || false, sourcemapExcludeSources: e2.sourcemapExcludeSources || false, sourcemapFile: e2.sourcemapFile, sourcemapPathTransform: e2.sourcemapPathTransform, strict: (l2 = e2.strict) === null || l2 === void 0 || l2, systemNullSetters: e2.systemNullSetters || false, validate: e2.validate || false };
    return ch(e2, Object.keys(E2), "output options", t2.onwarn), { options: E2, unsetOptions: c2 };
  }(i.hookReduceArg0Sync("outputOptions", [s.output || s], (e2, t2) => t2 || e2, (e2) => {
    const t2 = () => e2.error({ code: ce.CANNOT_EMIT_FROM_OPTIONS_HOOK, message: 'Cannot emit files or set asset sources in the "outputOptions" hook, use the "renderStart" hook instead.' });
    return __spreadProps(__spreadValues({}, e2), { emitFile: t2, setAssetSource: t2 });
  }), e, t);
}
var tl;
function sl(e) {
  return e.type === "asset" ? tl.ASSET : e.isEntry ? tl.ENTRY_CHUNK : tl.SECONDARY_CHUNK;
}
!function(e) {
  e[e.ENTRY_CHUNK = 0] = "ENTRY_CHUNK", e[e.SECONDARY_CHUNK = 1] = "SECONDARY_CHUNK", e[e.ASSET = 2] = "ASSET";
}(tl || (tl = {}));
function sleep(ms2) {
  return new Promise((fulfil) => {
    setTimeout(fulfil, ms2);
  });
}
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var keywords$1 = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};
var keywordRelationalOperator = /^in(stanceof)?$/;
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
function isInAstralSet(code, set) {
  var pos = 65536;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) {
      return false;
    }
    pos += set[i + 1];
    if (pos >= code) {
      return true;
    }
  }
}
function isIdentifierStart(code, astral) {
  if (code < 65) {
    return code === 36;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code, astral) {
  if (code < 48) {
    return code === 36;
  }
  if (code < 58) {
    return true;
  }
  if (code < 65) {
    return false;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
var TokenType = function TokenType2(label, conf) {
  if (conf === void 0)
    conf = {};
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};
function binop(name, prec) {
  return new TokenType(name, { beforeExpr: true, binop: prec });
}
var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
var keywords = {};
function kw(name, options) {
  if (options === void 0)
    options = {};
  options.keyword = name;
  return keywords[name] = new TokenType(name, options);
}
var types$1 = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  privateId: new TokenType("privateId", startsExpr),
  eof: new TokenType("eof"),
  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
  prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", { beforeExpr: true }),
  coalesce: binop("??", 1),
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", { isLoop: true, beforeExpr: true }),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", { isLoop: true }),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", { isLoop: true }),
  _with: kw("with"),
  _new: kw("new", { beforeExpr: true, startsExpr: true }),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", { beforeExpr: true, binop: 7 }),
  _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
  _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
  _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
  _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
};
var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  return code === 10 || code === 13 || code === 8232 || code === 8233;
}
function nextLineBreak(code, from, end) {
  if (end === void 0)
    end = code.length;
  for (var i = from; i < end; i++) {
    var next = code.charCodeAt(i);
    if (isNewLine(next)) {
      return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
    }
  }
  return -1;
}
var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;
var hasOwn = Object.hasOwn || function(obj, propName) {
  return hasOwnProperty.call(obj, propName);
};
var isArray = Array.isArray || function(obj) {
  return toString.call(obj) === "[object Array]";
};
function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
}
function codePointToString(code) {
  if (code <= 65535) {
    return String.fromCharCode(code);
  }
  code -= 65536;
  return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
}
var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var Position = function Position2(line, col) {
  this.line = line;
  this.column = col;
};
Position.prototype.offset = function offset(n2) {
  return new Position(this.line, this.column + n2);
};
var SourceLocation = function SourceLocation2(p2, start, end) {
  this.start = start;
  this.end = end;
  if (p2.sourceFile !== null) {
    this.source = p2.sourceFile;
  }
};
function getLineInfo(input, offset2) {
  for (var line = 1, cur = 0; ; ) {
    var nextBreak = nextLineBreak(input, cur, offset2);
    if (nextBreak < 0) {
      return new Position(line, offset2 - cur);
    }
    ++line;
    cur = nextBreak;
  }
}
var defaultOptions = {
  ecmaVersion: null,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowAwaitOutsideFunction: null,
  allowSuperOutsideMethod: null,
  allowHashBang: false,
  locations: false,
  onToken: null,
  onComment: null,
  ranges: false,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: false
};
var warnedAboutEcmaVersion = false;
function getOptions(opts) {
  var options = {};
  for (var opt in defaultOptions) {
    options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
  }
  if (options.ecmaVersion === "latest") {
    options.ecmaVersion = 1e8;
  } else if (options.ecmaVersion == null) {
    if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
      warnedAboutEcmaVersion = true;
      console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
    }
    options.ecmaVersion = 11;
  } else if (options.ecmaVersion >= 2015) {
    options.ecmaVersion -= 2009;
  }
  if (options.allowReserved == null) {
    options.allowReserved = options.ecmaVersion < 5;
  }
  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function(token) {
      return tokens.push(token);
    };
  }
  if (isArray(options.onComment)) {
    options.onComment = pushComment(options, options.onComment);
  }
  return options;
}
function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start,
      end
    };
    if (options.locations) {
      comment.loc = new SourceLocation(this, startLoc, endLoc);
    }
    if (options.ranges) {
      comment.range = [start, end];
    }
    array.push(comment);
  };
}
var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128, SCOPE_CLASS_STATIC_BLOCK = 256, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
}
var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
var Parser = function Parser2(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options.allowReserved !== true) {
    reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
    if (options.sourceType === "module") {
      reserved += " await";
    }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);
  this.containsEsc = false;
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }
  this.type = types$1.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = true;
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.potentialArrowInForAwait = false;
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  this.labels = [];
  this.undefinedExports = /* @__PURE__ */ Object.create(null);
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);
  this.regexpState = null;
  this.privateNameStack = [];
};
var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
Parser.prototype.parse = function parse() {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node);
};
prototypeAccessors.inFunction.get = function() {
  return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
};
prototypeAccessors.inGenerator.get = function() {
  return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit;
};
prototypeAccessors.inAsync.get = function() {
  return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit;
};
prototypeAccessors.canAwait.get = function() {
  for (var i = this.scopeStack.length - 1; i >= 0; i--) {
    var scope = this.scopeStack[i];
    if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK) {
      return false;
    }
    if (scope.flags & SCOPE_FUNCTION) {
      return (scope.flags & SCOPE_ASYNC) > 0;
    }
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
prototypeAccessors.allowSuper.get = function() {
  var ref2 = this.currentThisScope();
  var flags = ref2.flags;
  var inClassFieldInit = ref2.inClassFieldInit;
  return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
};
prototypeAccessors.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
};
prototypeAccessors.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
prototypeAccessors.allowNewDotTarget.get = function() {
  var ref2 = this.currentThisScope();
  var flags = ref2.flags;
  var inClassFieldInit = ref2.inClassFieldInit;
  return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit;
};
prototypeAccessors.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
};
Parser.extend = function extend() {
  var plugins = [], len = arguments.length;
  while (len--)
    plugins[len] = arguments[len];
  var cls = this;
  for (var i = 0; i < plugins.length; i++) {
    cls = plugins[i](cls);
  }
  return cls;
};
Parser.parse = function parse2(input, options) {
  return new this(options, input).parse();
};
Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
  var parser = new this(options, input, pos);
  parser.nextToken();
  return parser.parseExpression();
};
Parser.tokenizer = function tokenizer(input, options) {
  return new this(options, input);
};
Object.defineProperties(Parser.prototype, prototypeAccessors);
var pp$9 = Parser.prototype;
var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
pp$9.strictDirective = function(start) {
  if (this.options.ecmaVersion < 5) {
    return false;
  }
  for (; ; ) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) {
      return false;
    }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
    }
    start += match[0].length;
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";") {
      start++;
    }
  }
};
pp$9.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};
pp$9.isContextual = function(name) {
  return this.type === types$1.name && this.value === name && !this.containsEsc;
};
pp$9.eatContextual = function(name) {
  if (!this.isContextual(name)) {
    return false;
  }
  this.next();
  return true;
};
pp$9.expectContextual = function(name) {
  if (!this.eatContextual(name)) {
    this.unexpected();
  }
};
pp$9.canInsertSemicolon = function() {
  return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$9.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return true;
  }
};
pp$9.semicolon = function() {
  if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
    this.unexpected();
  }
};
pp$9.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!notNext) {
      this.next();
    }
    return true;
  }
};
pp$9.expect = function(type) {
  this.eat(type) || this.unexpected();
};
pp$9.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};
var DestructuringErrors = function DestructuringErrors2() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) {
    return;
  }
  if (refDestructuringErrors.trailingComma > -1) {
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
  }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) {
    this.raiseRecoverable(parens, "Parenthesized pattern");
  }
};
pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) {
    return false;
  }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) {
    return shorthandAssign >= 0 || doubleProto >= 0;
  }
  if (shorthandAssign >= 0) {
    this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (doubleProto >= 0) {
    this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
  }
};
pp$9.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
pp$9.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression") {
    return this.isSimpleAssignTarget(expr.expression);
  }
  return expr.type === "Identifier" || expr.type === "MemberExpression";
};
var pp$8 = Parser.prototype;
pp$8.parseTopLevel = function(node) {
  var exports = /* @__PURE__ */ Object.create(null);
  if (!node.body) {
    node.body = [];
  }
  while (this.type !== types$1.eof) {
    var stmt = this.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  if (this.inModule) {
    for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
      var name = list[i];
      this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
    }
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType;
  return this.finishNode(node, "Program");
};
var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
pp$8.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91 || nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
    return true;
  }
  if (context) {
    return false;
  }
  if (nextCh === 123) {
    return true;
  }
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) {
      ++pos;
    }
    if (nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
      return true;
    }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) {
      return true;
    }
  }
  return false;
};
pp$8.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, after;
  return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
};
pp$8.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;
  if (this.isLet(context)) {
    starttype = types$1._var;
    kind = "let";
  }
  switch (starttype) {
    case types$1._break:
    case types$1._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case types$1._debugger:
      return this.parseDebuggerStatement(node);
    case types$1._do:
      return this.parseDoStatement(node);
    case types$1._for:
      return this.parseForStatement(node);
    case types$1._function:
      if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(node, false, !context);
    case types$1._class:
      if (context) {
        this.unexpected();
      }
      return this.parseClass(node, true);
    case types$1._if:
      return this.parseIfStatement(node);
    case types$1._return:
      return this.parseReturnStatement(node);
    case types$1._switch:
      return this.parseSwitchStatement(node);
    case types$1._throw:
      return this.parseThrowStatement(node);
    case types$1._try:
      return this.parseTryStatement(node);
    case types$1._const:
    case types$1._var:
      kind = kind || this.value;
      if (context && kind !== "var") {
        this.unexpected();
      }
      return this.parseVarStatement(node, kind);
    case types$1._while:
      return this.parseWhileStatement(node);
    case types$1._with:
      return this.parseWithStatement(node);
    case types$1.braceL:
      return this.parseBlock(true, node);
    case types$1.semi:
      return this.parseEmptyStatement(node);
    case types$1._export:
    case types$1._import:
      if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) {
          return this.parseExpressionStatement(node, this.parseExpression());
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports);
    default:
      if (this.isAsyncFunction()) {
        if (context) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(node, true, !context);
      }
      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
  }
};
pp$8.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.label = null;
  } else if (this.type !== types$1.name) {
    this.unexpected();
  } else {
    node.label = this.parseIdent();
    this.semicolon();
  }
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) {
        break;
      }
      if (node.label && isBreak) {
        break;
      }
    }
  }
  if (i === this.labels.length) {
    this.raise(node.start, "Unsyntactic " + keyword);
  }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};
pp$8.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};
pp$8.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types$1._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(types$1.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(node, "DoWhileStatement");
};
pp$8.parseForStatement = function(node) {
  this.next();
  var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types$1.parenL);
  if (this.type === types$1.semi) {
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, null);
  }
  var isLet = this.isLet();
  if (this.type === types$1._var || this.type === types$1._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types$1._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node.await = awaitAt > -1;
        }
      }
      return this.parseForIn(node, init$1);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init$1);
  }
  var startsWithLet = this.isContextual("let"), isForOf = false;
  var refDestructuringErrors = new DestructuringErrors();
  var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
  if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types$1._in) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
      } else {
        node.await = awaitAt > -1;
      }
    }
    if (startsWithLet && isForOf) {
      this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLValPattern(init);
    return this.parseForIn(node, init);
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node, init);
};
pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
};
pp$8.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement");
};
pp$8.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.argument = null;
  } else {
    node.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(node, "ReturnStatement");
};
pp$8.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types$1.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);
  var cur;
  for (var sawDefault = false; this.type !== types$1.braceR; ) {
    if (this.type === types$1._case || this.type === types$1._default) {
      var isCase = this.type === types$1._case;
      if (cur) {
        this.finishNode(cur, "SwitchCase");
      }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types$1.colon);
    } else {
      if (!cur) {
        this.unexpected();
      }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) {
    this.finishNode(cur, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};
pp$8.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};
var empty$1 = [];
pp$8.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types$1._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types$1.parenL)) {
      clause.param = this.parseBindingAtom();
      var simple = clause.param.type === "Identifier";
      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLValPattern(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
      this.expect(types$1.parenR);
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer) {
    this.raise(node.start, "Missing catch or finally clause");
  }
  return this.finishNode(node, "TryStatement");
};
pp$8.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};
pp$8.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement");
};
pp$8.parseWithStatement = function(node) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement");
};
pp$8.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};
pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) {
    var label = list[i$1];
    if (label.name === maybeName) {
      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }
  var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else {
      break;
    }
  }
  this.labels.push({ name: maybeName, kind, statementStart: this.start });
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};
pp$8.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};
pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
  if (createNewLexicalScope === void 0)
    createNewLexicalScope = true;
  if (node === void 0)
    node = this.startNode();
  node.body = [];
  this.expect(types$1.braceL);
  if (createNewLexicalScope) {
    this.enterScope(0);
  }
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (exitStrict) {
    this.strict = false;
  }
  this.next();
  if (createNewLexicalScope) {
    this.exitScope();
  }
  return this.finishNode(node, "BlockStatement");
};
pp$8.parseFor = function(node, init) {
  node.init = init;
  this.expect(types$1.semi);
  node.test = this.type === types$1.semi ? null : this.parseExpression();
  this.expect(types$1.semi);
  node.update = this.type === types$1.parenR ? null : this.parseExpression();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement");
};
pp$8.parseForIn = function(node, init) {
  var isForIn = this.type === types$1._in;
  this.next();
  if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
    this.raise(init.start, (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
};
pp$8.parseVar = function(node, isFor, kind) {
  node.declarations = [];
  node.kind = kind;
  for (; ; ) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types$1.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      this.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types$1.comma)) {
      break;
    }
  }
  return node;
};
pp$8.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};
var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
      this.unexpected();
    }
    node.generator = this.eat(types$1.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  if (statement & FUNC_STATEMENT) {
    node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
      this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
    }
  }
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));
  if (!(statement & FUNC_STATEMENT)) {
    node.id = this.type === types$1.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
};
pp$8.parseFunctionParams = function(node) {
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
pp$8.parseClass = function(node, isStatement) {
  this.next();
  var oldStrict = this.strict;
  this.strict = true;
  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var privateNameMap = this.enterClassBody();
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types$1.braceL);
  while (this.type !== types$1.braceR) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) {
          this.raise(element.start, "Duplicate constructor in the same class");
        }
        hadConstructor = true;
      } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
        this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node.body = this.finishNode(classBody, "ClassBody");
  this.exitClassBody();
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};
pp$8.parseClassElement = function(constructorAllowsSuper) {
  if (this.eat(types$1.semi)) {
    return null;
  }
  var ecmaVersion = this.options.ecmaVersion;
  var node = this.startNode();
  var keyName = "";
  var isGenerator = false;
  var isAsync = false;
  var kind = "method";
  var isStatic = false;
  if (this.eatContextual("static")) {
    if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
      this.parseClassStaticBlock(node);
      return node;
    }
    if (this.isClassElementNameStart() || this.type === types$1.star) {
      isStatic = true;
    } else {
      keyName = "static";
    }
  }
  node.static = isStatic;
  if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
    if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
      isAsync = true;
    } else {
      keyName = "async";
    }
  }
  if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
    isGenerator = true;
  }
  if (!keyName && !isAsync && !isGenerator) {
    var lastValue = this.value;
    if (this.eatContextual("get") || this.eatContextual("set")) {
      if (this.isClassElementNameStart()) {
        kind = lastValue;
      } else {
        keyName = lastValue;
      }
    }
  }
  if (keyName) {
    node.computed = false;
    node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
    node.key.name = keyName;
    this.finishNode(node.key, "Identifier");
  } else {
    this.parseClassElementName(node);
  }
  if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
    var isConstructor = !node.static && checkKeyName(node, "constructor");
    var allowsDirectSuper = isConstructor && constructorAllowsSuper;
    if (isConstructor && kind !== "method") {
      this.raise(node.key.start, "Constructor can't have get/set modifier");
    }
    node.kind = isConstructor ? "constructor" : kind;
    this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
  } else {
    this.parseClassField(node);
  }
  return node;
};
pp$8.isClassElementNameStart = function() {
  return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
};
pp$8.parseClassElementName = function(element) {
  if (this.type === types$1.privateId) {
    if (this.value === "constructor") {
      this.raise(this.start, "Classes can't have an element named '#constructor'");
    }
    element.computed = false;
    element.key = this.parsePrivateIdent();
  } else {
    this.parsePropertyName(element);
  }
};
pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  var key = method.key;
  if (method.kind === "constructor") {
    if (isGenerator) {
      this.raise(key.start, "Constructor can't be a generator");
    }
    if (isAsync) {
      this.raise(key.start, "Constructor can't be an async method");
    }
  } else if (method.static && checkKeyName(method, "prototype")) {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && value.params.length !== 0) {
    this.raiseRecoverable(value.start, "getter should have no params");
  }
  if (method.kind === "set" && value.params.length !== 1) {
    this.raiseRecoverable(value.start, "setter should have exactly one param");
  }
  if (method.kind === "set" && value.params[0].type === "RestElement") {
    this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
  }
  return this.finishNode(method, "MethodDefinition");
};
pp$8.parseClassField = function(field) {
  if (checkKeyName(field, "constructor")) {
    this.raise(field.key.start, "Classes can't have a field named 'constructor'");
  } else if (field.static && checkKeyName(field, "prototype")) {
    this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
  }
  if (this.eat(types$1.eq)) {
    var scope = this.currentThisScope();
    var inClassFieldInit = scope.inClassFieldInit;
    scope.inClassFieldInit = true;
    field.value = this.parseMaybeAssign();
    scope.inClassFieldInit = inClassFieldInit;
  } else {
    field.value = null;
  }
  this.semicolon();
  return this.finishNode(field, "PropertyDefinition");
};
pp$8.parseClassStaticBlock = function(node) {
  node.body = [];
  var oldLabels = this.labels;
  this.labels = [];
  this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  this.next();
  this.exitScope();
  this.labels = oldLabels;
  return this.finishNode(node, "StaticBlock");
};
pp$8.parseClassId = function(node, isStatement) {
  if (this.type === types$1.name) {
    node.id = this.parseIdent();
    if (isStatement) {
      this.checkLValSimple(node.id, BIND_LEXICAL, false);
    }
  } else {
    if (isStatement === true) {
      this.unexpected();
    }
    node.id = null;
  }
};
pp$8.parseClassSuper = function(node) {
  node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(false) : null;
};
pp$8.enterClassBody = function() {
  var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  this.privateNameStack.push(element);
  return element.declared;
};
pp$8.exitClassBody = function() {
  var ref2 = this.privateNameStack.pop();
  var declared = ref2.declared;
  var used = ref2.used;
  var len = this.privateNameStack.length;
  var parent = len === 0 ? null : this.privateNameStack[len - 1];
  for (var i = 0; i < used.length; ++i) {
    var id = used[i];
    if (!hasOwn(declared, id.name)) {
      if (parent) {
        parent.used.push(id);
      } else {
        this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
      }
    }
  }
};
function isPrivateNameConflicted(privateNameMap, element) {
  var name = element.key.name;
  var curr = privateNameMap[name];
  var next = "true";
  if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
    next = (element.static ? "s" : "i") + element.kind;
  }
  if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
    privateNameMap[name] = "true";
    return false;
  } else if (!curr) {
    privateNameMap[name] = next;
    return false;
  } else {
    return true;
  }
}
function checkKeyName(node, name) {
  var computed = node.computed;
  var key = node.key;
  return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
}
pp$8.parseExport = function(node, exports) {
  this.next();
  if (this.eat(types$1.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node.exported = this.parseModuleExportName();
        this.checkExport(exports, node.exported, this.lastTokStart);
      } else {
        node.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== types$1.string) {
      this.unexpected();
    }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration");
  }
  if (this.eat(types$1._default)) {
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) {
        this.next();
      }
      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
    } else if (this.type === types$1._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(null);
    if (node.declaration.type === "VariableDeclaration") {
      this.checkVariableExport(exports, node.declaration.declarations);
    } else {
      this.checkExport(exports, node.declaration.id, node.declaration.id.start);
    }
    node.specifiers = [];
    node.source = null;
  } else {
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types$1.string) {
        this.unexpected();
      }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        var spec = list[i];
        this.checkUnreserved(spec.local);
        this.checkLocalExport(spec.local);
        if (spec.local.type === "Literal") {
          this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
        }
      }
      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration");
};
pp$8.checkExport = function(exports, name, pos) {
  if (!exports) {
    return;
  }
  if (typeof name !== "string") {
    name = name.type === "Identifier" ? name.name : name.value;
  }
  if (hasOwn(exports, name)) {
    this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
  }
  exports[name] = true;
};
pp$8.checkPatternExport = function(exports, pat) {
  var type = pat.type;
  if (type === "Identifier") {
    this.checkExport(exports, pat, pat.start);
  } else if (type === "ObjectPattern") {
    for (var i = 0, list = pat.properties; i < list.length; i += 1) {
      var prop = list[i];
      this.checkPatternExport(exports, prop);
    }
  } else if (type === "ArrayPattern") {
    for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];
      if (elt) {
        this.checkPatternExport(exports, elt);
      }
    }
  } else if (type === "Property") {
    this.checkPatternExport(exports, pat.value);
  } else if (type === "AssignmentPattern") {
    this.checkPatternExport(exports, pat.left);
  } else if (type === "RestElement") {
    this.checkPatternExport(exports, pat.argument);
  } else if (type === "ParenthesizedExpression") {
    this.checkPatternExport(exports, pat.expression);
  }
};
pp$8.checkVariableExport = function(exports, decls) {
  if (!exports) {
    return;
  }
  for (var i = 0, list = decls; i < list.length; i += 1) {
    var decl = list[i];
    this.checkPatternExport(exports, decl.id);
  }
};
pp$8.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
pp$8.parseExportSpecifiers = function(exports) {
  var nodes = [], first = true;
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node = this.startNode();
    node.local = this.parseModuleExportName();
    node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
    this.checkExport(exports, node.exported, node.exported.start);
    nodes.push(this.finishNode(node, "ExportSpecifier"));
  }
  return nodes;
};
pp$8.parseImport = function(node) {
  this.next();
  if (this.type === types$1.string) {
    node.specifiers = empty$1;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};
pp$8.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types$1.name) {
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLValSimple(node.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types$1.comma)) {
      return nodes;
    }
  }
  if (this.type === types$1.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLValSimple(node$1.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes;
  }
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node$2 = this.startNode();
    node$2.imported = this.parseModuleExportName();
    if (this.eatContextual("as")) {
      node$2.local = this.parseIdent();
    } else {
      this.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this.checkLValSimple(node$2.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes;
};
pp$8.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
    var stringLiteral = this.parseLiteral(this.value);
    if (loneSurrogate.test(stringLiteral.value)) {
      this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
    }
    return stringLiteral;
  }
  return this.parseIdent(true);
};
pp$8.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$8.isDirectiveCandidate = function(statement) {
  return statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
};
var pp$7 = Parser.prototype;
pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await") {
          this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];
          this.toAssignable(prop, isBinding);
          if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if (node.kind !== "init") {
          this.raise(node.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(node.value, isBinding);
        break;
      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        this.toAssignableList(node.elements, isBinding);
        break;
      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern") {
          this.raise(node.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding, refDestructuringErrors);
        break;
      case "ChainExpression":
        this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!isBinding) {
          break;
        }
      default:
        this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) {
    this.checkPatternErrors(refDestructuringErrors, true);
  }
  return node;
};
pp$7.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) {
      this.toAssignable(elt, isBinding);
    }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
      this.unexpected(last.argument.start);
    }
  }
  return exprList;
};
pp$7.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement");
};
pp$7.parseRestBinding = function() {
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
    this.unexpected();
  }
  node.argument = this.parseBindingAtom();
  return this.finishNode(node, "RestElement");
};
pp$7.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case types$1.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types$1.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern");
      case types$1.braceL:
        return this.parseObj(true);
    }
  }
  return this.parseIdent();
};
pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types$1.comma);
    }
    if (allowEmpty && this.type === types$1.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break;
    } else if (this.type === types$1.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types$1.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      this.expect(close);
      break;
    } else {
      var elem = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts;
};
pp$7.parseBindingListItem = function(param) {
  return param;
};
pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
    return left;
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};
pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  var isBind = bindingType !== BIND_NONE;
  switch (expr.type) {
    case "Identifier":
      if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
        this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      }
      if (isBind) {
        if (bindingType === BIND_LEXICAL && expr.name === "let") {
          this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
        }
        if (checkClashes) {
          if (hasOwn(checkClashes, expr.name)) {
            this.raiseRecoverable(expr.start, "Argument name clash");
          }
          checkClashes[expr.name] = true;
        }
        if (bindingType !== BIND_OUTSIDE) {
          this.declareName(expr.name, bindingType, expr.start);
        }
      }
      break;
    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding member expression");
      }
      break;
    case "ParenthesizedExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding parenthesized expression");
      }
      return this.checkLValSimple(expr.expression, bindingType, checkClashes);
    default:
      this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
  }
};
pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1) {
        var prop = list[i];
        this.checkLValInnerPattern(prop, bindingType, checkClashes);
      }
      break;
    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];
        if (elem) {
          this.checkLValInnerPattern(elem, bindingType, checkClashes);
        }
      }
      break;
    default:
      this.checkLValSimple(expr, bindingType, checkClashes);
  }
};
pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "Property":
      this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(expr.left, bindingType, checkClashes);
      break;
    case "RestElement":
      this.checkLValPattern(expr.argument, bindingType, checkClashes);
      break;
    default:
      this.checkLValPattern(expr, bindingType, checkClashes);
  }
};
var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};
var types = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function(p2) {
    return p2.tryReadTemplateToken();
  }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};
var pp$6 = Parser.prototype;
pp$6.initialContext = function() {
  return [types.b_stat];
};
pp$6.curContext = function() {
  return this.context[this.context.length - 1];
};
pp$6.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types.f_expr || parent === types.f_stat) {
    return true;
  }
  if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) {
    return !parent.isExpr;
  }
  if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  }
  if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
    return true;
  }
  if (prevType === types$1.braceL) {
    return parent === types.b_stat;
  }
  if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
    return false;
  }
  return !this.exprAllowed;
};
pp$6.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function") {
      return context.generator;
    }
  }
  return false;
};
pp$6.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types$1.dot) {
    this.exprAllowed = false;
  } else if (update = type.updateContext) {
    update.call(this, prevType);
  } else {
    this.exprAllowed = type.beforeExpr;
  }
};
pp$6.overrideContext = function(tokenCtx) {
  if (this.curContext() !== tokenCtx) {
    this.context[this.context.length - 1] = tokenCtx;
  }
};
types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};
types$1.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
  this.exprAllowed = true;
};
types$1.dollarBraceL.updateContext = function() {
  this.context.push(types.b_tmpl);
  this.exprAllowed = true;
};
types$1.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
  this.context.push(statementParens ? types.p_stat : types.p_expr);
  this.exprAllowed = true;
};
types$1.incDec.updateContext = function() {
};
types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) {
    this.context.push(types.f_expr);
  } else {
    this.context.push(types.f_stat);
  }
  this.exprAllowed = false;
};
types$1.backQuote.updateContext = function() {
  if (this.curContext() === types.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(types.q_tmpl);
  }
  this.exprAllowed = false;
};
types$1.star.updateContext = function(prevType) {
  if (prevType === types$1._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types.f_expr) {
      this.context[index] = types.f_expr_gen;
    } else {
      this.context[index] = types.f_gen;
    }
  }
  this.exprAllowed = true;
};
types$1.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
    if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
      allowed = true;
    }
  }
  this.exprAllowed = allowed;
};
var pp$5 = Parser.prototype;
pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
    return;
  }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
    return;
  }
  var key = prop.key;
  var name;
  switch (key.type) {
    case "Identifier":
      name = key.name;
      break;
    case "Literal":
      name = String(key.value);
      break;
    default:
      return;
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0) {
            refDestructuringErrors.doubleProto = key.start;
          }
        } else {
          this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
        }
      }
      propHash.proto = true;
    }
    return;
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition) {
      this.raiseRecoverable(key.start, "Redefinition of property");
    }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};
pp$5.parseExpression = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
  if (this.type === types$1.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types$1.comma)) {
      node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
    }
    return this.finishNode(node, "SequenceExpression");
  }
  return expr;
};
pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(forInit);
    } else {
      this.exprAllowed = false;
    }
  }
  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    oldDoubleProto = refDestructuringErrors.doubleProto;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors();
    ownDestructuringErrors = true;
  }
  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types$1.parenL || this.type === types$1.name) {
    this.potentialArrowAt = this.start;
    this.potentialArrowInForAwait = forInit === "await";
  }
  var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
  if (afterLeftParse) {
    left = afterLeftParse.call(this, left, startPos, startLoc);
  }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    if (this.type === types$1.eq) {
      left = this.toAssignable(left, false, refDestructuringErrors);
    }
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
    }
    if (refDestructuringErrors.shorthandAssign >= left.start) {
      refDestructuringErrors.shorthandAssign = -1;
    }
    if (this.type === types$1.eq) {
      this.checkLValPattern(left);
    } else {
      this.checkLValSimple(left);
    }
    node.left = left;
    this.next();
    node.right = this.parseMaybeAssign(forInit);
    if (oldDoubleProto > -1) {
      refDestructuringErrors.doubleProto = oldDoubleProto;
    }
    return this.finishNode(node, "AssignmentExpression");
  } else {
    if (ownDestructuringErrors) {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
  }
  if (oldParenAssign > -1) {
    refDestructuringErrors.parenthesizedAssign = oldParenAssign;
  }
  if (oldTrailingComma > -1) {
    refDestructuringErrors.trailingComma = oldTrailingComma;
  }
  return left;
};
pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(forInit, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  if (this.eat(types$1.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types$1.colon);
    node.alternate = this.parseMaybeAssign(forInit);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};
pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
};
pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
  var prec = this.type.binop;
  if (prec != null && (!forInit || this.type !== types$1._in)) {
    if (prec > minPrec) {
      var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
      var coalesce = this.type === types$1.coalesce;
      if (coalesce) {
        prec = types$1.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
    }
  }
  return left;
};
pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  if (right.type === "PrivateIdentifier") {
    this.raise(right.start, "Private identifier can only be left side of binary expression");
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
};
pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && this.canAwait) {
    expr = this.parseAwait(forInit);
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types$1.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true, update, forInit);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) {
      this.checkLValSimple(node.argument);
    } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
      this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
    } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
      this.raiseRecoverable(node.start, "Private fields can not be deleted");
    } else {
      sawUnary = true;
    }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else if (!sawUnary && this.type === types$1.privateId) {
    if (forInit || this.privateNameStack.length === 0) {
      this.unexpected();
    }
    expr = this.parsePrivateIdent();
    if (this.type !== types$1._in) {
      this.unexpected();
    }
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLValSimple(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }
  if (!incDec && this.eat(types$1.starstar)) {
    if (sawUnary) {
      this.unexpected(this.lastTokStart);
    } else {
      return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
    }
  } else {
    return expr;
  }
};
function isPrivateFieldAccess(node) {
  return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression);
}
pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors, forInit);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
    return expr;
  }
  var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) {
      refDestructuringErrors.parenthesizedAssign = -1;
    }
    if (refDestructuringErrors.parenthesizedBind >= result.start) {
      refDestructuringErrors.parenthesizedBind = -1;
    }
    if (refDestructuringErrors.trailingComma >= result.start) {
      refDestructuringErrors.trailingComma = -1;
    }
  }
  return result;
};
pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
  var optionalChained = false;
  while (true) {
    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
    if (element.optional) {
      optionalChained = true;
    }
    if (element === base || element.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element;
        element = this.finishNode(chainNode, "ChainExpression");
      }
      return element;
    }
    base = element;
  }
};
pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types$1.questionDot);
  if (noCalls && optional) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  }
  var computed = this.eat(types$1.bracketL);
  if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    if (computed) {
      node.property = this.parseExpression();
      this.expect(types$1.bracketR);
    } else if (this.type === types$1.privateId && base.type !== "Super") {
      node.property = this.parsePrivateIdent();
    } else {
      node.property = this.parseIdent(this.options.allowReserved !== "never");
    }
    node.computed = !!computed;
    if (optionalSupported) {
      node.optional = optional;
    }
    base = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types$1.parenL)) {
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
      }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types$1.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({ isTagged: true });
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base;
};
pp$5.parseExprAtom = function(refDestructuringErrors, forInit) {
  if (this.type === types$1.slash) {
    this.readRegexp();
  }
  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
    case types$1._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method");
      }
      node = this.startNode();
      this.next();
      if (this.type === types$1.parenL && !this.allowDirectSuper) {
        this.raise(node.start, "super() call outside constructor of a subclass");
      }
      if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
        this.unexpected();
      }
      return this.finishNode(node, "Super");
    case types$1._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression");
    case types$1.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
        this.overrideContext(types.f_expr);
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types$1.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
        }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
          id = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
        }
      }
      return id;
    case types$1.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = { pattern: value.pattern, flags: value.flags };
      return node;
    case types$1.num:
    case types$1.string:
      return this.parseLiteral(this.value);
    case types$1._null:
    case types$1._true:
    case types$1._false:
      node = this.startNode();
      node.value = this.type === types$1._null ? null : this.type === types$1._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal");
    case types$1.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
          refDestructuringErrors.parenthesizedAssign = start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = start;
        }
      }
      return expr;
    case types$1.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression");
    case types$1.braceL:
      this.overrideContext(types.b_expr);
      return this.parseObj(false, refDestructuringErrors);
    case types$1._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0);
    case types$1._class:
      return this.parseClass(this.startNode(), false);
    case types$1._new:
      return this.parseNew();
    case types$1.backQuote:
      return this.parseTemplate();
    case types$1._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport();
      } else {
        return this.unexpected();
      }
    default:
      this.unexpected();
  }
};
pp$5.parseExprImport = function() {
  var node = this.startNode();
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  }
  var meta = this.parseIdent(true);
  switch (this.type) {
    case types$1.parenL:
      return this.parseDynamicImport(node);
    case types$1.dot:
      node.meta = meta;
      return this.parseImportMeta(node);
    default:
      this.unexpected();
  }
};
pp$5.parseDynamicImport = function(node) {
  this.next();
  node.source = this.parseMaybeAssign();
  if (!this.eat(types$1.parenR)) {
    var errorPos = this.start;
    if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }
  return this.finishNode(node, "ImportExpression");
};
pp$5.parseImportMeta = function(node) {
  this.next();
  var containsEsc = this.containsEsc;
  node.property = this.parseIdent(true);
  if (node.property.name !== "meta") {
    this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
  }
  if (containsEsc) {
    this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
  }
  if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
    this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
  }
  return this.finishNode(node, "MetaProperty");
};
pp$5.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
    node.bigint = node.raw.slice(0, -1).replace(/_/g, "");
  }
  this.next();
  return this.finishNode(node, "Literal");
};
pp$5.parseParenExpression = function() {
  this.expect(types$1.parenL);
  var val = this.parseExpression();
  this.expect(types$1.parenR);
  return val;
};
pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types$1.parenR) {
      first ? first = false : this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
        lastIsComma = true;
        break;
      } else if (this.type === types$1.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types$1.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
    this.expect(types$1.parenR);
    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
    }
    if (!exprList.length || lastIsComma) {
      this.unexpected(this.lastTokStart);
    }
    if (spreadStart) {
      this.unexpected(spreadStart);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};
pp$5.parseParenItem = function(item) {
  return item;
};
pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
};
var empty = [];
pp$5.parseNew = function() {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  }
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types$1.dot)) {
    node.meta = meta;
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target") {
      this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
    }
    if (!this.allowNewDotTarget) {
      this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
    }
    return this.finishNode(node, "MetaProperty");
  }
  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types$1._import;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true, false);
  if (isImport && node.callee.type === "ImportExpression") {
    this.raise(startPos, "Cannot use new with import()");
  }
  if (this.eat(types$1.parenL)) {
    node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
  } else {
    node.arguments = empty;
  }
  return this.finishNode(node, "NewExpression");
};
pp$5.parseTemplateElement = function(ref2) {
  var isTagged = ref2.isTagged;
  var elem = this.startNode();
  if (this.type === types$1.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types$1.backQuote;
  return this.finishNode(elem, "TemplateElement");
};
pp$5.parseTemplate = function(ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var isTagged = ref2.isTagged;
  if (isTagged === void 0)
    isTagged = false;
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({ isTagged });
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types$1.eof) {
      this.raise(this.pos, "Unterminated template literal");
    }
    this.expect(types$1.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types$1.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};
pp$5.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$5.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) {
      this.checkPropClash(prop, propHash, refDestructuringErrors);
    }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};
pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types$1.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement");
    }
    if (this.type === types$1.parenL && refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0) {
        refDestructuringErrors.parenthesizedAssign = this.start;
      }
      if (refDestructuringErrors.parenthesizedBind < 0) {
        refDestructuringErrors.parenthesizedBind = this.start;
      }
    }
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    return this.finishNode(prop, "SpreadElement");
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern) {
      isGenerator = this.eat(types$1.star);
    }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property");
};
pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types$1.colon) {
    this.unexpected();
  }
  if (this.eat(types$1.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
    if (isPattern) {
      this.unexpected();
    }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get") {
        this.raiseRecoverable(start, "getter should have no params");
      } else {
        this.raiseRecoverable(start, "setter should have exactly one param");
      }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
        this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
      }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = startPos;
    }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else if (this.type === types$1.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0) {
        refDestructuringErrors.shorthandAssign = this.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else {
      prop.value = this.copyNode(prop.key);
    }
    prop.shorthand = true;
  } else {
    this.unexpected();
  }
};
pp$5.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types$1.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types$1.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
pp$5.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = node.expression = false;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = false;
  }
};
pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) {
    node.generator = isGenerator;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression");
};
pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression");
};
pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
  var isExpression = isArrowFunction && this.type !== types$1.braceL;
  var oldStrict = this.strict, useStrict = false;
  if (isExpression) {
    node.body = this.parseMaybeAssign(forInit);
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      if (useStrict && nonSimple) {
        this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) {
      this.strict = true;
    }
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    if (this.strict && node.id) {
      this.checkLValSimple(node.id, BIND_OUTSIDE);
    }
    node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};
pp$5.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1) {
    var param = list[i];
    if (param.type !== "Identifier") {
      return false;
    }
  }
  return true;
};
pp$5.checkParams = function(node, allowDuplicates) {
  var nameHash = /* @__PURE__ */ Object.create(null);
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};
pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      }
    } else {
      first = false;
    }
    var elt = void 0;
    if (allowEmpty && this.type === types$1.comma) {
      elt = null;
    } else if (this.type === types$1.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts;
};
pp$5.checkUnreserved = function(ref2) {
  var start = ref2.start;
  var end = ref2.end;
  var name = ref2.name;
  if (this.inGenerator && name === "yield") {
    this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
  }
  if (this.inAsync && name === "await") {
    this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
  }
  if (this.currentThisScope().inClassFieldInit && name === "arguments") {
    this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
  }
  if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
    this.raise(start, "Cannot use " + name + " in class static initialization block");
  }
  if (this.keywords.test(name)) {
    this.raise(start, "Unexpected keyword '" + name + "'");
  }
  if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
    return;
  }
  var re2 = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re2.test(name)) {
    if (!this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
    }
    this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
  }
};
pp$5.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (this.type === types$1.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;
    if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next(!!liberal);
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = node.start;
    }
  }
  return node;
};
pp$5.parsePrivateIdent = function() {
  var node = this.startNode();
  if (this.type === types$1.privateId) {
    node.name = this.value;
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "PrivateIdentifier");
  if (this.privateNameStack.length === 0) {
    this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
  } else {
    this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
  }
  return node;
};
pp$5.parseYield = function(forInit) {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var node = this.startNode();
  this.next();
  if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types$1.star);
    node.argument = this.parseMaybeAssign(forInit);
  }
  return this.finishNode(node, "YieldExpression");
};
pp$5.parseAwait = function(forInit) {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true, false, forInit);
  return this.finishNode(node, "AwaitExpression");
};
var pp$4 = Parser.prototype;
pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  err.raisedAt = this.pos;
  throw err;
};
pp$4.raiseRecoverable = pp$4.raise;
pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart);
  }
};
var pp$3 = Parser.prototype;
var Scope = function Scope2(flags) {
  this.flags = flags;
  this.var = [];
  this.lexical = [];
  this.functions = [];
  this.inClassFieldInit = false;
};
pp$3.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};
pp$3.exitScope = function() {
  this.scopeStack.pop();
};
pp$3.treatFunctionsAsVarInScope = function(scope) {
  return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
};
pp$3.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    scope.lexical.push(name);
    if (this.inModule && scope.flags & SCOPE_TOP) {
      delete this.undefinedExports[name];
    }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar) {
      redeclared = scope$2.lexical.indexOf(name) > -1;
    } else {
      redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
    }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break;
      }
      scope$3.var.push(name);
      if (this.inModule && scope$3.flags & SCOPE_TOP) {
        delete this.undefinedExports[name];
      }
      if (scope$3.flags & SCOPE_VAR) {
        break;
      }
    }
  }
  if (redeclared) {
    this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
  }
};
pp$3.checkLocalExport = function(id) {
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};
pp$3.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
pp$3.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR) {
      return scope;
    }
  }
};
pp$3.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) {
      return scope;
    }
  }
};
var Node = function Node2(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations) {
    this.loc = new SourceLocation(parser, loc);
  }
  if (parser.options.directSourceFile) {
    this.sourceFile = parser.options.directSourceFile;
  }
  if (parser.options.ranges) {
    this.range = [pos, 0];
  }
};
var pp$2 = Parser.prototype;
pp$2.startNode = function() {
  return new Node(this, this.start, this.startLoc);
};
pp$2.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc);
};
function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations) {
    node.loc.end = loc;
  }
  if (this.options.ranges) {
    node.range[1] = pos;
  }
  return node;
}
pp$2.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
};
pp$2.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc);
};
pp$2.copyNode = function(node) {
  var newNode = new Node(this, node.start, this.startLoc);
  for (var prop in node) {
    newNode[prop] = node[prop];
  }
  return newNode;
};
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
var ecma13BinaryProperties = ecma12BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties,
  12: ecma12BinaryProperties,
  13: ecma13BinaryProperties
};
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues,
  12: ecma12ScriptValues,
  13: ecma13ScriptValues
};
var data = {};
function buildUnicodeData(ecmaVersion) {
  var d2 = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d2.nonBinary.Script_Extensions = d2.nonBinary.Script;
  d2.nonBinary.gc = d2.nonBinary.General_Category;
  d2.nonBinary.sc = d2.nonBinary.Script;
  d2.nonBinary.scx = d2.nonBinary.Script_Extensions;
}
for (var i = 0, list = [9, 10, 11, 12, 13]; i < list.length; i += 1) {
  var ecmaVersion = list[i];
  buildUnicodeData(ecmaVersion);
}
var pp$1 = Parser.prototype;
var RegExpValidationState = function RegExpValidationState2(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 13 ? 13 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};
RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
};
RegExpValidationState.prototype.raise = function raise(message) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
};
RegExpValidationState.prototype.at = function at2(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l2 = s.length;
  if (i >= l2) {
    return -1;
  }
  var c2 = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c2 <= 55295 || c2 >= 57344 || i + 1 >= l2) {
    return c2;
  }
  var next = s.charCodeAt(i + 1);
  return next >= 56320 && next <= 57343 ? (c2 << 10) + next - 56613888 : c2;
};
RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l2 = s.length;
  if (i >= l2) {
    return l2;
  }
  var c2 = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c2 <= 55295 || c2 >= 57344 || i + 1 >= l2 || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
    return i + 1;
  }
  return i + 2;
};
RegExpValidationState.prototype.current = function current(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.pos, forceU);
};
RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.nextIndex(this.pos, forceU), forceU);
};
RegExpValidationState.prototype.advance = function advance(forceU) {
  if (forceU === void 0)
    forceU = false;
  this.pos = this.nextIndex(this.pos, forceU);
};
RegExpValidationState.prototype.eat = function eat(ch2, forceU) {
  if (forceU === void 0)
    forceU = false;
  if (this.current(forceU) === ch2) {
    this.advance(forceU);
    return true;
  }
  return false;
};
pp$1.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;
  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
  }
};
pp$1.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};
pp$1.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;
  this.regexp_disjunction(state);
  if (state.pos !== state.source.length) {
    if (state.eat(41)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(93) || state.eat(125)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];
    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};
pp$1.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(124)) {
    this.regexp_alternative(state);
  }
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(123)) {
    state.raise("Lone quantifier brackets");
  }
};
pp$1.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
  }
};
pp$1.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true;
  }
  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true;
  }
  return false;
};
pp$1.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;
  if (state.eat(94) || state.eat(36)) {
    return true;
  }
  if (state.eat(92)) {
    if (state.eat(66) || state.eat(98)) {
      return true;
    }
    state.pos = start;
  }
  if (state.eat(40) && state.eat(63)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(60);
    }
    if (state.eat(61) || state.eat(33)) {
      this.regexp_disjunction(state);
      if (!state.eat(41)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true;
    }
  }
  state.pos = start;
  return false;
};
pp$1.regexp_eatQuantifier = function(state, noError) {
  if (noError === void 0)
    noError = false;
  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(63);
    return true;
  }
  return false;
};
pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
  return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
};
pp$1.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(123)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(125)) {
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true;
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatAtom = function(state) {
  return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
};
pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(40)) {
    if (state.eat(63) && state.eat(58)) {
      this.regexp_disjunction(state);
      if (state.eat(41)) {
        return true;
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatCapturingGroup = function(state) {
  if (state.eat(40)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 63) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(41)) {
      state.numCapturingParens += 1;
      return true;
    }
    state.raise("Unterminated group");
  }
  return false;
};
pp$1.regexp_eatExtendedAtom = function(state) {
  return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
};
pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false;
};
pp$1.regexp_eatSyntaxCharacter = function(state) {
  var ch2 = state.current();
  if (isSyntaxCharacter(ch2)) {
    state.lastIntValue = ch2;
    state.advance();
    return true;
  }
  return false;
};
function isSyntaxCharacter(ch2) {
  return ch2 === 36 || ch2 >= 40 && ch2 <= 43 || ch2 === 46 || ch2 === 63 || ch2 >= 91 && ch2 <= 94 || ch2 >= 123 && ch2 <= 125;
}
pp$1.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch2 = 0;
  while ((ch2 = state.current()) !== -1 && !isSyntaxCharacter(ch2)) {
    state.advance();
  }
  return state.pos !== start;
};
pp$1.regexp_eatExtendedPatternCharacter = function(state) {
  var ch2 = state.current();
  if (ch2 !== -1 && ch2 !== 36 && !(ch2 >= 40 && ch2 <= 43) && ch2 !== 46 && ch2 !== 63 && ch2 !== 91 && ch2 !== 94 && ch2 !== 124) {
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_groupSpecifier = function(state) {
  if (state.eat(63)) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return;
    }
    state.raise("Invalid group");
  }
};
pp$1.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
      return true;
    }
    state.raise("Invalid capture group name");
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch2 = state.current(forceU);
  state.advance(forceU);
  if (ch2 === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch2 = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch2)) {
    state.lastIntValue = ch2;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierStart(ch2) {
  return isIdentifierStart(ch2, true) || ch2 === 36 || ch2 === 95;
}
pp$1.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch2 = state.current(forceU);
  state.advance(forceU);
  if (ch2 === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch2 = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch2)) {
    state.lastIntValue = ch2;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierPart(ch2) {
  return isIdentifierChar(ch2, true) || ch2 === 36 || ch2 === 95 || ch2 === 8204 || ch2 === 8205;
}
pp$1.regexp_eatAtomEscape = function(state) {
  if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
    return true;
  }
  if (state.switchU) {
    if (state.current() === 99) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false;
};
pp$1.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n2 = state.lastIntValue;
    if (state.switchU) {
      if (n2 > state.maxBackReference) {
        state.maxBackReference = n2;
      }
      return true;
    }
    if (n2 <= state.numCapturingParens) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatKGroupName = function(state) {
  if (state.eat(107)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true;
    }
    state.raise("Invalid named reference");
  }
  return false;
};
pp$1.regexp_eatCharacterEscape = function(state) {
  return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
};
pp$1.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(99)) {
    if (this.regexp_eatControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatZero = function(state) {
  if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlEscape = function(state) {
  var ch2 = state.current();
  if (ch2 === 116) {
    state.lastIntValue = 9;
    state.advance();
    return true;
  }
  if (ch2 === 110) {
    state.lastIntValue = 10;
    state.advance();
    return true;
  }
  if (ch2 === 118) {
    state.lastIntValue = 11;
    state.advance();
    return true;
  }
  if (ch2 === 102) {
    state.lastIntValue = 12;
    state.advance();
    return true;
  }
  if (ch2 === 114) {
    state.lastIntValue = 13;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlLetter = function(state) {
  var ch2 = state.current();
  if (isControlLetter(ch2)) {
    state.lastIntValue = ch2 % 32;
    state.advance();
    return true;
  }
  return false;
};
function isControlLetter(ch2) {
  return ch2 >= 65 && ch2 <= 90 || ch2 >= 97 && ch2 <= 122;
}
pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if (forceU === void 0)
    forceU = false;
  var start = state.pos;
  var switchU = forceU || state.switchU;
  if (state.eat(117)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 55296 && lead <= 56319) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 56320 && trail <= 57343) {
            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            return true;
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true;
    }
    if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
      return true;
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }
  return false;
};
function isValidUnicode(ch2) {
  return ch2 >= 0 && ch2 <= 1114111;
}
pp$1.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true;
    }
    if (state.eat(47)) {
      state.lastIntValue = 47;
      return true;
    }
    return false;
  }
  var ch2 = state.current();
  if (ch2 !== 99 && (!state.switchN || ch2 !== 107)) {
    state.lastIntValue = ch2;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch2 = state.current();
  if (ch2 >= 49 && ch2 <= 57) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch2 - 48);
      state.advance();
    } while ((ch2 = state.current()) >= 48 && ch2 <= 57);
    return true;
  }
  return false;
};
pp$1.regexp_eatCharacterClassEscape = function(state) {
  var ch2 = state.current();
  if (isCharacterClassEscape(ch2)) {
    state.lastIntValue = -1;
    state.advance();
    return true;
  }
  if (state.switchU && this.options.ecmaVersion >= 9 && (ch2 === 80 || ch2 === 112)) {
    state.lastIntValue = -1;
    state.advance();
    if (state.eat(123) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(125)) {
      return true;
    }
    state.raise("Invalid property name");
  }
  return false;
};
function isCharacterClassEscape(ch2) {
  return ch2 === 100 || ch2 === 68 || ch2 === 115 || ch2 === 83 || ch2 === 119 || ch2 === 87;
}
pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return true;
    }
  }
  state.pos = start;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true;
  }
  return false;
};
pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
    state.raise("Invalid property name");
  }
  if (!state.unicodeProperties.nonBinary[name].test(value)) {
    state.raise("Invalid property value");
  }
};
pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (!state.unicodeProperties.binary.test(nameOrValue)) {
    state.raise("Invalid property name");
  }
};
pp$1.regexp_eatUnicodePropertyName = function(state) {
  var ch2 = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch2 = state.current())) {
    state.lastStringValue += codePointToString(ch2);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyNameCharacter(ch2) {
  return isControlLetter(ch2) || ch2 === 95;
}
pp$1.regexp_eatUnicodePropertyValue = function(state) {
  var ch2 = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch2 = state.current())) {
    state.lastStringValue += codePointToString(ch2);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyValueCharacter(ch2) {
  return isUnicodePropertyNameCharacter(ch2) || isDecimalDigit(ch2);
}
pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state);
};
pp$1.regexp_eatCharacterClass = function(state) {
  if (state.eat(91)) {
    state.eat(94);
    this.regexp_classRanges(state);
    if (state.eat(93)) {
      return true;
    }
    state.raise("Unterminated character class");
  }
  return false;
};
pp$1.regexp_classRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(45) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};
pp$1.regexp_eatClassAtom = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatClassEscape(state)) {
      return true;
    }
    if (state.switchU) {
      var ch$1 = state.current();
      if (ch$1 === 99 || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  var ch2 = state.current();
  if (ch2 !== 93) {
    state.lastIntValue = ch2;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatClassEscape = function(state) {
  var start = state.pos;
  if (state.eat(98)) {
    state.lastIntValue = 8;
    return true;
  }
  if (state.switchU && state.eat(45)) {
    state.lastIntValue = 45;
    return true;
  }
  if (!state.switchU && state.eat(99)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
};
pp$1.regexp_eatClassControlLetter = function(state) {
  var ch2 = state.current();
  if (isDecimalDigit(ch2) || ch2 === 95) {
    state.lastIntValue = ch2 % 32;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(120)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch2 = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch2 = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch2 - 48);
    state.advance();
  }
  return state.pos !== start;
};
function isDecimalDigit(ch2) {
  return ch2 >= 48 && ch2 <= 57;
}
pp$1.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch2 = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch2 = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch2);
    state.advance();
  }
  return state.pos !== start;
};
function isHexDigit(ch2) {
  return ch2 >= 48 && ch2 <= 57 || ch2 >= 65 && ch2 <= 70 || ch2 >= 97 && ch2 <= 102;
}
function hexToInt(ch2) {
  if (ch2 >= 65 && ch2 <= 70) {
    return 10 + (ch2 - 65);
  }
  if (ch2 >= 97 && ch2 <= 102) {
    return 10 + (ch2 - 97);
  }
  return ch2 - 48;
}
pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatOctalDigit = function(state) {
  var ch2 = state.current();
  if (isOctalDigit(ch2)) {
    state.lastIntValue = ch2 - 48;
    state.advance();
    return true;
  }
  state.lastIntValue = 0;
  return false;
};
function isOctalDigit(ch2) {
  return ch2 >= 48 && ch2 <= 55;
}
pp$1.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch2 = state.current();
    if (!isHexDigit(ch2)) {
      state.pos = start;
      return false;
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch2);
    state.advance();
  }
  return true;
};
var Token = function Token2(p2) {
  this.type = p2.type;
  this.value = p2.value;
  this.start = p2.start;
  this.end = p2.end;
  if (p2.options.locations) {
    this.loc = new SourceLocation(p2, p2.startLoc, p2.endLoc);
  }
  if (p2.options.ranges) {
    this.range = [p2.start, p2.end];
  }
};
var pp = Parser.prototype;
pp.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
  }
  if (this.options.onToken) {
    this.options.onToken(new Token(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
pp.getToken = function() {
  this.next();
  return new Token(this);
};
if (typeof Symbol !== "undefined") {
  pp[Symbol.iterator] = function() {
    var this$1$1 = this;
    return {
      next: function() {
        var token = this$1$1.getToken();
        return {
          done: token.type === types$1.eof,
          value: token
        };
      }
    };
  };
}
pp.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  if (this.pos >= this.input.length) {
    return this.finishToken(types$1.eof);
  }
  if (curContext.override) {
    return curContext.override(this);
  } else {
    this.readToken(this.fullCharCodeAtPos());
  }
};
pp.readToken = function(code) {
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
    return this.readWord();
  }
  return this.getTokenFromCode(code);
};
pp.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 55295 || code >= 56320) {
    return code;
  }
  var next = this.input.charCodeAt(this.pos + 1);
  return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
};
pp.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = end + 2;
  if (this.options.locations) {
    for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
      ++this.curLine;
      pos = this.lineStart = nextBreak;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
  }
};
pp.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch2 = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch2)) {
    ch2 = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
  }
};
pp.skipSpace = function() {
  loop:
    while (this.pos < this.input.length) {
      var ch2 = this.input.charCodeAt(this.pos);
      switch (ch2) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) {
            ++this.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.pos;
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break loop;
          }
          break;
        default:
          if (ch2 > 8 && ch2 < 14 || ch2 >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch2))) {
            ++this.pos;
          } else {
            break loop;
          }
      }
    }
};
pp.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var prevType = this.type;
  this.type = type;
  this.value = val;
  this.updateContext(prevType);
};
pp.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) {
    return this.readNumber(true);
  }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    this.pos += 3;
    return this.finishToken(types$1.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(types$1.dot);
  }
};
pp.readToken_slash = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;
    return this.readRegexp();
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.slash, 1);
};
pp.readToken_mult_modulo_exp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types$1.star : types$1.modulo;
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types$1.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, size + 1);
  }
  return this.finishOp(tokentype, size);
};
pp.readToken_pipe_amp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) {
        return this.finishOp(types$1.assign, 3);
      }
    }
    return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
};
pp.readToken_caret = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.bitwiseXOR, 1);
};
pp.readToken_plus_min = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(types$1.incDec, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.plusMin, 1);
};
pp.readToken_lt_gt = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) {
      return this.finishOp(types$1.assign, size + 1);
    }
    return this.finishOp(types$1.bitShift, size);
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) {
    size = 2;
  }
  return this.finishOp(types$1.relational, size);
};
pp.readToken_eq_excl = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    this.pos += 2;
    return this.finishToken(types$1.arrow);
  }
  return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
};
pp.readToken_question = function() {
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) {
        return this.finishOp(types$1.questionDot, 2);
      }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) {
          return this.finishOp(types$1.assign, 3);
        }
      }
      return this.finishOp(types$1.coalesce, 2);
    }
  }
  return this.finishOp(types$1.question, 1);
};
pp.readToken_numberSign = function() {
  var ecmaVersion = this.options.ecmaVersion;
  var code = 35;
  if (ecmaVersion >= 13) {
    ++this.pos;
    code = this.fullCharCodeAtPos();
    if (isIdentifierStart(code, true) || code === 92) {
      return this.finishToken(types$1.privateId, this.readWord1());
    }
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};
pp.getTokenFromCode = function(code) {
  switch (code) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(types$1.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(types$1.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(types$1.semi);
    case 44:
      ++this.pos;
      return this.finishToken(types$1.comma);
    case 91:
      ++this.pos;
      return this.finishToken(types$1.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(types$1.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(types$1.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(types$1.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(types$1.colon);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(types$1.backQuote);
    case 48:
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) {
          return this.readRadixNumber(8);
        }
        if (next === 98 || next === 66) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(code);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(code);
    case 124:
    case 38:
      return this.readToken_pipe_amp(code);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(code);
    case 60:
    case 62:
      return this.readToken_lt_gt(code);
    case 61:
    case 33:
      return this.readToken_eq_excl(code);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(types$1.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};
pp.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};
pp.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(start, "Unterminated regular expression");
    }
    var ch2 = this.input.charAt(this.pos);
    if (lineBreak.test(ch2)) {
      this.raise(start, "Unterminated regular expression");
    }
    if (!escaped) {
      if (ch2 === "[") {
        inClass = true;
      } else if (ch2 === "]" && inClass) {
        inClass = false;
      } else if (ch2 === "/" && !inClass) {
        break;
      }
      escaped = ch2 === "\\";
    } else {
      escaped = false;
    }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(flagsStart);
  }
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
  }
  return this.finishToken(types$1.regexp, { pattern, flags, value });
};
pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
    var code = this.input.charCodeAt(this.pos), val = void 0;
    if (allowSeparators && code === 95) {
      if (isLegacyOctalNumericLiteral) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
      }
      if (lastCode === 95) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
      }
      if (i === 0) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
      }
      lastCode = code;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (code >= 48 && code <= 57) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      break;
    }
    lastCode = code;
    total = total * radix + val;
  }
  if (allowSeparators && lastCode === 95) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
  }
  if (this.pos === start || len != null && this.pos - start !== len) {
    return null;
  }
  return total;
};
function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8);
  }
  return parseFloat(str.replace(/_/g, ""));
}
function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null;
  }
  return BigInt(str.replace(/_/g, ""));
}
pp.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2;
  var val = this.readInt(radix);
  if (val == null) {
    this.raise(this.start + 2, "Expected number in radix " + radix);
  }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  return this.finishToken(types$1.num, val);
};
pp.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, void 0, true) === null) {
    this.raise(start, "Invalid number");
  }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) {
    this.raise(start, "Invalid number");
  }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types$1.num, val$1);
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
    octal = false;
  }
  if (next === 46 && !octal) {
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) {
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) {
      ++this.pos;
    }
    if (this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types$1.num, val);
};
pp.readCodePoint = function() {
  var ch2 = this.input.charCodeAt(this.pos), code;
  if (ch2 === 123) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 1114111) {
      this.invalidStringToken(codePos, "Code point out of bounds");
    }
  } else {
    code = this.readHexChar(4);
  }
  return code;
};
pp.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant");
    }
    var ch2 = this.input.charCodeAt(this.pos);
    if (ch2 === quote) {
      break;
    }
    if (ch2 === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else if (ch2 === 8232 || ch2 === 8233) {
      if (this.options.ecmaVersion < 10) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
      if (this.options.locations) {
        this.curLine++;
        this.lineStart = this.pos;
      }
    } else {
      if (isNewLine(ch2)) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types$1.string, out);
};
var INVALID_TEMPLATE_ESCAPE_ERROR = {};
pp.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err;
    }
  }
  this.inTemplateElement = false;
};
pp.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR;
  } else {
    this.raise(position, message);
  }
};
pp.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template");
    }
    var ch2 = this.input.charCodeAt(this.pos);
    if (ch2 === 96 || ch2 === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
      if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
        if (ch2 === 36) {
          this.pos += 2;
          return this.finishToken(types$1.dollarBraceL);
        } else {
          ++this.pos;
          return this.finishToken(types$1.backQuote);
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types$1.template, out);
    }
    if (ch2 === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch2)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch2) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
          }
        case 10:
          out += "\n";
          break;
        default:
          out += String.fromCharCode(ch2);
          break;
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};
pp.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break;
        }
      case "`":
        return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  }
  this.raise(this.start, "Unterminated template");
};
pp.readEscapedChar = function(inTemplate) {
  var ch2 = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch2) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return codePointToString(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      if (this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    case 56:
    case 57:
      if (this.strict) {
        this.invalidStringToken(this.pos - 1, "Invalid escape sequence");
      }
      if (inTemplate) {
        var codePos = this.pos - 1;
        this.invalidStringToken(codePos, "Invalid escape sequence in template string");
        return null;
      }
    default:
      if (ch2 >= 48 && ch2 <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch2 = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch2 === 56 || ch2 === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? "Octal literal in template string" : "Octal literal in strict mode");
        }
        return String.fromCharCode(octal);
      }
      if (isNewLine(ch2)) {
        return "";
      }
      return String.fromCharCode(ch2);
  }
};
pp.readHexChar = function(len) {
  var codePos = this.pos;
  var n2 = this.readInt(16, len);
  if (n2 === null) {
    this.invalidStringToken(codePos, "Bad character escape sequence");
  }
  return n2;
};
pp.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch2 = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch2, astral)) {
      this.pos += ch2 <= 65535 ? 1 : 2;
    } else if (ch2 === 92) {
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
        this.invalidStringToken(escStart, "Invalid Unicode escape");
      }
      word += codePointToString(esc);
      chunkStart = this.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};
pp.readWord = function() {
  var word = this.readWord1();
  var type = types$1.name;
  if (this.keywords.test(word)) {
    type = keywords[word];
  }
  return this.finishToken(type, word);
};
var version = "8.7.1";
Parser.acorn = {
  Parser,
  version,
  defaultOptions,
  Position,
  SourceLocation,
  getLineInfo,
  Node,
  TokenType,
  tokTypes: types$1,
  keywordTypes: keywords,
  TokContext,
  tokContexts: types,
  isIdentifierChar,
  isIdentifierStart,
  Token,
  isNewLine,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace
};
function parse3(input, options) {
  return Parser.parse(input, options);
}
class WalkerBase {
  constructor() {
    this.should_skip = false;
    this.should_remove = false;
    this.replacement = null;
    this.context = {
      skip: () => this.should_skip = true,
      remove: () => this.should_remove = true,
      replace: (node) => this.replacement = node
    };
  }
  replace(parent, prop, index, node) {
    if (parent) {
      if (index !== null) {
        parent[prop][index] = node;
      } else {
        parent[prop] = node;
      }
    }
  }
  remove(parent, prop, index) {
    if (parent) {
      if (index !== null) {
        parent[prop].splice(index, 1);
      } else {
        delete parent[prop];
      }
    }
  }
}
class SyncWalker extends WalkerBase {
  constructor(enter, leave) {
    super();
    this.enter = enter;
    this.leave = leave;
  }
  visit(node, parent, prop, index) {
    if (node) {
      if (this.enter) {
        const _should_skip = this.should_skip;
        const _should_remove = this.should_remove;
        const _replacement = this.replacement;
        this.should_skip = false;
        this.should_remove = false;
        this.replacement = null;
        this.enter.call(this.context, node, parent, prop, index);
        if (this.replacement) {
          node = this.replacement;
          this.replace(parent, prop, index, node);
        }
        if (this.should_remove) {
          this.remove(parent, prop, index);
        }
        const skipped = this.should_skip;
        const removed = this.should_remove;
        this.should_skip = _should_skip;
        this.should_remove = _should_remove;
        this.replacement = _replacement;
        if (skipped)
          return node;
        if (removed)
          return null;
      }
      for (const key in node) {
        const value = node[key];
        if (typeof value !== "object") {
          continue;
        } else if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i += 1) {
            if (value[i] !== null && typeof value[i].type === "string") {
              if (!this.visit(value[i], node, key, i)) {
                i--;
              }
            }
          }
        } else if (value !== null && typeof value.type === "string") {
          this.visit(value, node, key, null);
        }
      }
      if (this.leave) {
        const _replacement = this.replacement;
        const _should_remove = this.should_remove;
        this.replacement = null;
        this.should_remove = false;
        this.leave.call(this.context, node, parent, prop, index);
        if (this.replacement) {
          node = this.replacement;
          this.replace(parent, prop, index, node);
        }
        if (this.should_remove) {
          this.remove(parent, prop, index);
        }
        const removed = this.should_remove;
        this.replacement = _replacement;
        this.should_remove = _should_remove;
        if (removed)
          return null;
      }
    }
    return node;
  }
}
function walk(ast, { enter, leave }) {
  const instance = new SyncWalker(enter, leave);
  return instance.visit(ast, null);
}
const require2 = `function require(id) {
	if (id in __repl_lookup) return __repl_lookup[id];
	throw new Error(\`Cannot require modules dynamically (\${id})\`);
}`;
var commonjs = {
  name: "commonjs",
  transform: (code, id) => {
    if (!/\b(require|module|exports)\b/.test(code))
      return;
    try {
      const ast = parse3(code, {
        ecmaVersion: "latest"
      });
      const requires = [];
      walk(ast, {
        enter: (node) => {
          if (node.type === "CallExpression" && node.callee.name === "require") {
            if (node.arguments.length !== 1)
              return;
            const arg = node.arguments[0];
            if (arg.type !== "Literal" || typeof arg.value !== "string")
              return;
            requires.push(arg.value);
          }
        }
      });
      const imports = requires.map((id2, i) => `import __repl_${i} from '${id2}';`).join("\n");
      const lookup = `const __repl_lookup = { ${requires.map((id2, i) => `'${id2}': __repl_${i}`).join(", ")} };`;
      const transformed = [
        imports,
        lookup,
        require2,
        `const exports = {}; const module = { exports };`,
        code,
        `export default module.exports;`
      ].join("\n\n");
      return {
        code: transformed,
        map: null
      };
    } catch (err) {
      return null;
    }
  }
};
var glsl = {
  name: "glsl",
  transform: (code, id) => {
    if (!id.endsWith(".glsl"))
      return;
    return {
      code: `export default ${JSON.stringify(code)};`,
      map: null
    };
  }
};
var json = {
  name: "json",
  transform: (code, id) => {
    if (!id.endsWith(".json"))
      return;
    return {
      code: `export default ${code};`,
      map: null
    };
  }
};
function escape(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function ensureFunction(functionOrValue) {
  if (typeof functionOrValue === "function") {
    return functionOrValue;
  }
  return function() {
    return functionOrValue;
  };
}
function longest(a2, b2) {
  return b2.length - a2.length;
}
function mapToFunctions(object) {
  return Object.keys(object).reduce(function(functions, key) {
    functions[key] = ensureFunction(object[key]);
    return functions;
  }, {});
}
function replace(options) {
  const functionValues = mapToFunctions(options);
  const keys = Object.keys(functionValues).sort(longest).map(escape);
  const pattern = new RegExp("\\b(" + keys.join("|") + ")\\b", "g");
  return {
    name: "replace",
    transform: function transform(code, id) {
      let hasReplacements = false;
      code = code.replace(pattern, (_2, key) => {
        hasReplacements = true;
        return String(functionValues[key](id));
      });
      if (!hasReplacements) {
        return null;
      }
      return {
        code,
        map: null
      };
    }
  };
}
self.window = self;
let packagesUrl;
let svelteUrl;
let current_id;
let fulfil_ready;
const ready = new Promise((f2) => {
  fulfil_ready = f2;
});
self.addEventListener("message", async (event) => {
  switch (event.data.type) {
    case "init":
      packagesUrl = event.data.packagesUrl;
      svelteUrl = event.data.svelteUrl;
      try {
        importScripts(`${svelteUrl}/compiler.js`);
      } catch {
        await import(
          /* @vite-ignore */
          `${svelteUrl}/compiler.js`
        );
      }
      fulfil_ready();
      break;
    case "bundle":
      await ready;
      const { uid, components } = event.data;
      if (components.length === 0)
        return;
      current_id = uid;
      setTimeout(async () => {
        if (current_id !== uid)
          return;
        const result = await bundle({ uid, components });
        if (result.error === ABORT)
          return;
        if (result && uid === current_id)
          postMessage(result);
      });
      break;
  }
});
let cached = {
  dom: {},
  ssr: {}
};
const ABORT = { aborted: true };
const fetch_cache = /* @__PURE__ */ new Map();
async function fetch_if_uncached(url, uid) {
  if (fetch_cache.has(url)) {
    return fetch_cache.get(url);
  }
  await sleep(200);
  if (uid !== current_id)
    throw ABORT;
  const promise = fetch(url).then(async (r2) => {
    if (r2.ok) {
      return {
        url: r2.url,
        body: await r2.text()
      };
    }
    throw new Error(await r2.text());
  }).catch((err) => {
    fetch_cache.delete(url);
    throw err;
  });
  fetch_cache.set(url, promise);
  return promise;
}
async function follow_redirects(url, uid) {
  const res = await fetch_if_uncached(url, uid);
  return res.url;
}
function compare_to_version(major, minor, patch) {
  const v2 = svelte.VERSION.match(/^(\d+)\.(\d+)\.(\d+)/);
  return v2[1] - major || v2[2] - minor || v2[3] - patch;
}
function is_legacy_package_structure() {
  return compare_to_version(3, 4, 4) <= 0;
}
function has_loopGuardTimeout_feature() {
  return compare_to_version(3, 14, 0) >= 0;
}
async function get_bundle(uid, mode, cache, lookup) {
  let bundle2;
  const imports = /* @__PURE__ */ new Set();
  const warnings = [];
  const all_warnings = [];
  const new_cache = {};
  const repl_plugin = {
    async resolveId(importee, importer) {
      if (uid !== current_id)
        throw ABORT;
      if (importee === `svelte`)
        return `${svelteUrl}/index.mjs`;
      if (importee.startsWith(`svelte/`)) {
        return is_legacy_package_structure() ? `${svelteUrl}/${importee.slice(7)}.mjs` : `${svelteUrl}/${importee.slice(7)}/index.mjs`;
      }
      if (importer && importer.startsWith(svelteUrl)) {
        const resolved = new URL(importee, importer).href;
        if (resolved.endsWith(".mjs"))
          return resolved;
        return is_legacy_package_structure() ? `${resolved}.mjs` : `${resolved}/index.mjs`;
      }
      if (importee in lookup && (!importer || importer in lookup))
        return importee;
      if (importee + ".js" in lookup)
        return importee + ".js";
      if (importee + ".json" in lookup)
        return importee + ".json";
      if (importee.endsWith("/"))
        importee = importee.slice(0, -1);
      if (importee.startsWith("http:") || importee.startsWith("https:"))
        return importee;
      if (importee.startsWith(".")) {
        const url = new URL(importee, importer).href;
        self.postMessage({ type: "status", uid, message: `resolving ${url}` });
        return await follow_redirects(url, uid);
      } else {
        self.postMessage({ type: "status", uid, message: `resolving ${importee}` });
        if (importer in lookup) {
          const match = /^(@[^/]+\/)?[^/]+/.exec(importee);
          if (match)
            imports.add(match[0]);
        }
        try {
          const pkg_url = await follow_redirects(`${packagesUrl}/${importee}/package.json`, uid);
          const pkg_json = (await fetch_if_uncached(pkg_url, uid)).body;
          const pkg = JSON.parse(pkg_json);
          if (pkg.svelte || pkg.module || pkg.main) {
            const url = pkg_url.replace(/\/package\.json$/, "");
            return new URL(pkg.svelte || pkg.module || pkg.main, `${url}/`).href;
          }
        } catch (err) {
        }
        return await follow_redirects(`${packagesUrl}/${importee}`, uid);
      }
    },
    async load(resolved) {
      if (uid !== current_id)
        throw ABORT;
      if (resolved in lookup)
        return lookup[resolved].source;
      if (!fetch_cache.has(resolved)) {
        self.postMessage({ type: "status", uid, message: `fetching ${resolved}` });
      }
      const res = await fetch_if_uncached(resolved, uid);
      return res.body;
    },
    async transform(code, id) {
      if (uid !== current_id)
        throw ABORT;
      self.postMessage({ type: "status", uid, message: `bundling ${id}` });
      if (!/\.svelte$|\.svx$/.test(id))
        return null;
      const name = id.split("/").pop().split(".")[0];
      if (/\.svx$/.test(id)) {
        ({ code } = await mdsvex().markup({ content: code, filename: id }));
      }
      const result = cache[id] && cache[id].code === code ? cache[id].result : svelte.compile(code, Object.assign({
        generate: mode,
        format: "esm",
        dev: true,
        filename: name + ".svelte"
      }, has_loopGuardTimeout_feature() && {
        loopGuardTimeout: 100
      }));
      new_cache[id] = { code, result };
      (result.warnings || result.stats.warnings).forEach((warning) => {
        warnings.push({
          message: warning.message,
          filename: warning.filename,
          start: warning.start,
          end: warning.end
        });
      });
      return result.js;
    }
  };
  try {
    bundle2 = await Qh({
      input: "./App.svx",
      plugins: [
        repl_plugin,
        commonjs,
        json,
        glsl,
        replace({
          '"production"': JSON.stringify("production")
        })
      ],
      inlineDynamicImports: true,
      onwarn(warning) {
        all_warnings.push({
          message: warning.message
        });
      }
    });
    return {
      bundle: bundle2,
      imports: Array.from(imports),
      cache: new_cache,
      error: null,
      warnings,
      all_warnings
    };
  } catch (error) {
    return { error, imports: null, bundle: null, cache: new_cache, warnings, all_warnings };
  }
}
async function bundle({ uid, components }) {
  {
    console.clear();
    console.log(`running Svelte compiler version %c${svelte.VERSION}`, "font-weight: bold");
  }
  const lookup = {};
  components.forEach((component) => {
    const path = `./${component.name}.${component.type}`;
    lookup[path] = component;
  });
  let dom;
  try {
    dom = await get_bundle(uid, "dom", cached.dom, lookup);
    if (dom.error) {
      throw dom.error;
    }
    cached.dom = dom.cache;
    const dom_result = (await dom.bundle.generate({
      format: "iife",
      name: "SvelteComponent",
      exports: "named",
      sourcemap: true
    })).output[0];
    const es_result = (await dom.bundle.generate({
      format: "es",
      name: "SvelteComponent",
      exports: "named",
      sourcemap: true
    })).output[0];
    const ssr = false ? await get_bundle(uid, "ssr", cached.ssr, lookup) : null;
    if (ssr)
      ;
    const ssr_result = ssr ? (await ssr.bundle.generate({
      format: "iife",
      name: "SvelteComponent",
      exports: "named",
      sourcemap: true
    })).output[0] : null;
    return {
      uid,
      dom: dom_result,
      es: es_result,
      ssr: ssr_result,
      imports: dom.imports,
      warnings: dom.warnings,
      error: null
    };
  } catch (err) {
    console.error(err);
    const e = err;
    delete e.toString;
    return {
      uid,
      dom: null,
      ssr: null,
      imports: null,
      warnings: dom.warnings,
      error: Object.assign({}, e, {
        message: e.message,
        stack: e.stack
      })
    };
  }
}
//# sourceMappingURL=index.768837ab.js.map