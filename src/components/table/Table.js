// eslint-disable-next-line quotes
import {ExcelComponents} from "../../core/ExcelComponents";
import {createTable} from './table.template';
import {resizeHandler} from "./table.resize";
import { shouldResize } from "./table.functions";

export class Table extends ExcelComponents {
  static className = 'excel__table'
  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(21)
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
