import { defineComponent, mergeProps, unref, h, ref, withCtx, createBlock, createCommentVNode, openBlock, Fragment, renderList, createVNode, createTextVNode, computed, toDisplayString, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _sfc_main$a } from './index-C4udwYHm.mjs';
import { _ as _sfc_main$9 } from './Checkbox-DuA9XWkc.mjs';
import { v as valueUpdater, a as _sfc_main$2$1, _ as __nuxt_component_5, c as cn } from './server.mjs';
import { _ as _sfc_main$d, a as _sfc_main$e, b as _sfc_main$b$1, c as _sfc_main$9$2, d as _sfc_main$5$1, e as _sfc_main$3$2, f as _sfc_main$1$3, g as _sfc_main$2$2, h as _sfc_main$7$3, i as _sfc_main$6$2, j as _sfc_main$4$2, k as _sfc_main$8$2, l as _sfc_main$c$1 } from './DropdownMenuTrigger-7ca149wI.mjs';
import { z } from 'zod';
import { _ as _sfc_main$7$1, a as _sfc_main$8, b as _sfc_main$3$1, c as _sfc_main$1$1, d as _sfc_main$6$1, e as _sfc_main$4$1 } from './TableHeader-DPsbKB96.mjs';
import { useVueTable, getFacetedUniqueValues, getFacetedRowModel, getSortedRowModel, getPaginationRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$a$1, a as _sfc_main$1$2, b as _sfc_main$c, c as _sfc_main$9$1, d as _sfc_main$7$2 } from './SelectValue-B4V_V5Kg.mjs';
import { _ as _sfc_main$b } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$2$3, a as _sfc_main$f, b as _sfc_main$1$4 } from './PopoverTrigger-ldvWFHWS.mjs';
import { _ as _sfc_main$g } from './Separator-Bs1EkIKE.mjs';
import { _ as _sfc_main$8$1, a as _sfc_main$4$3, c as _sfc_main$2$4, b as _sfc_main$6$3, d as _sfc_main$5$2, e as _sfc_main$3$3, f as _sfc_main$1$5 } from './CommandShortcut-RFMOhYmh.mjs';
import 'class-variance-authority';
import 'radix-vue';
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
import 'lucide-vue-next';
import './DialogTrigger-BW6jyQ7n.mjs';

