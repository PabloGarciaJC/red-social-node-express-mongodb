## ---------------------------------------------------------
## Imagen base
## ---------------------------------------------------------
ARG BASE_IMAGE
ARG BASE_IMAGE_VERSION
ARG BASE_IMAGE_VARIANT
FROM ${BASE_IMAGE}:${BASE_IMAGE_VERSION}-${BASE_IMAGE_VARIANT}

## ---------------------------------------------------------
## Argumentos
## ---------------------------------------------------------

ARG NEW_UID
ARG NEW_GID
ARG MY_USER
ARG MY_GROUP

## ---------------------------------------------------------
## Crear usuario y grupo
## ---------------------------------------------------------
RUN apk add --no-cache bash sudo shadow && \
    EXISTING_GROUP=$(getent group ${NEW_GID} | cut -d: -f1) && \
    if [ -z "$EXISTING_GROUP" ]; then \
        groupadd -g ${NEW_GID} -r ${MY_GROUP}; \
        GROUP_NAME=${MY_GROUP}; \
    else \
        GROUP_NAME=$EXISTING_GROUP; \
    fi && \
    EXISTING_USER=$(getent passwd ${NEW_UID} | cut -d: -f1) && \
    if [ -z "$EXISTING_USER" ]; then \
        useradd -u ${NEW_UID} -m -s /bin/bash -g "$GROUP_NAME" ${MY_USER}; \
    fi

## ---------------------------------------------------------
## Instalación de herramientas básicas
## ---------------------------------------------------------
## Ya se instalaron en el paso anterior

## ---------------------------------------------------------
## Permisos sudo para el usuario por defecto 'node'
## ---------------------------------------------------------
RUN echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node \
    && chmod 0440 /etc/sudoers.d/node

## ---------------------------------------------------------
## Configurar bash
## ---------------------------------------------------------
RUN mkdir -p /home/${MY_USER} && \
    touch /home/${MY_USER}/.bashrc && \
    REAL_USER=$(getent passwd ${NEW_UID} | cut -d: -f1) && \
    REAL_GROUP=$(getent group ${NEW_GID} | cut -d: -f1) && \
    echo ". /etc/terminal" | tee -a /home/${MY_USER}/.bashrc /root/.bashrc && \
    chown "$REAL_USER:$REAL_GROUP" /home/${MY_USER}/.bashrc
COPY ./server/bash/terminal /etc/terminal
COPY ./server/bash/sudo-user /etc/sudoers.d/sudo-user

## ---------------------------------------------------------
## Configurar scripts
## ---------------------------------------------------------

# COPY ./server/scripts/entrypoint.sh /usr/local/bin/entrypoint.sh
# COPY ./server/scripts/wait-for-mysql.sh /usr/local/bin/wait-for-mysql.sh
# RUN chmod +x /usr/local/bin/entrypoint.sh /usr/local/bin/wait-for-mysql.sh

## ---------------------------------------------------------
## Directorio de trabajo y puerto expuesto
## ---------------------------------------------------------
WORKDIR /var/www/html
EXPOSE 5173

## ---------------------------------------------------------
## Mantener el contenedor activo
## ---------------------------------------------------------
CMD ["tail", "-f", "/dev/null"]
