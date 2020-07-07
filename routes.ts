import { Router } from 'https://deno.land/x/oak/mod.ts';

import status from './Controllers/status.ts';

const router = new Router();

router.get('/', status);

export default router;