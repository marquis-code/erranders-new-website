import { useUUID } from '@/composables/core/useUUID'
const { uuid, generateUUID } = useUUID()
const router = useRouter()

export const useCashPayment = () => {
    const processing = ref(false)
    const productDetails = ref({}) as any
    const handleCashPayment = (productInfo: any) => {
        productDetails.value = productInfo
        processing.value = true
        setTimeout(() => {
            processing.value = false
            router.push(`/${uuid.value}/order-summary`)
        }, 3000)
    }

    return { handleCashPayment, processing, productDetails}
}