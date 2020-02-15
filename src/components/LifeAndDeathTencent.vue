<template>
  <div id="container">
    <div id="head">
      <div id="left_border" />
      <div id="title">新冠肺炎疫情生命线</div>
      <div id="description">(7:00-10:00左右为数据更新高峰，显示可能略有滞后请谅解)</div>
    </div>

    <!-- <div id="explanation">
      <div id="explanation_text">治愈率为该地区治愈人数在确诊人数中的占比。死亡率为该地区公布的死亡人数在确诊人数中的占比；</div>
    </div>-->

    <div id="total">
      <div
        class="title"
      >各地区累计治愈/死亡病例数（{{date_list[select_date_id] ? date_list[select_date_id].month : ''}}月{{date_list[select_date_id] ? date_list[select_date_id].day : ''}}日）</div>
      <div id="legend">
        <div class="legend_part">
          <div class="death icon" />
          <div class="legend_text">累计死亡</div>
        </div>
        <div class="legend_part">
          <div class="cure icon" />
          <div class="legend_text">累计治愈</div>
        </div>
        <div class="legend_part">
          <div class="diagnosis icon" />
          <div class="legend_text">累计确诊</div>
        </div>
      </div>

      <div id="total_svg_div">
        <svg id="total_svg" width="100%" height="100%">
          <g class="label_line">
            <path
              v-for="(line, index) in total_x_label[select_date_id]"
              :key="line + `${index}`"
              class="total_label_line"
              :d="index===(total_x_label[select_date_id].length - 1) ? `M${total_x_begin + (index+0.5)*total_x_step},5v${total_svg_height * 0.80}` : `M${total_x_begin + index*total_x_step},5v${total_svg_height * 0.80}`"
            />
          </g>
          <g class="x_label"
            :style="`transform: translate(${total_x_begin}px, ${total_svg_height}px);`"
          >
            <text
              v-for="(label, index) in total_x_label[select_date_id]"
              class="label_text"
              :style="`transform: translate(${index===(total_x_label[select_date_id].length - 1) ? total_x_step * (index + 0.5) : total_x_step * index}px, -5px)`"
              :key="label + `${index}`"
            >{{num2text(label)}}</text>
            <text
              class="label_text"
              :style="`transform: translate(${total_x_step * (total_x_label[select_date_id].length - 2.5)}px, -5px);`"
            >//</text>
          </g>
          <g
            v-for="(data, index) in total_dataset[select_date_id]"
            :key="data.title_1"
            :style="`transform: translate(0, ${total_svg_height * 0.4 * index}px);`"
          >
            <text
              style="transform: translate(2vw, 4vw)"
              font-size="3.2vw"
              font-weight="500"
            >{{data.title_1}}</text>
            <text
              style="transform: translate(1.2vw, 7vw)"
              font-size="2.1333vw"
              fill="#888888"
            >{{data.title_2}}</text>
            <rect
              :x="total_x_begin"
              y="1.3vw"
              :width="total_bar_width(data.diagnosis)"
              height="3vw"
              class="diagnosis"
            />
            <!-- <text class="bar_text" y="3.5vw" :x="total_x_begin + 1">{{num2text(data.diagnosis)}}</text> -->
            <text
              class="bar_text"
              :style="`transform: translate(${total_x_begin + 1}px, 3.5vw);`"
            >{{num2text(data.diagnosis)}}</text>
            <rect
              :x="total_x_begin"
              y="4.3vw"
              :width="total_bar_width(data.cure)"
              height="3vw"
              class="cure"
            />
            <!-- <text class="bar_text" y="6.6vw" :x="total_x_begin + 1">{{num2text(data.cure)}}</text> -->
            <text
              class="bar_text"
              :style="`transform: translate(${total_x_begin + 1}px, 6.6vw);`"
            >{{num2text(data.cure)}}</text>
            <rect
              :x="total_x_begin + total_bar_width(data.cure)"
              y="4.3vw"
              :width="total_bar_width(data.death)"
              height="3vw"
              class="death"
            />
            <!-- <text
              class="bar_text"
              y="6.7vw"
              :style="data.death / total_x_label[select_date_id][5] < 0.1 ? `text-anchor: end;` : ''"
              :x="data.death / total_x_label[select_date_id][5] > 0.1 ? total_x_begin + total_bar_width(data.cure) + 1 : total_x_begin + total_bar_width(data.cure) + total_bar_width(data.death) - 1"
            >{{num2text(data.death)}}</text>-->
            <!-- <text
              class="bar_text"
              :style="(data.death / total_x_label[select_date_id][5] < 0.1 ? `text-anchor: end; ` : '')
                + ` transform: translate(${data.death / total_x_label[select_date_id][5] > 0.1 ? total_x_begin + total_bar_width(data.cure) + 1 : total_x_begin + total_bar_width(data.cure) + total_bar_width(data.death) - 1}px, 6.6vw);`"
            >{{num2text(data.death)}}</text> -->
            <text
              class="bar_text"
              :transform="`translate(${data.death / total_x_label[select_date_id][5] > 0.1 ? total_x_begin + total_bar_width(data.cure) + 1 : total_x_begin + total_bar_width(data.cure) + total_bar_width(data.death) - 1}px, 6.6vw)`"
              :style="(data.death / total_x_label[select_date_id][5] < 0.1 ? `text-anchor: end; ` : '')
                + ` -webkit-transform: translate(${data.death / total_x_label[select_date_id][5] > 0.1 ? total_x_begin + total_bar_width(data.cure) + 1 : total_x_begin + total_bar_width(data.cure) + total_bar_width(data.death) - 1}px, 6.6vw);`"
            >{{num2text(data.death)}}</text>
            <!-- <g :style="`transform: translate(${total_x_begin + total_x_step * 5}px, 5.2vw);`">
              <rect
                :width="2.7 * total_x_step"
                height="4vw"
                fill="rgba(136, 136, 128, 0.05)"
                :rx="total_x_step * 0.1"
                :ry="total_x_step * 0.1"
                />
              <text :style="`transform: translate(${0.55 * total_x_step}px, 3vw); text-anchor: middle; font-size: 2.4vw`" class="diagnosis">
                {{num2text(data.diagnosis)}}
              </text>
              <text :style="`transform: translate(${1.45 * total_x_step}px, 3vw); text-anchor: middle; font-size: 2.4vw`" class="cure">
                {{num2text(data.cure)}}
              </text>
              <text :style="`transform: translate(${2.25 * total_x_step}px, 3vw); text-anchor: middle; font-size: 2.4vw`" class="death">
                {{num2text(data.death)}}
              </text>
            </g> -->
            <g
              id="页面1"
              stroke="none"
              stroke-width="1"
              fill="none"
              :style="`transform: translate(${total_x_begin + total_x_step * (total_x_label[select_date_id].length - 2.8)}px, -0.5vw) scale(${total_svg_width / 800})`"
              fill-rule="evenodd"
            >
              <g id="手机" transform="translate(-528.000000, -748.000000)" fill="#FFFFFF">
                <g id="编组-35" transform="translate(34.000000, 71.000000)">
                  <g id="编组-36" transform="translate(0.000000, 585.000000)">
                    <g id="编组-26" transform="translate(490.000000, 86.000000)">
                      <g id="编组-25" transform="translate(0.490312, 0.597389)">
                        <g
                          id="编组-24"
                          transform="translate(28.424015, 26.671522) rotate(23.000000) translate(-28.424015, -26.671522) translate(13.924015, 4.171522)"
                        >
                          <g id="编组-22">
                            <g id="编组-21">
                              <g id="编组-20">
                                <polygon
                                  id="路径-11"
                                  points="13.9266941 1.26121336e-13 1.11910481e-13 8.64947511 14.1532193 16.1404361 28.3064386 8.64947511"
                                />
                                <polygon
                                  id="路径-11"
                                  points="13.9266941 7.05592105 -1.17239551e-13 15.7053962 14.1532193 23.1963572 28.3064386 15.7053962"
                                />
                                <polygon
                                  id="路径-11"
                                  points="13.9266941 21.1677632 -1.17239551e-13 29.8172383 14.1532193 37.3081993 28.3064386 29.8172383"
                                />
                              </g>
                              <polygon
                                id="路径-11"
                                points="13.9266941 14.1118421 -1.17239551e-13 22.7613172 14.1532193 30.2522782 28.3064386 22.7613172"
                              />
                            </g>
                            <polygon
                              id="路径-11"
                              points="13.9266941 28.2236842 1.10134124e-13 36.8731593 14.1532193 44.3641203 28.3064386 36.8731593"
                            />
                          </g>
                          <g id="路径-13" transform="translate(0.000000, 21.167763)">
                            <polygon
                              id="路径-11"
                              points="13.9266941 1.26121336e-13 -1.17239551e-13 8.64947511 14.1532193 16.1404361 28.3064386 8.64947511"
                            />
                          </g>
                        </g>
                        <g
                          id="路径-12"
                          transform="translate(17.226836, 51.766822) rotate(23.000000) translate(-17.226836, -51.766822) translate(2.726836, 43.766822)"
                        >
                          <polygon
                            id="路径-11"
                            points="13.9266941 1.26121336e-13 -1.17239551e-13 8.53714427 14.1532193 15.9308201 28.3064386 8.53714427"
                          />
                        </g>
                      </g>
                      <g
                        id="路径-12"
                        transform="translate(19.825299, 46.693229) rotate(23.000000) translate(-19.825299, -46.693229) translate(5.325299, 38.693229)"
                      >
                        <polygon
                          id="路径-11"
                          points="13.9266941 1.26121336e-13 -1.17239551e-13 8.53714427 14.1532193 15.9308201 28.3064386 8.53714427"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div class="description">*锯齿线用于数据差异过大时隔断坐标轴</div>
    </div>

    <div id="add" style="margin-top: 50 / 7.5vw;">
      <div class="title">全国新增治愈/死亡病例数</div>
      <div id="legend" style="margin-top: 3vw;">
        <div class="legend_part">
          <div class="legend_line_cure"></div>
          <div class="legend_icon_line cure"></div>
          <div class="legend_text_line">治愈率</div>
        </div>
        <div class="legend_part">
          <div class="legend_line_death"></div>
          <div class="legend_icon_line death"></div>
          <div class="legend_text_line">病死率</div>
        </div>
        <div class="legend_part">
          <div class="legend_icon cure"></div>
          <div class="legend_text">新增治愈</div>
        </div>
        <div class="legend_part">
          <div class="legend_icon death"></div>
          <div class="legend_text">新增死亡</div>
        </div>
      </div>

      <div class="life_div">
        <div class="y_label">
          <div
            v-for="(label, index) in add_y_label"
            :style="`margin-bottom: ${
              index===0 ? 15.5 : 4.3
            }vw; font-weight: ${label === 0 ? 600 : 400};`"
            :key="`${label}-${index}`"
          >{{num2text(label)}}{{index===0 ? '%':''}}</div>
        </div>
        <div class="life_svg_div">
          <div class="highlight_svg_div" style="pointer-events: none;">
            <svg width="100%" height="100%">
              <defs>
                <linearGradient id="orange_red" x1="100%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:rgb(0, 186, 209); stop-opacity: 0.05" />
                  <stop offset="100%" style="stop-color:rgb(0, 186, 209); stop-opacity: 0.25" />
                </linearGradient>
              </defs>
              <rect
                :x="hightlight_rect.x"
                :y="hightlight_rect.y"
                :width="hightlight_rect.width"
                :height="hightlight_rect.height"
                fill="url(#orange_red)"
              />
            </svg>
          </div>
          <div
            class="life_svg_div_big"
            :style="`height: 100%; width: ${dataLens / showLens * 100}%`"
          >
            <svg width="100%" height="100%" style="background: none;">
              <!-- <defs>
                <linearGradient id="orange_red" x1="100%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:rgb(0, 186, 209); stop-opacity: 0.05" />
                  <stop offset="100%" style="stop-color:rgb(0, 186, 209); stop-opacity: 0.25" />
                </linearGradient>
              </defs>
              <g id="hightlight-rect">
                <rect
                  fill="url(#orange_red)"
                  :x="add_x_step * (2 * select_date_id - 0.3)"
                  :y="0.5 * add_y_step"
                  :width="2.6 * add_x_step"
                  :height="8.5 * add_y_step"
                />
              </g>-->
              <g id="horizontal_line">
                <path
                  v-for="(label, index) in add_y_label"
                  :key="'add_y_line' + index"
                  :style="`stroke-width: ${
                    bold_line_index_list.includes(index) ? 0.3 : 0.08
                  }vw; stroke: #6f6f6f;`"
                  :d="bold_line_index_list.includes(index) ? '' : `M0,${index===0 ? add_y_step * 0.5 : (index + 2) * add_y_step}h${add_svg_width}`"
                />
              </g>
              <g id="line-chart">
                <path
                  :d="cure_rect_path"
                  stroke-dasharray="3 3"
                  style="stroke: #62c298; stroke-width: 0.2vw; fill: none;"
                />
                <path
                  style="fill: rgba(121, 192, 155, 0.14);"
                  :d="cure_rect_path ==='' ? '' : `${cure_rect_path}L${add_x_step * (country_dataset.length * 2 - 1)},${add_y_step * 3}H${add_x_step}`"
                />
                <rect
                  v-for="(data,index) in country_dataset"
                  :key="`line-chart-cure-rect-${index}`"
                  class="cure line_rect"
                  :x="add_x_step * (2 * index + 1 - 0.36 / 2)"
                  :y="add_y_step * 0.5 + (add_y_label[0] - data.cure_rate * 100) / add_y_label[0] * add_y_step * 2.5 - add_x_step * 0.18"
                  :width="add_x_step * 0.36"
                  :height="add_x_step * 0.36"
                  :rx="add_x_step * 0.06"
                  :ry="add_x_step * 0.06"
                />
                <path
                  :d="death_rect_path"
                  stroke-dasharray="3 3"
                  style="stroke: #333333; stroke-width: 0.2vw; fill: none;"
                />
                <path
                  style="fill: rgba(51, 51, 51, 0.1);"
                  :d="cure_rect_path ==='' ? '' : `${death_rect_path}L${add_x_step * (country_dataset.length * 2 - 1)},${add_y_step * 3}H${add_x_step}`"
                />
                <rect
                  v-for="(data,index) in country_dataset"
                  :key="`line-chart-death-rect-${index}`"
                  class="death line_rect"
                  :x="add_x_step * (2 * index + 1 - 0.36 / 2)"
                  :y="add_y_step * 0.5 + (add_y_label[0] - data.death_rate * 100) / add_y_label[0] * add_y_step * 2.5 - add_x_step * 0.18"
                  :width="add_x_step * 0.36"
                  :height="add_x_step * 0.36"
                  :rx="add_x_step * 0.06"
                  :ry="add_x_step * 0.06"
                />
              </g>
              <g id="line-char-highlight">
                <text
                  class="label_text"
                  :x="add_x_step * (2 * select_date_id + 1)"
                  :y="country_dataset[select_date_id] ? (add_y_step * 0.5 + (add_y_label[0] - country_dataset[select_date_id].death_rate * 100) / add_y_label[0] * add_y_step * 2.5 + add_y_step * 0.4) : 0"
                >{{country_dataset[select_date_id] ? (country_dataset[select_date_id].death_rate * 100).toFixed(1) + '%' : ''}}</text>
                <text
                  class="label_text"
                  :x="add_x_step * (2 * select_date_id + 1)"
                  :y="country_dataset[select_date_id] ? (add_y_step * 0.5 + (add_y_label[0] - country_dataset[select_date_id].cure_rate * 100) / add_y_label[0] * add_y_step * 2.5 - add_y_step * 0.2) : 0"
                >{{country_dataset[select_date_id] ? (country_dataset[select_date_id].cure_rate * 100).toFixed(1) + '%' : ''}}</text>
              </g>
              <g id="bar-chart">
                <g id="bar-chart-cure">
                  <rect
                    v-for="(data, index) in country_dataset"
                    class="cure"
                    :key="`bar-rect-cure-${index}`"
                    :width="add_x_step"
                    :height="data.cure / add_y_label[2] * add_y_step * 2"
                    :x="add_x_step * (2 * index + 0.5)"
                    :y="(1 - data.cure / add_y_label[2]) * add_y_step * 2 + 4 * add_y_step"
                  />
                  <text
                    v-for="(data, index) in country_dataset"
                    class="label_text"
                    :key="`bar-label-cure-${index}`"
                    :x="add_x_step * (2 * index + 1)"
                    :y="(1 - data.cure / add_y_label[2]) * add_y_step * 2 + 3.9 * add_y_step"
                  >{{num2text(data.cure)}}</text>
                </g>
                <g id="bar-chart-death">
                  <rect
                    v-for="(data, index) in country_dataset"
                    class="death"
                    :key="`bar-rect-death-${index}`"
                    :width="add_x_step"
                    :height="data.death / add_y_label[7] * add_y_step * 2"
                    :x="add_x_step * (2 * index + 0.5)"
                    :y="7 * add_y_step"
                  />
                  <text
                    v-for="(data, index) in country_dataset"
                    class="label_text"
                    :key="`bar-label-death-${index}`"
                    :x="add_x_step * (2 * index + 1)"
                    :y="data.death / add_y_label[7] * add_y_step * 2 + 7.35 * add_y_step"
                  >{{num2text(data.death)}}</text>
                </g>
              </g>
              <g id="horizontal_line">
                <path
                  v-for="(label, index) in add_y_label"
                  :key="'add_y_line' + index"
                  :style="`stroke-width: ${
                    bold_line_index_list.includes(index) ? 0.3 : 0.08
                  }vw; stroke: #6f6f6f;`"
                  :d="bold_line_index_list.includes(index) ? `M0,${index===0 ? add_y_step * 0.5 : (index + 2) * add_y_step}h${add_svg_width}` : ''"
                />
              </g>
              <g id="x-label">
                <text
                  v-for="(date, index) in date_list"
                  :style="index===select_date_id ? `text-anchor: middle; font-size: 2.4vw; font-weight: 500; fill: '#333333'; transform: translate(0, 0.1vw); transition: ease 0.2s;` : `text-anchor: middle; font-size: 2.1333333vw; font-weight: 400; fill: '#333333';`"
                  :x="add_x_step * (2 * index + 1)"
                  :y="6.6 * add_y_step"
                  :key="`${date.month}-${date.day}`"
                >{{`${date.month}/${date.day}`}}</text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div id="slider">
        <svg id="slider_svg" width="100%" height="100%">
          <defs>
            <linearGradient id="slider_linear">
              <stop offset="15%" style="stop-color:#60cad7; stop-opacity: 1" />
              <stop offset="95%" style="stop-color:#00bad1; stop-opacity: 1" />
            </linearGradient>
            <filter id="shadow" x="-5%" y="0%" width="110%" height="120%">
              <feDropShadow
                dx="0"
                dy="0.6"
                stdDeviation="1.2"
                flood-color="#00B9D1"
                flood-opacity="0.6"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div class="description" style="margin-left: 3vw; margin-bottom: 5vw;">*拖动图表查看更多时间范围数据，移动滑块选择日期，图表将同步变化</div>
      <!-- <div id="footer" style="height: 10vw;">
        <p>scroll-left: {{scroll_left}}; isIOS: {{isiOS}}</p>
        <p>select_date_id: {{select_date_id}}</p>
        <p>select_date_id_bar: {{select_date_id_bar}}</p>
        <p>select_date_id_slider: {{select_date_id_slider}}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import $ from "jquery";
