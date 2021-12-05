exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'work': {
      return doc.lang === 'en-us' ? '/' : `/${doc.lang}`
    }

    case 'book_illustrations': {
      return doc.lang === 'en-us'
        ? `/book-illustrations/`
        : `/book-illustrations/${doc.lang}`
    }

    default:
      return '/'
  }
}
