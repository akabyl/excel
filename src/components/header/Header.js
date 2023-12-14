// eslint-disable-next-line quotes
import {ExcelComponents} from "../../core/ExcelComponents";

export class Header extends ExcelComponents {
  static className = 'excel__header'
  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })
  }
  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица" />
      <div>
        <div class="button">
          <i class="material-symbols-outlined">
            exit_to_app
          </i>
        </div>
        <div class="button">
          <i class="material-symbols-outlined">
            delete
          </i>
        </div>
      </div>
    `
  }
}
