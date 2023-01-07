#include<vector>
using namespace std;

    int maxSubArray(vector<int>& nums) {
        int n=nums.size();
    int largestsum=nums[0];
    int sum=0;
    for(int i=0;i<n;i++)
    {
        sum+=nums[i];
        if(sum>largestsum)
            largestsum=sum;
        if(sum<0)
            sum=0;
    }
        return largestsum;
    }