<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  }

})

const form = ref({
  username: 'jsmith',
  password: 'hunter2'
})
const toast = useToast()
const { signIn } = useAuth()

const handleLogin = async (username: string, password: string) => {
  const { error, url } = await signIn('credentials', { username, password, redirect: false })
  if (error) {
    // Do your custom error handling here
    toast.add({
      title: 'Unauthorized',
      description: 'Username or password incorrect',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red'
    })
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    return navigateTo(url, { external: true })
  }
}
</script>

<template>
  <div class="flex min-h-screen h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      >
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin(form.username, form.password)">
        <UFormGroup label="Email" name="email">
          <UInput v-model="form.username" type="text" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="form.password" type="password" icon="i-heroicons-lock-closed" />
        </UFormGroup>

        <UButton type="submit" block label="Login" />
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <NuxtLink to="/register">
          Register
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
