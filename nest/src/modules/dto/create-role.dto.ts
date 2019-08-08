import { IsNotEmpty, MaxLength } from 'class-validator';
import {
  MAX_LENGTH_ROLE_NAME,
  MAX_LENGTH_ROLE_DESC,
  MAX_LENGTH_ROLE_TOKEN,
} from '@/constants/validate.const';
import { genMsgOfLength } from '@/utils/genValidateMsg';

export class CreateRoleDto {
  @IsNotEmpty({ message: '角色名不能为空' })
  @MaxLength(
    MAX_LENGTH_ROLE_NAME,
    genMsgOfLength('角色名', MAX_LENGTH_ROLE_NAME),
  )
  name: string;

  @IsNotEmpty({ message: '角色标识不能为空' })
  @MaxLength(
    MAX_LENGTH_ROLE_TOKEN,
    genMsgOfLength('角色标识', MAX_LENGTH_ROLE_TOKEN),
  )
  token: string;

  @MaxLength(
    MAX_LENGTH_ROLE_DESC,
    genMsgOfLength('角色描述', MAX_LENGTH_ROLE_DESC),
  )
  desc: string = '';
}
