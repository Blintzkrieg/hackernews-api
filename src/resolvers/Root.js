function user(parent, args, context) {
  return context.prisma.root({ id: parent.id }).user()
}

module.exports = {
  user,
}
