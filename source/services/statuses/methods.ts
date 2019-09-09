import { Method } from './../../method.types'
import { GetPayload, ListPayload } from './../../payload.types'
import { Status } from './entities'

export interface StatusesMethods {
  // https://dev.1c-bitrix.ru/rest_help/crm/auxiliary/status/crm_status_add.php
  readonly [Method.CRM_STATUS_ADD]: {
    readonly type: Status
    readonly payload: GetPayload<number>
    readonly params: {
      readonly fields: Partial<Status>
    }
  }

  // https://dev.1c-bitrix.ru/rest_help/crm/auxiliary/status/crm_status_get.php
  readonly [Method.CRM_STATUS_GET]: {
    readonly type: Status
    readonly payload: GetPayload<Status>
    readonly params: {
      readonly id: string
    }
  }

  // https://dev.1c-bitrix.ru/rest_help/crm/auxiliary/status/crm_status_list.php
  readonly [Method.CRM_STATUS_LIST]: {
    readonly type: Status
    readonly payload: ListPayload<Status>
    readonly params: {
      // @todo should be refined to only available properties
      readonly order?: Record<string, any>
      readonly filter?: Record<string, any>
    }
  }

  // https://dev.1c-bitrix.ru/rest_help/crm/auxiliary/status/crm_status_update.php
  readonly [Method.CRM_STATUS_UPDATE]: {
    readonly type: Status
    readonly payload: GetPayload<boolean>
    readonly params: {
      readonly id: string
      readonly fields: Record<string, any>
    }
  }

}
