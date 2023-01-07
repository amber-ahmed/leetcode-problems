#include<iostream>
#include<vector>
#include<map>
using namespace std;
main()
{
  vector <int>nums1{1,2};
    vector <int>nums2{3,4};
    int m = 2, n = 2;
    int i=0,j=0;
    vector <int>res;
    while(i<m&&j<n)
    {
        if(nums1[i]<=nums2[j])
        {
            res.push_back(nums1[i++]);
        }
        else
        {
             res.push_back(nums2[j++]);
        }
    }
    while(i<m)
         res.push_back(nums1[i++]);
    while(j<n)
        res.push_back(nums2[j++]);
        double med;
         int medind = (m+n)/2;
        if((m+n)%2==0)
        {
            med=(res[medind]+res[medind-1]);
            med=med/2;
        }
        else
            med=res[medind];
        cout<< med;
}