const labels = [
  {
    value: "bug",
    label: "Bug"
  },
  {
    value: "feature",
    label: "Feature"
  },
  {
    value: "documentation",
    label: "Documentation"
  }
];
const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: h(__nuxt_component_5, { name: "i-radix-icons-question-mark-circled" })
  },
  {
    value: "todo",
    label: "Todo",
    icon: h(__nuxt_component_5, { name: "i-radix-icons-circle" })
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: h(__nuxt_component_5, { name: "i-radix-icons-stopwatch" })
  },
  {
    value: "done",
    label: "Done",
    icon: h(__nuxt_component_5, { name: "i-radix-icons-check-circled" })
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: h(__nuxt_component_5, { name: "i-radix-icons-cross-circled" })
  }
];
const priorities = [
  {
    value: "low",
    label: "Low",
    icon: h(__nuxt_component_5, { name: "i-radix-icons-arrow-down" })
  },
  {
    value: "medium",
    label: "Medium",
    icon: h(__nuxt_component_5, { name: "i-radix-icons-arrow-right" })
  },
  {
    value: "high",
    label: "High",
    icon: h(__nuxt_component_5, { name: "i-radix-icons-arrow-up" })
  }
];
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "DataTableColumnHeader",
  __ssrInlineRender: true,
  props: {
    column: {},
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_DropdownMenu = _sfc_main$d;
      const _component_DropdownMenuTrigger = _sfc_main$e;
      const _component_Button = _sfc_main$2$1;
      const _component_Icon = __nuxt_component_5;
      const _component_DropdownMenuContent = _sfc_main$b$1;
      const _component_DropdownMenuItem = _sfc_main$9$2;
      const _component_DropdownMenuSeparator = _sfc_main$5$1;
      if (__props.column.getCanSort()) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: unref(cn)("flex items-center space-x-2", (_a = _ctx.$attrs.class) != null ? _a : "")
        }, _attrs))}>`);
        _push(ssrRenderComponent(_component_DropdownMenu, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, {
                      variant: "ghost",
                      size: "sm",
                      class: "h-8 -ml-3 data-[state=open]:bg-accent"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(__props.title)}</span>`);
                          if (__props.column.getIsSorted() === "desc") {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "i-radix-icons-arrow-down",
                              class: "ml-2 h-4 w-4"
                            }, null, _parent4, _scopeId3));
                          } else if (__props.column.getIsSorted() === "asc") {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "i-radix-icons-arrow-up",
                              class: "ml-2 h-4 w-4"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "i-radix-icons-caret-sort",
                              class: "ml-2 h-4 w-4"
                            }, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            createVNode("span", null, toDisplayString(__props.title), 1),
                            __props.column.getIsSorted() === "desc" ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: "i-radix-icons-arrow-down",
                              class: "ml-2 h-4 w-4"
                            })) : __props.column.getIsSorted() === "asc" ? (openBlock(), createBlock(_component_Icon, {
                              key: 1,
                              name: "i-radix-icons-arrow-up",
                              class: "ml-2 h-4 w-4"
                            })) : (openBlock(), createBlock(_component_Icon, {
                              key: 2,
                              name: "i-radix-icons-caret-sort",
                              class: "ml-2 h-4 w-4"
                            }))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Button, {
                        variant: "ghost",
                        size: "sm",
                        class: "h-8 -ml-3 data-[state=open]:bg-accent"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(__props.title), 1),
                          __props.column.getIsSorted() === "desc" ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "i-radix-icons-arrow-down",
                            class: "ml-2 h-4 w-4"
                          })) : __props.column.getIsSorted() === "asc" ? (openBlock(), createBlock(_component_Icon, {
                            key: 1,
                            name: "i-radix-icons-arrow-up",
                            class: "ml-2 h-4 w-4"
                          })) : (openBlock(), createBlock(_component_Icon, {
                            key: 2,
                            name: "i-radix-icons-caret-sort",
                            class: "ml-2 h-4 w-4"
                          }))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DropdownMenuContent, { align: "start" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                      onClick: ($event) => __props.column.toggleSorting(false)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-arrow-up",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }, null, _parent4, _scopeId3));
                          _push4(` Asc `);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-arrow-up",
                              class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            }),
                            createTextVNode(" Asc ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                      onClick: ($event) => __props.column.toggleSorting(true)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-arrow-down",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }, null, _parent4, _scopeId3));
                          _push4(` Desc `);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-arrow-down",
                              class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            }),
                            createTextVNode(" Desc ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                      onClick: ($event) => __props.column.toggleVisibility(false)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-eye-none",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }, null, _parent4, _scopeId3));
                          _push4(` Hide `);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-eye-none",
                              class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            }),
                            createTextVNode(" Hide ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DropdownMenuItem, {
                        onClick: ($event) => __props.column.toggleSorting(false)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-arrow-up",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }),
                          createTextVNode(" Asc ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_DropdownMenuItem, {
                        onClick: ($event) => __props.column.toggleSorting(true)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-arrow-down",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }),
                          createTextVNode(" Desc ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_DropdownMenuSeparator),
                      createVNode(_component_DropdownMenuItem, {
                        onClick: ($event) => __props.column.toggleVisibility(false)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-eye-none",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }),
                          createTextVNode(" Hide ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
                      size: "sm",
                      class: "h-8 -ml-3 data-[state=open]:bg-accent"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(__props.title), 1),
                        __props.column.getIsSorted() === "desc" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "i-radix-icons-arrow-down",
                          class: "ml-2 h-4 w-4"
                        })) : __props.column.getIsSorted() === "asc" ? (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "i-radix-icons-arrow-up",
                          class: "ml-2 h-4 w-4"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 2,
                          name: "i-radix-icons-caret-sort",
                          class: "ml-2 h-4 w-4"
                        }))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_DropdownMenuContent, { align: "start" }, {
                  default: withCtx(() => [
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => __props.column.toggleSorting(false)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-arrow-up",
                          class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                        }),
                        createTextVNode(" Asc ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => __props.column.toggleSorting(true)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-arrow-down",
                          class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                        }),
                        createTextVNode(" Desc ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuSeparator),
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => __props.column.toggleVisibility(false)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-eye-none",
                          class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                        }),
                        createTextVNode(" Hide ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: _ctx.$attrs.class
        }, _attrs))}>${ssrInterpolate(__props.title)}</div>`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tasks/components/DataTableColumnHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string()
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DataTableRowActions",
  __ssrInlineRender: true,
  props: {
    row: {}
  },
  setup(__props) {
    const props = __props;
    const task = computed(() => taskSchema.parse(props.row.original));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMenu = _sfc_main$d;
      const _component_DropdownMenuTrigger = _sfc_main$e;
      const _component_Button = _sfc_main$2$1;
      const _component_Icon = __nuxt_component_5;
      const _component_DropdownMenuContent = _sfc_main$b$1;
      const _component_DropdownMenuItem = _sfc_main$9$2;
      const _component_DropdownMenuSeparator = _sfc_main$5$1;
      const _component_DropdownMenuSub = _sfc_main$3$2;
      const _component_DropdownMenuSubTrigger = _sfc_main$1$3;
      const _component_DropdownMenuSubContent = _sfc_main$2$2;
      const _component_DropdownMenuRadioGroup = _sfc_main$7$3;
      const _component_DropdownMenuRadioItem = _sfc_main$6$2;
      const _component_DropdownMenuShortcut = _sfc_main$4$2;
      _push(ssrRenderComponent(_component_DropdownMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    class: "h-8 w-8 flex p-0 data-[state=open]:bg-muted"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "i-radix-icons-dots-horizontal",
                          class: "h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Open menu</span>`);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-dots-horizontal",
                            class: "h-4 w-4"
                          }),
                          createVNode("span", { class: "sr-only" }, "Open menu")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      class: "h-8 w-8 flex p-0 data-[state=open]:bg-muted"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-dots-horizontal",
                          class: "h-4 w-4"
                        }),
                        createVNode("span", { class: "sr-only" }, "Open menu")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, {
              align: "end",
              class: "w-[160px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Edit`);
                      } else {
                        return [
                          createTextVNode("Edit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Make a copy`);
                      } else {
                        return [
                          createTextVNode("Make a copy")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Favorite`);
                      } else {
                        return [
                          createTextVNode("Favorite")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSub, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DropdownMenuSubTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Labels`);
                            } else {
                              return [
                                createTextVNode("Labels")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DropdownMenuSubContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DropdownMenuRadioGroup, {
                                value: task.value.label
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(labels), (label) => {
                                      _push6(ssrRenderComponent(_component_DropdownMenuRadioItem, {
                                        key: label.value,
                                        value: label.value
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(label.label)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(label.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                        return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                          key: label.value,
                                          value: label.value
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(label.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DropdownMenuRadioGroup, {
                                  value: task.value.label
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                      return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                        key: label.value,
                                        value: label.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(label.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DropdownMenuSubTrigger, null, {
                            default: withCtx(() => [
                              createTextVNode("Labels")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenuSubContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuRadioGroup, {
                                value: task.value.label
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                    return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                      key: label.value,
                                      value: label.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(label.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete `);
                        _push4(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u2318\u232B`);
                            } else {
                              return [
                                createTextVNode("\u2318\u232B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Delete "),
                          createVNode(_component_DropdownMenuShortcut, null, {
                            default: withCtx(() => [
                              createTextVNode("\u2318\u232B")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("Edit")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("Make a copy")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("Favorite")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuSeparator),
                    createVNode(_component_DropdownMenuSub, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownMenuSubTrigger, null, {
                          default: withCtx(() => [
                            createTextVNode("Labels")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenuSubContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownMenuRadioGroup, {
                              value: task.value.label
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                  return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                    key: label.value,
                                    value: label.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(label.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuSeparator),
                    createVNode(_component_DropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode(" Delete "),
                        createVNode(_component_DropdownMenuShortcut, null, {
                          default: withCtx(() => [
                            createTextVNode("\u2318\u232B")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    class: "h-8 w-8 flex p-0 data-[state=open]:bg-muted"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-dots-horizontal",
                        class: "h-4 w-4"
                      }),
                      createVNode("span", { class: "sr-only" }, "Open menu")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, {
                align: "end",
                class: "w-[160px]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("Edit")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("Make a copy")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode("Favorite")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuSeparator),
                  createVNode(_component_DropdownMenuSub, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownMenuSubTrigger, null, {
                        default: withCtx(() => [
                          createTextVNode("Labels")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenuSubContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownMenuRadioGroup, {
                            value: task.value.label
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(labels), (label) => {
                                return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                  key: label.value,
                                  value: label.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(label.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuSeparator),
                  createVNode(_component_DropdownMenuItem, null, {
                    default: withCtx(() => [
                      createTextVNode(" Delete "),
                      createVNode(_component_DropdownMenuShortcut, null, {
                        default: withCtx(() => [
                          createTextVNode("\u2318\u232B")
                        ]),
                        _: 1
                      })
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tasks/components/DataTableRowActions.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const columns = [
  {
    id: "select",
    header: ({ table }) => h(_sfc_main$9, {
      "checked": table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
      "onUpdate:checked": (value) => table.toggleAllPageRowsSelected(!!value),
      "ariaLabel": "Select all",
      "class": "translate-y-0.5"
    }),
    cell: ({ row }) => h(_sfc_main$9, { "checked": row.getIsSelected(), "onUpdate:checked": (value) => row.toggleSelected(!!value), "ariaLabel": "Select row", "class": "translate-y-0.5" }),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "id",
    header: ({ column }) => h(_sfc_main$7, { column, title: "Task" }),
    cell: ({ row }) => h("div", { class: "w-20" }, row.getValue("id")),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "title",
    header: ({ column }) => h(_sfc_main$7, { column, title: "Title" }),
    cell: ({ row }) => {
      const label = labels.find((label2) => label2.value === row.original.label);
      return h("div", { class: "flex space-x-2" }, [
        label ? h(_sfc_main$a, { variant: "outline" }, () => label.label) : null,
        h("span", { class: "max-w-[500px] truncate font-medium" }, row.getValue("title"))
      ]);
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => h(_sfc_main$7, { column, title: "Status" }),
    cell: ({ row }) => {
      const status = statuses.find(
        (status2) => status2.value === row.getValue("status")
      );
      if (!status)
        return null;
      return h("div", { class: "flex w-[100px] items-center" }, [
        status.icon && h(status.icon, { class: "mr-2 h-4 w-4 text-muted-foreground" }),
        h("span", status.label)
      ]);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: "priority",
    header: ({ column }) => h(_sfc_main$7, { column, title: "Priority" }),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority2) => priority2.value === row.getValue("priority")
      );
      if (!priority)
        return null;
      return h("div", { class: "flex items-center" }, [
        priority.icon && h(priority.icon, { class: "mr-2 h-4 w-4 text-muted-foreground" }),
        h("span", {}, priority.label)
      ]);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    id: "actions",
    cell: ({ row }) => h(_sfc_main$6, { row })
  }
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DataTablePagination",
  __ssrInlineRender: true,
  props: {
    table: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Select = _sfc_main$a$1;
      const _component_SelectTrigger = _sfc_main$1$2;
      const _component_SelectValue = _sfc_main$c;
      const _component_SelectContent = _sfc_main$9$1;
      const _component_SelectItem = _sfc_main$7$2;
      const _component_Button = _sfc_main$2$1;
      const _component_Icon = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between px-2" }, _attrs))}><div class="flex-1 text-sm text-muted-foreground">${ssrInterpolate(__props.table.getFilteredSelectedRowModel().rows.length)} of ${ssrInterpolate(__props.table.getFilteredRowModel().rows.length)} row(s) selected. </div><div class="flex items-center space-x-6 lg:space-x-8"><div class="flex items-center space-x-2"><p class="text-sm font-medium"> Rows per page </p>`);
      _push(ssrRenderComponent(_component_Select, {
        "model-value": `${__props.table.getState().pagination.pageSize}`,
        "onUpdate:modelValue": __props.table.setPageSize
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, { class: "h-8 w-[70px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, {
                    placeholder: `${__props.table.getState().pagination.pageSize}`
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, {
                      placeholder: `${__props.table.getState().pagination.pageSize}`
                    }, null, 8, ["placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, { side: "top" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList([10, 20, 30, 40, 50], (pageSize) => {
                    _push3(ssrRenderComponent(_component_SelectItem, {
                      key: pageSize,
                      value: `${pageSize}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(pageSize)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(pageSize), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList([10, 20, 30, 40, 50], (pageSize) => {
                      return createVNode(_component_SelectItem, {
                        key: pageSize,
                        value: `${pageSize}`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(pageSize), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SelectTrigger, { class: "h-8 w-[70px]" }, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, {
                    placeholder: `${__props.table.getState().pagination.pageSize}`
                  }, null, 8, ["placeholder"])
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, { side: "top" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList([10, 20, 30, 40, 50], (pageSize) => {
                    return createVNode(_component_SelectItem, {
                      key: pageSize,
                      value: `${pageSize}`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(pageSize), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-[100px] flex items-center justify-center text-sm font-medium"> Page ${ssrInterpolate(__props.table.getState().pagination.pageIndex + 1)} of ${ssrInterpolate(__props.table.getPageCount())}</div><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "hidden h-8 w-8 p-0 lg:flex",
        disabled: !__props.table.getCanPreviousPage(),
        onClick: ($event) => __props.table.setPageIndex(0)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Go to first page</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-double-arrow-left",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Go to first page"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-double-arrow-left",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "h-8 w-8 p-0",
        disabled: !__props.table.getCanPreviousPage(),
        onClick: ($event) => __props.table.previousPage()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Go to previous page</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-chevron-left",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Go to previous page"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-chevron-left",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "h-8 w-8 p-0",
        disabled: !__props.table.getCanNextPage(),
        onClick: ($event) => __props.table.nextPage()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Go to next page</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-chevron-right",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Go to next page"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-chevron-right",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "hidden h-8 w-8 p-0 lg:flex",
        disabled: !__props.table.getCanNextPage(),
        onClick: ($event) => __props.table.setPageIndex(__props.table.getPageCount() - 1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Go to last page</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-double-arrow-right",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Go to last page"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-double-arrow-right",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tasks/components/DataTablePagination.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DataTableFacetedFilter",
  __ssrInlineRender: true,
  props: {
    column: {},
    title: {},
    options: {}
  },
  setup(__props) {
    const props = __props;
    const facets = computed(() => {
      var _a;
      return (_a = props.column) == null ? void 0 : _a.getFacetedUniqueValues();
    });
    const selectedValues = computed(() => {
      var _a;
      return new Set((_a = props.column) == null ? void 0 : _a.getFilterValue());
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popover = _sfc_main$2$3;
      const _component_PopoverTrigger = _sfc_main$f;
      const _component_Button = _sfc_main$2$1;
      const _component_Icon = __nuxt_component_5;
      const _component_Separator = _sfc_main$g;
      const _component_Badge = _sfc_main$a;
      const _component_PopoverContent = _sfc_main$1$4;
      const _component_Command = _sfc_main$8$1;
      const _component_CommandInput = _sfc_main$4$3;
      const _component_CommandList = _sfc_main$2$4;
      const _component_CommandEmpty = _sfc_main$6$3;
      const _component_CommandGroup = _sfc_main$5$2;
      const _component_CommandItem = _sfc_main$3$3;
      const _component_CommandSeparator = _sfc_main$1$5;
      _push(ssrRenderComponent(_component_Popover, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 border-dashed"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "i-radix-icons-plus-circled",
                          class: "mr-2 h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(__props.title)} `);
                        if (selectedValues.value.size > 0) {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(_component_Separator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_Badge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(selectedValues.value.size)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(selectedValues.value.size), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="hidden lg:flex space-x-1"${_scopeId3}>`);
                          if (selectedValues.value.size > 2) {
                            _push4(ssrRenderComponent(_component_Badge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(selectedValues.value.size)} selected `);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(selectedValues.value.size) + " selected ", 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!--[-->`);
                            ssrRenderList(__props.options.filter((option) => selectedValues.value.has(option.value)), (item) => {
                              _push4(ssrRenderComponent(_component_Badge, {
                                key: item.value,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(item.label)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          }
                          _push4(`</div><!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-plus-circled",
                            class: "mr-2 h-4 w-4"
                          }),
                          createTextVNode(" " + toDisplayString(__props.title) + " ", 1),
                          selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_Separator, {
                              orientation: "vertical",
                              class: "mx-2 h-4"
                            }),
                            createVNode(_component_Badge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal lg:hidden"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedValues.value.size), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "hidden lg:flex space-x-1" }, [
                              selectedValues.value.size > 2 ? (openBlock(), createBlock(_component_Badge, {
                                key: 0,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedValues.value.size) + " selected ", 1)
                                ]),
                                _: 1
                              })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(__props.options.filter((option) => selectedValues.value.has(option.value)), (item) => {
                                return openBlock(), createBlock(_component_Badge, {
                                  key: item.value,
                                  variant: "secondary",
                                  class: "rounded-sm px-1 font-normal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 border-dashed"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-plus-circled",
                          class: "mr-2 h-4 w-4"
                        }),
                        createTextVNode(" " + toDisplayString(__props.title) + " ", 1),
                        selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(_component_Separator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }),
                          createVNode(_component_Badge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedValues.value.size), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "hidden lg:flex space-x-1" }, [
                            selectedValues.value.size > 2 ? (openBlock(), createBlock(_component_Badge, {
                              key: 0,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedValues.value.size) + " selected ", 1)
                              ]),
                              _: 1
                            })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(__props.options.filter((option) => selectedValues.value.has(option.value)), (item) => {
                              return openBlock(), createBlock(_component_Badge, {
                                key: item.value,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PopoverContent, {
              class: "w-[200px] p-0",
              align: "start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Command, {
                    "filter-function": (list, term) => list.filter((i) => {
                      var _a;
                      return (_a = i.label.toLowerCase()) == null ? void 0 : _a.includes(term);
                    })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CommandInput, { placeholder: __props.title }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CommandEmpty, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`No results found.`);
                                  } else {
                                    return [
                                      createTextVNode("No results found.")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_CommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.options, (option) => {
                                      _push6(ssrRenderComponent(_component_CommandItem, {
                                        key: option.value,
                                        value: option,
                                        onSelect: (e) => {
                                          var _a;
                                          console.log(e.detail.value);
                                          const isSelected = selectedValues.value.has(option.value);
                                          if (isSelected) {
                                            selectedValues.value.delete(option.value);
                                          } else {
                                            selectedValues.value.add(option.value);
                                          }
                                          const filterValues = Array.from(selectedValues.value);
                                          (_a = __props.column) == null ? void 0 : _a.setFilterValue(
                                            filterValues.length ? filterValues : void 0
                                          );
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          var _a, _b;
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass(unref(cn)(
                                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                              selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                            ))}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "i-radix-icons-check",
                                              class: unref(cn)("h-4 w-4")
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                            if (option.icon) {
                                              ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(option.icon), { class: "mr-2 h-4 w-4 text-muted-foreground" }, null), _parent7, _scopeId6);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(option.label)}</span>`);
                                            if ((_a = facets.value) == null ? void 0 : _a.get(option.value)) {
                                              _push7(`<span class="ml-auto h-4 w-4 flex items-center justify-center text-xs font-mono"${_scopeId6}>${ssrInterpolate(facets.value.get(option.value))}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: unref(cn)(
                                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                  selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                                )
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "i-radix-icons-check",
                                                  class: unref(cn)("h-4 w-4")
                                                }, null, 8, ["class"])
                                              ], 2),
                                              option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                                key: 0,
                                                class: "mr-2 h-4 w-4 text-muted-foreground"
                                              })) : createCommentVNode("", true),
                                              createVNode("span", null, toDisplayString(option.label), 1),
                                              ((_b = facets.value) == null ? void 0 : _b.get(option.value)) ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "ml-auto h-4 w-4 flex items-center justify-center text-xs font-mono"
                                              }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                                        return openBlock(), createBlock(_component_CommandItem, {
                                          key: option.value,
                                          value: option,
                                          onSelect: (e) => {
                                            var _a;
                                            console.log(e.detail.value);
                                            const isSelected = selectedValues.value.has(option.value);
                                            if (isSelected) {
                                              selectedValues.value.delete(option.value);
                                            } else {
                                              selectedValues.value.add(option.value);
                                            }
                                            const filterValues = Array.from(selectedValues.value);
                                            (_a = __props.column) == null ? void 0 : _a.setFilterValue(
                                              filterValues.length ? filterValues : void 0
                                            );
                                          }
                                        }, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createVNode("div", {
                                                class: unref(cn)(
                                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                  selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                                )
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "i-radix-icons-check",
                                                  class: unref(cn)("h-4 w-4")
                                                }, null, 8, ["class"])
                                              ], 2),
                                              option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                                key: 0,
                                                class: "mr-2 h-4 w-4 text-muted-foreground"
                                              })) : createCommentVNode("", true),
                                              createVNode("span", null, toDisplayString(option.label), 1),
                                              ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "ml-auto h-4 w-4 flex items-center justify-center text-xs font-mono"
                                              }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                            ];
                                          }),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (selectedValues.value.size > 0) {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(_component_CommandSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_CommandGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_CommandItem, {
                                        value: { label: "Clear filters" },
                                        class: "justify-center text-center",
                                        onSelect: ($event) => {
                                          var _a;
                                          return (_a = __props.column) == null ? void 0 : _a.setFilterValue(void 0);
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Clear filters `);
                                          } else {
                                            return [
                                              createTextVNode(" Clear filters ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_CommandItem, {
                                          value: { label: "Clear filters" },
                                          class: "justify-center text-center",
                                          onSelect: ($event) => {
                                            var _a;
                                            return (_a = __props.column) == null ? void 0 : _a.setFilterValue(void 0);
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Clear filters ")
                                          ]),
                                          _: 1
                                        }, 8, ["onSelect"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode(_component_CommandEmpty, null, {
                                  default: withCtx(() => [
                                    createTextVNode("No results found.")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_CommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                                      return openBlock(), createBlock(_component_CommandItem, {
                                        key: option.value,
                                        value: option,
                                        onSelect: (e) => {
                                          var _a;
                                          console.log(e.detail.value);
                                          const isSelected = selectedValues.value.has(option.value);
                                          if (isSelected) {
                                            selectedValues.value.delete(option.value);
                                          } else {
                                            selectedValues.value.add(option.value);
                                          }
                                          const filterValues = Array.from(selectedValues.value);
                                          (_a = __props.column) == null ? void 0 : _a.setFilterValue(
                                            filterValues.length ? filterValues : void 0
                                          );
                                        }
                                      }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createVNode("div", {
                                              class: unref(cn)(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                              )
                                            }, [
                                              createVNode(_component_Icon, {
                                                name: "i-radix-icons-check",
                                                class: unref(cn)("h-4 w-4")
                                              }, null, 8, ["class"])
                                            ], 2),
                                            option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                              key: 0,
                                              class: "mr-2 h-4 w-4 text-muted-foreground"
                                            })) : createCommentVNode("", true),
                                            createVNode("span", null, toDisplayString(option.label), 1),
                                            ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "ml-auto h-4 w-4 flex items-center justify-center text-xs font-mono"
                                            }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(_component_CommandSeparator),
                                  createVNode(_component_CommandGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CommandItem, {
                                        value: { label: "Clear filters" },
                                        class: "justify-center text-center",
                                        onSelect: ($event) => {
                                          var _a;
                                          return (_a = __props.column) == null ? void 0 : _a.setFilterValue(void 0);
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Clear filters ")
                                        ]),
                                        _: 1
                                      }, 8, ["onSelect"])
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CommandInput, { placeholder: __props.title }, null, 8, ["placeholder"]),
                          createVNode(_component_CommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_CommandEmpty, null, {
                                default: withCtx(() => [
                                  createTextVNode("No results found.")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_CommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                                    return openBlock(), createBlock(_component_CommandItem, {
                                      key: option.value,
                                      value: option,
                                      onSelect: (e) => {
                                        var _a;
                                        console.log(e.detail.value);
                                        const isSelected = selectedValues.value.has(option.value);
                                        if (isSelected) {
                                          selectedValues.value.delete(option.value);
                                        } else {
                                          selectedValues.value.add(option.value);
                                        }
                                        const filterValues = Array.from(selectedValues.value);
                                        (_a = __props.column) == null ? void 0 : _a.setFilterValue(
                                          filterValues.length ? filterValues : void 0
                                        );
                                      }
                                    }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createVNode("div", {
                                            class: unref(cn)(
                                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                              selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                            )
                                          }, [
                                            createVNode(_component_Icon, {
                                              name: "i-radix-icons-check",
                                              class: unref(cn)("h-4 w-4")
                                            }, null, 8, ["class"])
                                          ], 2),
                                          option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                            key: 0,
                                            class: "mr-2 h-4 w-4 text-muted-foreground"
                                          })) : createCommentVNode("", true),
                                          createVNode("span", null, toDisplayString(option.label), 1),
                                          ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "ml-auto h-4 w-4 flex items-center justify-center text-xs font-mono"
                                          }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                        ];
                                      }),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode(_component_CommandSeparator),
                                createVNode(_component_CommandGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_CommandItem, {
                                      value: { label: "Clear filters" },
                                      class: "justify-center text-center",
                                      onSelect: ($event) => {
                                        var _a;
                                        return (_a = __props.column) == null ? void 0 : _a.setFilterValue(void 0);
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Clear filters ")
                                      ]),
                                      _: 1
                                    }, 8, ["onSelect"])
                                  ]),
                                  _: 1
                                })
                              ], 64)) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Command, {
                      "filter-function": (list, term) => list.filter((i) => {
                        var _a;
                        return (_a = i.label.toLowerCase()) == null ? void 0 : _a.includes(term);
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_CommandInput, { placeholder: __props.title }, null, 8, ["placeholder"]),
                        createVNode(_component_CommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_CommandEmpty, null, {
                              default: withCtx(() => [
                                createTextVNode("No results found.")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_CommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                                  return openBlock(), createBlock(_component_CommandItem, {
                                    key: option.value,
                                    value: option,
                                    onSelect: (e) => {
                                      var _a;
                                      console.log(e.detail.value);
                                      const isSelected = selectedValues.value.has(option.value);
                                      if (isSelected) {
                                        selectedValues.value.delete(option.value);
                                      } else {
                                        selectedValues.value.add(option.value);
                                      }
                                      const filterValues = Array.from(selectedValues.value);
                                      (_a = __props.column) == null ? void 0 : _a.setFilterValue(
                                        filterValues.length ? filterValues : void 0
                                      );
                                    }
                                  }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createVNode("div", {
                                          class: unref(cn)(
                                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                            selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                          )
                                        }, [
                                          createVNode(_component_Icon, {
                                            name: "i-radix-icons-check",
                                            class: unref(cn)("h-4 w-4")
                                          }, null, 8, ["class"])
                                        ], 2),
                                        option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                          key: 0,
                                          class: "mr-2 h-4 w-4 text-muted-foreground"
                                        })) : createCommentVNode("", true),
                                        createVNode("span", null, toDisplayString(option.label), 1),
                                        ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "ml-auto h-4 w-4 flex items-center justify-center text-xs font-mono"
                                        }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(_component_CommandSeparator),
                              createVNode(_component_CommandGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_CommandItem, {
                                    value: { label: "Clear filters" },
                                    class: "justify-center text-center",
                                    onSelect: ($event) => {
                                      var _a;
                                      return (_a = __props.column) == null ? void 0 : _a.setFilterValue(void 0);
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Clear filters ")
                                    ]),
                                    _: 1
                                  }, 8, ["onSelect"])
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["filter-function"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 border-dashed"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-plus-circled",
                        class: "mr-2 h-4 w-4"
                      }),
                      createTextVNode(" " + toDisplayString(__props.title) + " ", 1),
                      selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_Separator, {
                          orientation: "vertical",
                          class: "mx-2 h-4"
                        }),
                        createVNode(_component_Badge, {
                          variant: "secondary",
                          class: "rounded-sm px-1 font-normal lg:hidden"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(selectedValues.value.size), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "hidden lg:flex space-x-1" }, [
                          selectedValues.value.size > 2 ? (openBlock(), createBlock(_component_Badge, {
                            key: 0,
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedValues.value.size) + " selected ", 1)
                            ]),
                            _: 1
                          })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(__props.options.filter((option) => selectedValues.value.has(option.value)), (item) => {
                            return openBlock(), createBlock(_component_Badge, {
                              key: item.value,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PopoverContent, {
                class: "w-[200px] p-0",
                align: "start"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Command, {
                    "filter-function": (list, term) => list.filter((i) => {
                      var _a;
                      return (_a = i.label.toLowerCase()) == null ? void 0 : _a.includes(term);
                    })
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CommandInput, { placeholder: __props.title }, null, 8, ["placeholder"]),
                      createVNode(_component_CommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_CommandEmpty, null, {
                            default: withCtx(() => [
                              createTextVNode("No results found.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                                return openBlock(), createBlock(_component_CommandItem, {
                                  key: option.value,
                                  value: option,
                                  onSelect: (e) => {
                                    var _a;
                                    console.log(e.detail.value);
                                    const isSelected = selectedValues.value.has(option.value);
                                    if (isSelected) {
                                      selectedValues.value.delete(option.value);
                                    } else {
                                      selectedValues.value.add(option.value);
                                    }
                                    const filterValues = Array.from(selectedValues.value);
                                    (_a = __props.column) == null ? void 0 : _a.setFilterValue(
                                      filterValues.length ? filterValues : void 0
                                    );
                                  }
                                }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createVNode("div", {
                                        class: unref(cn)(
                                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                          selectedValues.value.has(option.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                        )
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "i-radix-icons-check",
                                          class: unref(cn)("h-4 w-4")
                                        }, null, 8, ["class"])
                                      ], 2),
                                      option.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.icon), {
                                        key: 0,
                                        class: "mr-2 h-4 w-4 text-muted-foreground"
                                      })) : createCommentVNode("", true),
                                      createVNode("span", null, toDisplayString(option.label), 1),
                                      ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "ml-auto h-4 w-4 flex items-center justify-center text-xs font-mono"
                                      }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_CommandSeparator),
                            createVNode(_component_CommandGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_CommandItem, {
                                  value: { label: "Clear filters" },
                                  class: "justify-center text-center",
                                  onSelect: ($event) => {
                                    var _a;
                                    return (_a = __props.column) == null ? void 0 : _a.setFilterValue(void 0);
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Clear filters ")
                                  ]),
                                  _: 1
                                }, 8, ["onSelect"])
                              ]),
                              _: 1
                            })
                          ], 64)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["filter-function"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tasks/components/DataTableFacetedFilter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DataTableViewOptions",
  __ssrInlineRender: true,
  props: {
    table: {}
  },
  setup(__props) {
    const props = __props;
    const columns2 = computed(() => props.table.getAllColumns().filter(
      (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
    ));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMenu = _sfc_main$d;
      const _component_DropdownMenuTrigger = _sfc_main$e;
      const _component_Button = _sfc_main$2$1;
      const _component_Icon = __nuxt_component_5;
      const _component_DropdownMenuContent = _sfc_main$b$1;
      const _component_DropdownMenuLabel = _sfc_main$8$2;
      const _component_DropdownMenuSeparator = _sfc_main$5$1;
      const _component_DropdownMenuCheckboxItem = _sfc_main$c$1;
      _push(ssrRenderComponent(_component_DropdownMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    class: "ml-auto hidden h-8 lg:flex"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "i-radix-icons-mixer-horizontal",
                          class: "mr-2 h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(` View `);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-mixer-horizontal",
                            class: "mr-2 h-4 w-4"
                          }),
                          createTextVNode(" View ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "outline",
                      size: "sm",
                      class: "ml-auto hidden h-8 lg:flex"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-mixer-horizontal",
                          class: "mr-2 h-4 w-4"
                        }),
                        createTextVNode(" View ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, {
              align: "end",
              class: "w-[150px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Toggle columns`);
                      } else {
                        return [
                          createTextVNode("Toggle columns")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(columns2.value, (column) => {
                    _push3(ssrRenderComponent(_component_DropdownMenuCheckboxItem, {
                      key: column.id,
                      class: "capitalize",
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(column.id)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(column.id), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_DropdownMenuLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Toggle columns")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuSeparator),
                    (openBlock(true), createBlock(Fragment, null, renderList(columns2.value, (column) => {
                      return openBlock(), createBlock(_component_DropdownMenuCheckboxItem, {
                        key: column.id,
                        class: "capitalize",
                        checked: column.getIsVisible(),
                        "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(column.id), 1)
                        ]),
                        _: 2
                      }, 1032, ["checked", "onUpdate:checked"]);
                    }), 128))
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
                    variant: "outline",
                    size: "sm",
                    class: "ml-auto hidden h-8 lg:flex"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-mixer-horizontal",
                        class: "mr-2 h-4 w-4"
                      }),
                      createTextVNode(" View ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, {
                align: "end",
                class: "w-[150px]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Toggle columns")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuSeparator),
                  (openBlock(true), createBlock(Fragment, null, renderList(columns2.value, (column) => {
                    return openBlock(), createBlock(_component_DropdownMenuCheckboxItem, {
                      key: column.id,
                      class: "capitalize",
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(column.id), 1)
                      ]),
                      _: 2
                    }, 1032, ["checked", "onUpdate:checked"]);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tasks/components/DataTableViewOptions.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {}
  },
  setup(__props) {
    const props = __props;
    const isFiltered = computed(() => props.table.getState().columnFilters.length > 0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_Input = _sfc_main$b;
      const _component_Button = _sfc_main$2$1;
      const _component_Icon = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Input, {
        placeholder: "Filter tasks...",
        "model-value": (_a2 = (_a = __props.table.getColumn("title")) == null ? void 0 : _a.getFilterValue()) != null ? _a2 : "",
        class: "h-8 w-[150px] lg:w-[250px]",
        onInput: ($event) => {
          var _a22;
          return (_a22 = __props.table.getColumn("title")) == null ? void 0 : _a22.setFilterValue($event.target.value);
        }
      }, null, _parent));
      if (__props.table.getColumn("status")) {
        _push(ssrRenderComponent(_sfc_main$4, {
          column: __props.table.getColumn("status"),
          title: "Status",
          options: unref(statuses)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.table.getColumn("priority")) {
        _push(ssrRenderComponent(_sfc_main$4, {
          column: __props.table.getColumn("priority"),
          title: "Priority",
          options: unref(priorities)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isFiltered.value) {
        _push(ssrRenderComponent(_component_Button, {
          variant: "ghost",
          class: "h-8 px-2 lg:px-3",
          onClick: ($event) => __props.table.resetColumnFilters()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Reset `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "i-radix-icons-cross-2",
                class: "ml-2 h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" Reset "),
                createVNode(_component_Icon, {
                  name: "i-radix-icons-cross-2",
                  class: "ml-2 h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, { table: __props.table }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tasks/components/DataTableToolbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const rowSelection = ref({});
    const table = useVueTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        },
        get rowSelection() {
          return rowSelection.value;
        }
      },
      enableRowSelection: true,
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues()
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = _sfc_main$7$1;
      const _component_TableHeader = _sfc_main$8;
      const _component_TableRow = _sfc_main$3$1;
      const _component_TableHead = _sfc_main$1$1;
      const _component_TableBody = _sfc_main$6$1;
      const _component_TableCell = _sfc_main$4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, { table: unref(table) }, null, _parent));
      _push(`<div class="border rounded-md">`);
      _push(ssrRenderComponent(_component_Table, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    _push3(ssrRenderComponent(_component_TableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(headerGroup.headers, (header) => {
                            _push4(ssrRenderComponent(_component_TableHead, {
                              key: header.id
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (!header.isPlaceholder) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                } else {
                                  return [
                                    !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                      key: 0,
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                              return openBlock(), createBlock(_component_TableHead, {
                                key: header.id
                              }, {
                                default: withCtx(() => [
                                  !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                    key: 0,
                                    render: header.column.columnDef.header,
                                    props: header.getContext()
                                  }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: headerGroup.id
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                            return openBlock(), createBlock(_component_TableHead, {
                              key: header.id
                            }, {
                              default: withCtx(() => [
                                !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                  key: 0,
                                  render: header.column.columnDef.header,
                                  props: header.getContext()
                                }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(table).getRowModel().rows, (row) => {
                      _push3(ssrRenderComponent(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() && "selected"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(row.getVisibleCells(), (cell) => {
                              _push4(ssrRenderComponent(_component_TableCell, {
                                key: cell.id
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(FlexRender), {
                                        render: cell.column.columnDef.cell,
                                        props: cell.getContext()
                                      }, null, 8, ["render", "props"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                return openBlock(), createBlock(_component_TableCell, {
                                  key: cell.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, 8, ["render", "props"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colspan: __props.columns.length,
                            class: "h-24 text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` No results. `);
                              } else {
                                return [
                                  createTextVNode(" No results. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, {
                              colspan: __props.columns.length,
                              class: "h-24 text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" No results. ")
                              ]),
                              _: 1
                            }, 8, ["colspan"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    ((_b = unref(table).getRowModel().rows) == null ? void 0 : _b.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() && "selected"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(_component_TableCell, {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state"]);
                    }), 128)) : (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colspan: __props.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" No results. ")
                          ]),
                          _: 1
                        }, 8, ["colspan"])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableHeader, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    return openBlock(), createBlock(_component_TableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                          return openBlock(), createBlock(_component_TableHead, {
                            key: header.id
                          }, {
                            default: withCtx(() => [
                              !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                key: 0,
                                render: header.column.columnDef.header,
                                props: header.getContext()
                              }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() && "selected"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(_component_TableCell, {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state"]);
                    }), 128)) : (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colspan: __props.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" No results. ")
                          ]),
                          _: 1
                        }, 8, ["colspan"])
                      ]),
                      _: 1
                    }))
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$5, { table: unref(table) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tasks/components/DataTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const data = /* @__PURE__ */ JSON.parse(`[{"id":"TASK-8782","title":"You can't compress the program without quantifying the open-source SSD pixel!","status":"in progress","label":"documentation","priority":"medium"},{"id":"TASK-7878","title":"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!","status":"backlog","label":"documentation","priority":"medium"},{"id":"TASK-7839","title":"We need to bypass the neural TCP card!","status":"todo","label":"bug","priority":"high"},{"id":"TASK-5562","title":"The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!","status":"backlog","label":"feature","priority":"medium"},{"id":"TASK-8686","title":"I'll parse the wireless SSL protocol, that should driver the API panel!","status":"canceled","label":"feature","priority":"medium"},{"id":"TASK-1280","title":"Use the digital TLS panel, then you can transmit the haptic system!","status":"done","label":"bug","priority":"high"},{"id":"TASK-7262","title":"The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!","status":"done","label":"feature","priority":"high"},{"id":"TASK-1138","title":"Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!","status":"in progress","label":"feature","priority":"medium"},{"id":"TASK-7184","title":"We need to program the back-end THX pixel!","status":"todo","label":"feature","priority":"low"},{"id":"TASK-5160","title":"Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!","status":"in progress","label":"documentation","priority":"high"},{"id":"TASK-5618","title":"Generating the driver won't do anything, we need to index the online SSL application!","status":"done","label":"documentation","priority":"medium"},{"id":"TASK-6699","title":"I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!","status":"backlog","label":"documentation","priority":"medium"},{"id":"TASK-2858","title":"We need to override the online UDP bus!","status":"backlog","label":"bug","priority":"medium"},{"id":"TASK-9864","title":"I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!","status":"done","label":"bug","priority":"high"},{"id":"TASK-8404","title":"We need to generate the virtual HEX alarm!","status":"in progress","label":"bug","priority":"low"},{"id":"TASK-5365","title":"Backing up the pixel won't do anything, we need to transmit the primary IB array!","status":"in progress","label":"documentation","priority":"low"},{"id":"TASK-1780","title":"The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!","status":"todo","label":"documentation","priority":"high"},{"id":"TASK-6938","title":"Use the redundant SCSI application, then you can hack the optical alarm!","status":"todo","label":"documentation","priority":"high"},{"id":"TASK-9885","title":"We need to compress the auxiliary VGA driver!","status":"backlog","label":"bug","priority":"high"},{"id":"TASK-3216","title":"Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!","status":"backlog","label":"documentation","priority":"medium"},{"id":"TASK-9285","title":"The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!","status":"todo","label":"bug","priority":"high"},{"id":"TASK-1024","title":"Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!","status":"in progress","label":"documentation","priority":"low"},{"id":"TASK-7068","title":"You can't generate the capacitor without indexing the wireless HEX pixel!","status":"canceled","label":"bug","priority":"low"},{"id":"TASK-6502","title":"Navigating the microchip won't do anything, we need to bypass the back-end SQL bus!","status":"todo","label":"bug","priority":"high"},{"id":"TASK-5326","title":"We need to hack the redundant UTF8 transmitter!","status":"todo","label":"bug","priority":"low"},{"id":"TASK-6274","title":"Use the virtual PCI circuit, then you can parse the bluetooth alarm!","status":"canceled","label":"documentation","priority":"low"},{"id":"TASK-1571","title":"I'll input the neural DRAM circuit, that should protocol the SMTP interface!","status":"in progress","label":"feature","priority":"medium"},{"id":"TASK-9518","title":"Compressing the interface won't do anything, we need to compress the online SDD matrix!","status":"canceled","label":"documentation","priority":"medium"},{"id":"TASK-5581","title":"I'll synthesize the digital COM pixel, that should transmitter the UTF8 protocol!","status":"backlog","label":"documentation","priority":"high"},{"id":"TASK-2197","title":"Parsing the feed won't do anything, we need to copy the bluetooth DRAM bus!","status":"todo","label":"documentation","priority":"low"},{"id":"TASK-8484","title":"We need to parse the solid state UDP firewall!","status":"in progress","label":"bug","priority":"low"},{"id":"TASK-9892","title":"If we back up the application, we can get to the UDP application through the multi-byte THX capacitor!","status":"done","label":"documentation","priority":"high"},{"id":"TASK-9616","title":"We need to synthesize the cross-platform ASCII pixel!","status":"in progress","label":"feature","priority":"medium"},{"id":"TASK-9744","title":"Use the back-end IP card, then you can input the solid state hard drive!","status":"done","label":"documentation","priority":"low"},{"id":"TASK-1376","title":"Generating the alarm won't do anything, we need to generate the mobile IP capacitor!","status":"backlog","label":"documentation","priority":"low"},{"id":"TASK-7382","title":"If we back up the firewall, we can get to the RAM alarm through the primary UTF8 pixel!","status":"todo","label":"feature","priority":"low"},{"id":"TASK-2290","title":"I'll compress the virtual JSON panel, that should application the UTF8 bus!","status":"canceled","label":"documentation","priority":"high"},{"id":"TASK-1533","title":"You can't input the firewall without overriding the wireless TCP firewall!","status":"done","label":"bug","priority":"high"},{"id":"TASK-4920","title":"Bypassing the hard drive won't do anything, we need to input the bluetooth JSON program!","status":"in progress","label":"bug","priority":"high"},{"id":"TASK-5168","title":"If we synthesize the bus, we can get to the IP panel through the virtual TLS array!","status":"in progress","label":"feature","priority":"low"},{"id":"TASK-7103","title":"We need to parse the multi-byte EXE bandwidth!","status":"canceled","label":"feature","priority":"low"},{"id":"TASK-4314","title":"If we compress the program, we can get to the XML alarm through the multi-byte COM matrix!","status":"in progress","label":"bug","priority":"high"},{"id":"TASK-3415","title":"Use the cross-platform XML application, then you can quantify the solid state feed!","status":"todo","label":"feature","priority":"high"},{"id":"TASK-8339","title":"Try to calculate the DNS interface, maybe it will input the bluetooth capacitor!","status":"in progress","label":"feature","priority":"low"},{"id":"TASK-6995","title":"Try to hack the XSS bandwidth, maybe it will override the bluetooth matrix!","status":"todo","label":"feature","priority":"high"},{"id":"TASK-8053","title":"If we connect the program, we can get to the UTF8 matrix through the digital UDP protocol!","status":"todo","label":"feature","priority":"medium"},{"id":"TASK-4336","title":"If we synthesize the microchip, we can get to the SAS sensor through the optical UDP program!","status":"todo","label":"documentation","priority":"low"},{"id":"TASK-8790","title":"I'll back up the optical COM alarm, that should alarm the RSS capacitor!","status":"done","label":"bug","priority":"medium"},{"id":"TASK-8980","title":"Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!","status":"canceled","label":"bug","priority":"low"},{"id":"TASK-7342","title":"Use the neural CLI card, then you can parse the online port!","status":"backlog","label":"documentation","priority":"low"},{"id":"TASK-5608","title":"I'll hack the haptic SSL program, that should bus the UDP transmitter!","status":"canceled","label":"documentation","priority":"low"},{"id":"TASK-1606","title":"I'll generate the bluetooth PNG firewall, that should pixel the SSL driver!","status":"done","label":"feature","priority":"medium"},{"id":"TASK-7872","title":"Transmitting the circuit won't do anything, we need to reboot the 1080p RSS monitor!","status":"canceled","label":"feature","priority":"medium"},{"id":"TASK-4167","title":"Use the cross-platform SMS circuit, then you can synthesize the optical feed!","status":"canceled","label":"bug","priority":"medium"},{"id":"TASK-9581","title":"You can't index the port without hacking the cross-platform XSS monitor!","status":"backlog","label":"documentation","priority":"low"},{"id":"TASK-8806","title":"We need to bypass the back-end SSL panel!","status":"done","label":"bug","priority":"medium"},{"id":"TASK-6542","title":"Try to quantify the RSS firewall, maybe it will quantify the open-source system!","status":"done","label":"feature","priority":"low"},{"id":"TASK-6806","title":"The VGA protocol is down, reboot the back-end matrix so we can parse the CSS panel!","status":"canceled","label":"documentation","priority":"low"},{"id":"TASK-9549","title":"You can't bypass the bus without connecting the neural JBOD bus!","status":"todo","label":"feature","priority":"high"},{"id":"TASK-1075","title":"Backing up the driver won't do anything, we need to parse the redundant RAM pixel!","status":"done","label":"feature","priority":"medium"},{"id":"TASK-1427","title":"Use the auxiliary PCI circuit, then you can calculate the cross-platform interface!","status":"done","label":"documentation","priority":"high"},{"id":"TASK-1907","title":"Hacking the circuit won't do anything, we need to back up the online DRAM system!","status":"todo","label":"documentation","priority":"high"},{"id":"TASK-4309","title":"If we generate the system, we can get to the TCP sensor through the optical GB pixel!","status":"backlog","label":"bug","priority":"medium"},{"id":"TASK-3973","title":"I'll parse the back-end ADP array, that should bandwidth the RSS bandwidth!","status":"todo","label":"feature","priority":"medium"},{"id":"TASK-7962","title":"Use the wireless RAM program, then you can hack the cross-platform feed!","status":"canceled","label":"bug","priority":"low"},{"id":"TASK-3360","title":"You can't quantify the program without synthesizing the neural OCR interface!","status":"done","label":"feature","priority":"medium"},{"id":"TASK-9887","title":"Use the auxiliary ASCII sensor, then you can connect the solid state port!","status":"backlog","label":"bug","priority":"medium"},{"id":"TASK-3649","title":"I'll input the virtual USB system, that should circuit the DNS monitor!","status":"in progress","label":"feature","priority":"medium"},{"id":"TASK-3586","title":"If we quantify the circuit, we can get to the CLI feed through the mobile SMS hard drive!","status":"in progress","label":"bug","priority":"low"},{"id":"TASK-5150","title":"I'll hack the wireless XSS port, that should transmitter the IP interface!","status":"canceled","label":"feature","priority":"medium"},{"id":"TASK-3652","title":"The SQL interface is down, override the optical bus so we can program the ASCII interface!","status":"backlog","label":"feature","priority":"low"},{"id":"TASK-6884","title":"Use the digital PCI circuit, then you can synthesize the multi-byte microchip!","status":"canceled","label":"feature","priority":"high"},{"id":"TASK-1591","title":"We need to connect the mobile XSS driver!","status":"in progress","label":"feature","priority":"high"},{"id":"TASK-3802","title":"Try to override the ASCII protocol, maybe it will parse the virtual matrix!","status":"in progress","label":"feature","priority":"low"},{"id":"TASK-7253","title":"Programming the capacitor won't do anything, we need to bypass the neural IB hard drive!","status":"backlog","label":"bug","priority":"high"},{"id":"TASK-9739","title":"We need to hack the multi-byte HDD bus!","status":"done","label":"documentation","priority":"medium"},{"id":"TASK-4424","title":"Try to hack the HEX alarm, maybe it will connect the optical pixel!","status":"in progress","label":"documentation","priority":"medium"},{"id":"TASK-3922","title":"You can't back up the capacitor without generating the wireless PCI program!","status":"backlog","label":"bug","priority":"low"},{"id":"TASK-4921","title":"I'll index the open-source IP feed, that should system the GB application!","status":"canceled","label":"bug","priority":"low"},{"id":"TASK-5814","title":"We need to calculate the 1080p AGP feed!","status":"backlog","label":"bug","priority":"high"},{"id":"TASK-2645","title":"Synthesizing the system won't do anything, we need to navigate the multi-byte HDD firewall!","status":"todo","label":"documentation","priority":"medium"},{"id":"TASK-4535","title":"Try to copy the JSON circuit, maybe it will connect the wireless feed!","status":"in progress","label":"feature","priority":"low"},{"id":"TASK-4463","title":"We need to copy the solid state AGP monitor!","status":"done","label":"documentation","priority":"low"},{"id":"TASK-9745","title":"If we connect the protocol, we can get to the GB system through the bluetooth PCI microchip!","status":"canceled","label":"feature","priority":"high"},{"id":"TASK-2080","title":"If we input the bus, we can get to the RAM matrix through the auxiliary RAM card!","status":"todo","label":"bug","priority":"medium"},{"id":"TASK-3838","title":"I'll bypass the online TCP application, that should panel the AGP system!","status":"backlog","label":"bug","priority":"high"},{"id":"TASK-1340","title":"We need to navigate the virtual PNG circuit!","status":"todo","label":"bug","priority":"medium"},{"id":"TASK-6665","title":"If we parse the monitor, we can get to the SSD hard drive through the cross-platform AGP alarm!","status":"canceled","label":"feature","priority":"low"},{"id":"TASK-7585","title":"If we calculate the hard drive, we can get to the SSL program through the multi-byte CSS microchip!","status":"backlog","label":"feature","priority":"low"},{"id":"TASK-6319","title":"We need to copy the multi-byte SCSI program!","status":"backlog","label":"bug","priority":"high"},{"id":"TASK-4369","title":"Try to input the SCSI bus, maybe it will generate the 1080p pixel!","status":"backlog","label":"bug","priority":"high"},{"id":"TASK-9035","title":"We need to override the solid state PNG array!","status":"canceled","label":"documentation","priority":"low"},{"id":"TASK-3970","title":"You can't index the transmitter without quantifying the haptic ASCII card!","status":"todo","label":"documentation","priority":"medium"},{"id":"TASK-4473","title":"You can't bypass the protocol without overriding the neural RSS program!","status":"todo","label":"documentation","priority":"low"},{"id":"TASK-4136","title":"You can't hack the hard drive without hacking the primary JSON program!","status":"canceled","label":"bug","priority":"medium"},{"id":"TASK-3939","title":"Use the back-end SQL firewall, then you can connect the neural hard drive!","status":"done","label":"feature","priority":"low"},{"id":"TASK-2007","title":"I'll input the back-end USB protocol, that should bandwidth the PCI system!","status":"backlog","label":"bug","priority":"high"},{"id":"TASK-7516","title":"Use the primary SQL program, then you can generate the auxiliary transmitter!","status":"done","label":"documentation","priority":"medium"},{"id":"TASK-6906","title":"Try to back up the DRAM system, maybe it will reboot the online transmitter!","status":"done","label":"feature","priority":"high"},{"id":"TASK-5207","title":"The SMS interface is down, copy the bluetooth bus so we can quantify the VGA card!","status":"in progress","label":"bug","priority":"low"}]`);
const tasks = {
  data
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tasks",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-stretch gap-4" }, _attrs))}><div class="flex flex-wrap items-end justify-between gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Tasks </h2><p class="text-muted-foreground"> Here&#39;s a list of your tasks for this month! </p></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        data: unref(tasks).data,
        columns: unref(columns)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tasks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tasks-BMmXxDSL.mjs.map
