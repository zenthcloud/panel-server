/**
 * ==============================================================
 * Project     : Zenth Cloud – Zenth Panel
 * File        : vite.config.ts
 * Version     : 1.0.0
 * Description : Vite Configuration for Zenth Cloud Client
 * Author      : Sky Genesis Enterprise
 * Created on  : 2025-07-19
 * License     : AGPLv3
 * Forked from : N/A
 * Modified by : Liam Dispa <liam.dispa@skygenesisenterprise.com> (2025-07-20)
 * ==============================================================
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
