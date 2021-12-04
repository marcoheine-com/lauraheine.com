exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'work': {
      return doc.lang === 'en-us' ? '/' : `/${doc.lang}`
    }

    case 'bookIllustrations': {
      return doc.lang === 'en-us'
        ? `/book-illustrations/${doc.uid}`
        : `/book-illustrations/${doc.lang}/${doc.uid}`
    }

    default:
      return '/'
  }
}
