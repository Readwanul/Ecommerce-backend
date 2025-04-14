
import { SetMetadata } from '@nestjs/common';
import { Role } from './roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
export const RolesGuard = () => SetMetadata(ROLES_KEY, true);
export const RolesEnum = () => SetMetadata(ROLES_KEY, true);

