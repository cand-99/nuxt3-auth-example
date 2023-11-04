<script lang="ts" setup>
// definePageMeta({ auth: false })

const {
  data,
  signOut
} = useAuth()
const isLoading = ref<boolean>(false)
async function handleLogout () {
  isLoading.value = true
  await signOut()
  isLoading.value = false
}
</script>

<template>
  <div>
    Dashboard hallo {{ data?.user?.name }}

    <pre>
      {{ data }}
    </pre>

    <UButton :loading="isLoading" @click="handleLogout">
      Logout
    </UButton>
  </div>
</template>

<style scoped></style>
