async function feed(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  const count = await context.prisma
  .linksConnection({
    where,
  })
  .aggregate()
  .count()
  return {
    links,
    count,
  }
}

// async function roots(parent, args, context, info) {
//
//   const where = {}
//   let roots = await context.prisma.roots({
//     where,
//   })
//   roots = roots ? roots : []
//   return {
//     roots
//   }
// }
//
  async function roots(parent, args, context, info) {
    let roots = await context.prisma.roots({
      where: {
      },
    })
    console.log("Roots")
    console.log(roots)
    return roots
  }

module.exports = {
  feed,
  roots
}
