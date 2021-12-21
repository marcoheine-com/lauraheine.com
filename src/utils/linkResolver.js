exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'work': {
      return doc.lang === 'en-us' ? '/' : `/${doc.lang}`
    }

    case 'book_illustrations': {
      return doc.lang === 'en-us'
        ? `/book-illustrations`
        : `/book-illustrations/${doc.lang}`
    }

    case 'aboutcontact': {
      return doc.lang === 'en-us'
        ? `/about-contact`
        : `/about-contact/${doc.lang}`
    }

    case 'legal': {
      return doc.lang === 'en-us' ? `/legal` : `/legal/${doc.lang}`
    }

    case 'finding_the_little_things': {
      return doc.lang === 'en-us'
        ? `/finding-the-little-things`
        : `/finding-the-little-things/${doc.lang}`
    }

    default:
      return '/'
  }
}
