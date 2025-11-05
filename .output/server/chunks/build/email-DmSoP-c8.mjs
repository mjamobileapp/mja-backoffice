import { _ as _sfc_main$2$2, a as _sfc_main$c, b as _sfc_main$1$4 } from './TooltipTrigger-BcDIeLJj.mjs';
import { _ as _sfc_main$6 } from './TooltipProvider-CFR98U-_.mjs';
import { _ as _sfc_main$7, a as _sfc_main$1$1 } from './ResizablePanelGroup-Bn-7-wk4.mjs';
import { ConfigProvider, SplitterPanel } from 'radix-vue';
import { _ as _sfc_main$a$1, a as _sfc_main$1$3, b as _sfc_main$b, c as _sfc_main$9$1, d as _sfc_main$7$1 } from './SelectValue-B4V_V5Kg.mjs';
import { r as refDebounced, u as useMediaQuery, c as cn, _ as __nuxt_component_5, b as buttonVariants, a as _sfc_main$2$3 } from './server.mjs';
import { defineComponent, mergeProps, unref, ref, computed, watch, useId, withCtx, createVNode, createTextVNode, isRef, createBlock, openBlock, createCommentVNode, toDisplayString, Fragment, renderList, mergeModels, useModel, TransitionGroup, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './Separator-Bs1EkIKE.mjs';
import { _ as _sfc_main$2$4, a as _sfc_main$d, b as _sfc_main$1$5 } from './PopoverTrigger-ldvWFHWS.mjs';
import { _ as _sfc_main$b$1 } from './CalendarPrevButton-B7sdA_QV.mjs';
import { _ as _sfc_main$d$1, a as _sfc_main$e, b as _sfc_main$b$2, c as _sfc_main$9$2 } from './DropdownMenuTrigger-7ca149wI.mjs';
import { _ as _sfc_main$2$5, a as _sfc_main$1$6 } from './index-B6VfKlGU.mjs';
import { _ as _sfc_main$f } from './Textarea-U1r39FPM.mjs';
import { _ as _sfc_main$g } from './Label-BBvFeqSn.mjs';
import { _ as _sfc_main$h } from './Switch-iusG_qLb.mjs';
import { format, addHours, addDays, nextSaturday, formatDistanceToNow } from 'date-fns';
import { Search, ArrowLeft, Archive, ArchiveX, Trash2, Clock, Reply, ReplyAll, Forward, MoreVertical } from 'lucide-vue-next';
import { _ as _sfc_main$3$1, a as _sfc_main$1$2, b as _sfc_main$9, c as _sfc_main$2$1 } from './TabsTrigger-C0BjP9Jd.mjs';
import { _ as _sfc_main$a } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$i } from './ScrollArea-Boh3Id5t.mjs';
import { _ as _sfc_main$j } from './index-C4udwYHm.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import '@iconify/vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@iconify/utils/lib/css/icon';
import 'vue-sonner';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AccountSwitcher",
  __ssrInlineRender: true,
  props: {
    isCollapsed: { type: Boolean },
    accounts: {}
  },
  setup(__props) {
    const props = __props;
    const selectedEmail = ref(props.accounts[0].email);
    const selectedEmailData = computed(() => props.accounts.find((item) => item.email === selectedEmail.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Select = _sfc_main$a$1;
      const _component_SelectTrigger = _sfc_main$1$3;
      const _component_SelectValue = _sfc_main$b;
      const _component_Icon = __nuxt_component_5;
      const _component_SelectContent = _sfc_main$9$1;
      const _component_SelectItem = _sfc_main$7$1;
      _push(ssrRenderComponent(_component_Select, mergeProps({
        modelValue: selectedEmail.value,
        "onUpdate:modelValue": ($event) => selectedEmail.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, {
              "aria-label": "Select account",
              class: unref(cn)(
                "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
                { "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden": __props.isCollapsed }
              )
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "Select an account" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          class: "size-4",
                          name: selectedEmailData.value.icon
                        }, null, _parent4, _scopeId3));
                        if (!__props.isCollapsed) {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(selectedEmailData.value.label)}</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode(_component_Icon, {
                              class: "size-4",
                              name: selectedEmailData.value.icon
                            }, null, 8, ["name"]),
                            !__props.isCollapsed ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(selectedEmailData.value.label), 1)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "Select an account" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_Icon, {
                            class: "size-4",
                            name: selectedEmailData.value.icon
                          }, null, 8, ["name"]),
                          !__props.isCollapsed ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(selectedEmailData.value.label), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.accounts, (account) => {
                    _push3(ssrRenderComponent(_component_SelectItem, {
                      key: account.email,
                      value: account.email
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-3 [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 [&amp;_svg]:text-foreground"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            class: "size-4",
                            name: account.icon
                          }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(account.email)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-3 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-foreground" }, [
                              createVNode(_component_Icon, {
                                class: "size-4",
                                name: account.icon
                              }, null, 8, ["name"]),
                              createTextVNode(" " + toDisplayString(account.email), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.accounts, (account) => {
                      return openBlock(), createBlock(_component_SelectItem, {
                        key: account.email,
                        value: account.email
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-3 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-foreground" }, [
                            createVNode(_component_Icon, {
                              class: "size-4",
                              name: account.icon
                            }, null, 8, ["name"]),
                            createTextVNode(" " + toDisplayString(account.email), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SelectTrigger, {
                "aria-label": "Select account",
                class: unref(cn)(
                  "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
                  { "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden": __props.isCollapsed }
                )
              }, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "Select an account" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_Icon, {
                          class: "size-4",
                          name: selectedEmailData.value.icon
                        }, null, 8, ["name"]),
                        !__props.isCollapsed ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(selectedEmailData.value.label), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.accounts, (account) => {
                    return openBlock(), createBlock(_component_SelectItem, {
                      key: account.email,
                      value: account.email
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-3 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-foreground" }, [
                          createVNode(_component_Icon, {
                            class: "size-4",
                            name: account.icon
                          }, null, 8, ["name"]),
                          createTextVNode(" " + toDisplayString(account.email), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mail/AccountSwitcher.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Nav",
  __ssrInlineRender: true,
  props: {
    isCollapsed: { type: Boolean },
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tooltip = _sfc_main$2$2;
      const _component_TooltipTrigger = _sfc_main$c;
      const _component_Icon = __nuxt_component_5;
      const _component_TooltipContent = _sfc_main$1$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-collapsed": __props.isCollapsed,
        class: "group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      }, _attrs))}><nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"><!--[-->`);
      ssrRenderList(__props.links, (link, index) => {
        _push(`<!--[-->`);
        if (__props.isCollapsed) {
          _push(ssrRenderComponent(_component_Tooltip, {
            key: `1-${index}`,
            "delay-duration": 0
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<a href="#" class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))(
                        unref(buttonVariants)({ variant: link.variant, size: "icon" }),
                        "h-9 w-9",
                        link.variant === "default" && "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                      ))}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: link.icon,
                        class: "size-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="sr-only"${_scopeId2}>${ssrInterpolate(link.title)}</span></a>`);
                    } else {
                      return [
                        createVNode("a", {
                          href: "#",
                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                            unref(buttonVariants)({ variant: link.variant, size: "icon" }),
                            "h-9 w-9",
                            link.variant === "default" && "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          )
                        }, [
                          createVNode(_component_Icon, {
                            name: link.icon,
                            class: "size-4"
                          }, null, 8, ["name"]),
                          createVNode("span", { class: "sr-only" }, toDisplayString(link.title), 1)
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_TooltipContent, {
                  side: "right",
                  class: "flex items-center gap-4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.title)} `);
                      if (link.label) {
                        _push3(`<span class="ml-auto text-muted-foreground"${_scopeId2}>${ssrInterpolate(link.label)}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.title) + " ", 1),
                        link.label ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "ml-auto text-muted-foreground"
                        }, toDisplayString(link.label), 1)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: "#",
                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                          unref(buttonVariants)({ variant: link.variant, size: "icon" }),
                          "h-9 w-9",
                          link.variant === "default" && "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                        )
                      }, [
                        createVNode(_component_Icon, {
                          name: link.icon,
                          class: "size-4"
                        }, null, 8, ["name"]),
                        createVNode("span", { class: "sr-only" }, toDisplayString(link.title), 1)
                      ], 2)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_TooltipContent, {
                    side: "right",
                    class: "flex items-center gap-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(link.title) + " ", 1),
                      link.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "ml-auto text-muted-foreground"
                      }, toDisplayString(link.label), 1)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<a href="#" class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))(
            unref(buttonVariants)({ variant: link.variant, size: "sm" }),
            link.variant === "default" && "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
            "justify-start"
          ))}">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: link.icon,
            class: "mr-2 size-4"
          }, null, _parent));
          _push(` ${ssrInterpolate(link.title)} `);
          if (link.label) {
            _push(`<span class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))(
              "ml-auto",
              link.variant === "default" && "text-background dark:text-white"
            ))}">${ssrInterpolate(link.label)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</a>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></nav></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mail/Nav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Display",
  __ssrInlineRender: true,
  props: {
    mail: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const mailFallbackName = computed(() => {
      var _a;
      return (_a = props.mail) == null ? void 0 : _a.name.split(" ").map((chunk) => chunk[0]).join("");
    });
    const today = /* @__PURE__ */ new Date();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tooltip = _sfc_main$2$2;
      const _component_TooltipTrigger = _sfc_main$c;
      const _component_Button = _sfc_main$2$3;
      const _component_TooltipContent = _sfc_main$1$4;
      const _component_Separator = _sfc_main$8;
      const _component_Popover = _sfc_main$2$4;
      const _component_PopoverTrigger = _sfc_main$d;
      const _component_PopoverContent = _sfc_main$1$5;
      const _component_Calendar = _sfc_main$b$1;
      const _component_DropdownMenu = _sfc_main$d$1;
      const _component_DropdownMenuTrigger = _sfc_main$e;
      const _component_DropdownMenuContent = _sfc_main$b$2;
      const _component_DropdownMenuItem = _sfc_main$9$2;
      const _component_Avatar = _sfc_main$2$5;
      const _component_AvatarFallback = _sfc_main$1$6;
      const _component_Textarea = _sfc_main$f;
      const _component_Label = _sfc_main$g;
      const _component_Switch = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col" }, _attrs))}><div class="flex items-center p-2"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Tooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail,
                    onClick: ($event) => emit("close")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ArrowLeft), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Back</span>`);
                      } else {
                        return [
                          createVNode(unref(ArrowLeft), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Back")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "icon",
                      disabled: !__props.mail,
                      onClick: ($event) => emit("close")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ArrowLeft), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "Back")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail,
                    onClick: ($event) => emit("close")
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ArrowLeft), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "Back")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_TooltipContent, null, {
                default: withCtx(() => [
                  createTextVNode("Back")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Tooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Archive), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Archive</span>`);
                      } else {
                        return [
                          createVNode(unref(Archive), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Archive")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "icon",
                      disabled: !__props.mail
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Archive), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "Archive")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Archive`);
                } else {
                  return [
                    createTextVNode("Archive")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Archive), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "Archive")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_TooltipContent, null, {
                default: withCtx(() => [
                  createTextVNode("Archive")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Tooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ArchiveX), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Move to junk</span>`);
                      } else {
                        return [
                          createVNode(unref(ArchiveX), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Move to junk")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "icon",
                      disabled: !__props.mail
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ArchiveX), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "Move to junk")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Move to junk`);
                } else {
                  return [
                    createTextVNode("Move to junk")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ArchiveX), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "Move to junk")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_TooltipContent, null, {
                default: withCtx(() => [
                  createTextVNode("Move to junk")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Tooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Trash2), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Move to trash</span>`);
                      } else {
                        return [
                          createVNode(unref(Trash2), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Move to trash")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "icon",
                      disabled: !__props.mail
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Trash2), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "Move to trash")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Move to trash`);
                } else {
                  return [
                    createTextVNode("Move to trash")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Trash2), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "Move to trash")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_TooltipContent, null, {
                default: withCtx(() => [
                  createTextVNode("Move to trash")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Separator, {
        orientation: "vertical",
        class: "mx-1 h-6"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Tooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Popover, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, {
                                variant: "ghost",
                                size: "icon",
                                disabled: !__props.mail
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Clock), { class: "size-4" }, null, _parent6, _scopeId5));
                                    _push6(`<span class="sr-only"${_scopeId5}>Snooze</span>`);
                                  } else {
                                    return [
                                      createVNode(unref(Clock), { class: "size-4" }),
                                      createVNode("span", { class: "sr-only" }, "Snooze")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, {
                                  variant: "ghost",
                                  size: "icon",
                                  disabled: !__props.mail
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Clock), { class: "size-4" }),
                                    createVNode("span", { class: "sr-only" }, "Snooze")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, {
                                variant: "ghost",
                                size: "icon",
                                disabled: !__props.mail
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Clock), { class: "size-4" }),
                                  createVNode("span", { class: "sr-only" }, "Snooze")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PopoverContent, { class: "w-full flex p-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-2 border-r px-2 py-4"${_scopeId3}><div class="px-4 text-sm font-medium"${_scopeId3}> Snooze until </div><div class="grid min-w-[250px] gap-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "ghost",
                          class: "justify-start font-normal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Later today <span class="ml-auto text-muted-foreground"${_scopeId4}>${ssrInterpolate(unref(format)(unref(addHours)(unref(today), 4), "E, h:m b"))}</span>`);
                            } else {
                              return [
                                createTextVNode(" Later today "),
                                createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addHours)(unref(today), 4), "E, h:m b")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "ghost",
                          class: "justify-start font-normal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Tomorrow <span class="ml-auto text-muted-foreground"${_scopeId4}>${ssrInterpolate(unref(format)(unref(addDays)(unref(today), 1), "E, h:m b"))}</span>`);
                            } else {
                              return [
                                createTextVNode(" Tomorrow "),
                                createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addDays)(unref(today), 1), "E, h:m b")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "ghost",
                          class: "justify-start font-normal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` This weekend <span class="ml-auto text-muted-foreground"${_scopeId4}>${ssrInterpolate(unref(format)(unref(nextSaturday)(unref(today)), "E, h:m b"))}</span>`);
                            } else {
                              return [
                                createTextVNode(" This weekend "),
                                createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(nextSaturday)(unref(today)), "E, h:m b")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "ghost",
                          class: "justify-start font-normal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Next week <span class="ml-auto text-muted-foreground"${_scopeId4}>${ssrInterpolate(unref(format)(unref(addDays)(unref(today), 7), "E, h:m b"))}</span>`);
                            } else {
                              return [
                                createTextVNode(" Next week "),
                                createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addDays)(unref(today), 7), "E, h:m b")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div><div class="p-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Calendar, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col gap-2 border-r px-2 py-4" }, [
                            createVNode("div", { class: "px-4 text-sm font-medium" }, " Snooze until "),
                            createVNode("div", { class: "grid min-w-[250px] gap-1" }, [
                              createVNode(_component_Button, {
                                variant: "ghost",
                                class: "justify-start font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Later today "),
                                  createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addHours)(unref(today), 4), "E, h:m b")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Button, {
                                variant: "ghost",
                                class: "justify-start font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Tomorrow "),
                                  createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addDays)(unref(today), 1), "E, h:m b")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Button, {
                                variant: "ghost",
                                class: "justify-start font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" This weekend "),
                                  createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(nextSaturday)(unref(today)), "E, h:m b")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Button, {
                                variant: "ghost",
                                class: "justify-start font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Next week "),
                                  createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addDays)(unref(today), 7), "E, h:m b")), 1)
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "p-2" }, [
                            createVNode(_component_Calendar)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              variant: "ghost",
                              size: "icon",
                              disabled: !__props.mail
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Clock), { class: "size-4" }),
                                createVNode("span", { class: "sr-only" }, "Snooze")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PopoverContent, { class: "w-full flex p-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col gap-2 border-r px-2 py-4" }, [
                          createVNode("div", { class: "px-4 text-sm font-medium" }, " Snooze until "),
                          createVNode("div", { class: "grid min-w-[250px] gap-1" }, [
                            createVNode(_component_Button, {
                              variant: "ghost",
                              class: "justify-start font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Later today "),
                                createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addHours)(unref(today), 4), "E, h:m b")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, {
                              variant: "ghost",
                              class: "justify-start font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Tomorrow "),
                                createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addDays)(unref(today), 1), "E, h:m b")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, {
                              variant: "ghost",
                              class: "justify-start font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" This weekend "),
                                createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(nextSaturday)(unref(today)), "E, h:m b")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, {
                              variant: "ghost",
                              class: "justify-start font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Next week "),
                                createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addDays)(unref(today), 7), "E, h:m b")), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode(_component_Calendar)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Snooze`);
                } else {
                  return [
                    createTextVNode("Snooze")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Popover, null, {
                default: withCtx(() => [
                  createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: "ghost",
                            size: "icon",
                            disabled: !__props.mail
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Clock), { class: "size-4" }),
                              createVNode("span", { class: "sr-only" }, "Snooze")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PopoverContent, { class: "w-full flex p-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col gap-2 border-r px-2 py-4" }, [
                        createVNode("div", { class: "px-4 text-sm font-medium" }, " Snooze until "),
                        createVNode("div", { class: "grid min-w-[250px] gap-1" }, [
                          createVNode(_component_Button, {
                            variant: "ghost",
                            class: "justify-start font-normal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Later today "),
                              createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addHours)(unref(today), 4), "E, h:m b")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, {
                            variant: "ghost",
                            class: "justify-start font-normal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Tomorrow "),
                              createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addDays)(unref(today), 1), "E, h:m b")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, {
                            variant: "ghost",
                            class: "justify-start font-normal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" This weekend "),
                              createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(nextSaturday)(unref(today)), "E, h:m b")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, {
                            variant: "ghost",
                            class: "justify-start font-normal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Next week "),
                              createVNode("span", { class: "ml-auto text-muted-foreground" }, toDisplayString(unref(format)(unref(addDays)(unref(today), 7), "E, h:m b")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode(_component_Calendar)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TooltipContent, null, {
                default: withCtx(() => [
                  createTextVNode("Snooze")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-auto flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Tooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Reply), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Reply</span>`);
                      } else {
                        return [
                          createVNode(unref(Reply), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Reply")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "icon",
                      disabled: !__props.mail
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Reply), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "Reply")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Reply`);
                } else {
                  return [
                    createTextVNode("Reply")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Reply), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "Reply")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_TooltipContent, null, {
                default: withCtx(() => [
                  createTextVNode("Reply")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Tooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ReplyAll), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Reply all</span>`);
                      } else {
                        return [
                          createVNode(unref(ReplyAll), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Reply all")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "icon",
                      disabled: !__props.mail
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ReplyAll), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "Reply all")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Reply all`);
                } else {
                  return [
                    createTextVNode("Reply all")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ReplyAll), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "Reply all")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_TooltipContent, null, {
                default: withCtx(() => [
                  createTextVNode("Reply all")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Tooltip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Forward), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Forward</span>`);
                      } else {
                        return [
                          createVNode(unref(Forward), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Forward")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "icon",
                      disabled: !__props.mail
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Forward), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "Forward")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TooltipContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Forward`);
                } else {
                  return [
                    createTextVNode("Forward")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Forward), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "Forward")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_TooltipContent, null, {
                default: withCtx(() => [
                  createTextVNode("Forward")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Separator, {
        orientation: "vertical",
        class: "mx-2 h-6"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DropdownMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(MoreVertical), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>More</span>`);
                      } else {
                        return [
                          createVNode(unref(MoreVertical), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "More")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "icon",
                      disabled: !__props.mail
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(MoreVertical), { class: "size-4" }),
                        createVNode("span", { class: "sr-only" }, "More")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, { align: "end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Mark as unread`);
                      } else {
                        return [
                          createTextVNode("Mark as unread")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Star thread`);
                      } else {
                        return [
                          createTextVNode("Star thread")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add label`);
                      } else {
                        return [
                          createTextVNode("Add label")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Mute thread`);
                      } else {
                        return [
                          createTextVNode("Mute thread")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("Mark as unread")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("Star thread")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("Add label")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("Mute thread")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    size: "icon",
                    disabled: !__props.mail
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(MoreVertical), { class: "size-4" }),
                      createVNode("span", { class: "sr-only" }, "More")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, { align: "end" }, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("Mark as unread")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("Star thread")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("Add label")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("Mute thread")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      if (__props.mail) {
        _push(`<div class="flex flex-1 flex-col"><div class="flex items-start p-4"><div class="flex items-start gap-4 text-sm">`);
        _push(ssrRenderComponent(_component_Avatar, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_AvatarFallback, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(mailFallbackName.value)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(mailFallbackName.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_AvatarFallback, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(mailFallbackName.value), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="grid gap-1"><div class="font-semibold">${ssrInterpolate(__props.mail.name)}</div><div class="line-clamp-1 text-xs">${ssrInterpolate(__props.mail.subject)}</div><div class="line-clamp-1 text-xs"><span class="font-medium">Reply-To:</span> ${ssrInterpolate(__props.mail.email)}</div></div></div>`);
        if (__props.mail.date) {
          _push(`<div class="ml-auto text-xs text-muted-foreground">${ssrInterpolate(unref(format)(new Date(__props.mail.date), "PPpp"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_Separator, null, null, _parent));
        _push(`<div class="flex-1 whitespace-pre-wrap p-4 text-sm">${ssrInterpolate(__props.mail.text)}</div>`);
        _push(ssrRenderComponent(_component_Separator, { class: "mt-auto" }, null, _parent));
        _push(`<div class="p-4"><form><div class="grid gap-4">`);
        _push(ssrRenderComponent(_component_Textarea, {
          class: "p-4",
          placeholder: `Reply ${__props.mail.name}...`
        }, null, _parent));
        _push(`<div class="flex items-center">`);
        _push(ssrRenderComponent(_component_Label, {
          "html-for": "mute",
          class: "flex items-center gap-2 text-xs font-normal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Switch, {
                id: "mute",
                "aria-label": "Mute thread"
              }, null, _parent2, _scopeId));
              _push2(` Mute this thread `);
            } else {
              return [
                createVNode(_component_Switch, {
                  id: "mute",
                  "aria-label": "Mute thread"
                }),
                createTextVNode(" Mute this thread ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          type: "button",
          size: "sm",
          class: "ml-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Send `);
            } else {
              return [
                createTextVNode(" Send ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></form></div></div>`);
      } else {
        _push(`<div class="p-8 text-center text-muted-foreground"> No message selected </div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mail/Display.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    items: {}
  }, {
    "selectedMail": { required: false },
    "selectedMailModifiers": {}
  }),
  emits: ["update:selectedMail"],
  setup(__props) {
    const selectedMail = useModel(__props, "selectedMail");
    function getBadgeVariantFromLabel(label) {
      if (["work"].includes(label.toLowerCase()))
        return "default";
      if (["personal"].includes(label.toLowerCase()))
        return "outline";
      return "secondary";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollArea = _sfc_main$i;
      const _component_Badge = _sfc_main$j;
      _push(ssrRenderComponent(_component_ScrollArea, mergeProps({ class: "h-[calc(100dvh-72px-56px-3rem-53px)] flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-1 flex-col gap-2 p-4 pt-0" data-v-bc5eb43e${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item) => {
              _push2(`<button class="${ssrRenderClass(unref(cn)(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                selectedMail.value === item.id && "bg-muted"
              ))}" data-v-bc5eb43e${_scopeId}><div class="w-full flex flex-col gap-1" data-v-bc5eb43e${_scopeId}><div class="flex items-center" data-v-bc5eb43e${_scopeId}><div class="flex items-center gap-2" data-v-bc5eb43e${_scopeId}><div class="font-semibold" data-v-bc5eb43e${_scopeId}>${ssrInterpolate(item.name)}</div>`);
              if (!item.read) {
                _push2(`<span class="h-2 w-2 flex rounded-full bg-blue-600" data-v-bc5eb43e${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="${ssrRenderClass(unref(cn)(
                "ml-auto text-xs",
                selectedMail.value === item.id ? "text-foreground" : "text-muted-foreground"
              ))}" data-v-bc5eb43e${_scopeId}>${ssrInterpolate(unref(formatDistanceToNow)(new Date(item.date), { addSuffix: true }))}</div></div><div class="text-xs font-medium" data-v-bc5eb43e${_scopeId}>${ssrInterpolate(item.subject)}</div></div><div class="line-clamp-2 text-xs text-muted-foreground" data-v-bc5eb43e${_scopeId}>${ssrInterpolate(item.text.substring(0, 300))}</div><div class="flex items-center gap-2" data-v-bc5eb43e${_scopeId}><!--[-->`);
              ssrRenderList(item.labels, (label) => {
                _push2(ssrRenderComponent(_component_Badge, {
                  key: label,
                  variant: getBadgeVariantFromLabel(label)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-1 flex-col gap-2 p-4 pt-0" }, [
                createVNode(TransitionGroup, {
                  name: "list",
                  appear: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                      return openBlock(), createBlock("button", {
                        key: item.id,
                        class: unref(cn)(
                          "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                          selectedMail.value === item.id && "bg-muted"
                        ),
                        onClick: ($event) => selectedMail.value = item.id
                      }, [
                        createVNode("div", { class: "w-full flex flex-col gap-1" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("div", { class: "font-semibold" }, toDisplayString(item.name), 1),
                              !item.read ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "h-2 w-2 flex rounded-full bg-blue-600"
                              })) : createCommentVNode("", true)
                            ]),
                            createVNode("div", {
                              class: unref(cn)(
                                "ml-auto text-xs",
                                selectedMail.value === item.id ? "text-foreground" : "text-muted-foreground"
                              )
                            }, toDisplayString(unref(formatDistanceToNow)(new Date(item.date), { addSuffix: true })), 3)
                          ]),
                          createVNode("div", { class: "text-xs font-medium" }, toDisplayString(item.subject), 1)
                        ]),
                        createVNode("div", { class: "line-clamp-2 text-xs text-muted-foreground" }, toDisplayString(item.text.substring(0, 300)), 1),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.labels, (label) => {
                            return openBlock(), createBlock(_component_Badge, {
                              key: label,
                              variant: getBadgeVariantFromLabel(label)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(label), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant"]);
                          }), 128))
                        ])
                      ], 10, ["onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mail/List.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bc5eb43e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  props: {
    accounts: {},
    mails: {},
    defaultLayout: { default: () => [18, 82] },
    defaultCollapsed: { type: Boolean, default: false },
    navCollapsedSize: {}
  },
  setup(__props) {
    const props = __props;
    const useIdFunction = () => useId();
    const isCollapsed = ref(props.defaultCollapsed);
    const selectedMail = ref();
    const searchValue = ref("");
    const debouncedSearch = refDebounced(searchValue, 250);
    const filteredMailList = computed(() => {
      var _a;
      let output;
      const searchValue2 = (_a = debouncedSearch.value) == null ? void 0 : _a.trim();
      if (!searchValue2) {
        output = props.mails;
      } else {
        output = props.mails.filter((item) => {
          return item.name.includes(debouncedSearch.value) || item.email.includes(debouncedSearch.value) || item.name.includes(debouncedSearch.value) || item.subject.includes(debouncedSearch.value) || item.text.includes(debouncedSearch.value);
        });
      }
      return output;
    });
    const unreadMailList = computed(() => filteredMailList.value.filter((item) => !item.read));
    const selectedMailData = computed(() => props.mails.find((item) => item.id === selectedMail.value));
    const links = [
      {
        title: "Inbox",
        label: "128",
        icon: "lucide:inbox",
        variant: "default"
      },
      {
        title: "Drafts",
        label: "9",
        icon: "lucide:file",
        variant: "ghost"
      },
      {
        title: "Sent",
        label: "",
        icon: "lucide:send",
        variant: "ghost"
      },
      {
        title: "Junk",
        label: "23",
        icon: "lucide:archive",
        variant: "ghost"
      },
      {
        title: "Trash",
        label: "",
        icon: "lucide:trash",
        variant: "ghost"
      },
      {
        title: "Archive",
        label: "",
        icon: "lucide:archive",
        variant: "ghost"
      }
    ];
    const links2 = [
      {
        title: "Social",
        label: "972",
        icon: "lucide:user-2",
        variant: "ghost"
      },
      {
        title: "Updates",
        label: "342",
        icon: "lucide:alert-circle",
        variant: "ghost"
      },
      {
        title: "Forums",
        label: "128",
        icon: "lucide:message-square",
        variant: "ghost"
      },
      {
        title: "Shopping",
        label: "8",
        icon: "lucide:shopping-cart",
        variant: "ghost"
      },
      {
        title: "Promotions",
        label: "21",
        icon: "lucide:archive",
        variant: "ghost"
      }
    ];
    function onCollapse() {
      isCollapsed.value = true;
    }
    function onExpand() {
      isCollapsed.value = false;
    }
    const defaultCollapse = useMediaQuery("(max-width: 768px)");
    watch(() => defaultCollapse.value, () => {
      isCollapsed.value = defaultCollapse.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TooltipProvider = _sfc_main$6;
      const _component_ResizablePanelGroup = _sfc_main$7;
      const _component_ResizablePanel = SplitterPanel;
      const _component_MailAccountSwitcher = _sfc_main$5;
      const _component_Separator = _sfc_main$8;
      const _component_MailNav = _sfc_main$4;
      const _component_ResizableHandle = _sfc_main$1$1;
      const _component_MailDisplay = _sfc_main$3;
      const _component_Tabs = _sfc_main$3$1;
      const _component_TabsList = _sfc_main$1$2;
      const _component_TabsTrigger = _sfc_main$9;
      const _component_Input = _sfc_main$a;
      const _component_TabsContent = _sfc_main$2$1;
      const _component_MailList = __nuxt_component_13;
      _push(ssrRenderComponent(unref(ConfigProvider), mergeProps({ "use-id": useIdFunction }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipProvider, { "delay-duration": 0 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ResizablePanelGroup, {
                    id: "resize-panel-group-1",
                    direction: "horizontal",
                    class: "h-full max-h-[calc(100dvh-53px-3rem)] items-stretch"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ResizablePanel, {
                          id: "resize-panel-1",
                          "default-size": __props.defaultLayout[0],
                          "collapsed-size": __props.navCollapsedSize,
                          collapsible: "",
                          "min-size": 15,
                          "max-size": 20,
                          class: unref(cn)(unref(isCollapsed) && "min-w-[50px] transition-all duration-300 ease-in-out"),
                          onExpand,
                          onCollapse
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="${ssrRenderClass(unref(cn)("flex h-[56px] items-center justify-center", unref(isCollapsed) ? "h-[56px]" : "px-2"))}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_MailAccountSwitcher, {
                                "is-collapsed": unref(isCollapsed),
                                accounts: __props.accounts
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_Separator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MailNav, {
                                "is-collapsed": unref(isCollapsed),
                                links
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Separator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MailNav, {
                                "is-collapsed": unref(isCollapsed),
                                links: links2
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", {
                                  class: unref(cn)("flex h-[56px] items-center justify-center", unref(isCollapsed) ? "h-[56px]" : "px-2")
                                }, [
                                  createVNode(_component_MailAccountSwitcher, {
                                    "is-collapsed": unref(isCollapsed),
                                    accounts: __props.accounts
                                  }, null, 8, ["is-collapsed", "accounts"])
                                ], 2),
                                createVNode(_component_Separator),
                                createVNode(_component_MailNav, {
                                  "is-collapsed": unref(isCollapsed),
                                  links
                                }, null, 8, ["is-collapsed"]),
                                createVNode(_component_Separator),
                                createVNode(_component_MailNav, {
                                  "is-collapsed": unref(isCollapsed),
                                  links: links2
                                }, null, 8, ["is-collapsed"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ResizableHandle, {
                          id: "resize-handle-1",
                          "with-handle": ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ResizablePanel, {
                          id: "resize-panel-2",
                          "default-size": __props.defaultLayout[1],
                          "min-size": 30
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(selectedMailData)) {
                                _push5(ssrRenderComponent(_component_MailDisplay, {
                                  mail: unref(selectedMailData),
                                  onClose: ($event) => selectedMail.value = ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(_component_Tabs, { "default-value": "all" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="flex items-center px-4 py-2"${_scopeId5}><h1 class="text-xl font-bold"${_scopeId5}> Inbox </h1>`);
                                      _push6(ssrRenderComponent(_component_TabsList, { class: "ml-auto" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_TabsTrigger, {
                                              value: "all",
                                              class: "text-zinc-600 dark:text-zinc-200"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` All mail `);
                                                } else {
                                                  return [
                                                    createTextVNode(" All mail ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_TabsTrigger, {
                                              value: "unread",
                                              class: "text-zinc-600 dark:text-zinc-200"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Unread `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Unread ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_TabsTrigger, {
                                                value: "all",
                                                class: "text-zinc-600 dark:text-zinc-200"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" All mail ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_TabsTrigger, {
                                                value: "unread",
                                                class: "text-zinc-600 dark:text-zinc-200"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Unread ")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                      _push6(ssrRenderComponent(_component_Separator, null, null, _parent6, _scopeId5));
                                      _push6(`<div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"${_scopeId5}><form${_scopeId5}><div class="relative"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(unref(Search), { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_Input, {
                                        modelValue: unref(searchValue),
                                        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                        placeholder: "Search",
                                        class: "pl-8"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div></form></div>`);
                                      _push6(ssrRenderComponent(_component_TabsContent, {
                                        value: "all",
                                        class: "m-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_MailList, {
                                              "selected-mail": unref(selectedMail),
                                              "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                              items: unref(filteredMailList)
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_MailList, {
                                                "selected-mail": unref(selectedMail),
                                                "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                                items: unref(filteredMailList)
                                              }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TabsContent, {
                                        value: "unread",
                                        class: "m-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_MailList, {
                                              "selected-mail": unref(selectedMail),
                                              "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                              items: unref(unreadMailList)
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_MailList, {
                                                "selected-mail": unref(selectedMail),
                                                "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                                items: unref(unreadMailList)
                                              }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center px-4 py-2" }, [
                                          createVNode("h1", { class: "text-xl font-bold" }, " Inbox "),
                                          createVNode(_component_TabsList, { class: "ml-auto" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_TabsTrigger, {
                                                value: "all",
                                                class: "text-zinc-600 dark:text-zinc-200"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" All mail ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_TabsTrigger, {
                                                value: "unread",
                                                class: "text-zinc-600 dark:text-zinc-200"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Unread ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(_component_Separator),
                                        createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                                          createVNode("form", null, [
                                            createVNode("div", { class: "relative" }, [
                                              createVNode(unref(Search), { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" }),
                                              createVNode(_component_Input, {
                                                modelValue: unref(searchValue),
                                                "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                                placeholder: "Search",
                                                class: "pl-8"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ])
                                        ]),
                                        createVNode(_component_TabsContent, {
                                          value: "all",
                                          class: "m-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_MailList, {
                                              "selected-mail": unref(selectedMail),
                                              "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                              items: unref(filteredMailList)
                                            }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_TabsContent, {
                                          value: "unread",
                                          class: "m-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_MailList, {
                                              "selected-mail": unref(selectedMail),
                                              "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                              items: unref(unreadMailList)
                                            }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              }
                            } else {
                              return [
                                unref(selectedMailData) ? (openBlock(), createBlock(_component_MailDisplay, {
                                  key: 0,
                                  mail: unref(selectedMailData),
                                  onClose: ($event) => selectedMail.value = ""
                                }, null, 8, ["mail", "onClose"])) : (openBlock(), createBlock(_component_Tabs, {
                                  key: 1,
                                  "default-value": "all"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center px-4 py-2" }, [
                                      createVNode("h1", { class: "text-xl font-bold" }, " Inbox "),
                                      createVNode(_component_TabsList, { class: "ml-auto" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TabsTrigger, {
                                            value: "all",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" All mail ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TabsTrigger, {
                                            value: "unread",
                                            class: "text-zinc-600 dark:text-zinc-200"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Unread ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_Separator),
                                    createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                                      createVNode("form", null, [
                                        createVNode("div", { class: "relative" }, [
                                          createVNode(unref(Search), { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" }),
                                          createVNode(_component_Input, {
                                            modelValue: unref(searchValue),
                                            "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                            placeholder: "Search",
                                            class: "pl-8"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ])
                                    ]),
                                    createVNode(_component_TabsContent, {
                                      value: "all",
                                      class: "m-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_MailList, {
                                          "selected-mail": unref(selectedMail),
                                          "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                          items: unref(filteredMailList)
                                        }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TabsContent, {
                                      value: "unread",
                                      class: "m-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_MailList, {
                                          "selected-mail": unref(selectedMail),
                                          "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                          items: unref(unreadMailList)
                                        }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ResizablePanel, {
                            id: "resize-panel-1",
                            "default-size": __props.defaultLayout[0],
                            "collapsed-size": __props.navCollapsedSize,
                            collapsible: "",
                            "min-size": 15,
                            "max-size": 20,
                            class: unref(cn)(unref(isCollapsed) && "min-w-[50px] transition-all duration-300 ease-in-out"),
                            onExpand,
                            onCollapse
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: unref(cn)("flex h-[56px] items-center justify-center", unref(isCollapsed) ? "h-[56px]" : "px-2")
                              }, [
                                createVNode(_component_MailAccountSwitcher, {
                                  "is-collapsed": unref(isCollapsed),
                                  accounts: __props.accounts
                                }, null, 8, ["is-collapsed", "accounts"])
                              ], 2),
                              createVNode(_component_Separator),
                              createVNode(_component_MailNav, {
                                "is-collapsed": unref(isCollapsed),
                                links
                              }, null, 8, ["is-collapsed"]),
                              createVNode(_component_Separator),
                              createVNode(_component_MailNav, {
                                "is-collapsed": unref(isCollapsed),
                                links: links2
                              }, null, 8, ["is-collapsed"])
                            ]),
                            _: 1
                          }, 8, ["default-size", "collapsed-size", "class"]),
                          createVNode(_component_ResizableHandle, {
                            id: "resize-handle-1",
                            "with-handle": ""
                          }),
                          createVNode(_component_ResizablePanel, {
                            id: "resize-panel-2",
                            "default-size": __props.defaultLayout[1],
                            "min-size": 30
                          }, {
                            default: withCtx(() => [
                              unref(selectedMailData) ? (openBlock(), createBlock(_component_MailDisplay, {
                                key: 0,
                                mail: unref(selectedMailData),
                                onClose: ($event) => selectedMail.value = ""
                              }, null, 8, ["mail", "onClose"])) : (openBlock(), createBlock(_component_Tabs, {
                                key: 1,
                                "default-value": "all"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center px-4 py-2" }, [
                                    createVNode("h1", { class: "text-xl font-bold" }, " Inbox "),
                                    createVNode(_component_TabsList, { class: "ml-auto" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_TabsTrigger, {
                                          value: "all",
                                          class: "text-zinc-600 dark:text-zinc-200"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" All mail ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_TabsTrigger, {
                                          value: "unread",
                                          class: "text-zinc-600 dark:text-zinc-200"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Unread ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_Separator),
                                  createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                                    createVNode("form", null, [
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(unref(Search), { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" }),
                                        createVNode(_component_Input, {
                                          modelValue: unref(searchValue),
                                          "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                          placeholder: "Search",
                                          class: "pl-8"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ])
                                  ]),
                                  createVNode(_component_TabsContent, {
                                    value: "all",
                                    class: "m-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_MailList, {
                                        "selected-mail": unref(selectedMail),
                                        "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                        items: unref(filteredMailList)
                                      }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TabsContent, {
                                    value: "unread",
                                    class: "m-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_MailList, {
                                        "selected-mail": unref(selectedMail),
                                        "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                        items: unref(unreadMailList)
                                      }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }))
                            ]),
                            _: 1
                          }, 8, ["default-size"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ResizablePanelGroup, {
                      id: "resize-panel-group-1",
                      direction: "horizontal",
                      class: "h-full max-h-[calc(100dvh-53px-3rem)] items-stretch"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ResizablePanel, {
                          id: "resize-panel-1",
                          "default-size": __props.defaultLayout[0],
                          "collapsed-size": __props.navCollapsedSize,
                          collapsible: "",
                          "min-size": 15,
                          "max-size": 20,
                          class: unref(cn)(unref(isCollapsed) && "min-w-[50px] transition-all duration-300 ease-in-out"),
                          onExpand,
                          onCollapse
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: unref(cn)("flex h-[56px] items-center justify-center", unref(isCollapsed) ? "h-[56px]" : "px-2")
                            }, [
                              createVNode(_component_MailAccountSwitcher, {
                                "is-collapsed": unref(isCollapsed),
                                accounts: __props.accounts
                              }, null, 8, ["is-collapsed", "accounts"])
                            ], 2),
                            createVNode(_component_Separator),
                            createVNode(_component_MailNav, {
                              "is-collapsed": unref(isCollapsed),
                              links
                            }, null, 8, ["is-collapsed"]),
                            createVNode(_component_Separator),
                            createVNode(_component_MailNav, {
                              "is-collapsed": unref(isCollapsed),
                              links: links2
                            }, null, 8, ["is-collapsed"])
                          ]),
                          _: 1
                        }, 8, ["default-size", "collapsed-size", "class"]),
                        createVNode(_component_ResizableHandle, {
                          id: "resize-handle-1",
                          "with-handle": ""
                        }),
                        createVNode(_component_ResizablePanel, {
                          id: "resize-panel-2",
                          "default-size": __props.defaultLayout[1],
                          "min-size": 30
                        }, {
                          default: withCtx(() => [
                            unref(selectedMailData) ? (openBlock(), createBlock(_component_MailDisplay, {
                              key: 0,
                              mail: unref(selectedMailData),
                              onClose: ($event) => selectedMail.value = ""
                            }, null, 8, ["mail", "onClose"])) : (openBlock(), createBlock(_component_Tabs, {
                              key: 1,
                              "default-value": "all"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center px-4 py-2" }, [
                                  createVNode("h1", { class: "text-xl font-bold" }, " Inbox "),
                                  createVNode(_component_TabsList, { class: "ml-auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TabsTrigger, {
                                        value: "all",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" All mail ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TabsTrigger, {
                                        value: "unread",
                                        class: "text-zinc-600 dark:text-zinc-200"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Unread ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_Separator),
                                createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                                  createVNode("form", null, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(unref(Search), { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" }),
                                      createVNode(_component_Input, {
                                        modelValue: unref(searchValue),
                                        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                        placeholder: "Search",
                                        class: "pl-8"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode(_component_TabsContent, {
                                  value: "all",
                                  class: "m-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MailList, {
                                      "selected-mail": unref(selectedMail),
                                      "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                      items: unref(filteredMailList)
                                    }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TabsContent, {
                                  value: "unread",
                                  class: "m-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MailList, {
                                      "selected-mail": unref(selectedMail),
                                      "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                      items: unref(unreadMailList)
                                    }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }, 8, ["default-size"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipProvider, { "delay-duration": 0 }, {
                default: withCtx(() => [
                  createVNode(_component_ResizablePanelGroup, {
                    id: "resize-panel-group-1",
                    direction: "horizontal",
                    class: "h-full max-h-[calc(100dvh-53px-3rem)] items-stretch"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ResizablePanel, {
                        id: "resize-panel-1",
                        "default-size": __props.defaultLayout[0],
                        "collapsed-size": __props.navCollapsedSize,
                        collapsible: "",
                        "min-size": 15,
                        "max-size": 20,
                        class: unref(cn)(unref(isCollapsed) && "min-w-[50px] transition-all duration-300 ease-in-out"),
                        onExpand,
                        onCollapse
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: unref(cn)("flex h-[56px] items-center justify-center", unref(isCollapsed) ? "h-[56px]" : "px-2")
                          }, [
                            createVNode(_component_MailAccountSwitcher, {
                              "is-collapsed": unref(isCollapsed),
                              accounts: __props.accounts
                            }, null, 8, ["is-collapsed", "accounts"])
                          ], 2),
                          createVNode(_component_Separator),
                          createVNode(_component_MailNav, {
                            "is-collapsed": unref(isCollapsed),
                            links
                          }, null, 8, ["is-collapsed"]),
                          createVNode(_component_Separator),
                          createVNode(_component_MailNav, {
                            "is-collapsed": unref(isCollapsed),
                            links: links2
                          }, null, 8, ["is-collapsed"])
                        ]),
                        _: 1
                      }, 8, ["default-size", "collapsed-size", "class"]),
                      createVNode(_component_ResizableHandle, {
                        id: "resize-handle-1",
                        "with-handle": ""
                      }),
                      createVNode(_component_ResizablePanel, {
                        id: "resize-panel-2",
                        "default-size": __props.defaultLayout[1],
                        "min-size": 30
                      }, {
                        default: withCtx(() => [
                          unref(selectedMailData) ? (openBlock(), createBlock(_component_MailDisplay, {
                            key: 0,
                            mail: unref(selectedMailData),
                            onClose: ($event) => selectedMail.value = ""
                          }, null, 8, ["mail", "onClose"])) : (openBlock(), createBlock(_component_Tabs, {
                            key: 1,
                            "default-value": "all"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center px-4 py-2" }, [
                                createVNode("h1", { class: "text-xl font-bold" }, " Inbox "),
                                createVNode(_component_TabsList, { class: "ml-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TabsTrigger, {
                                      value: "all",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" All mail ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TabsTrigger, {
                                      value: "unread",
                                      class: "text-zinc-600 dark:text-zinc-200"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Unread ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_component_Separator),
                              createVNode("div", { class: "bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, [
                                createVNode("form", null, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(unref(Search), { class: "absolute left-2 top-2.5 size-4 text-muted-foreground" }),
                                    createVNode(_component_Input, {
                                      modelValue: unref(searchValue),
                                      "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                      placeholder: "Search",
                                      class: "pl-8"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ]),
                              createVNode(_component_TabsContent, {
                                value: "all",
                                class: "m-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_MailList, {
                                    "selected-mail": unref(selectedMail),
                                    "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                    items: unref(filteredMailList)
                                  }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TabsContent, {
                                value: "unread",
                                class: "m-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_MailList, {
                                    "selected-mail": unref(selectedMail),
                                    "onUpdate:selectedMail": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                                    items: unref(unreadMailList)
                                  }, null, 8, ["selected-mail", "onUpdate:selectedMail", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }))
                        ]),
                        _: 1
                      }, 8, ["default-size"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mail/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"]
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Alice Smith",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["work", "important"]
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    subject: "Weekend Plans",
    text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
    date: "2023-04-10T11:45:00",
    read: true,
    labels: ["personal"]
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    name: "Emily Davis",
    email: "emilydavis@example.com",
    subject: "Re: Question about Budget",
    text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    date: "2023-03-25T13:15:00",
    read: false,
    labels: ["work", "budget"]
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    name: "Michael Wilson",
    email: "michaelwilson@example.com",
    subject: "Important Announcement",
    text: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
    date: "2023-03-10T15:00:00",
    read: false,
    labels: ["meeting", "work", "important"]
  },
  {
    id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
    name: "Sarah Brown",
    email: "sarahbrown@example.com",
    subject: "Re: Feedback on Proposal",
    text: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI've attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Sarah",
    date: "2023-02-15T16:30:00",
    read: true,
    labels: ["work"]
  },
  {
    id: "17c0a96d-4415-42b1-8b4f-764efab57f66",
    name: "David Lee",
    email: "davidlee@example.com",
    subject: "New Project Idea",
    text: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.\n\nI've prepared a detailed proposal outlining the potential benefits and the strategy for execution.\n\nThis project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.\n\nBest regards, David",
    date: "2023-01-28T17:45:00",
    read: false,
    labels: ["meeting", "work", "important"]
  },
  {
    id: "2f0130cb-39fc-44c4-bb3c-0a4337edaaab",
    name: "Olivia Wilson",
    email: "oliviawilson@example.com",
    subject: "Vacation Plans",
    text: "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.\n\nI believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.\n\nWe can start making arrangements to ensure a smooth and enjoyable trip.\n\nExcited to hear your thoughts! Olivia",
    date: "2022-12-20T18:30:00",
    read: true,
    labels: ["personal"]
  },
  {
    id: "de305d54-75b4-431b-adb2-eb6b9e546014",
    name: "James Martin",
    email: "jamesmartin@example.com",
    subject: "Re: Conference Registration",
    text: "I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.\n\nI've also attached the conference schedule for your reference.\n\nIf there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.\n\nBest regards, James",
    date: "2022-11-30T19:15:00",
    read: true,
    labels: ["work", "conference"]
  },
  {
    id: "7dd90c63-00f6-40f3-bd87-5060a24e8ee7",
    name: "Sophia White",
    email: "sophiawhite@example.com",
    subject: "Team Dinner",
    text: "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.\n\nI've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.\n\nPlease confirm your availability and any dietary preferences. Looking forward to a fun and memorable dinner with the team!\n\nBest, Sophia",
    date: "2022-11-05T20:30:00",
    read: false,
    labels: ["meeting", "work"]
  },
  {
    id: "99a88f78-3eb4-4d87-87b7-7b15a49a0a05",
    name: "Daniel Johnson",
    email: "danieljohnson@example.com",
    subject: "Feedback Request",
    text: "I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.\n\nI've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.\n\nYour feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.\n\nRegards, Daniel",
    date: "2022-10-22T09:30:00",
    read: false,
    labels: ["work"]
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Ava Taylor",
    email: "avataylor@example.com",
    subject: "Re: Meeting Agenda",
    text: "Here's the agenda for our meeting next week. I've included all the topics we need to cover, as well as time allocations for each.\n\nIf you have any additional items to discuss or any specific points to address, please let me know, and we can integrate them into the agenda.\n\nIt's essential that our meeting is productive and addresses all relevant matters.\n\nLooking forward to our meeting! Ava",
    date: "2022-10-10T10:45:00",
    read: true,
    labels: ["meeting", "work"]
  },
  {
    id: "c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6",
    name: "William Anderson",
    email: "williamanderson@example.com",
    subject: "Product Launch Update",
    text: "The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.\n\nI'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.\n\nLet's make this product launch a resounding success!\n\nBest regards, William",
    date: "2022-09-20T12:00:00",
    read: false,
    labels: ["meeting", "work", "important"]
  },
  {
    id: "ba54eefd-4097-4949-99f2-2a9ae4d1a836",
    name: "Mia Harris",
    email: "miaharris@example.com",
    subject: "Re: Travel Itinerary",
    text: "I've received the travel itinerary. It looks great! Thank you for your prompt assistance in arranging the details. I've reviewed the schedule and the accommodations, and everything seems to be in order. I'm looking forward to the trip, and I'm confident it'll be a smooth and enjoyable experience.\n\nIf there are any specific activities or attractions you recommend at our destination, please feel free to share your suggestions.\n\nExcited for the trip! Mia",
    date: "2022-09-10T13:15:00",
    read: true,
    labels: ["personal", "travel"]
  },
  {
    id: "df09b6ed-28bd-4e0c-85a9-9320ec5179aa",
    name: "Ethan Clark",
    email: "ethanclark@example.com",
    subject: "Team Building Event",
    text: "Let's plan a team-building event for our department. Team cohesion and morale are vital to our success, and I believe a well-organized team-building event can be incredibly beneficial. I've done some research and have a few ideas for fun and engaging activities.\n\nPlease let me know your thoughts and availability. We want this event to be both enjoyable and productive.\n\nTogether, we'll strengthen our team and boost our performance.\n\nRegards, Ethan",
    date: "2022-08-25T15:30:00",
    read: false,
    labels: ["meeting", "work"]
  },
  {
    id: "d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",
    name: "Chloe Hall",
    email: "chloehall@example.com",
    subject: "Re: Budget Approval",
    text: "The budget has been approved. We can proceed with the project. I'm delighted to inform you that our budget proposal has received the green light from the finance department. This is a significant milestone, and it means we can move forward with the project as planned.\n\nI've attached the finalized budget for your reference. Let's ensure that we stay on track and deliver the project on time and within budget.\n\nIt's an exciting time for us! Chloe",
    date: "2022-08-10T16:45:00",
    read: true,
    labels: ["work", "budget"]
  },
  {
    id: "6c9a7f94-8329-4d70-95d3-51f68c186ae1",
    name: "Samuel Turner",
    email: "samuelturner@example.com",
    subject: "Weekend Hike",
    text: "Who's up for a weekend hike in the mountains? I've been craving some outdoor adventure, and a hike in the mountains sounds like the perfect escape. If you're up for the challenge, we can explore some scenic trails and enjoy the beauty of nature.\n\nI've done some research and have a few routes in mind.\n\nLet me know if you're interested, and we can plan the details.\n\nIt's sure to be a memorable experience! Samuel",
    date: "2022-07-28T17:30:00",
    read: false,
    labels: ["personal"]
  }
];
const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: "ion:logo-vercel"
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: "mdi:google"
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: "bx:bxl-gmail"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "email",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MailLayout = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "-m-4 lg:-m-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MailLayout, {
        accounts: unref(accounts),
        mails: unref(mails),
        "nav-collapsed-size": 4
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/email.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=email-DmSoP-c8.mjs.map
