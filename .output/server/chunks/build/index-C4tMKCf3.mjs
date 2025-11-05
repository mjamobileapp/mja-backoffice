import { _ as _sfc_main$2$1, a as _sfc_main$4, b as _sfc_main$1$1 } from './PopoverTrigger-ldvWFHWS.mjs';
import { d as useRuntimeConfig, e as useCookie, a as _sfc_main$2$2, c as cn } from './server.mjs';
import { _ as _sfc_main$8, a as _sfc_main$4$1, b as _sfc_main$6, c as _sfc_main$2$3, d as _sfc_main$5, e as _sfc_main$3$1 } from './CommandShortcut-RFMOhYmh.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$1$2, b as _sfc_main$7, c as _sfc_main$4$2 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$2$4, a as _sfc_main$1$3 } from './index-B6VfKlGU.mjs';
import { defineComponent, ref, computed, watch, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import NumberFlow from '@number-flow/vue';
import { Activity } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Bar } from 'vue-chartjs';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
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
import './DialogTrigger-BW6jyQ7n.mjs';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NumberFlow",
  __ssrInlineRender: true,
  props: {
    value: {},
    prefix: { default: "Rp." },
    suffix: { default: "" },
    locale: { default: "id-ID" },
    showDecimal: { type: Boolean, default: false },
    duration: { default: 500 }
  },
  setup(__props) {
    const props = __props;
    const displayValue = ref(0);
    const isChanging = ref(false);
    const isMounted = ref(false);
    watch(
      () => props.value,
      (newVal, oldVal) => {
        if (!isMounted.value) return;
        if (newVal == null || isNaN(Number(newVal))) return;
        if (Number(newVal) === Number(oldVal)) return;
        isChanging.value = true;
        const steps = 30;
        props.duration / steps;
        setInterval();
      },
      { immediate: true }
    );
    const formattedValue = computed(() => {
      if (!isMounted.value || isNaN(displayValue.value)) return "-";
      const formatted = new Intl.NumberFormat(props.locale, {
        minimumFractionDigits: props.showDecimal ? 2 : 0,
        maximumFractionDigits: props.showDecimal ? 2 : 0
      }).format(displayValue.value);
      return `${props.prefix} ${formatted}${props.suffix}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        key: formattedValue.value,
        class: "inline-block font-semibold tabular-nums tracking-tight transition-all"
      }, _attrs))} data-v-ab526559>${ssrInterpolate(formattedValue.value)}</span>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/number-flow/NumberFlow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NumberFlowRp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ab526559"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CustomChartTooltip",
  __ssrInlineRender: true,
  props: {
    label: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg border bg-background/80 backdrop-blur-sm p-2 shadow-md text-sm min-w-[150px]" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (d, i) => {
        _push(`<div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full shrink-0" style="${ssrRenderStyle({ backgroundColor: d.color || "hsl(var(--primary))" })}"></div><span class="text-muted-foreground">${ssrInterpolate(d.name)}:</span><span class="ml-auto font-medium">${ssrInterpolate(typeof d.value === "number" ? new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0
        }).format(d.value) : "-")}</span></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/CustomChartTooltip.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomBarChart",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
    const props = __props;
    const chartData = computed(() => ({
      labels: props.data.map((d) => d.name),
      datasets: [
        {
          label: "Nilai Proyek (Rp)",
          data: props.data.map((d) => Number(d.total) || 0),
          backgroundColor: props.data.map((d) => {
            console.log(d.color);
            switch ((d.color || "").toLowerCase()) {
              case "red":
                return "#ef4444";
              // merah
              case "blue":
                return "#3b82f6";
              // biru
              case "green":
                return "#10b981";
              // hijau
              case "yellow":
                return "#eab308";
              // kuning
              case "purple":
                return "#8b5cf6";
              // ungu
              default:
                return "#10b981";
            }
          }),
          borderRadius: 8
        }
      ]
    }));
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const val = context.parsed.y || 0;
              return `Rp ${new Intl.NumberFormat("id-ID").format(val)}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#6b7280" }
        },
        y: {
          grid: { color: "#e5e7eb" },
          ticks: {
            color: "#6b7280",
            callback: (value) => `Rp ${new Intl.NumberFormat("id-ID").format(value)}`
          }
        }
      },
      animation: {
        duration: 800,
        easing: "easeOutQuart"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[350px]" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Bar), {
        data: unref(chartData),
        options: chartOptions
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/CustomBarChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    ref({
      totalKnowledge: 0,
      totalMasterCode: 0,
      totalUser: 0
    });
    const dataProyekTerbaru = ref([]);
    const proyekList = ref([]);
    const selectedProyek = ref(1);
    const jumlahProyek = ref(0);
    const totalNilaiKontrak = ref(0);
    const objProyek = ref({});
    const dataBarchart = ref([]);
    const searchQuery = ref("");
    const accessToken = useCookie("accessToken");
    const token = (_a = accessToken.value) == null ? void 0 : _a.token;
    async function fetchDataProyekById(idProyek) {
      try {
        const response = await fetch(`${baseUrl}/proyek/${idProyek}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const fetchedData = await response.json();
        objProyek.value = fetchedData.data || {};
      } catch (error) {
        console.error("Gagal mengambil data proyek by id:", error);
        objProyek.value = {};
      }
    }
    async function fetchDataBarchart(idProyek) {
      try {
        const response = await fetch(`${baseUrl}/getDataBarChart/${idProyek}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const result = await response.json();
        if (!result.success) throw new Error(result.message || "Gagal mengambil data");
        jumlahProyek.value = result.jumlahProyek;
        totalNilaiKontrak.value = result.totalNilaiKontrak;
        dataBarchart.value = Array.isArray(result.data) ? result.data.map((item) => ({
          name: item.name,
          total: Number(item.total) || 0,
          color: item.color || null
        })) : [];
      } catch (error) {
        console.error("Error fetching barchart:", error);
        dataBarchart.value = [];
      }
    }
    async function handleSelectProyek(proyekId) {
      selectedProyek.value = proyekId;
      await Promise.all([fetchDataBarchart(proyekId), fetchDataProyekById(proyekId)]);
    }
    computed(() => {
      if (!searchQuery.value) return proyekList.value;
      return proyekList.value.filter(
        (item) => {
          var _a2;
          return item.namaPekerjaan.toLowerCase().includes(searchQuery.value.toLowerCase()) || ((_a2 = item.lokasi) == null ? void 0 : _a2.toLowerCase().includes(searchQuery.value.toLowerCase()));
        }
      );
    });
    computed(
      () => {
        var _a2;
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          currencyDisplay: "symbol",
          minimumFractionDigits: 0
        }).format(((_a2 = objProyek.value) == null ? void 0 : _a2.nilaiKontrak) || 0);
      }
    );
    watch(selectedProyek, (newId) => {
      if (newId) {
        fetchDataBarchart(newId);
        fetchDataProyekById(newId);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popover = _sfc_main$2$1;
      const _component_PopoverTrigger = _sfc_main$4;
      const _component_Button = _sfc_main$2$2;
      const _component_ChevronsUpDown = resolveComponent("ChevronsUpDown");
      const _component_PopoverContent = _sfc_main$1$1;
      const _component_Command = _sfc_main$8;
      const _component_CommandInput = _sfc_main$4$1;
      const _component_CommandEmpty = _sfc_main$6;
      const _component_CommandList = _sfc_main$2$3;
      const _component_CommandGroup = _sfc_main$5;
      const _component_CommandItem = _sfc_main$3$1;
      const _component_Check = resolveComponent("Check");
      const _component_Card = _sfc_main$5$1;
      const _component_CardHeader = _sfc_main$1$2;
      const _component_CardTitle = _sfc_main$7;
      const _component_CardContent = _sfc_main$4$2;
      const _component_Avatar = _sfc_main$2$4;
      const _component_AvatarFallback = _sfc_main$1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-4" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-2"><h2 class="text-2xl font-bold tracking-tight">Dashboard</h2><div class="flex items-center space-x-2 w-full md:w-[400px]">`);
      _push(ssrRenderComponent(_component_Popover, {
        open: _ctx.open,
        "onUpdate:open": ($event) => _ctx.open = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": _ctx.open,
                    class: "justify-between w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(selectedProyek) ? (_a2 = unref(proyekList).find((item) => item.id === unref(selectedProyek))) == null ? void 0 : _a2.namaPekerjaan : "Select Proyek...")} `);
                        _push4(ssrRenderComponent(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(selectedProyek) ? (_b = unref(proyekList).find((item) => item.id === unref(selectedProyek))) == null ? void 0 : _b.namaPekerjaan : "Select Proyek...") + " ", 1),
                          createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": _ctx.open,
                      class: "justify-between w-full"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createTextVNode(toDisplayString(unref(selectedProyek) ? (_a2 = unref(proyekList).find((item) => item.id === unref(selectedProyek))) == null ? void 0 : _a2.namaPekerjaan : "Select Proyek...") + " ", 1),
                          createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ];
                      }),
                      _: 1
                    }, 8, ["aria-expanded"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Command, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CommandInput, { placeholder: "Search Proyek..." }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CommandEmpty, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`No Proyek found.`);
                            } else {
                              return [
                                createTextVNode("No Proyek found.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(proyekList), (item) => {
                                      _push6(ssrRenderComponent(_component_CommandItem, {
                                        key: item.id,
                                        value: item.namaPekerjaan,
                                        onSelect: ($event) => handleSelectProyek(item.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Check, {
                                              class: unref(cn)("mr-2 h-4 w-4", _ctx.value === item.id ? "opacity-100" : "opacity-0")
                                            }, null, _parent7, _scopeId6));
                                            _push7(` ${ssrInterpolate(item.namaPekerjaan)}`);
                                          } else {
                                            return [
                                              createVNode(_component_Check, {
                                                class: unref(cn)("mr-2 h-4 w-4", _ctx.value === item.id ? "opacity-100" : "opacity-0")
                                              }, null, 8, ["class"]),
                                              createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(proyekList), (item) => {
                                        return openBlock(), createBlock(_component_CommandItem, {
                                          key: item.id,
                                          value: item.namaPekerjaan,
                                          onSelect: ($event) => handleSelectProyek(item.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Check, {
                                              class: unref(cn)("mr-2 h-4 w-4", _ctx.value === item.id ? "opacity-100" : "opacity-0")
                                            }, null, 8, ["class"]),
                                            createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_CommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(proyekList), (item) => {
                                      return openBlock(), createBlock(_component_CommandItem, {
                                        key: item.id,
                                        value: item.namaPekerjaan,
                                        onSelect: ($event) => handleSelectProyek(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Check, {
                                            class: unref(cn)("mr-2 h-4 w-4", _ctx.value === item.id ? "opacity-100" : "opacity-0")
                                          }, null, 8, ["class"]),
                                          createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                          createVNode(_component_CommandEmpty, null, {
                            default: withCtx(() => [
                              createTextVNode("No Proyek found.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_CommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(proyekList), (item) => {
                                    return openBlock(), createBlock(_component_CommandItem, {
                                      key: item.id,
                                      value: item.namaPekerjaan,
                                      onSelect: ($event) => handleSelectProyek(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Check, {
                                          class: unref(cn)("mr-2 h-4 w-4", _ctx.value === item.id ? "opacity-100" : "opacity-0")
                                        }, null, 8, ["class"]),
                                        createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Command, null, {
                      default: withCtx(() => [
                        createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                        createVNode(_component_CommandEmpty, null, {
                          default: withCtx(() => [
                            createTextVNode("No Proyek found.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_CommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(proyekList), (item) => {
                                  return openBlock(), createBlock(_component_CommandItem, {
                                    key: item.id,
                                    value: item.namaPekerjaan,
                                    onSelect: ($event) => handleSelectProyek(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Check, {
                                        class: unref(cn)("mr-2 h-4 w-4", _ctx.value === item.id ? "opacity-100" : "opacity-0")
                                      }, null, 8, ["class"]),
                                      createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": _ctx.open,
                    class: "justify-between w-full"
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createTextVNode(toDisplayString(unref(selectedProyek) ? (_a2 = unref(proyekList).find((item) => item.id === unref(selectedProyek))) == null ? void 0 : _a2.namaPekerjaan : "Select Proyek...") + " ", 1),
                        createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                      ];
                    }),
                    _: 1
                  }, 8, ["aria-expanded"])
                ]),
                _: 1
              }),
              createVNode(_component_PopoverContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_Command, null, {
                    default: withCtx(() => [
                      createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                      createVNode(_component_CommandEmpty, null, {
                        default: withCtx(() => [
                          createTextVNode("No Proyek found.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_CommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(proyekList), (item) => {
                                return openBlock(), createBlock(_component_CommandItem, {
                                  key: item.id,
                                  value: item.namaPekerjaan,
                                  onSelect: ($event) => handleSelectProyek(item.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Check, {
                                      class: unref(cn)("mr-2 h-4 w-4", _ctx.value === item.id ? "opacity-100" : "opacity-0")
                                    }, null, 8, ["class"]),
                                    createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128))
                            ]),
                            _: 1
                          })
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
      _push(`</div></div><main class="flex flex-1 flex-col gap-4 md:gap-8"><div class="grid gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-8">`);
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Jumlah Semua Proyek `);
                      } else {
                        return [
                          createTextVNode(" Jumlah Semua Proyek ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Activity), { class: "h-4 w-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(" Jumlah Semua Proyek ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Activity), { class: "h-4 w-4 text-muted-foreground" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-2xl font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), { value: unref(jumlahProyek) }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-2xl font-bold" }, [
                      createVNode(unref(NumberFlow), { value: unref(jumlahProyek) }, null, 8, ["value"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(" Jumlah Semua Proyek ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Activity), { class: "h-4 w-4 text-muted-foreground" })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-2xl font-bold" }, [
                    createVNode(unref(NumberFlow), { value: unref(jumlahProyek) }, null, 8, ["value"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Total Nilai Kontrak Seluruh Proyek `);
                      } else {
                        return [
                          createTextVNode("Total Nilai Kontrak Seluruh Proyek ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Activity), { class: "h-4 w-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Total Nilai Kontrak Seluruh Proyek ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Activity), { class: "h-4 w-4 text-muted-foreground" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-2xl font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(NumberFlowRp, { value: unref(totalNilaiKontrak) }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-2xl font-bold" }, [
                      createVNode(NumberFlowRp, { value: unref(totalNilaiKontrak) }, null, 8, ["value"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Total Nilai Kontrak Seluruh Proyek ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Activity), { class: "h-4 w-4 text-muted-foreground" })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-2xl font-bold" }, [
                    createVNode(NumberFlowRp, { value: unref(totalNilaiKontrak) }, null, 8, ["value"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Nilai Proyek Saat Ini `);
                      } else {
                        return [
                          createTextVNode(" Nilai Proyek Saat Ini ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Activity), { class: "h-4 w-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(" Nilai Proyek Saat Ini ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Activity), { class: "h-4 w-4 text-muted-foreground" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-2xl font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(NumberFlowRp, {
                    value: unref(objProyek).nilaiKontrak
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-2xl font-bold" }, [
                      createVNode(NumberFlowRp, {
                        value: unref(objProyek).nilaiKontrak
                      }, null, 8, ["value"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(" Nilai Proyek Saat Ini ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Activity), { class: "h-4 w-4 text-muted-foreground" })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-2xl font-bold" }, [
                    createVNode(NumberFlowRp, {
                      value: unref(objProyek).nilaiKontrak
                    }, null, 8, ["value"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 md:gap-8">`);
      _push(ssrRenderComponent(_component_Card, { class: "xl:col-span-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Monitoring Project`);
                      } else {
                        return [
                          createTextVNode("Monitoring Project")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Monitoring Project")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "pl-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(dataBarchart).length > 0) {
                    _push3(ssrRenderComponent(_sfc_main$1, { data: unref(dataBarchart) }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(dataBarchart).length > 0 ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      data: unref(dataBarchart)
                    }, null, 8, ["data"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Monitoring Project")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "pl-2" }, {
                default: withCtx(() => [
                  unref(dataBarchart).length > 0 ? (openBlock(), createBlock(_sfc_main$1, {
                    key: 0,
                    data: unref(dataBarchart)
                  }, null, 8, ["data"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Proyek Baru`);
                      } else {
                        return [
                          createTextVNode("Proyek Baru")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Proyek Baru")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "grid gap-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(dataProyekTerbaru), (itemProyek) => {
                    _push3(`<div class="flex items-center gap-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Avatar, { class: "hidden h-9 w-9 sm:flex" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_AvatarFallback, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(itemProyek.namaPekerjaan.split(" ").map((n) => n[0]).join(""))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(itemProyek.namaPekerjaan.split(" ").map((n) => n[0]).join("")), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_AvatarFallback, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(itemProyek.namaPekerjaan.split(" ").map((n) => n[0]).join("")), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="grid gap-1"${_scopeId2}><p class="text-sm font-medium leading-none"${_scopeId2}>${ssrInterpolate(itemProyek.namaPekerjaan)}</p><p class="text-sm text-muted-foreground"${_scopeId2}>${ssrInterpolate(itemProyek.lokasi)}</p></div><div class="ml-auto font-medium"${_scopeId2}>`);
                    _push3(ssrRenderComponent(NumberFlowRp, {
                      value: itemProyek.nilaiKontrak
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(dataProyekTerbaru), (itemProyek) => {
                      return openBlock(), createBlock("div", {
                        key: itemProyek.namaPekerjaan,
                        class: "flex items-center gap-4"
                      }, [
                        createVNode(_component_Avatar, { class: "hidden h-9 w-9 sm:flex" }, {
                          default: withCtx(() => [
                            createVNode(_component_AvatarFallback, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(itemProyek.namaPekerjaan.split(" ").map((n) => n[0]).join("")), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "grid gap-1" }, [
                          createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(itemProyek.namaPekerjaan), 1),
                          createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(itemProyek.lokasi), 1)
                        ]),
                        createVNode("div", { class: "ml-auto font-medium" }, [
                          createVNode(NumberFlowRp, {
                            value: itemProyek.nilaiKontrak
                          }, null, 8, ["value"])
                        ])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Proyek Baru")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "grid gap-8" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(dataProyekTerbaru), (itemProyek) => {
                    return openBlock(), createBlock("div", {
                      key: itemProyek.namaPekerjaan,
                      class: "flex items-center gap-4"
                    }, [
                      createVNode(_component_Avatar, { class: "hidden h-9 w-9 sm:flex" }, {
                        default: withCtx(() => [
                          createVNode(_component_AvatarFallback, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(itemProyek.namaPekerjaan.split(" ").map((n) => n[0]).join("")), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "grid gap-1" }, [
                        createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(itemProyek.namaPekerjaan), 1),
                        createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(itemProyek.lokasi), 1)
                      ]),
                      createVNode("div", { class: "ml-auto font-medium" }, [
                        createVNode(NumberFlowRp, {
                          value: itemProyek.nilaiKontrak
                        }, null, 8, ["value"])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C4tMKCf3.mjs.map
