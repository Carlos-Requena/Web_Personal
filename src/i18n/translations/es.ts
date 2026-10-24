/**
 * Spanish (es) — Default locale UI strings
 *
 * This is the source-of-truth dictionary. All translation keys are defined here.
 * Other locale files only need to provide translations for keys they override.
 */

export const uiStrings = {
  // ── Navigation ──────────────────────────────────────────────
  'nav.home': 'Inicio',
  'nav.projects': 'Proyectos',
  'nav.posts': 'Artículos',
  'nav.categories': 'Categorías',
  'nav.tags': 'Etiquetas',
  'nav.archives': 'Archivo',
  'nav.about': 'Sobre mí',

  // ── Common ──────────────────────────────────────────────────
  'common.search': 'Buscar',
  'common.close': 'Cerrar',
  'common.copy': 'Copiar',
  'common.copied': 'Copiado',
  'common.loading': 'Cargando...',
  'common.noResults': 'No se encontraron resultados',
  'common.backToTop': 'Volver arriba',
  'common.darkMode': 'Modo oscuro',
  'common.lightMode': 'Modo claro',
  'common.toggleTheme': 'Cambiar tema',
  'common.language': 'Idioma',
  'common.toc': 'Índice',
  'common.expand': 'Expandir',
  'common.collapse': 'Contraer',
  'common.menuLabel': 'Menú {name}',

  // ── Post ────────────────────────────────────────────────────
  'post.readMore': 'Leer más',
  'post.totalPosts': '{count} artículos',
  'post.stickyPosts': 'Artículos destacados',
  'post.postList': 'Lista de artículos',
  'post.featuredCategories': 'Categorías destacadas',
  'post.yearPosts': '{count} artículos',
  'post.readingTime': '{time} min de lectura',
  'post.readingMinutes': '{time} min',
  'post.wordCount': '{count} palabras',
  'post.publishedAt': 'Publicado el {date}',
  'post.updatedAt': 'Actualizado el {date}',
  'post.prevPost': 'Anterior',
  'post.nextPost': 'Siguiente',
  'post.relatedPosts': 'Proyectos relacionados',
  'post.seriesNavigation': 'Navegación de series',
  'post.seriesPrev': 'Anterior',
  'post.seriesNext': 'Siguiente',
  'post.fallbackNotice': 'Este artículo aún no está disponible en {lang}. Mostrando el original.',
  'post.draft': 'Borrador',
  'post.readingProgress': 'Progreso de lectura',
  'post.pinned': 'Fijado',
  'post.noPostsFound': 'No se encontraron artículos',

  // ── Categories & Tags ───────────────────────────────────────
  'category.allCategories': 'Todas las categorías',
  'category.postsInCategory': 'Artículos en {name}',
  'category.totalCategories': '{count} categorías',
  'category.categoryLabel': 'Categoría',
  'tag.allTags': 'Todas las etiquetas',
  'tag.postsWithTag': 'Artículos con la etiqueta "{name}"',
  'tag.totalTags': '{count} etiquetas',
  'tag.all': 'Todos',
  'tag.postCount': '{count} artículos',

  // ── Archives ────────────────────────────────────────────────
  'archives.title': 'Archivo',
  'archives.totalPosts': '{count} artículos',

  // ── Search ──────────────────────────────────────────────────
  'search.placeholder': 'Buscar por palabra clave',
  'search.label': 'Buscar en este sitio',
  'search.clear': 'Limpiar',
  'search.loadMore': 'Cargar más resultados',
  'search.filters': 'Filtros',
  'search.noResults': 'No se encontraron resultados',
  'search.manyResults': '[COUNT] resultados',
  'search.oneResult': '[COUNT] resultado',
  'search.altSearch': 'Sin resultados. Mostrando resultados para [DIFFERENT_TERM]',
  'search.suggestion': 'Sin resultados. Intenta buscar:',
  'search.searching': 'Buscando [SEARCH_TERM]...',
  'search.dialogTitle': 'Buscar artículos',
  'search.dialogHint': 'Escribe palabras clave para buscar',
  'search.dialogClose': 'Cerrar',
  'search.dialogSelect': 'Seleccionar',
  'search.dialogOpen': 'Abrir',

  // ── Code Block ──────────────────────────────────────────────
  'code.copy': 'Copiar código',
  'code.copied': '¡Copiado!',
  'code.fullscreen': 'Pantalla completa',
  'code.exitFullscreen': 'Salir de pantalla completa',
  'code.wrapLines': 'Ajuste de línea',
  'code.viewSource': 'Ver fuente',
  'code.viewRendered': 'Ver renderizado',

  // ── Diagram / Infographic ───────────────────────────────────
  'diagram.fullscreen': 'Pantalla completa',
  'diagram.exitFullscreen': 'Salir de pantalla completa',
  'diagram.viewSource': 'Ver fuente',
  'diagram.zoomIn': 'Acercar',
  'diagram.zoomOut': 'Alejar',
  'diagram.resetZoom': 'Restablecer zoom',
  'diagram.fitToScreen': 'Ajustar a pantalla',
  'diagram.download': 'Descargar imagen',

  // ── Image Lightbox ──────────────────────────────────────────
  'image.zoomIn': 'Acercar',
  'image.zoomOut': 'Alejar',
  'image.resetZoom': 'Restablecer',
  'image.resetZoomRotate': 'Restablecer zoom y rotación',
  'image.rotate': 'Rotar 90°',
  'image.close': 'Cerrar',
  'image.prev': 'Anterior',
  'image.next': 'Siguiente',
  'image.counter': '{current} / {total}',
  'image.hintDesktop': 'Doble clic para ampliar · Rueda/pellizco para escalar',
  'image.hintMobile': 'Doble toque para ampliar · Pellizco para escalar',

  // ── Media Controls ──────────────────────────────────────────
  'media.play': 'Reproducir',
  'media.pause': 'Pausar',
  'media.mute': 'Silenciar',
  'media.unmute': 'Activar sonido',
  'media.fullscreen': 'Pantalla completa',
  'media.exitFullscreen': 'Salir de pantalla completa',
  'media.pictureInPicture': 'Imagen en imagen',
  'media.playbackSpeed': 'Velocidad de reproducción',
  'media.download': 'Descargar',
  'media.prevTrack': 'Pista anterior',
  'media.nextTrack': 'Pista siguiente',
  'media.volume': 'Volumen {percent}%',
  'media.progress': 'Progreso de reproducción',
  'media.playModeOrder': 'Reproducción ordenada',
  'media.playModeRandom': 'Aleatorio',
  'media.playModeLoop': 'Repetir uno',

  // ── Footer ──────────────────────────────────────────────────
  'footer.poweredBy': 'Desarrollado con {name}',
  'footer.theme': 'Tema',
  'footer.totalPosts': '{count} artículos',
  'footer.totalWords': '{count} palabras',
  'footer.totalWordsTitle': 'Total de palabras',
  'footer.readingTimeTitle': 'Tiempo total de lectura',
  'footer.postCountTitle': 'Total de artículos',
  'footer.runningDays': 'En línea hace {days} días',
  'footer.wordUnit': 'palabras',
  'footer.postUnit': 'artículos',

  // ── Pagination ──────────────────────────────────────────────
  'pagination.prev': 'Anterior',
  'pagination.next': 'Siguiente',
  'pagination.page': 'Página {page}',
  'pagination.currentPage': 'Página {page}, página actual',
  'pagination.of': 'de {total}',

  // ── Breadcrumb ──────────────────────────────────────────────
  'breadcrumb.home': 'Inicio',
  'breadcrumb.goToCategory': 'Ir a la categoría {name}',

  // ── Floating Group ──────────────────────────────────────────
  'floating.backToTop': 'Subir',
  'floating.scrollToBottom': 'Bajar',
  'floating.toggleTheme': 'Cambiar tema',
  'floating.christmas': 'Activar efectos de Navidad',
  'floating.bgm': 'Música de fondo',
  'floating.toggleToolbar': 'Mostrar/ocultar barra de herramientas',

  // ── Announcement ────────────────────────────────────────────
  'announcement.title': 'Anuncios',
  'announcement.new': 'Nuevo',
  'announcement.count': '{count} anuncios',
  'announcement.unreadCount': '{count} sin leer',
  'announcement.markAllRead': 'Marcar todo como leído',
  'announcement.dismiss': 'Cerrar',
  'announcement.learnMore': 'Saber más',
  'announcement.empty': 'Sin anuncios',
  'announcement.emptyHint': 'Los nuevos anuncios aparecerán aquí',

  // ── Quiz ────────────────────────────────────────────────────
  'quiz.check': 'Comprobar',
  'quiz.correct': '¡Correcto!',
  'quiz.incorrect': 'Incorrecto, inténtalo de nuevo',
  'quiz.incorrectAnswer': 'Incorrecto. La respuesta correcta es {answer}.',
  'quiz.submitAnswer': 'Enviar ({count} seleccionados)',
  'quiz.commonMistakes': 'Errores comunes:',
  'quiz.parseFailed': 'Error al analizar la pregunta',
  'quiz.showAnswer': 'Ver respuesta',
  'quiz.hideAnswer': 'Ocultar respuesta',
  'quiz.reset': 'Reiniciar',
  'quiz.score': 'Puntuación: {score}/{total}',
  'quiz.completed': '¡Todo completado!',
  'quiz.fillBlank': 'Escribe tu respuesta...',
  'quiz.selectOption': 'Selecciona una opción',
  'quiz.single': 'Opción única',
  'quiz.multi': 'Opción múltiple',
  'quiz.trueFalse': 'Verdadero o Falso',
  'quiz.fill': 'Rellenar el espacio',
  'quiz.optionTrue': 'Verdadero',
  'quiz.optionFalse': 'Falso',
  'quiz.clickToReveal': 'Haz clic para ver la respuesta',
  'quiz.quizOptions': 'Opciones de {type}',
  'quiz.trueFalseCorrect': '¡Correcto!',
  'quiz.trueFalseIncorrect': 'Incorrecto. El enunciado es {answer}.',

  // ── Encrypted Block ─────────────────────────────────────────
  'encrypted.locked': 'Contenido cifrado',
  'encrypted.placeholder': 'Introduce la contraseña para desbloquear',
  'encrypted.submit': 'Desbloquear',
  'encrypted.incorrect': 'Contraseña incorrecta',

  // ── Encrypted Post ─────────────────────────────────────────
  'encrypted.post.title': 'Este artículo está cifrado',
  'encrypted.post.description': 'Introduce la contraseña para ver el contenido',
  'encrypted.post.rssNotice': 'Este artículo está cifrado. Visítalo en la web.',

  // ── 404 ─────────────────────────────────────────────────────
  'notFound.title': 'Página no encontrada',
  'notFound.description': 'La página que buscas no existe',
  'notFound.backHome': 'Volver al inicio',
  'notFound.browseArchives': 'Ver el archivo',
  'notFound.message': '¡Miau? La página desapareció~',

  // ── Category Stats ────────────────────────────────────────
  'category.subCategoryCount': '{count} subcategorías',
  'category.postCount': '{count} artículos',

  // ── Post Card ─────────────────────────────────────────────
  'post.readingTimeTooltip': 'Tiempo estimado de lectura: {time}',

  // ── Featured Series ─────────────────────────────────────────
  'series.latestPost': 'Último',
  'series.viewAll': 'Ver todo',
  'series.postCount': '{count} artículos',
  'series.noPosts': 'Sin artículos en esta serie',
  'series.rss': 'Feed RSS',
  'series.chromeExtension': 'Extensión de Chrome',
  'series.docs': 'Documentación',

  // ── Home Info ───────────────────────────────────────────────
  'homeInfo.articles': 'Artículos',
  'homeInfo.categories': 'Categorías',
  'homeInfo.tags': 'Etiquetas',

  // ── Drawer ──────────────────────────────────────────────────
  'drawer.navMenu': 'Menú de navegación',
  'drawer.close': 'Cerrar menú',
  'drawer.openMenu': 'Abrir menú',

  // ── Summary Panel ───────────────────────────────────────────
  'summary.description': 'Resumen',
  'summary.ai': 'Resumen IA',
  'summary.auto': 'Resumen',

  // ── Random Posts ────────────────────────────────────────────
  'post.randomPosts': 'Otros proyectos',

  // ── Tag Component ───────────────────────────────────────────
  'tag.expandAll': 'Mostrar todo',
  'tag.viewTagPosts': 'Ver {count} artículos con la etiqueta "{tag}"',

  // ── Audio Player ────────────────────────────────────────────
  'audio.loading': 'Cargando lista de reproducción...',
  'audio.loadError': 'Error al cargar: {error}',
  'audio.retry': 'Reintentar',
  'audio.empty': 'Sin pistas',
  'audio.listTab': 'Lista {index}',
  'audio.closePanel': 'Cerrar panel',

  // ── Table of Contents ───────────────────────────────────────
  'toc.title': 'Índice del artículo',
  'toc.expand': 'Expandir índice',
  'toc.empty': 'Sin secciones',

  // ── Embed ─────────────────────────────────────────────────
  'embed.loadingTweet': 'Cargando Tweet',

  // ── Search Shortcut ───────────────────────────────────────
  'search.searchShortcut': 'Buscar ({shortcut})',

  // ── Sider Segmented ─────────────────────────────────────────
  'sider.overview': 'Resumen del sitio',
  'sider.toc': 'Índice',
  'sider.series': 'Serie',

  // ── Copy Link ───────────────────────────────────────────────
  'cover.copyLink': 'Copiar enlace',

  // ── Comment ────────────────────────────────────────────────
  'comment.prompt': 'Si te ha gustado, deja un comentario~',
} as const;