// import axios from "axios";
export default {
  name: "left-and-death-tencent",
  data() {
    return {
      wuhan_dataset: [],
      hubei_dataset: [],
      country_dataset: [],
      total_dataset: [],

      date_list: [],
      select_date_id: 0,
      select_date_id_bar: 0,
      select_date_id_slider: 0,
      total_x_label: [[0, 200, 400, 600, 800, 1000, 7000, 10000]],
      total_x_begin: 0,
      total_x_step: 0,
      total_svg_width: 0,
      total_svg_height: 0,

      test: 0,
      test2: 0,
      dataViewWidth: 0,
      dataLens: 20,
      showLens: 10,

      add_y_label: [],
      add_svg_width: 0,
      add_svg_height: 0,
      add_y_step: 0,
      add_x_step: 0,
      add_x_end: 0,
      max_scroll_distance: 0,
      gap: 0,
      hightlight_rect: {},
      bold_line_index_list: [0, 1, 4, 5],
      scroll_left: 0,
      isiOS: 0
    };
  },
  watch: {
    select_date_id_slider() {
      if (d3.select(".highlight_svg_div").node()) {
        let highlight_div_rect = d3
          .select(".highlight_svg_div")
          .node()
          .getBoundingClientRect();
        let svg_width = highlight_div_rect.width;
        let width = this.add_x_step * 2.6;
        let height = 8.5 * this.add_y_step;
        let x =
          svg_width -
          this.add_x_end -
          width / 2 -
          (this.showLens - 1 - this.select_date_id_slider) *
            2 *
            this.add_x_step -
          this.add_x_step * 1;
        let y = this.add_y_step * 0.5;
        this.hightlight_rect = {
          x,
          y,
          width,
          height
        };
      }
    }
  },
  computed: {
    cure_rect_path() {
      let res = "";
      this.country_dataset.forEach((d, index) => {
        res += index === 0 ? "M" : "L";
        let x = this.add_x_step * (2 * index + 1);
        let y =
          this.add_y_step * 0.5 +
          ((this.add_y_label[0] - d.cure_rate * 100) / this.add_y_label[0]) *
            2.5 *
            this.add_y_step;
        res += `${x},${y}`;
      });
      return res;
    },
    death_rect_path() {
      let res = "";
      this.country_dataset.forEach((d, index) => {
        res += index === 0 ? "M" : "L";
        let x = this.add_x_step * (2 * index + 1);
        let y =
          this.add_y_step * 0.5 +
          ((this.add_y_label[0] - d.death_rate * 100) / this.add_y_label[0]) *
            2.5 *
            this.add_y_step;
        res += `${x},${y}`;
      });
      return res;
    }
  },
  methods: {
    total_bar_width(d) {
      let total_x_label = this.total_x_label[this.select_date_id];
      if (d >= total_x_label[total_x_label.length - 2]) {
        let cal_d = d - total_x_label[total_x_label.length - 2];
        let scale_d =
          total_x_label[total_x_label.length - 1] -
          total_x_label[total_x_label.length - 2];
        let scale_width = this.total_x_step * 1.5;
        let cal_width = (cal_d / scale_d) * scale_width;
        return cal_width + this.total_x_step * (total_x_label.length - 2);
      } else {
        // console.log(d, this.total_x_label[this.total_x_label.length - 3], this.total_step_x, (this.total_x_label.length - 3))
        return (
          (d / total_x_label[total_x_label.length - 3]) *
          this.total_x_step *
          (total_x_label.length - 3)
        );
      }
    },
    num2text(num) {
      let result = "";
      if (num === 0) return "0";
      let t = 0;
      while (num > 0) {
        if (t == 3) {
          result += ",";
          t = 0;
        }
        result += num % 10;
        num = parseInt(num / 10);
        t++;
      }
      return result
        .split("")
        .reverse()
        .join("");
    },
    set_total_svg_params() {
      let total_svg_div_rect = d3
        .select("#total_svg_div")
        .node()
        .getBoundingClientRect();
      this.total_svg_width = total_svg_div_rect.width;
      this.total_svg_height = total_svg_div_rect.height;
      this.total_x_begin = 0.12 * this.total_svg_width;
      this.total_x_step =
        (total_svg_div_rect.width - this.total_x_begin) /
        (this.total_x_label[0] ? this.total_x_label[0].length : 1);
    },
    set_add_svg_params() {
      let tmp = d3
        .select(".life_svg_div")
        .node()
        .getBoundingClientRect();
      // console.log(".life_svg_div", tmp)
      let add_svg_div_rect = d3
        .select(".life_svg_div_big")
        .node()
        .getBoundingClientRect();
      this.add_svg_width = (tmp.width * this.dataLens) / this.showLens;
      // this.add_svg_width = add_svg_div_rect.width;
      this.add_svg_height = add_svg_div_rect.height;
      this.add_y_step = this.add_svg_height / 9.5;
      this.add_x_step = this.add_svg_width / 2 / (this.dataLens + 0.2);
      this.add_x_end = this.add_svg_width - 2 * this.dataLens * this.add_x_step;
      // console.log('add_svg_div_rect', add_svg_div_rect);
      // console.log('this.add_x_step', this.add_x_step)
    },
    compute_total_x_label(dataset) {
      let total_x_label = [];

      dataset.forEach(data => {
        let max = 0;
        let gap_left = 0;
        let gap_right = 99999999;
        data.forEach(d => {
          if (d.diagnosis > max) max = d.diagnosis;
          if (d.diagnosis < gap_right) gap_right = d.diagnosis;
          let tmp = d.cure + d.death;
          if (tmp > gap_left) gap_left = tmp;
        });
        // console.log(gap_left, gap_right, max);
        gap_left = gap_left > 500 ? Math.ceil(gap_left / 1000) * 1000 : 500;
        gap_right =
          gap_right > 1000 ? Math.floor(gap_right / 1000) * 1000 : 500;
        max =
          max < 10000
            ? Math.ceil(max / 1000) * 1000
            : Math.ceil(max / 10000) * 10000;
        // console.log(gap_left, gap_right, max);

        let tmp = [0];
        for (let i = 1; i <= 5; i++) {
          tmp.push((gap_left / 5) * i);
        }
        tmp.push(gap_right, max);
        // console.log(tmp)
        total_x_label.push(tmp);
      });
      this.total_x_label = total_x_label;
    },
    compute_add_y_label() {
      let max_rate = 0;
      let max_cure = 0;
      let max_death = 0;
      // console.log('this.country_dataset', this.country_dataset)
      this.country_dataset.forEach(data => {
        if (max_rate < data.cure_rate) max_rate = data.cure_rate;
        if (max_rate < data.death_rate) max_rate = data.death_rate;

        if (max_cure < data.cure) max_cure = data.cure;
        if (max_death < data.death) max_death = data.death;
      });
      // console.log(max_rate, max_cure, max_death);
      max_rate = Math.ceil((max_rate * 100) / 5) * 5;
      max_cure = Math.ceil(max_cure / 400) * 400;
      max_death = Math.ceil(max_death / 400) * 400;
      // console.log(max_rate, max_cure, max_death);
      this.add_y_label = [
        max_rate,
        0,
        max_cure,
        max_cure / 2,
        0,
        0,
        max_death / 2,
        max_death
      ];
    },
    async initData_pku() {
      let getDataUrl = "https://tanshaocong.github.io/2019-nCoV/map.csv";
      let data_tmp = await d3.csv(getDataUrl);
      // let data_tmp = await d3.csv("/map.csv");
      // console.log('get data from pku', data_tmp)
      let day_begin = 10;
      let month_begin = 1;

      let country_dataset_ = [];
      data_tmp.forEach(data => {
        if (data["类别"] === "国家级") {
          let month = data["公开时间"].split("月")[0];
          let day = data["公开时间"].split("日")[0].split("月")[1];
          if (
            month > month_begin ||
            (month == month_begin && day >= day_begin)
          ) {
            country_dataset_.push({
              cure: data["新增治愈出院数"] ? +data["新增治愈出院数"] : 0,
              death: data["新增死亡数"] ? +data["新增死亡数"] : 0,
              diagnosis: data["新增确诊病例"] ? +data["新增确诊病例"] : 0,
              hejian: data["核减"] ? +data["核减"] : 0,
              month,
              day
            });
            let len = country_dataset_.length;
            country_dataset_[len - 1]["total_cure"] =
              len > 1 ? country_dataset_[len - 2]["total_cure"] : 0;
            country_dataset_[len - 1]["total_cure"] +=
              country_dataset_[len - 1]["cure"];
            country_dataset_[len - 1]["total_death"] =
              len > 1 ? country_dataset_[len - 2]["total_death"] : 0;
            country_dataset_[len - 1]["total_death"] +=
              country_dataset_[len - 1]["death"];
            country_dataset_[len - 1]["total_diagnosis"] =
              len > 1 ? country_dataset_[len - 2]["total_diagnosis"] : 0;
            country_dataset_[len - 1]["total_diagnosis"] +=
              country_dataset_[len - 1]["diagnosis"] +
              country_dataset_[len - 1]["hejian"];
            country_dataset_[len - 1]["cure_rate"] =
              country_dataset_[len - 1]["total_cure"] /
              country_dataset_[len - 1]["total_diagnosis"];
            country_dataset_[len - 1]["death_rate"] =
              country_dataset_[len - 1]["total_death"] /
              country_dataset_[len - 1]["total_diagnosis"];
          }
        }
      });
      let hubei_dataset_ = [];
      data_tmp.forEach(data => {
        if (data["类别"] === "省级" && data["省份"] === "湖北") {
          let month = data["公开时间"].split("月")[0];
          let day = data["公开时间"].split("日")[0].split("月")[1];
          if (
            month > month_begin ||
            (month == month_begin && day >= day_begin)
          ) {
            hubei_dataset_.push({
              cure: data["新增治愈出院数"] ? +data["新增治愈出院数"] : 0,
              death: data["新增死亡数"] ? +data["新增死亡数"] : 0,
              diagnosis: data["新增确诊病例"] ? +data["新增确诊病例"] : 0,
              hejian: data["核减"] ? +data["核减"] : 0,
              month,
              day
            });
            let len = hubei_dataset_.length;
            hubei_dataset_[len - 1]["total_cure"] =
              len > 1 ? hubei_dataset_[len - 2]["total_cure"] : 0;
            hubei_dataset_[len - 1]["total_cure"] +=
              hubei_dataset_[len - 1]["cure"];
            hubei_dataset_[len - 1]["total_death"] =
              len > 1 ? hubei_dataset_[len - 2]["total_death"] : 0;
            hubei_dataset_[len - 1]["total_death"] +=
              hubei_dataset_[len - 1]["death"];
            hubei_dataset_[len - 1]["total_diagnosis"] =
              len > 1 ? hubei_dataset_[len - 2]["total_diagnosis"] : 0;
            hubei_dataset_[len - 1]["total_diagnosis"] +=
              hubei_dataset_[len - 1]["diagnosis"] +
              hubei_dataset_[len - 1]["hejian"];
          }
        }
      });
      let wuhan_dataset_ = [];
      data_tmp.forEach(data => {
        if (
          data["类别"] === "地区级" &&
          data["省份"] === "湖北" &&
          data["城市"] === "武汉"
        ) {
          let month = data["公开时间"].split("月")[0];
          let day = data["公开时间"].split("日")[0].split("月")[1];
          if (
            month > month_begin ||
            (month == month_begin && day >= day_begin)
          ) {
            wuhan_dataset_.push({
              cure: data["新增治愈出院数"] ? +data["新增治愈出院数"] : 0,
              death: data["新增死亡数"] ? +data["新增死亡数"] : 0,
              diagnosis: data["新增确诊病例"] ? +data["新增确诊病例"] : 0,
              hejian: data["核减"] ? +data["核减"] : 0,
              month,
              day
            });
            let len = wuhan_dataset_.length;
            wuhan_dataset_[len - 1]["total_cure"] =
              len > 1 ? wuhan_dataset_[len - 2]["total_cure"] : 0;
            wuhan_dataset_[len - 1]["total_cure"] +=
              wuhan_dataset_[len - 1]["cure"];
            wuhan_dataset_[len - 1]["total_death"] =
              len > 1 ? wuhan_dataset_[len - 2]["total_death"] : 0;
            wuhan_dataset_[len - 1]["total_death"] +=
              wuhan_dataset_[len - 1]["death"];
            wuhan_dataset_[len - 1]["total_diagnosis"] =
              len > 1 ? wuhan_dataset_[len - 2]["total_diagnosis"] : 0;
            wuhan_dataset_[len - 1]["total_diagnosis"] +=
              wuhan_dataset_[len - 1]["diagnosis"] +
              wuhan_dataset_[len - 1]["hejian"];
          }
        }
      });
      let dataLens = this.dataLens;
      this.wuhan_dataset = wuhan_dataset_.splice(
        wuhan_dataset_.length - dataLens,
        dataLens
      );
      this.hubei_dataset = hubei_dataset_.splice(
        hubei_dataset_.length - dataLens,
        dataLens
      );
      // console.log(country_dataset_)
      this.country_dataset = country_dataset_.splice(
        country_dataset_.length - dataLens,
        dataLens
      );
      // console.log('三大数据get')
      // total_bar_chart
      let total_dataset = [];
      this.country_dataset.forEach((country_data, index) => {
        let wuhan_data = this.wuhan_dataset[index];
        let hubei_data = this.hubei_dataset[index];

        let wuhan = {
          title_1: "武汉",
          title_2: "",
          death: wuhan_data["total_death"],
          cure: wuhan_data["total_cure"],
          diagnosis: wuhan_data["total_diagnosis"]
        };

        let hubei_not_wuhan = {
          title_1: "湖北",
          title_2: "(除武汉)",
          death: hubei_data["total_death"] - wuhan_data["total_death"],
          cure: hubei_data["total_cure"] - wuhan_data["total_cure"],
          diagnosis:
            hubei_data["total_diagnosis"] - wuhan_data["total_diagnosis"]
        };

        let country_not_hubei = {
          title_1: "全国",
          title_2: "(除湖北)",
          death: country_data["total_death"] - hubei_data["total_death"],
          cure: country_data["total_cure"] - hubei_data["total_cure"],
          diagnosis:
            country_data["total_diagnosis"] - hubei_data["total_diagnosis"]
        };

        total_dataset.push([wuhan, hubei_not_wuhan, country_not_hubei]);
      });
      this.total_dataset = total_dataset;
      // console.log('total data is ok')
      this.compute_total_x_label(total_dataset);
      this.compute_add_y_label();
      // console.log('computed is ok', this.country_dataset)

      let date_list = [];
      this.country_dataset.forEach(d => {
        date_list.push({
          month: d.month,
          day: d.day
        });
      });
      this.date_list = date_list;
      this.select_date_id = date_list.length - 1;
      // console.log('this.select_date_id = date_list.length - 1', this.select_date_id)

      // console.log('datalist is ok')
      this.set_total_svg_params();
      this.set_add_svg_params();
      // console.log('total_svg params is ok')
      // this.set_slider();
      // console.log('slider is ok')
    },
    async getCountryDataset(test_url, month_begin = 1, day_begin = 20) {
      let body = {
        args: {
          req: {
            none: ""
          }
        },
        service: "THOuterDataServer",
        func: "getAreaInfo"
      };
      let request = {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify(body)
      };
      let data = await d3.json(test_url, request);
      let country_data = data.args.rsp;
      let country_dataset = [];
      country_data.chinaHistoryTotal.forEach(d => {
        let day = +d["day"].split(".")[1];
        let month = +d["day"].split(".")[0];
        if (month > month_begin || (month == month_begin && day >= day_begin)) {
          country_dataset.push({
            total_cure: d.heal,
            total_death: d.dead,
            total_diagnosis: d.confirm,
            cure_rate: d.heal / d.confirm,
            death_rate: d.dead / d.confirm,
            month,
            day
          });
        }
      });
      country_data.modifyHistoryTotal.forEach((d, i) => {
        let day = +d["day"].split(".")[1];
        let month = +d["day"].split(".")[0];
        if (month > month_begin || (month == month_begin && day >= day_begin)) {
          country_dataset[i]["cure"] = d.heal;
          country_dataset[i]["death"] = d.dead;
        }
      });
      return country_dataset;
    },
    async getHubeiDataset(test_url, month_begin = 1, day_begin = 1) {
      let body = {
        args: {
          req: {
            area: "湖北"
          }
        },
        service: "THOuterDataServer",
        func: "getCityInfo"
      };
      let request = {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify(body)
      };
      let data = await d3.json(test_url, request);
      // console.log(data.args.rsp, month_begin, day_begin);
      let hubei_dataset = [];
      data.args.rsp.areaHistory.forEach(d => {
        let day = +d["day"].split(".")[1];
        let month = +d["day"].split(".")[0];
        if (month > month_begin || (month == month_begin && day >= day_begin)) {
          hubei_dataset.push({
            total_cure: d.heal,
            total_death: d.dead,
            total_diagnosis: d.confirm,
            month,
            day
          });
        }
      });
      return hubei_dataset;
    },
    async getWuhanDataset(test_url, month_begin = 1, day_begin = 1) {
      let body = {
        args: {
          req: {
            area: "湖北"
          }
        },
        service: "THOuterDataServer",
        func: "getKeyCity"
      };
      let request = {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify(body)
      };
      let data = await d3.json(test_url, request);
      // console.log(data.args.rsp.cityHistory[0], month_begin, day_begin);
      let wuhan_dataset = [];
      data.args.rsp.cityHistory[0].history.forEach(d => {
        let day = +d["day"].split(".")[1];
        let month = +d["day"].split(".")[0];
        if (month > month_begin || (month == month_begin && day >= day_begin)) {
          wuhan_dataset.push({
            total_cure: d.heal,
            total_death: d.dead,
            total_diagnosis: d.confirm
          });
        }
      });
      return wuhan_dataset;
    },
    getTotalDatatest(country_dataset, hubei_dataset) {
      let total_dataset = [];
      country_dataset.forEach((country_data, index) => {
        // let wuhan_data = wuhan_dataset[index];
        let hubei_data = hubei_dataset[index];

        // let wuhan = {
        //   title_1: "武汉",
        //   title_2: "",
        //   death: wuhan_data["total_death"],
        //   cure: wuhan_data["total_cure"],
        //   diagnosis: wuhan_data["total_diagnosis"]
        // };

        let hubei_not_wuhan = {
          title_1: "湖北",
          title_2: "",
          death: hubei_data["total_death"],
          cure: hubei_data["total_cure"],
          diagnosis: hubei_data["total_diagnosis"]
        };

        let country_not_hubei = {
          title_1: "全国",
          title_2: "(除湖北)",
          death: country_data["total_death"] - hubei_data["total_death"],
          cure: country_data["total_cure"] - hubei_data["total_cure"],
          diagnosis:
            country_data["total_diagnosis"] - hubei_data["total_diagnosis"]
        };

        total_dataset.push([hubei_not_wuhan, country_not_hubei]);
      });
      return total_dataset;
    },
    initData_tencent(isTest = 0) {
      // this.country_dataset = this.getCountryDataset()
      let test_url = "https://ehcard-test.wecity.qq.com/api";
      let formal_url = "https://wechat.wecity.qq.com/api";
      let url = isTest ? test_url : formal_url;
      Promise.all([
        this.getCountryDataset(url),
        this.getHubeiDataset(url),
        // this.getWuhanDataset(url)
      ]).then(d => {
        // this.dataLens = Math.min(d[0].length, d[1].length, d[2].length);
        this.dataLens = Math.min(d[0].length, d[1].length);

        let country_flag = 0;
        let hubei_flag = 0;
        let last_hubei = d[1][d[1].length - 1];
        let last_country = d[0][d[0].length - 1];
        if (last_hubei.day - last_country.day === 1) {
          hubei_flag = 1;
        }
        if (last_hubei.day - last_country.day === -1) {
          country_flag = 1;
        }

        // console.log("dataLens", this.dataLens)
        let country_dataset = d[0].splice(
          d[0].length - this.dataLens - country_flag,
          this.dataLens
        );
        this.country_dataset = country_dataset;
        // console.log("country_dataset", country_dataset);

        let hubei_dataset = d[1].splice(
          d[1].length - this.dataLens - hubei_flag,
          this.dataLens
        );
        // console.log("hubei_dataset", hubei_dataset);
        // let wuhan_dataset = d[2].splice(
        //   d[2].length - this.dataLens,
        //   this.dataLens
        // );
        // console.log("wuhan_dataset", wuhan_dataset);

        let total_dataset = this.getTotalDatatest(
          country_dataset,
          hubei_dataset,
          // wuhan_dataset
        );
        // console.log("total_dataset", total_dataset);
        this.total_dataset = total_dataset;

        this.compute_total_x_label(total_dataset);
        this.compute_add_y_label();
        let date_list = [];
        this.country_dataset.forEach(d => {
          date_list.push({
            month: d.month,
            day: d.day
          });
        });
        this.date_list = date_list;
        this.select_date_id = date_list.length - 1;
        this.set_total_svg_params();
        this.set_add_svg_params();
        this.set_slider();
        // this.set_scroll_by_jquery();
        this.set_scroll_by_addEvent();
        this.dataViewWidth = d3
          .select(".life_svg_div")
          .node()
          .getBoundingClientRect().width;
      });
    },
    set_scroll_by_addEvent() {
      // console.log("set_scroll_by_addEvent Begin!!!!");
      let that = this;
      let timer = null;
      document
        .querySelector(".life_svg_div")
        .addEventListener("scroll", function(e) {
          // console.log("==========", e, e.target, e.target.scrollLeft);
          // console.log(e.target.scrollWidth, e.target.clientWidth);
          if (!that.isiOS) {
            that.scroll_left = e.target.scrollLeft;
            // console.log(timer)
            clearTimeout(timer);
            let tmp = that.scroll_left;
            that.max_scroll_distance = -that.dataViewWidth + that.add_svg_width;
            // console.log('that.max_scroll_distance', that.max_scroll_distance)
            // that.gap = that.max_scroll_distance - tmp;
            that.gap = Math.min(that.max_scroll_distance, Math.max(that.max_scroll_distance - tmp, 0));
            let t = Math.round(that.gap / (that.add_x_step * 2));
            // console.log(t)
            that.select_date_id_bar = that.dataLens - that.showLens - t;
            that.select_date_id =
              that.select_date_id_bar + that.select_date_id_slider;
            timer = setTimeout(
              tmp => {
                // console.log(tmp);
                if (tmp === that.scroll_left) {
                  that.max_scroll_distance =
                    -that.dataViewWidth + that.add_svg_width;
                  // that.gap = that.max_scroll_distance - tmp;
                  that.gap = Math.min(that.max_scroll_distance, Math.max(that.max_scroll_distance - tmp, 0));
                  let t = Math.round(that.gap / (that.add_x_step * 2));
                  // that.select_date_id_bar = that.dataLens - that.showLens - t
                  // that.select_date_id =  that.select_date_id_bar + that.select_date_id_slider
                  let fix_tmp =
                    that.max_scroll_distance - t * (that.add_x_step * 2);
                  e.target.scrollLeft = fix_tmp;
                }
              },
              100,
              tmp
            );
          }
          if (that.isiOS) {
            that.scroll_left =
              e.target.scrollLeft + e.target.scrollWidth - e.target.clientWidth;
            // console.log(timer)
            clearTimeout(timer);
            let tmp = that.scroll_left;
            that.max_scroll_distance = -that.dataViewWidth + that.add_svg_width;
            // console.log('that.max_scroll_distance', that.max_scroll_distance)
            // that.gap = that.max_scroll_distance - tmp;
            that.gap = Math.min(that.max_scroll_distance, Math.max(that.max_scroll_distance - tmp, 0));
            let t = Math.round(that.gap / (that.add_x_step * 2));
            // console.log(t)
            that.select_date_id_bar = that.dataLens - that.showLens - t;
            that.select_date_id =
              that.select_date_id_bar + that.select_date_id_slider;
            timer = setTimeout(
              tmp => {
                // console.log(tmp);
                if (tmp === that.scroll_left) {
                  that.max_scroll_distance =
                    -that.dataViewWidth + that.add_svg_width;
                  // that.gap = that.max_scroll_distance - tmp;
                  that.gap = Math.min(that.max_scroll_distance, Math.max(that.max_scroll_distance - tmp, 0));
                  let t = Math.round(that.gap / (that.add_x_step * 2));
                  // that.select_date_id_bar = that.dataLens - that.showLens - t
                  // that.select_date_id =  that.select_date_id_bar + that.select_date_id_slider
                  let fix_tmp =
                    that.max_scroll_distance - t * (that.add_x_step * 2);
                  e.target.scrollLeft =
                    fix_tmp - e.target.scrollWidth + e.target.clientWidth;
                }
              },
              100,
              tmp
            );
          }
        });
    },
    set_scroll_by_jquery() {
      let that = this;
      let timer = null;
      $(".life_svg_div").scroll(function() {
        clearTimeout(timer);
        // console.log("???");
        // console.log(this.scrollLeft);
        that.scroll_left = this.scrollLeft;
        let tmp = this.scrollLeft;
        that.max_scroll_distance = -that.dataViewWidth + that.add_svg_width;
        that.gap = that.max_scroll_distance - tmp;
        let t = Math.round(that.gap / (that.add_x_step * 2));
        that.select_date_id_bar = that.dataLens - that.showLens - t;
        that.select_date_id =
          that.select_date_id_bar + that.select_date_id_slider;
        timer = setTimeout(
          tmp => {
            // console.log(tmp);
            if (tmp === that.scroll_left) {
              that.max_scroll_distance =
                -that.dataViewWidth + that.add_svg_width;
              that.gap = that.max_scroll_distance - tmp;
              let t = Math.round(that.gap / (that.add_x_step * 2));
              // that.select_date_id_bar = that.dataLens - that.showLens - t
              // that.select_date_id =  that.select_date_id_bar + that.select_date_id_slider
              let fix_tmp =
                that.max_scroll_distance - t * (that.add_x_step * 2);
              this.scrollLeft = fix_tmp;
            }
          },
          100,
          tmp
        );
      });
    },
    set_slider() {
      let that = this;
      let DRAGWIDTH = d3
        .select("#slider")
        .node()
        .getBoundingClientRect().width;
      let DRAGHEIGHT = d3
        .select("#slider")
        .node()
        .getBoundingClientRect().height;
      let MARGIN = {
        left: 0.03 * DRAGWIDTH,
        right: 0.05 * DRAGWIDTH,
        top: 0,
        bottom: 0
      };
      let plotDragBars = function(svgId, total) {
        let svg = d3.select(`#${svgId}`);
        svg.attr("height", DRAGHEIGHT).attr("width", DRAGWIDTH);
        let canvas = svg
          .append("g")
          .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`);
        let width = DRAGWIDTH - MARGIN.left - MARGIN.right;
        let height = DRAGHEIGHT - MARGIN.top - MARGIN.bottom;
        // let width = total_svg_div_rect.width;
        // let height = 30;
        let w = width / total;
        let h = height * 0.8;
        let timeScale = d3
          .scaleLinear()
          .range([-0.2 * w, width - w * 1.2])
          .domain([0, total - 1]);
        let g = canvas.append("g");
        g.append("line")
          .attr("x1", -width * 0.02)
          .attr("x2", width + 0.22 * w)
          .attr("y1", height * 0.5)
          .attr("y2", height * 0.5)
          .style("stroke", "#ececec")
          .style("stroke-width", height * 0.2)
          .style("stroke-linecap", "round");
        // .classed("slider-container", true);
        let bar_g = g.append("g");
        let bars = [0, 1, 2];
        bar_g
          .append("rect")
          .attr("x", w * total - w * 1.2)
          .attr("y", height / 2 - h * 0.25)
          .attr("width", w * 1.4)
          .attr("height", h * 0.75)
          .attr("class", "bar_g")
          .attr("rx", w * 0.12)
          .attr("ry", w * 0.12)
          .classed("slider-rect-shadow", true);
        let target = g
          .append("rect")
          .attr("x", w * total - w * 1.2)
          .attr("y", height / 2 - h / 2)
          .attr("width", w * 1.4)
          .attr("height", h)
          .attr("rx", w * 0.12)
          .attr("ry", w * 0.12)
          .classed("slider-rect", true);
        g.append("g")
          .selectAll("rect")
          .data(bars)
          .enter()
          .append("rect")
          .attr("class", "bar_g")
          .attr("x", (d, i) => {
            return w * total - w * 1.2 + w * 0.43 + i * 0.25 * w;
          })
          .attr("y", height / 2 - h * 0.23)
          .attr("width", 0.04 * w)
          .attr("height", 0.46 * h)
          .style("fill", "#ffffff")
          .attr("rx", 0.02 * w)
          .attr("ry", 0.02 * w);
        target.call(
          d3
            .drag()
            .on("drag", function() {
              let x = Math.min(Math.max(-0.2 * w, d3.event.x), width - w * 1.2);
              let self = d3.select(this);
              self.attr("x", x);
              let timeIdx = Math.round(timeScale.invert(x));
              let position = timeIdx * w - 0.2 * w;
              self.attr("x", position);
              d3.selectAll(".bar_g").attr(
                "transform",
                `translate(${(timeIdx - total + 1) * w}, 0)`
              );
              that.select_date_id_slider = timeIdx;
              that.select_date_id =
                that.select_date_id_slider + that.select_date_id_bar;
            })
            .on("end", function() {})
        );
      };
      this.select_date_id_slider = this.showLens - 1;
      let svgId = "slider_svg";
      plotDragBars(svgId, this.showLens);
      this.select_date_id_bar = this.dataLens - this.showLens;
    }
  },
  mounted() {
    // this.initData_pku();
    this.initData_tencent();
    if (/(iPhone|iPad|iPod|iOS|Mac)/i.test(navigator.userAgent)) {
      if (
        /Safari/.test(navigator.userAgent) &&
        /Chrome/.test(navigator.userAgent)
      ) {
        this.isiOS = 0;
      } else {
        // console.log("isIOS");
        this.isiOS = 1;
      }
    }
    let u = navigator.userAgent;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
      this.isiOS = 1;
    }
  }
};
</script>

<style lang="less">
@border: 40px;
#container {
  position: absolute;
  left: @border;
  right: @border;
  // background: rgba(236, 236, 236, 0.2);
  text-align: left;
}

.title {
  font-weight: 500;
  font-size: 28 / 7.5vw;
}

.label_text {
  font-size: 16 / 7.5vw;
  fill: #919191;
  text-anchor: middle;
}

.bar_text {
  font-size: 18 / 7.5vw;
  fill: #ffffff;
}

.diagnosis {
  fill: #de5e5b;
  background: #de5e5b;
  color: #de5e5b;
}

.cure {
  fill: #62c298;
  background: #62c298;
  color: #62c298;
}

.death {
  // fill: #010604;
  // background: #010604;
  // color: #010604;
  fill: #535B65;
  background: #535B65;
  color: #535B65;
}

#head {
  margin-top: 50 / 7.5vw;
  vertical-align: middle;
  #left_border {
    // position: absolute;
    margin-top: 1.2vw;
    float: left;
    height: 4.3vw;
    width: 7 /7.5vw;
    border-radius: 3.5 /7.5vw;
    background: #00bad1;
  }
  #title {
    padding-left: 16 /7.5vw;
    font-size: 4.8vw;
    font-weight: 600;
    color: #333333;
    // border-left: 1vw solid #00bad1;
  }
  #description {
    margin-top: 1vw;
    margin-left: 18 /7.5vw;
    font-size: 2.8vw;
    color: #888888;
  }
}

#explanation {
  // position: relative;
  margin-top: 40 /7.5vw;
  height: 100%;
  // border: 1 /7.5vw solid red;
  #explanation_text {
    position: relative;
    top: 0 /7.5vw;
    line-height: 38 /7.5vw;
    font-size: 24 /7.5vw;
    border-radius: 1vw;
    // border: 1 /7.5vw solid green;
    padding: 35 /7.5vw 42 /7.5vw 42 /7.5vw 40 /7.5vw;
    background: #f9f9f9;
    // box-shadow: 1 /7.5vw 1 /7.5vw 1 /7.5vw rgba(0, 0, 0, 0.2);
    color: #888888;
  }
}

.description {
  margin-top: 2vw;
  margin-left: 1.5vw;
  color: #b2b2b2;
  font-size: 2.13333vw;
}

#total {
  margin-top: 50 / 7.5vw;
  #legend {
    margin-top: 4vw;
    height: 20 /7.5vw;
    .legend_part {
      float: right;
      margin-left: 1.5vw;
      .legend_text {
        float: left;
        margin-left: 1.5vw;
        font-size: 20 /7.5vw;
        margin-right: 2vw;
      }
      .icon {
        width: 18 /7.5vw;
        height: 18 /7.5vw;
        float: left;
        margin-top: 4 /7.5vw;
        border-radius: 0.4vw;
      }
    }
  }
  #total_svg_div {
    margin-top: 4vw;
    width: 100%;
    height: 25vw;
    // background: rgba(142, 170, 142, 0.2);
    // #total_svg {

    // }
    .total_label_line {
      stroke-width: 0.5 /7.5vw;
      stroke: #6f6f6f;
    }
  }
}

#add {
  #legend {
    margin-left: 15%;
    width: 80%;
    height: 6vw;
    // background: rgba(142, 170, 142, 0.1);
    .legend_part {
      vertical-align: middle;
      // text-align: center;
      position: relative;
      width: 25%;
      height: 100%;
      display: inline-block;
    }
    .legend_line_cure {
      position: absolute;
      top: 48%;
      left: 4vw;
      transform: translateY(-50%);
      width: 4vw;
      height: 0.2vw;
      border-bottom: 0.3vw dashed #62c298;
    }
    .legend_line_death {
      position: absolute;
      top: 48%;
      left: 4vw;
      transform: translateY(-50%);
      width: 4vw;
      height: 0.2vw;
      border-bottom: 0.3vw dashed #535B65;
    }
    .legend_icon_line {
      position: absolute;
      top: 50%;
      left: 8vw;
      transform: translateY(-50%);
      width: 1.6vw;
      height: 1.8vw;
      border-radius: 0.4vw;
    }
    .legend_text_line {
      position: absolute;
      top: 50%;
      left: 11vw;
      transform: translateY(-50%);
      font-size: 2.5vw;
      line-height: 2.8vw;
      height: 3vw;
      width: 12vw;
    }
    .legend_icon {
      position: absolute;
      top: 50%;
      left: 5vw;
      transform: translateY(-50%);
      width: 2vw;
      height: 2vw;
      border-radius: 0.4vw;
    }
    .legend_text {
      position: absolute;
      top: 50%;
      left: 8vw;
      transform: translateY(-50%);
      font-size: 2.5vw;
      line-height: 2.8vw;
      width: 12vw;
    }
  }
  .life_div {
    margin-top: 0;
    width: 100%;
    height: 70vw;
    // border: 1px red solid;
    // background: rgba(142, 170, 142, 0.1);

    .y_label {
      float: left;
      width: 9%;
      height: 100%;
      // background: rgba(142, 170, 142, 0.1);
      text-align: right;
      font-size: 18/7.5vw;
      color: #888888;
      margin-top: 2.4vw;
    }
    .life_svg_div {
      // position: relative;
      margin-left: 2%;
      float: left;
      width: 88%;
      height: 100%;
      // background: rgba(142, 170, 142, 0.1);
      overflow-x: scroll;
      overflow-y: hidden;
      // -webkit-overflow-scrolling: touch;
      // overflow-y: hidden;
      direction: rtl;
      text-align: center;
      &::-webkit-scrollbar {
        display: none;
      }
      .highlight_svg_div {
        position: absolute;
        width: 100%;
        height: 70vw;
        // overflow: hidden;
        // background: rgba(133, 113, 113, 0.3);
      }
    }
  }

  #slider {
    margin-left: 7.2%;
    margin-top: 0vw;
    width: 94.8%;
    height: 7vw;
    // border: 1px solid red;
    position: relative;
    #slider_svg {
      position: absolute;
      left: 0;
      top: 0;
      // background:rgba(105, 77, 77, 0.5);
    }
  }
}
.slider-container {
  stroke: #ececec;
  stroke-width: 10px;
  stroke-linecap: round;
}

.slider-rect {
  // box-shadow: 0 0 5vw 0 rgba(0, 0, 0, 0.5);
  fill: url(#slider_linear);
  // filter: url(#shadow);
}

.slider-rect-shadow {
  // box-shadow: 0 0 5vw 0 rgba(0, 0, 0, 0.5);
  // fill: url(#slider_linear);
  filter: url(#shadow);
  fill: #00bad1;
}
</style>