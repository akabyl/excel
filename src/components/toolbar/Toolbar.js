/* eslint-disable quotes */
import {ExcelComponents} from "../../core/ExcelComponents";

export class Toolbar extends ExcelComponents {
  static className = 'excel__toolbar'
  constructor($root) {
    super($root, {
      name: 'toolbar',
      listeners: ['click']
    })
  }
  toHTML() {
    return `
      <div class="button">
      <i class="material-symbols-outlined">
        format_align_left
      </i>
    </div>
    <div class="button">
      <i class="material-symbols-outlined">
        format_align_center
      </i>
    </div>
    <div class="button">
      <i class="material-symbols-outlined">
        format_align_right
      </i>
    </div>
    <div class="button">
      <i class="material-symbols-outlined">
        format_bold
      </i>
    </div>
    <div class="button">
      <i class="material-symbols-outlined">
        format_italic
      </i>
    </div>
    <div class="button">
      <i class="material-symbols-outlined">
        format_underlined
      </i>
    </div>
    `
  }
  onClick(event) {
    console.log(event.target);
  }
}
