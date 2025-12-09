# 🚀 Deployment Guide - Happy Garten

Guía completa para desplegar la aplicación en tu VPS con Docker + Traefik.

---

## 📋 Requisitos Previos

### En tu máquina local:
- Git configurado
- SSH key configurada para `daniel@217.154.5.146:19888`
- Bash shell (Linux/Mac/WSL en Windows)

### En el VPS:
- Docker y Docker Compose instalados
- Traefik corriendo con:
  - Red `traefik_proxy` creada
  - Cert resolver `ncpresolver` configurado
  - Email SSL: `to@danielcipolla.com`

---

## 🎯 Deployment Rápido

### 1. Hacer Deploy

Desde la raíz del proyecto `happy-garten`:

```bash
chmod +x deploy.sh
./deploy.sh
```

El script automáticamente:
1. Conecta al VPS via SSH
2. Clona/actualiza el repositorio
3. Construye la imagen Docker
4. Inicia el contenedor con Traefik
5. Limpia imágenes antiguas

### 2. Verificar Deployment

Accede a: **https://happy-garten.rshamburg.de**

---

## 🔧 Comandos Útiles

### Ver logs en tiempo real:
```bash
ssh -p 19888 daniel@217.154.5.146 'docker logs -f happy-garten'
```

### Reiniciar contenedor:
```bash
ssh -p 19888 daniel@217.154.5.146 'cd ~/Projects/websites/happy-garten && docker compose restart'
```

### Ver estado de contenedores:
```bash
ssh -p 19888 daniel@217.154.5.146 'docker ps -f name=happy-garten'
```

### Acceder al contenedor:
```bash
ssh -p 19888 daniel@217.154.5.146 'docker exec -it happy-garten sh'
```

### Rebuild forzado (si hay cambios mayores):
```bash
ssh -p 19888 daniel@217.154.5.146 'cd ~/Projects/websites/happy-garten && docker compose down && docker compose build --no-cache && docker compose up -d'
```

---

## 🏗️ Estructura de Archivos Docker

```
happy-garten/
├── Dockerfile              # Multi-stage build optimizado
├── docker-compose.yml      # Configuración con labels de Traefik
├── .dockerignore          # Archivos excluidos del build
├── deploy.sh              # Script de deployment automático
├── next.config.ts         # Configurado con output: 'standalone'
└── DEPLOYMENT.md          # Esta guía
```

---

## 🐳 Arquitectura Docker

### Dockerfile (Multi-stage):
1. **Stage: deps** - Instala dependencias de producción
2. **Stage: builder** - Construye la aplicación Next.js
3. **Stage: runner** - Imagen final optimizada (Alpine Linux)

### Optimizaciones:
- Imagen base: `node:20-alpine` (~40MB vs ~900MB con node:20)
- Build standalone de Next.js (solo archivos necesarios)
- Usuario no-root (`nextjs:nodejs`)
- Cache de layers para builds rápidos

---

## 🌐 Configuración Traefik

El `docker-compose.yml` incluye:

- **Router HTTPS**: `happy-garten.rshamburg.de` con SSL automático
- **Redirect HTTP→HTTPS**: Configurado automáticamente
- **Cert Resolver**: `ncpresolver` (Let's Encrypt)
- **Red**: `traefik_proxy` (externa)
- **Puerto interno**: 3000 (Next.js)

---

## 🔍 Troubleshooting

### ❌ Error: "Container failed to start"
**Solución:**
```bash
ssh -p 19888 daniel@217.154.5.146 'docker logs happy-garten'
```
Revisa los logs para ver el error específico.

---

### ❌ Error: "network traefik_proxy not found"
**Causa:** La red de Traefik no existe.

**Solución:**
```bash
ssh -p 19888 daniel@217.154.5.146 'docker network create traefik_proxy'
```

---

### ❌ Error: "Port 3000 already in use"
**Causa:** Otro contenedor está usando el puerto 3000.

**Solución:**
```bash
# Ver qué contenedor usa el puerto
ssh -p 19888 daniel@217.154.5.146 'docker ps | grep 3000'

# Cambiar el puerto en docker-compose.yml si es necesario
```

---

### ⚠️ El sitio no carga (504 Gateway Timeout)
**Posibles causas:**
1. Contenedor no está corriendo: `docker ps -f name=happy-garten`
2. Next.js está compilando: Espera 30-60 segundos después del deploy
3. Error en el código: Revisa logs con `docker logs happy-garten`

---

### 🔐 SSL no funciona
**Verificar:**
1. Traefik está corriendo: `docker ps | grep traefik`
2. Email SSL configurado en Traefik
3. Puerto 443 abierto en firewall
4. DNS apunta correctamente a `217.154.5.146`

---

## 📊 Monitoreo

### Ver uso de recursos:
```bash
ssh -p 19888 daniel@217.154.5.146 'docker stats happy-garten --no-stream'
```

### Ver tamaño de imágenes:
```bash
ssh -p 19888 daniel@217.154.5.146 'docker images | grep happy-garten'
```

---

## 🔄 Workflow de Desarrollo

1. **Desarrollo local**: `npm run dev`
2. **Commit y push**: `git push origin main`
3. **Deploy**: `./deploy.sh`
4. **Verificar**: Accede a `https://happy-garten.rshamburg.de`

---

## 📞 Soporte

Si encuentras problemas:
1. Revisa los logs: `docker logs happy-garten`
2. Verifica que Traefik esté corriendo
3. Comprueba que el DNS esté configurado correctamente
4. Asegúrate de que el firewall permita puertos 80/443

---

## ✅ Checklist Pre-Deploy

- [ ] SSH key configurada y funciona
- [ ] Traefik corriendo en el VPS
- [ ] Red `traefik_proxy` existe
- [ ] DNS de `happy-garten.rshamburg.de` apunta a `217.154.5.146`
- [ ] Puerto 443 abierto en firewall
- [ ] Cambios commiteados y pusheados a GitHub

---

**¡Listo! Tu aplicación debería estar funcionando en producción.** 🎉
