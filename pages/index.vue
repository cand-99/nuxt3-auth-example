<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const {
  data,
  signOut
} = useAuth()

async function handleLogout () {
  await signOut()
}
</script>

<template>
  <div>
    Dashboard hallo {{ data?.user?.name }}

    <pre>
      {{ data }}
    </pre>

    <UButton @click="handleLogout">
      Logout
    </UButton>
  </div>
</template>

<style scoped></style>
